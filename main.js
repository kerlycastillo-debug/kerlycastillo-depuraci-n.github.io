/* =========================
   🧸 CURSOR MUÑECO
========================= */
const cursor = document.getElementById("cursor-follower");

document.addEventListener("mousemove", (e) => {
  if (!cursor) return;
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});


/* =========================
   🔊 SONIDO VIDEOJUEGO (ARCADE)
   Web Audio API – no archivos
========================= */
let audioCtx;

// activar audio solo después de interacción (regla navegador)
function initAudio(){
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
}

// beep retro
function beep(freq = 600, time = 0.08){
  if (!audioCtx) return;

  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  osc.type = "square";        // sonido 8-bit
  osc.frequency.value = freq;

  gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(
    0.001,
    audioCtx.currentTime + time
  );

  osc.connect(gain);
  gain.connect(audioCtx.destination);

  osc.start();
  osc.stop(audioCtx.currentTime + time);
}

/* =========================
   🎮 SONIDOS EN BOTONES
========================= */
document.querySelectorAll("a").forEach(btn => {

  // activa audio en la primera interacción
  btn.addEventListener("mouseenter", () => {
    initAudio();
    beep(520, 0.05); // hover
  });

  btn.addEventListener("click", () => {
    initAudio();
    beep(180, 0.12); // click
  });

});


/* =========================
   🌊 RIPPLE (si existe jQuery)
   (no rompe si no está)
========================= */
if (window.jQuery && $("#water-layer").ripples) {
  $("#water-layer").ripples({
    resolution: 256,
    dropRadius: 18,
    perturbance: 0.03,
  });
}
