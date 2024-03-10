
gsap.to("#left-head", {
  opacity: 1,
  y: 50,
  duration: 1
})

document.getElementById("sidebar").addEventListener("click", openNav)
function openNav() {
  var slideArea = $("#slideArea");
  var currentWidth = slideArea.width();
  if (currentWidth === 0) {
    slideArea.animate({
      width: "300px"
    });
  } else {
    slideArea.animate({
      width: "0",
    });
  }
}

$(window).scroll(() => {
  console.log(pageYOffset)
  if (pageYOffset >= 320) {

    gsap.to("#about", {

      y: -100,
      opacity: 1,
      ease: Expo.easeOut,
      duration: 2.5

    })
    gsap.to("#about-pic", {

      x: "-7vw",
      opacity: 1,
      ease: Expo.easeOut,
      duration: 2.5
    })
  }
  else if (pageYOffset < 320) {
    gsap.to("#about", {

      y: 0,
      opacity: 0,
      ease: Expo.easeOut,
      duration: 2,
      stager: 1

    })
    gsap.to("#about-pic", {

      x: 0,
      opacity: 0,
      ease: Expo.easeOut,
      duration: 2,
      stager: 1
    })
  }
  if (pageYOffset >= 800 && !gsap.isTweening(".depts1")) {
    console.log("scrolled")

    gsap.to("#vert-head", {
      opacity: 1,
      left: "-22vw",
      duration: 1
    })

    gsap.to(".depts1", {

      x: "17vw",
      opacity: 1,
      ease: Expo.easeOut,
      duration: 1,
      stagger: 0.5
    })
  }


  else if (pageYOffset < 800) {
    console.log("scrolled")
    gsap.to(".depts1", {

      x: 0,
      opacity: 0,
      clearProps: "all"
    })
    gsap.to("#vert-head", {
      opacity: 0,
      left: "-42vw",
      duration: 1
    })
  }



})