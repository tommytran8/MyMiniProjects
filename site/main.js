const intro = document.getElementById("intro");
const nav = document.getElementById("nav-bar");
const profile = document.getElementById("profile");
const about = document.getElementById("about");
const projects = document.getElementById("projects");
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(()=>{
    document.getElementById("intro-svg").style.display = "none";
    document.getElementById("intro-text").style.display = "none";
    document.getElementById("intro-welcome").style.display = "inline";
    intro.style.justifyContent = "center";
    nav.style.display = "flex";
    profile.style.display = "flex";
    about.style.display = "flex";
    projects.style.display = "flex";
  }, 6500);
});

document.addEventListener("scroll", ()=>{
  // console.log(intro.scrollHeight, intro.scrollTop, intro.clientHeight, intro.offsetTop, window.screenTop, window.screenY, window.scrollY);
  if (window.scrollY - intro.clientHeight >= 0){
    nav.style.position = "fixed";
    nav.style.transform = "translate(90vw, 5vh)";
  }
  else{
    nav.style.position = "absolute";
    nav.style.transform = "translate(90vw, 100vh)";
  }
})


