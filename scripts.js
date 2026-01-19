
AOS.init();
gsap.from(".profile",{scale:0.5,opacity:0,duration:1});
document.getElementById("themeToggle").onclick=()=>document.body.classList.toggle("dark");
