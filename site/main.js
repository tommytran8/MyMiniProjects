const intro = document.getElementById("intro");
const nav = document.getElementById("nav-bar");
const profile = document.getElementById("profile");
const about = document.getElementById("about");
const skills = document.getElementById("skills");
const projects = document.getElementById("projects");
const arrow = document.getElementById("arrow-container");

const pageslist = [profile,skills,  about, projects];
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(()=>{
    intro.style.display = "none"; 
    profile.style.display = "flex";
    about.style.display = "flex";
    skills.style.display = "flex";
    projects.style.display = "flex";

    if (profile.clientWidth > 550) {
      nav.style.display = "flex";
      arrow.style.display = "flex";
    }
  }, 6000);
});

window.addEventListener("resize", ()=>{
  if (profile.clientWidth > 550) {
    nav.style.display = "flex";
    arrow.style.display = "flex";
    if (window.scrollY - getclientHeight(0, 1) >= 0) setNavLoc(true);
    else setNavLoc(false);
  }
  else {
    nav.style.display = "none";
    arrow.style.display = "none";
  }
});



document.addEventListener("scroll", ()=>{
  // console.log(intro.scrollHeight, intro.scrollTop, intro.clientHeight, intro.offsetTop, window.screenTop, window.screenY, window.scrollY);
  if (profile.clientWidth > 550) {
    if (window.scrollY - getclientHeight(0, 3) >= 0){
      setNavLoc(true);
      setNavBgColor("white","white","white", "rgb(20, 86, 184)");
      setNavColor("#0e3e86","#0e3e86", "#0e3e86", "white");
    }
    else if (window.scrollY - getclientHeight(0, 2) >= 0){
      setNavLoc(true);
      setNavBgColor("white","white", "rgb(20, 86, 184)","white");
      setNavColor("#0e3e86","#0e3e86", "white", "#0e3e86");
    }
    else if (window.scrollY - getclientHeight(0, 1) >= 0){
      setNavLoc(true);
      setNavBgColor("white", "rgb(20, 86, 184)", "white","white");
      setNavColor("#0e3e86", "white", "#0e3e86", "#0e3e86");
    }
    else{
      setNavLoc(false);
      setNavBgColor("rgb(20, 86, 184)", "white", "white", "white","white");
      setNavColor("white", "#0e3e86","#0e3e86", "#0e3e86", "#0e3e86");
    }
  }
  
})

function setNavBgColor(a, b, c, d){
    document.getElementById("to-profile").style.backgroundColor = a;
    document.getElementById("to-skills").style.backgroundColor = b;
    document.getElementById("to-about").style.backgroundColor = c;
    document.getElementById("to-projects").style.backgroundColor = d;
}

function setNavColor(a, b, c, d){
    document.getElementById("to-profile").style.color = a;
    document.getElementById("to-skills").style.color = b;
    document.getElementById("to-about").style.color = c;
    document.getElementById("to-projects").style.color = d;
}

function getclientHeight(x1, x2){
  let result = 0
  for (let i = x1; i < x2; i++){
    result += pageslist[i].clientHeight;
  }
  return result - 50;
}

function setNavLoc(bool){
  if (bool){
    nav.style.position = "fixed";
    profile.clientHeight <= 500 ? setNavBar("25px", "450px") : setNavBar("5vh", "90vh");
  }
  else{
    nav.style.position = "absolute";
    profile.clientHeight <= 500 ? setNavBar("500px", "450px") : setNavBar("100vh", "90vh");
  }
}

function setNavBar(y1, y2){
  if (profile.clientWidth < 1000) {
    nav.style.transform = `translate(82vw, ${y1})`;
    arrow.style.transform = `translate(82vw, ${y2})`;
  }
  else {
    nav.style.transform = `translate(90vw, ${y1})`;
    arrow.style.transform = `translate(90vw, ${y2})`;
  }
}