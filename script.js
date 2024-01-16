function circleMouseFollower(xscale, yscale) { 
    window.addEventListener("mousemove", function (dets) {
      document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
    });
  }

  document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('nav');
    navbar.classList.add('show');
  }); 
  
  document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('chotiheading');
    navbar.classList.add('show');
  }); 

  document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('heading');
    navbar.classList.add('show');
  }); 

  document.querySelectorAll("#elem").forEach(function(elem){
    var rotate = 0;
    var diffrot = 0;
  
    elem.addEventListener("mouseleave", function (dets) {
      gsap.to(elem.querySelector("img"), {
        opacity: 0,
        ease: Power3,
        duration: 0.5,
      });
    });
  
    elem.addEventListener("mousemove", function (dets) {
      var diff = dets.clientY - elem.getBoundingClientRect().top;
      diffrot = dets.clientX - rotate;
      rotate = dets.clientX;
      gsap.to(elem.querySelector("img"), {
        opacity: 1,
        ease: Power3,
        top: diff,
        left: dets.clientX,
        rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
      });
    });
  });
  
   
circleMouseFollower();