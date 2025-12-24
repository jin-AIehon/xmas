const scene = document.getElementById("scene");
const openBtn = document.getElementById("openBtn");
const letterWrap = document.getElementById("letterWrap");

const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("closeBtn");

let opened = false;

function openSequence() {
  if (opened) return;
  opened = true;

  // Step 1: 手紙が封筒からスッと出る
  scene.classList.add("step1");
  letterWrap.setAttribute("aria-hidden", "false");

  // Step 2: 少し強調してから
  setTimeout(() => {
    scene.classList.add("step2");
  }, 950);

  // Step 3: 画面いっぱいの手紙表示（オーバーレイ）
  setTimeout(() => {
    overlay.classList.add("show");
    overlay.setAttribute("aria-hidden", "false");
  }, 1500);
}

function closeOverlay() {
  overlay.classList.remove("show");
  overlay.setAttribute("aria-hidden", "true");
}

// クリック/タップで開始
openBtn.addEventListener("click", openSequence);

// 閉じる
closeBtn.addEventListener("click", closeOverlay);
overlay.addEventListener("click", (e) => {
  // 背景タップでも閉じる（画像タップは閉じない）
  if (e.target === overlay) closeOverlay();
});

// Escでも閉じる
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeOverlay();
});
