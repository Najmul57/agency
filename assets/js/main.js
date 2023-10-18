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
  'fadeDuration': 600,
  'alwaysShowNavOnTouchDevices': true
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
$('.payment_option').select2();
$('.payment_method_item').select2();

// currency
function currencyChange() {
  var paymentOption = document.getElementById("payment_option");
  var usdTransactionField = document.getElementById("usd_amount");
  var inrTransactionField = document.getElementById("inr_amount");

  if (paymentOption.value === 'usd') {
    usdTransactionField.style.display = "block";
    inrTransactionField.style.display = "none";
  } else if (paymentOption.value === 'inr') {
    usdTransactionField.style.display = "none";
    inrTransactionField.style.display = "block";
  } else {
    usdTransactionField.style.display = "none";
    inrTransactionField.style.display = "none";
  }
}


// currency usd and indian rupy

// Define the conversion rate ( indian rupy )
const indianRupyRate = 1.33; // 1 INR = 1.33 BDT

// Listen for input changes in the INR input field
document.getElementById("inr_amount_input").addEventListener("input", function () {
  // Get the value of the INR input
  const inrAmount = parseFloat(this.value);

  // Check if the input is a valid number
  if (!isNaN(inrAmount)) {
    // Perform the conversion and update the BDT amount input field
    const bdtAmount = inrAmount * indianRupyRate;
    document.getElementById("bdt_amount").value = bdtAmount;
  } else {
    // Clear the BDT amount if the input is not a valid number
    document.getElementById("bdt_amount").value = "";
  }
});

// Define the conversion rate (1 USD = 100 BDT)
const usdRate = 100;

// Listen for input changes in the USD input field
document.getElementById("usd_input").addEventListener("input", function () {
  // Get the value of the USD input
  const usdAmount = parseFloat(this.value);

  // Check if the input is a valid number
  if (!isNaN(usdAmount)) {
    // Perform the conversion and update the BDT amount input field
    const bdtAmount = usdAmount * usdRate;
    document.getElementById("bdt_amount").value = bdtAmount;
  } else {
    // Clear the BDT amount if the input is not a valid number
    document.getElementById("bdt_amount").value = "";
  }
});

// bdt amount disable
$(document).ready(function () {
  // Initial state: Disable BDT Amount
  $("#bdt_amount").prop('disabled', true);

  // Listen for changes in the currency select field
  $("#payment_option").change(function () {
    if ($(this).val() === "usd" || $(this).val() === "inr") {
      // If USD or INR is selected, disable BDT Amount
      $("#bdt_amount").prop('disabled', true);
    } else {
      // If neither USD nor INR is selected, enable BDT Amount
      $("#bdt_amount").prop('disabled', false);
    }
  });
});

// payment method

function najmul() {
  var paymentMethodSelect = document.getElementById("payment_method_item");
  var txtNumberDiv = document.getElementById("txt_number_div");
  var bankNameDiv = document.getElementById("bank_name_div");
  var bankTxtUploadDiv = document.getElementById("bank_txt_upload_div");

  if (paymentMethodSelect.value === "bkash" || paymentMethodSelect.value === "nagod" || paymentMethodSelect.value === "dbbl") {
      txtNumberDiv.style.display = "block";
      bankNameDiv.style.display = "none";
      bankTxtUploadDiv.style.display = "none";
  } else if (paymentMethodSelect.value === "bank") {
      txtNumberDiv.style.display = "none";
      bankNameDiv.style.display = "block";
      bankTxtUploadDiv.style.display = "block";
  } else {
      txtNumberDiv.style.display = "none";
      bankNameDiv.style.display = "none";
      bankTxtUploadDiv.style.display = "none";
  }
}