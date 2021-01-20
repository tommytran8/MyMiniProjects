let scrollSlide = 0;

document.addEventListener("wheel", throttle(scrollChange, 300));
document.addEventListener("touchmove", throttle(scrollChange, 300));
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
      location.replace("../index.html")
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

