let mouse = { x: null, y: null };

window.addEventListener("mousemove", (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
});

// Purple Lightning Floating Neon Particles
console.log("Purple Lightning Website Loaded!");

// Create canvas
const canvas = document.createElement("canvas");
document.body.appendChild(canvas);
canvas.id = "particle-canvas";
canvas.style.position = "fixed";
canvas.style.top = 0;
canvas.style.left = 0;
canvas.style.width = "100%";
canvas.style.height = "100%";
canvas.style.pointerEvents = "none";
canvas.style.zIndex = "0";

const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Particle array
let particles = [];

update() {
    // Move randomly
    this.x += this.speedX;
    this.y += this.speedY;

    // Bounce off edges
    if(this.x < 0 || this.x > canvas.width) this.speedX *= -1;
    if(this.y < 0 || this.y > canvas.height) this.speedY *= -1;

    // Move slightly toward mouse
    if(mouse.x && mouse.y){
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        this.x += dx * 0.002; // 0.002 = speed toward mouse
        this.y += dy * 0.002;
    }
}

function init() {
    particles = [];
    for(let i = 0; i < 80; i++) {
        particles.push(new Particle());
    }
}
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.update();
        p.draw();
    });
    requestAnimationFrame(animate);
}

init();
animate();

// Resize canvas on window resize
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
});
.icon {
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin-right: 5px;
}
.card ul {
    list-style: none;
    padding-left: 0;
    text-align: left;
}
.card ul li {
    margin: 6px 0;
}
