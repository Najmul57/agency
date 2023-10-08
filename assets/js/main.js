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
  speed: 2000,
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

// partnet start

$('.partnet__active').slick({
  dots: true,
  arrows: false,
  infinite: true,
  autoplaySpeed: 1000,
  autoplay: true,
  speed: 600,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 2
      }
    }
  ]
});
// partnet end

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

// scrollup
$.scrollUp({
  scrollName: 'scrollUp', // Element ID
  topDistance: '300', // Distance from top before showing element (px)
  topSpeed: 300, // Speed back to top (ms)
  animation: 'fade', // Fade, slide, none
  animationInSpeed: 200, // Animation in speed (ms)
  animationOutSpeed: 200, // Animation out speed (ms)
  scrollText: '<i class="fa-solid fa-angle-up"></i>', // Text for element
  activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
});

//select2
$('.course__select').select2();
$('.university__select').select2();
$('.bachelor__course__select').select2();
$('.masters__course__select').select2();
$('.masters__course__select').select2();
$('.country').select2();
$('.payment_type').select2();
$('.district').select2();