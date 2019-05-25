$(function() {
  // trigger owl carousel
  $("#slider1").owlCarousel({
    loop: true,
    margin: 40,
    stagePadding: 20,
    dots: false,
    // autoplay: true,
    responsive: {
      0: {
        items: 1.3,
        dotsEach: true,
        dots: true,
        nav: false,
        margin: 20,
        stagePadding: 10
      },
      768: {
        items: 2,
        dots: true,
        dotsEach: true,
        nav: false
      },
      992: {
        items: 3,
        nav: true
      }
    }
  });

  $("#slider2").owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    margin: 10,
    responsive: {
      0: {
        items: 1.2,
        dots: true,
        dotsEach: true,
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
        dotsEach: true,
        margin: 10
      },
      768: {
        items: 2,
        nav: false,
        dots: true,
        dotsEach: true,
        margin: 20
      },
      992: {
        items: 2
      }
    }
  });

  $("#slider4").owlCarousel({
    dots: false,
    nav: true,
    loop: false,
    stagePadding: 20,
    margin: 15,
    navRewind: false,
    responsive: {
      0: {
        items: 3
      },
      500: {
        items: 3
      }
    }
  });

  $("#slider-landing-1").owlCarousel({
    loop: true,
    dots: false,
    nav: false,
    margin: 20,
    responsive: {
      0: {
        items: 1.3,
        dots: true,
        dotsEach: true,
        margin: 10
      },
      768: {
        items: 3
      },
      992: {
        items: 4
      }
    }
  });

  // burgor button
  $(".top-header .burgor").on("click", function() {
    $(".navbar").slideToggle(500);
  });

  // burgor button change shape to x button
  $(function() {
    $(".the-button").on("click", function() {
      $(this).toggleClass("transformed");
    });
  });

  // to avoid close dropdown when click inside it
  $(document).on("click", ".dropdown-menu", function(e) {
    e.stopPropagation();
  });

  // add class active on link in navbar when click on it
  $(".navbar li").on("click", function() {
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active");
  });

  // add class active on link in navbar when click on it
  $(".unshilled-content .mobile-show div a").on("click", function() {
    $(this)
      .parent()
      .addClass("active")
      .parent(".owl-item")
      .siblings()
      .find(".item")
      .removeClass("active");
  });

  // show-more button
  if ($(".show-more button").hasClass("show")) {
    $(".show-more button").on("click", function() {
      $("td").fadeIn(400);
      $(this).hide();
    });
  }

  // animate the background on hover
  $(".box .box-link").hover(
    function() {
      $(this)
        .find(".light-background")
        .animate(
          {
            width: "100%"
          },
          1000
        );
    },
    function() {
      $(this)
        .find(".light-background")
        .animate(
          {
            width: "28%"
          },
          1000
        );
    }
  );

  // dropdown
  /*
  $(".navbar-nav li .dropdown-toggle").on("click", function() {
    $("header").toggleClass("background-gray");
    $(".navbar").toggleClass("background-gray");
  });
  */
  /*
  $(".landing .navbar-nav li, .overview .navbar-nav li").on(
    "click",
    function() {
      $(".navbar").css("background-color", "#fff");
    }
  );
  */

  /*
  $(".navbar-nav .dropdown").hover(
    function() {
      $(".dropdown-menu").slideToggle(400);
      $("header").css("background-color", "#fff");
      $(".navbar").css("background-color", "#fff");
    },
    function() {
      $(".dropdown-menu").slideToggle(400);
      $("header").css("background-color", "#fff");
      $(".navbar").css("background-color", "#fff");
    }
  );
  */
});
