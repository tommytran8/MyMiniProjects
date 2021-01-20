const page2 = document.querySelector(".nextpage");
let scrollSlide = 0;

page2.addEventListener("click", ()=>{
    location.replace("./page2/index.html")
});
document.addEventListener("wheel", throttle(scrollChange, 500));
document.addEventListener("touchmove", throttle(scrollChange, 500));
function scrollChange(e) {
    if (e.deltaY > 0) {
      scrollSlide += 1;
    } else {
       scrollSlide -= 1;
    }

     if (scrollSlide > 1) {
       scrollSlide = 1;
       location.replace("./page2/index.html")
     }
     if (scrollSlide < 0) {
       scrollSlide = 0;
     }
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

