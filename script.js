// SELECT PACK FOR ORDER FORM
function selectPack(name, price){
  document.getElementById('selectedItem').value = name;
  document.getElementById('selectedPrice').value = price;
  // Scroll to form
  document.getElementById('orderForm').scrollIntoView({behavior:'smooth'});
}

// SMOOTH SCROLL FOR NAV LINKS
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target){
      target.scrollIntoView({behavior:'smooth'});
    }
  });
});

// DONATION WALL DUMMY DATA
const donorList = document.getElementById('donorList');
if(donorList){
  const donors = [
    {rank:1,name:'User1',amount:150,pack:'Spark Pack'},
    {rank:2,name:'User2',amount:100,pack:'Bolt Pack'},
    {rank:3,name:'User3',amount:50,pack:'Single Dino'},
    {rank:4,name:'User4',amount:30,pack:'Noglins'},
  ];
  donorList.innerHTML = donors.map(d => `<li>${d.rank}️⃣ ${d.name} – $${d.amount} – ${d.pack}</li>`).join('');
}

// DISCORD LOGIN PLACEHOLDER
document.getElementById('discordLogin').addEventListener('click', function(){
  alert('Discord OAuth login integration goes here!');
});
