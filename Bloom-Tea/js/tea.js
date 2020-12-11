// $(document).ready(function(){
    $('.multiple-items').slick({
        dots: false,
        infinite: false,
        arrows: true,
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

    $('.autoplay').slick({
        dots: false,
        infinite: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4500,
      });
// });

function openNav(){
    var x;
    x= document.getElementById("menubar");
    if(x.className === "top-menu"){
        x.className += "responsive";
    }
    else{
        x.className= "top-menu";
    }
}

function closeNav(){
    var x;
    x= document.getElementById("menubar");
    if(x.className === "top-menu"){
        x.className -= "responsive";
    }
    else{
        x.className= "top-menu";
    }  
}