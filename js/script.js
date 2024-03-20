let Navbar = document.querySelector('.navbar');
let Fabars = document.querySelector('.fa-bars');

Fabars.onclick = () => {
  Navbar.classList.toggle("active")
};




var swiper = new Swiper(".home-slid", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



var swiper = new Swiper(".team-slider", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    "0": {
      slidesPerView: 1,
      autoplay: {
        delay: 700,
        disableOnInteraction: false,
      },
    },
    "768": {
      slidesPerView: 2,

    },
    "1020": {
      slidesPerView: 3,

    },
  },
});



function onlogin() {

  log = document.getElementById("login");
  if (a != 1) {
    log.innerHTML = "Login"
  }
  else {
    log.innerHTML = n.value;
  }
}

function check() {
  var a = 0;
  var n = document.getElementById("n");
  var password = document.getElementById("myInput");
  if (n.value != "" && password.value != "") {
    a = 1;
  }

  window.location.href = "./index.html"
}