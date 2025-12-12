// SELECT PACK FOR ORDER FORM
function selectPack(name, price){
  document.getElementById('selectedItem').value = name;
  document.getElementById('selectedPrice').value = price;
  document.getElementById('orderForm').scrollIntoView({behavior:'smooth'});
}

// DROPDOWN TAB SWITCHING
document.querySelectorAll('.dropdown-menu a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    target.classList.add('active');
  });
});

// DONOR WALL
const donorList = document.getElementById('donorList');
if(donorList){
  const donors = [
    {rank:1,name:'User1',amount:150,pack:'Spark Pack'},
    {rank:2,name:'User2',amount:100,pack:'Bolt Pack'},
    {rank:3,name:'User3',amount:50,pack:'Single Dino'}
  ];
  donorList.innerHTML = donors.map(d => `<li>${d.rank}️⃣ ${d.name} – $${d.amount} – ${d.pack}</li>`).join('');
}

// PARTICLES (Optimized)
const canvas = document.createElement('canvas');
canvas.id = 'particle-canvas';
document.body.appendChild(canvas);
canvas.style.position='fixed';
canvas.style.top='0';
canvas.style.left='0';
canvas.style.width='100%';
canvas.style.height='100%';
canvas.style.zIndex='0';
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particleCount = 50;
const particles = [];
for(let i=0;i<particleCount;i++){
  particles.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height, speedX:(Math.random()-0.5)*1, speedY:(Math.random()-0.5)*1});
}

function animateParticles(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p=>{
    p.x+=p.speedX; p.y+=p.speedY;
    if(p.x<0||p.x>canvas.width)p.speedX*=-1;
    if(p.y<0||p.y>canvas.height)p.speedY*=-1;
    ctx.fillStyle='#bb60ff';
    ctx.beginPath(); ctx.arc(p.x,p.y,2,0,Math.PI*2); ctx.fill();
  });
  requestAnimationFrame(animateParticles);
}
animateParticles();
