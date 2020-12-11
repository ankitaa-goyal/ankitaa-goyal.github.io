$('.product').slick({
    dots: false,
    infinite: true,
    arrows: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
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
                  
  function openMenu() {
    document.getElementById("sideMenu").style.width = "100%";
  }
  
  function closeMenu() {
    document.getElementById("sideMenu").style.width = "0";
  }

  $(".fa-search").click(function() {
    $(".search-toggle").toggle();
    $("input[type='text']").focus();
  });

  // function searchDisplay() {
  //   var x = document.getElementById("searchToggle");
  //   if (x.style.display === "none") {
  //     x.style.display = "block";
  //   } else {
  //     x.style.display = "none";
  //   }
  // }