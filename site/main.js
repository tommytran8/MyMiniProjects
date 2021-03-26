const intro = document.getElementById("intro");
const nav = document.getElementById("nav-bar");
const profile = document.getElementById("profile");
const about = document.getElementById("about");
const skills = document.getElementById("skills");
const projects = document.getElementById("projects");
const arrow = document.getElementById("arrow-container");
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(()=>{
    document.getElementById("intro-svg").style.display = "none";
    document.getElementById("intro-text").style.display = "none";
    document.getElementById("intro-welcome").style.display = "inline";
    document.getElementById("intro-welcome-before").style.display = "none";
    intro.style.justifyContent = "center";
    nav.style.display = "flex";
    profile.style.display = "flex";
    about.style.display = "flex";
    skills.style.display = "flex";
    projects.style.display = "flex";
    arrow.style.display = "flex";
  }, 6500);
});



document.addEventListener("scroll", ()=>{
  // console.log(intro.scrollHeight, intro.scrollTop, intro.clientHeight, intro.offsetTop, window.screenTop, window.screenY, window.scrollY);
  if (window.scrollY - (intro.clientHeight+profile.clientHeight+skills.clientHeight+projects.clientHeight)  >= 0){
    nav.style.position = "fixed";
    nav.style.transform = "translate(90vw, 5vh)";
    setNavBgColor("white","white","white","white", "rgb(20, 86, 184)");
    setNavColor("#0e3e86","#0e3e86","#0e3e86", "#0e3e86", "white");
  }
  else if (window.scrollY - (intro.clientHeight+profile.clientHeight+skills.clientHeight) >= 0){
    nav.style.position = "fixed";
    nav.style.transform = "translate(90vw, 5vh)";
    setNavBgColor("white","white","white", "rgb(20, 86, 184)","white");
    setNavColor("#0e3e86","#0e3e86","#0e3e86", "white", "#0e3e86");
  }
  else if (window.scrollY - (intro.clientHeight+profile.clientHeight) >= 0){
    nav.style.position = "fixed";
    nav.style.transform = "translate(90vw, 5vh)";
    setNavBgColor("white","white", "rgb(20, 86, 184)", "white","white");
    setNavColor("#0e3e86","#0e3e86", "white", "#0e3e86", "#0e3e86");
  }
  else if (window.scrollY - intro.clientHeight >= 0){
    nav.style.position = "fixed";
    nav.style.transform = "translate(90vw, 5vh)";
    setNavBgColor("white", "rgb(20, 86, 184)", "white", "white","white");
    setNavColor("#0e3e86","white","#0e3e86", "#0e3e86", "#0e3e86");
  }
  else{
    nav.style.position = "absolute";
    nav.style.transform = "translate(90vw, 100vh)";
    setNavBgColor("rgb(20, 86, 184)", "white", "white", "white","white");
    setNavColor("white", "#0e3e86","#0e3e86", "#0e3e86", "#0e3e86");
  }
})

function setNavBgColor(a, b, c, d, e){
    document.getElementById("to-home").style.backgroundColor = a;
    document.getElementById("to-profile").style.backgroundColor = b;
    document.getElementById("to-about").style.backgroundColor = c;
    document.getElementById("to-skills").style.backgroundColor = d;
    document.getElementById("to-projects").style.backgroundColor = e;
}

function setNavColor(a, b, c, d, e){
  document.getElementById("to-home").style.color = a;
    document.getElementById("to-profile").style.color = b;
    document.getElementById("to-about").style.color = c;
    document.getElementById("to-skills").style.color = d;
    document.getElementById("to-projects").style.color = e;
}


