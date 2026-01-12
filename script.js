window.onload = function() {

  const unlockBtn = document.getElementById("unlockBtn");

  function startCountdown() {
    const birthday = new Date("January 17, 2026 00:00:00").getTime();
    setInterval(() => {
      const now = new Date().getTime();
      const diff = birthday - now;
      if (diff < 0) {
        document.getElementById("countdown").innerHTML = "🎂 Happy Birthday Priyanshi 🎉";
        return;
      }
      const d = Math.floor(diff / (1000*60*60*24));
      const h = Math.floor((diff / (1000*60*60)) % 24);
      const m = Math.floor((diff / (1000*60)) % 60);
      const s = Math.floor((diff / 1000) % 60);
      document.getElementById("countdown").innerHTML =
        ⏳ ${d} Days ${h} Hours ${m} Minutes ${s} Seconds;
    }, 1000);
  }

  unlockBtn.addEventListener("click", function() {
    const pass = document.getElementById("password").value;
    if (pass === "wemeton15062025") {
      document.getElementById("passwordBox").style.display = "none";
      document.getElementById("mainContent").style.display = "block";
      document.getElementById("song").play();
      startCountdown();
    } else {
      alert("Wrong Password ❤️");
    }
  });

};
