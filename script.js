const correctPassword = "wemeton15062025";

// initially hide gallery
document.getElementById("gallery").style.display = "none";

// 🔐 UNLOCK
document.getElementById("unlockBtn").onclick = () => {
  const pass = document.getElementById("password").value;
  if(pass === correctPassword){
    document.getElementById("lockScreen").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
    startCountdown();
  } else {
    document.getElementById("error").innerText = "Wrong password";
  }
};

// ⏳ COUNTDOWN
function startCountdown(){
  let time = 5; // seconds for demo
  const cd = document.getElementById("countdown");
  const interval = setInterval(()=>{
    cd.innerText = "Starting in " + time;
    time--;
    if(time < 0){
      clearInterval(interval);
      cd.innerText = "🎉 Surprise Ready!";
    }
  },1000);
}

// 🎁 OPEN GIFT
document.getElementById("giftBtn").onclick = () => {
  document.getElementById("wish").style.display = "block";
  document.getElementById("gallery").style.display = "flex";
};

// 🎂 CAKE
document.getElementById("cakeBtn").onclick = () => {
  document.getElementById("song").play();
  alert("🎂 Happy Birthday Priyanshi ❤️");
};