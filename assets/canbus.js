// MOTRXO hero background: animated CAN bus network (canvas, no dependencies).
(() => {
  const cv = document.getElementById("canbus");
  if (!cv) return;
  const ctx = cv.getContext("2d");
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const BLUE = "20,86,224", GREEN = "22,163,74", NAVY = "11,31,58";
  let W = 0, H = 0, dpr = 1, nodes = [], packets = [], labels = [], busY = 0, last = 0, spawn = 0, run = true;
  const rnd = (a, b) => a + Math.random() * (b - a);
  const ID = () => "0x" + Math.floor(rnd(0x100, 0x7ff)).toString(16).toUpperCase().padStart(3, "0");

  function layout() {
    const r = cv.parentElement.getBoundingClientRect();
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = r.width; H = r.height;
    cv.width = W * dpr; cv.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    busY = H * 0.5;
    const n = Math.max(4, Math.min(10, Math.round(W / 140)));
    const m = 50, step = (W - m * 2) / (n - 1);
    nodes = Array.from({ length: n }, (_, i) => {
      const up = i % 2 === 0;
      return { x: m + i * step, up, off: rnd(70, 130), flash: 0, w: 46, h: 30 };
    });
    packets = []; labels = [];
  }

  function send() {
    const i = Math.floor(Math.random() * nodes.length);
    const n = nodes[i];
    n.flash = 1;
    const sp = rnd(220, 340);
    packets.push({ x0: n.x, d: 0, sp, len: rnd(70, 130), from: i, hit: new Set([i]) });
    labels.push({ x: n.x, y: busY + (n.up ? -n.off - 26 : n.off + 40), t: 1, txt: ID() + " · 8B" });
  }

  function step(dt) {
    spawn -= dt;
    if (spawn <= 0) { send(); spawn = rnd(0.35, 1.0); }
    packets.forEach(p => {
      p.d += p.sp * dt;
      nodes.forEach((n, i) => {
        if (!p.hit.has(i) && Math.abs(n.x - p.x0) <= p.d) { p.hit.add(i); n.flash = Math.max(n.flash, 0.8); }
      });
    });
    packets = packets.filter(p => p.d - p.len < Math.max(p.x0, W - p.x0));
    nodes.forEach(n => { n.flash = Math.max(0, n.flash - dt * 1.6); });
    labels.forEach(l => { l.t -= dt * 0.7; l.y += (l.y < busY ? -1 : 1) * dt * 6; });
    labels = labels.filter(l => l.t > 0);
  }

  function pulse(y, x1, x2, col, a) {
    if (x2 <= x1) return;
    const g = ctx.createLinearGradient(x1, 0, x2, 0);
    g.addColorStop(0, `rgba(${col},0)`); g.addColorStop(1, `rgba(${col},${a})`);
    ctx.strokeStyle = g; ctx.lineWidth = 3; ctx.lineCap = "round";
    ctx.beginPath(); ctx.moveTo(x1, y); ctx.lineTo(x2, y); ctx.stroke();
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    // faint dot grid
    ctx.fillStyle = `rgba(${NAVY},.07)`;
    for (let x = 20; x < W; x += 36) for (let y = 20; y < H; y += 36) ctx.fillRect(x, y, 1.5, 1.5);

    const yH = busY - 7, yL = busY + 7;
    // stubs
    nodes.forEach(n => {
      const ny = n.up ? busY - n.off : busY + n.off;
      [[yH, BLUE, -5], [yL, GREEN, 5]].forEach(([y, c, dx]) => {
        ctx.strokeStyle = `rgba(${n.flash > 0.05 ? c : NAVY},${n.flash > 0.05 ? 0.35 + n.flash * 0.6 : 0.22})`;
        ctx.lineWidth = 1.5; ctx.beginPath();
        ctx.moveTo(n.x + dx, y); ctx.lineTo(n.x + dx, ny + (n.up ? n.h / 2 : -n.h / 2)); ctx.stroke();
      });
    });
    // bus lines + terminators
    [[yH, BLUE], [yL, GREEN]].forEach(([y, c]) => {
      ctx.strokeStyle = `rgba(${c},.35)`; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(14, y); ctx.lineTo(W - 14, y); ctx.stroke();
    });
    ctx.fillStyle = `rgba(${NAVY},.35)`;
    [14, W - 14].forEach(x => ctx.fillRect(x - 3, yH - 2, 6, yL - yH + 4));
    // packets: differential pair, travelling both ways from sender
    packets.forEach(p => {
      const a = Math.max(0.15, 0.9 - p.d / (W * 0.9));
      pulse(yH, p.x0 + Math.max(0, p.d - p.len), p.x0 + p.d, BLUE, a);
      pulse(yL, p.x0 + Math.max(0, p.d - p.len), p.x0 + p.d, GREEN, a);
      // left-going front (mirrored gradient)
      [[yH, BLUE], [yL, GREEN]].forEach(([y, c]) => {
        const x1 = p.x0 - p.d, x2 = p.x0 - Math.max(0, p.d - p.len);
        if (x2 <= x1) return;
        const g = ctx.createLinearGradient(x2, 0, x1, 0);
        g.addColorStop(0, `rgba(${c},0)`); g.addColorStop(1, `rgba(${c},${a})`);
        ctx.strokeStyle = g; ctx.lineWidth = 3; ctx.lineCap = "round";
        ctx.beginPath(); ctx.moveTo(x1, y); ctx.lineTo(x2, y); ctx.stroke();
      });
    });
    // ECU nodes
    nodes.forEach(n => {
      const ny = n.up ? busY - n.off : busY + n.off;
      const x = n.x - n.w / 2, y = ny - n.h / 2;
      if (n.flash > 0.02) {
        ctx.shadowColor = `rgba(${BLUE},${n.flash})`; ctx.shadowBlur = 18 * n.flash;
      }
      ctx.fillStyle = "rgba(255,255,255,.92)";
      ctx.strokeStyle = n.flash > 0.05 ? `rgba(${BLUE},${0.4 + n.flash * 0.6})` : `rgba(${NAVY},.28)`;
      ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.roundRect ? ctx.roundRect(x, y, n.w, n.h, 7) : ctx.rect(x, y, n.w, n.h);
      ctx.fill(); ctx.stroke(); ctx.shadowBlur = 0;
      // chip pins
      ctx.fillStyle = `rgba(${n.flash > 0.05 ? GREEN : NAVY},${n.flash > 0.05 ? 0.9 : 0.3})`;
      for (let k = 0; k < 3; k++) ctx.fillRect(x + 9 + k * 12, y + n.h / 2 - 2, 6, 4);
    });
    // frame labels
    ctx.font = "600 11px ui-monospace, Menlo, Consolas, monospace"; ctx.textAlign = "center";
    labels.forEach(l => { ctx.fillStyle = `rgba(${BLUE},${Math.min(1, l.t) * 0.75})`; ctx.fillText(l.txt, l.x, l.y); });
  }

  function loop(ts) {
    if (!run) { last = 0; return; }
    const dt = last ? Math.min((ts - last) / 1000, 0.05) : 0.016; last = ts;
    step(dt); draw(); requestAnimationFrame(loop);
  }

  layout();
  if (reduce) { for (let i = 0; i < 4; i++) { send(); step(0.6); } draw(); }
  else {
    requestAnimationFrame(loop);
    new IntersectionObserver(es => { const v = es[0].isIntersecting; if (v && !run) { run = true; requestAnimationFrame(loop); } run = v; }).observe(cv);
    document.addEventListener("visibilitychange", () => { const v = !document.hidden; if (v && !run) { run = true; requestAnimationFrame(loop); } run = v; });
  }
  let rt; addEventListener("resize", () => { clearTimeout(rt); rt = setTimeout(() => { layout(); if (reduce) { for (let i = 0; i < 4; i++) { send(); step(0.6); } draw(); } }, 150); });
})();
