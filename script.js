//Splash Screen
setTimeout(function () {
  document.getElementById('loader-container').style.display = 'none';
  document.body.style.overflow = 'auto';
}, 2000);

//curser
function curser() {
  const cursor = document.getElementById('cursor');
  const dot = document.getElementsByClassName('dot');
  document.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
      transform: `translate(-50%,-50%) scale(1)`,
      left: dets.x,
      top: dets.y,
    });
  });
  document.addEventListener("mouseleave", function (dets) {
    gsap.to(cursor, {
      transform: `translate(-50%,-50%) scale(0)`,
    });

  });
  document.addEventListener("mouseenter", function (dets) {
    gsap.to(cursor, {
      transform: `translate(-50%,-50%) scale(1)`,
    });
  });
  document.addEventListener('click', () => {
    gsap.fromTo(cursor, { transform: `translate(-50%,-50%) scale(.5)` }, { transform: `translate(-50%,-50%) scale(1)` });
  });
}
curser();

// function navbar() {
//   let prevScrollpos = window.pageYOffset;
//   window.onscroll = function () {
//     let currentScrollPos = window.pageYOffset;
//     if (prevScrollpos > currentScrollPos) {
//       document.getElementById("navbar").style.top = "0";
//     } else {
//       document.getElementById("navbar").style.top = "-80px";
//     }
//     prevScrollpos = currentScrollPos;
//   };
// }
// navbar();

function hamwork() {
  const hambox = document.querySelector(".ham-box");
  const hambarbox = document.querySelector(".ham-bar-box");
  const hambarboxa = document.querySelectorAll(".ham-bar-box-contant a");

  let hamopen = false;
  hambox.addEventListener("click", function () {
    if (!hamopen) {
      hambox.classList.add("open");
      hamopen = true;
      gsap.to(hambarbox, {
        duration: 0.01,
        opacity: 1,
        scale: 1,
      });
      document.body.style.overflow = 'hidden';
    } else {
      hambox.classList.remove("open");
      hamopen = false;
      gsap.to(hambarbox, {
        duration: 0.2,
        opacity: 0,
        scale: 0,
      });
      document.body.style.overflow = '';

    }
  });

  hambarboxa.forEach(function (elem) {
    elem.addEventListener("click", function () {
      if (!hamopen) {
        hambox.classList.add("open");
        hamopen = true;
        gsap.to(hambarbox, {
          duration: 0.2,
          opacity: 1,
          scale: 1,
        });
        document.body.style.overflow = 'hidden';
      }
      else {
        hambox.classList.remove("open");
        hamopen = false;
        gsap.to(hambarbox, {
          duration: 0.2,
          opacity: 0,
          scale: 0,
        });
        document.body.style.overflow = '';

      }
    });
  });
}
hamwork();

function hambarboxHeight() {
  const navHeight = document.querySelector("#navbar").offsetHeight;
  document.documentElement.style.setProperty('--scroll-padding', navHeight + 'px');
}
hambarboxHeight();

//animations

var tl = gsap.timeline();

tl.from(".rightnav a, .rightnav button", {
  y: -40,
  delay: 1.9,
  opacity: 0,
  stagger: 0.1,
  duration: 0.2,
});

tl.from("#home h1, #home h2, #home h3, #home p, #home a", {
  y: 10,
  opacity: 0,
  scale: 0.9,
  stagger: 0.05,
});
tl.from(".leftfollow, .rightfollow", {
  opacity: 0,
});

gsap.from("#about>h2", {
  y: 20,
  opacity: 0,
  scrollTrigger: {
    trigger: "#about>h2",
    scroller: "body",
    start: "top 90%",
  }
});
gsap.from("#about .rightAbout img", {
  scale: 1.3,
  scrollTrigger: {
    trigger: "#about img",
    scroller: "body",
    start: "top 80%",
    end: "top 5%",
    scrub: 3,
  }
});
gsap.from("#about .mainAbout", {
  y: 20,
  opacity: 0,
  scrollTrigger: {
    trigger: "#about",
    scroller: "body",
    start: "top 70%",
  }
});

gsap.from("#project>h2", {
  y: 20,
  opacity: 0,
  scrollTrigger: {
    trigger: "#project",
    scroller: "body",
    start: "top 90%",
  }
});


const projectCard = document.querySelectorAll(".projectCard");

projectCard.forEach(function (elem) {
  gsap.from(elem, {
    y: 15,
    opacity: 0,
    scrollTrigger: {
      trigger: elem,
      start: "top 95%",
    }
  });
});

projectCard.forEach(function (emum) {
  emum.addEventListener("mouseover", function () {
    gsap.to(emum, {
      y: -8,
      duration: 0,
    });
  });
  emum.addEventListener("mouseleave", function () {
    gsap.to(emum, {
      y: 0,
      duration: 0,
    });
  });
});

gsap.from("#contact>h2", {
  y: 20,
  opacity: 0,
  scrollTrigger: {
    trigger: "#contact>h2",
    scroller: "body",
    start: "top 90%",
  }
});

gsap.from("#left-contact h3", {
  y: 20,
  opacity: 0,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#left-contact h3",
    scroller: "body",
    start: "top 90%",
  }
});
gsap.from("#left-contact p", {
  y: 20,
  opacity: 0,
  scrollTrigger: {
    trigger: "#left-contact p",
    scroller: "body",
    start: "top 90%",
  }
});
gsap.from("#left-contact button", {
  y: 20,
  opacity: 0,
  scrollTrigger: {
    trigger: "#left-contact button",
    scroller: "body",
    start: "top 90%",
  }
});

gsap.from("#right-contact h3", {
  y: 20,
  opacity: 0,
  scrollTrigger: {
    trigger: "#right-contact h3",
    scroller: "body",
    start: "top 90%",
  }
});
gsap.from("#right-contact form", {
  y: 20,
  opacity: 0,
  scrollTrigger: {
    trigger: "#right-contact form",
    scroller: "body",
    start: "top 90%",

  }
});
gsap.from("footer", {
  opacity: 0,
  scrollTrigger: {
    trigger: "footer",
    scroller: "body",
    start: "top 90%",
  }
});
