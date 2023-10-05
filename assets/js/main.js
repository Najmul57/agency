// object select element
const selectElement = {
  dropdownBtn: document.getElementsByClassName("dropdown_button"),
  subNavItem: document.getElementsByClassName("dropdown_sub"),
};

// element destructure
let { dropdownBtn, subNavItem } = selectElement;

[...dropdownBtn].forEach((innerBtn, index) => {
  let innerNav = subNavItem[index];
  innerBtn.addEventListener("click", function () {
    $(innerNav).slideToggle();
    $(".dropdown_sub").not(innerNav).slideUp();
    $(".dropdown_button").removeClass("active");
    $(innerBtn).toggleClass("active");
  });
});

// slider start
$(".slider__active").slick({
  dots: false,
  infinite: true,
  speed: 300,
  arrows: false,
  autoplay: true,
  fade: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
});

// slider start
$(".partner__active").slick({
  dots: false,
  infinite: true,
  speed: 300,
  arrows: false,
  autoplay: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
// slider start
$(".review__active").slick({
  dots: true,
  infinite: true,
  speed: 300,
  arrows: false,
  autoplay: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// slider end

// university show/less
document.addEventListener("DOMContentLoaded", function () {
  const showMoreButton = document.getElementById("show-more");
  const hiddenContent = document.querySelector(".university__about__content__hidden");

  showMoreButton.addEventListener("click", function () {
      if (hiddenContent.classList.contains("university__about__content__expand")) {
          hiddenContent.classList.remove("university__about__content__expand");
          showMoreButton.textContent = "Show More";
      } else {
          hiddenContent.classList.add("university__about__content__expand");
          showMoreButton.textContent = "Show Less";
      }
  });
});


// lightbox
lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true,
  'fadeDuration':600,
  'alwaysShowNavOnTouchDevices':true
})