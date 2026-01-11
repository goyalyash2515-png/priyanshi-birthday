// PASSWORD
function checkPassword() {
  const pass = document.getElementById("password").value;
  if (pass === "wemeton15062025") {
    document.getElementById("passwordBox").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
  } else {
    alert("Wrong Password ❤️");
  }
}

// SURPRISE
function showSurprise() {
  document.getElementById("surprise").style.display = "block";
}

// COUNTDOWN
const birthday = new Date("January 17, 2026 00:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = birthday - now;

  if (diff > 0) {
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);

    document.getElementById("countdown").innerHTML =
      ⏳ ${days} Days ${hours} Hours ${minutes} Minutes Left;
  } else {
    document.getElementById("countdown").innerHTML =
      "🎂 Happy Birthday Priyanshi 🎂";
  }
}, 1000);

// HEARTS ANIMATION
setInterval(() => {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (2 + Math.random() * 3) + "s";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}, 300);