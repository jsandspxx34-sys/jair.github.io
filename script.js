// Dropdown toggle on click
document.querySelectorAll('.dropdown > a').forEach(drop => {
    drop.addEventListener('click', e => {
        e.preventDefault();
        const menu = drop.nextElementSibling;
        document.querySelectorAll('.dropdown-menu').forEach(m => {
            if (m !== menu) m.style.display = 'none';
        });
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    });
});

document.addEventListener('click', e => {
    if(!e.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown-menu').forEach(m => m.style.display = 'none');
    }
});

// Buy Now → auto-fill order form
function selectPack(name, price){
  document.getElementById('selectedItem').value = name;
  document.getElementById('selectedPrice').value = price;
  document.getElementById('orderForm').scrollIntoView({behavior:'smooth'});
}

// Tabs switching
document.querySelectorAll('.dropdown-menu a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    target.classList.add('active');
  });
});

// Discord login placeholder
document.getElementById('discordLogin').addEventListener('click', e => {
    e.preventDefault();
    const username = prompt("Enter your Discord username:");
    if(username){
        document.getElementById('username').innerText = username;
        document.getElementById('pfp').src = "https://cdn.discordapp.com/embed/avatars/0.png";
        document.getElementById('userProfile').style.display = 'flex';
    }
});

// Particle animation
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
