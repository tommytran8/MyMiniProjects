const pages = document.querySelectorAll(".page");
const page2 = document.querySelector(".nextpage");
const icons = document.querySelectorAll(".link-icons img");
const projects = document.querySelectorAll(".project");
let scrollSlide = 0;
let current = 0;
nextSlide(0)
function nextSlide(pageNumber) {
    pages[current].style.visibility = "hidden";
    pages[current].style.pointerEvents = "none";
    pages[pageNumber].style.visibility = "visible";
    pages[pageNumber].style.pointerEvents = "all";
    current=pageNumber;
}
page2.addEventListener("click", ()=>{
    pages[0].style.visibility = "hidden";
    pages[0].style.pointerEvents = "none";
    pages[1].style.visibility = "visible";
    pages[1].style.pointerEvents = "all";
    current = 1;
});
document.addEventListener("wheel", throttle(scrollChange, 1500));
document.addEventListener("touchmove", throttle(scrollChange, 1500));
function scrollChange(e) {
    if (e.deltaY > 0) {
      scrollSlide += 1;
    } else {
      scrollSlide -= 1;
    }

    if (scrollSlide > 1) {
      scrollSlide = 1;
    }
    if (scrollSlide < 0) {
      scrollSlide = 0;
    }
    nextSlide(scrollSlide); 
  }

  function throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  }

