const welcome = document.getElementById("welcome");
const poster = document.querySelector(".poster");
const prank = document.getElementById("prank");
const curiousBtn = document.getElementById("curiousBtn");
const backBtn = document.getElementById("backBtn");
const copyBtn = document.getElementById("copyBtn");
const toast = document.getElementById("toast");

function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(showToast.t);
  showToast.t = setTimeout(() => toast.classList.remove("show"), 2000);
}

function openQris(message) {
  document.body.classList.add("has-started");
  document.body.classList.remove("prank-active");
  poster.classList.remove("is-hidden");
  prank.classList.add("is-hidden");
  welcome.classList.add("is-hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (message) setTimeout(() => showToast(message), 500);
}

curiousBtn.addEventListener("click", () => {
  document.body.classList.add("has-started", "prank-active");
  welcome.classList.add("is-hidden");
  prank.classList.remove("is-hidden");
  prank.querySelector("h1").focus();
});

backBtn.addEventListener("click", () => {
  document.body.classList.remove("has-started", "prank-active");
  prank.classList.add("is-hidden");
  welcome.classList.remove("is-hidden");
  curiousBtn.focus();
});

copyBtn.addEventListener("click", async () => {
  const nmid = document.getElementById("nmid").textContent.trim();
  try {
    await navigator.clipboard.writeText(nmid);
    showToast("NMID tersalin ♥");
  } catch {
    showToast("Gagal menyalin, salin manual ya");
  }
});

document.getElementById("downloadBtn").addEventListener("click", (event) => {
  if (document.querySelector(".qr-box").classList.contains("missing")) {
    event.preventDefault();
    showToast("Gambar QR belum ditambahkan");
  }
});

const floaties = document.getElementById("floaties");
const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function spawnHeart() {
  const el = document.createElement("span");
  el.className = "floaty";
  el.textContent = Math.random() > 0.3 ? "♥" : "✦";
  el.style.left = Math.random() * 100 + "vw";
  el.style.fontSize = 14 + Math.random() * 22 + "px";
  const duration = 6 + Math.random() * 6;
  el.style.animationDuration = duration + "s";
  floaties.appendChild(el);
  setTimeout(() => el.remove(), duration * 1000);
}

if (!reduce) setInterval(spawnHeart, 900);
