$(function () {
  // trigger owl carousel
  $("#slider1").owlCarousel({
    loop: true,
    margin: 40,
    nav: true,
    stagePadding: 20,
    dots: false,
    // autoplay: true,
    responsive: {
      0: {
        items: 1.3,
        dots: true
      },
      768: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  });

  $("#slider2").owlCarousel({
    loop: true,
    // autoplay: true,
    nav: true,
    dots: false,
    margin: 10,
    responsive: {
      0: {
        items: 1.2,
        dots: true,
        nav: false
      },
      768: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  });

  $("#slider3").owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    margin: 60,
    responsive: {
      0: {
        nav: false,
        items: 1.3,
        dots: true,
        margin: 10,
      },
      768: {
        items: 2
      },
      992: {
        items: 2
      }
    }
  });

  // burgor button
  $(".top-header .burgor").on("click", function () {
    console.log("ok");
    $(".navbar").slideToggle(500);
  });

  // add class active on link in navbar when click on it
  $(".navbar li, .unshilled-content ul li").on("click", function () {
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active");
  });

  // add class active on link in navbar when click on it
  $(".unshilled-content ul li").on("click", function () {
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active");
  });

  // show-more button
  if ($(".show-more button").hasClass("show")) {
    $(".show-more button").on("click", function () {
      $("td").fadeIn(400);
      $(this).hide();
    });
  }

  // animate the background on hover
  $(".box .box-link").hover(
    function () {
      $(this)
        .find(".light-background")
        .animate({
            width: "100%"
          },
          1000
        );
    },
    function () {
      $(this)
        .find(".light-background")
        .animate({
            width: "28%"
          },
          1000
        );
    }
  );
});