const today = new Date();
const isFeb = today.getMonth() === 1; // February
const currentDay = isFeb ? today.getDate() : 0;

const messages = {
  7: "Indha roja vida azhagaana en idhayathula malarndha ore poo – nee. 🌹",
  8: "Vaay solla bayam irundhaalum, en idhayam un perai dhinam dhinam solludhu. 💍",
  9: "Chocolate madhiri sweet illa nee, nee irundhaa mattum dhaan en vaazhkai sweet. 🍫",
  10: "Un madi oru teddy maadhiri, ellaa sogathaiyum amaidhiya marakka vechudhu. 🧸",
  11: "Ulagam maarinaalum, naan maara maatten – un kai pidichu irukka. 🤝",
  12: "Oru hug podhum, un idhayam kitta irundhaa en bayam ellam pogum. 🤍",
  13: "Oru mutham illa idhu, vaazhkai muzhudhum unnoda irukka vendum endra en idhayathoda vaakkuthaththam. 😘",
  14: "I LOVE YOU AZHAGI ❤️ FOREVER 💖💖"
};

const popup = document.getElementById("popup");
const popupText = document.getElementById("popupText");
const bgm = document.getElementById("bgm");
let started = false;

// Start music on first click
document.body.addEventListener("click", () => {
  if (!started) {
    bgm.volume = 0.5;
    bgm.play().catch(()=>{});
    document.getElementById("tapNote").style.display = "none";
    started = true;
  }
});

// Card click logic
document.querySelectorAll(".card").forEach(card => {
  const day = Number(card.dataset.day);

  // lock future days
  if (currentDay < day) {
    card.classList.add("locked");
  }

  card.addEventListener("click", () => {

    if (currentDay < day) {
      alert("❤️ Indha day varattum… konjam wait pannu diii buchuuuuuuuu");
      return;
    }

    popupText.innerText = messages[day];
    popup.style.display = "flex";

    heartRain();

    bgm.volume = day === 14 ? 0.8 : 10;
  });
});

// Close popup
popup.addEventListener("click", () => {
  popup.style.display = "none";
});

// Heart animation
function heartRain() {
  for (let i = 0; i < 20; i++) {
    const h = document.createElement("div");
    h.className = "spark";
    h.innerText = "❤️";
    h.style.left = Math.random() * 100 + "vw";
    h.style.top = "80vh";
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 1200);
  }
}
const heartLayer = document.getElementById("heart-layer");

// Continuous heart rain
setInterval(() => {
  createHeart();
}, 300);

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "❤️";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.bottom = "-20px";
  heart.style.fontSize = Math.random() * 15 + 70 + "px";
  heart.style.animationDuration = Math.random() * 2+2 + "s";

  heartLayer.appendChild(heart);

  setTimeout(() => heart.remove(), 8000);
}

// Extra hearts on click
document.body.addEventListener("click", e => {
  for (let i = 0; i < 10; i++) {
    createHeart();
  }
});
