const correctPassword = "wemeton15062025";

// hide gallery initially
document.getElementById("gallery").style.display = "none";

// unlock
document.getElementById("unlockBtn").onclick = () => {
  const pass = document.getElementById("password").value;
  if(pass === correctPassword){
    document.getElementById("lockScreen").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
    startCountdown();
    startBalloons();
    startHearts();
    startSlideshow();
    startFireworks();
  } else {
    document.getElementById("error").innerText = "Wrong password";
  }
};

// countdown
function startCountdown(){
  let time = 5;
  const cd = document.getElementById("countdown");
  const interval = setInterval(()=>{
    cd.innerText = "Starting in " + time;
    time--;
    if(time < 0){
      clearInterval(interval);
      cd.innerText = "🎉 Let’s Celebrate!";
    }
  },1000);
}

// balloon animation
function startBalloons(){
  const container = document.getElementById("balloons");
  for(let i=0;i<50;i++){
    const b = document.createElement("div");
    b.className="balloon";
    b.style.background = `hsl(${Math.random() * 360}, 70%, 70%)`;
    b.style.left=Math.random()*100+"vw";
    b.style.animationDuration=4+Math.random()*4+"s";
    container.appendChild(b);
    setTimeout(()=>b.remove(),8000);
  }
}

// hearts + confetti animation
function startHearts(){
  const canvas=document.getElementById("hearts");
  const ctx=canvas.getContext("2d");
  canvas.width=window.innerWidth;
  canvas.height=window.innerHeight;
  let particles=[];
  for(let i=0;i<80;i++){
    particles.push({x:Math.random()*canvas.width, y:Math.random()*canvas.height, size:5+Math.random()*5, speed:1+Math.random()*2, color:hsl(${Math.random()*360},80%,70%)});
  }
  function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p=>{
      ctx.fillStyle=p.color;
      ctx.beginPath();
      ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
      ctx.fill();
      p.y-=p.speed;
      if(p.y<0) p.y=canvas.height;
    });
    requestAnimationFrame(animate);
  }
  animate();
}

// gift open
document.getElementById("giftBtn").onclick = ()=>{
  document.getElementById("wish").style.display="block";
  document.getElementById("gallery").style.display="flex";
};

// cake + song + flames
document.getElementById("cakeBtn").onclick = ()=>{
  const song=document.getElementById("song");
  song.play();

  const cake=document.createElement("div");
  cake.innerText="🎂";
  cake.style.fontSize="100px";
  cake.style.position="absolute";
  cake.style.top="50%";
  cake.style.left="50%";
  cake.style.transform="translate(-50%, -50%) scale(0)";
  cake.style.transition="transform 1s ease-out";
  document.body.appendChild(cake);
  setTimeout(()=>{cake.style.transform="translate(-50%, -50%) scale(1)";},50);

  const flame=document.createElement("div");
  flame.innerText="🔥🔥🔥";
  flame.style.position="absolute";
  flame.style.top="45%";
  flame.style.left="50%";
  flame.style.transform="translate(-50%, -50%) scale(0)";
  flame.style.fontSize="40px";
  flame.style.transition="transform 1s ease-out";
  document.body.appendChild(flame);
  setTimeout(()=>{flame.style.transform="translate(-50%, -50%) scale(1)";},50);
}

// auto slideshow images
function startSlideshow(){
  const gallery=document.getElementById("gallery");
  const imgs=gallery.querySelectorAll("img");
  let index=0;
  imgs.forEach(img=>img.style.display="none");
  imgs[0].style.display="block";
  setInterval(()=>{
    imgs.forEach((img)=>img.style.display="none");
    imgs[index].style.display="block";
    index=(index+1)%imgs.length;
  },2000);
}

// fireworks (simple particle bursts)
function startFireworks(){
  const canvas=document.getElementById("hearts");
  const ctx=canvas.getContext("2d");
  canvas.width=window.innerWidth;
  canvas.height=window.innerHeight;
  function firework(){
    let x=Math.random()*canvas.width;
    let y=Math.random()*canvas.height/2;
    for(let i=0;i<30;i++){
      const angle=Math.random()*2*Math.PI;
      const speed=Math.random()*5+2;
      const particle={x,y,dx:Math.cos(angle)*speed,dy:Math.sin(angle)*speed,life:30,color:hsl(${Math.random()*360},80%,70%)};
      particles.push(particle);
    }
  }
  let particles=[];
  function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach((p,i)=>{
      ctx.fillStyle=p.color;
      ctx.beginPath();
      ctx.arc(p.x,p.y,3,0,Math.PI*2);
      ctx.fill();
      p.x+=p.dx;
      p.y+=p.dy;
      p.life--;
      if(p.life<=0) particles.splice(i,1);
    });
    requestAnimationFrame(animate);
  }
  animate();
  setInterval(firework,1000);
}

