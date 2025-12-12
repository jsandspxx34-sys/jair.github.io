// Tabs
const tabs = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const target = tab.getAttribute('data-target');
        contents.forEach(c => c.classList.remove('active'));
        document.getElementById(target).classList.add('active');
    });
});

// Select pack for order form
function selectPack(name, price){
    document.getElementById('selectedItem').value = name;
    document.getElementById('selectedPrice').value = price;
}

// Show Discord PFP and username (placeholder)
function showUser(pfpURL, username){
    const profileDiv = document.getElementById('userProfile');
    const img = document.getElementById('pfp');
    const name = document.getElementById('username');

    img.src = pfpURL;
    name.textContent = username;
    profileDiv.style.display = 'flex';
}

// Form submission
document.getElementById('shopForm').addEventListener('submit', function(e){
    e.preventDefault();
    alert('Order submitted! (Payment integration placeholder)');
});
// Smooth scroll for dropdown links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target){
            target.scrollIntoView({behavior: 'smooth'});
        }
    });
});
