// 🧸 MUÑECO = CURSOR
const follower = document.getElementById("cursor-follower");

if (follower) {
  document.addEventListener("mousemove", (e) => {
    follower.style.left = e.clientX + "px";
    follower.style.top  = e.clientY + "px";
  });
}

// 🌊 EFECTO AGUA NEÓN (PROTEGIDO)
try {
  $(document).ready(function () {
    $('#water-layer').ripples({
      resolution: 512,
      dropRadius: 22,
      perturbance: 0.08
    });

    setInterval(() => {
      let x = Math.random() * window.innerWidth;
      let y = Math.random() * window.innerHeight;
      $('#water-layer').ripples('drop', x, y, 18, 0.05);
    }, 1600);
  });
} catch (e) {
  console.warn("Ripples no cargó, pero el sitio sigue funcionando");
}