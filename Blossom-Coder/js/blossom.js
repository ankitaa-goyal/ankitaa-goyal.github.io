filterSelection("all")
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("column");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
      w3RemoveClass(x[i], "show");
      if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}
var btnContainer = document.getElementById("portfolio-btn");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("port-active");
    current[0].className = current[0].className.replace(" port-active", "");
    this.className += " port-active";
  });
}

function openMenu() {
  document.getElementById("menu").style.width = "100%";
  document.getElementById("fixed-header").style.display="none";
  document.getElementById("fullpage").style.display="none";
}

var delayDisplay;

function closeMenu() {
  document.getElementById("menu").style.width = "0%";
  document.getElementById("fullpage").style.display="block";
  delayDisplay = setTimeout(headerDisplay, 450);
}

function headerDisplay(){
  document.getElementById("fixed-header").style.display="block";
}


$('.fade').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true
});
  

/*** MODALS***/
var modalparent = document.getElementsByClassName("modal_multi");
var modal_btn_multi = document.getElementsByClassName("myBtn_multi");
var span_close_multi = document.getElementsByClassName("close_multi");

function setDataIndex() 
{
    for (i = 0; i < modal_btn_multi.length; i++)
    {
        modal_btn_multi[i].setAttribute('data-index', i);
        modalparent[i].setAttribute('data-index', i);
        span_close_multi[i].setAttribute('data-index', i);
    }
}

for (i = 0; i < modal_btn_multi.length; i++)
{
    modal_btn_multi[i].onclick = function() {
        var ElementIndex = this.getAttribute('data-index');
        modalparent[ElementIndex].style.display = "block";
    };

    span_close_multi[i].onclick = function() {
        var ElementIndex = this.getAttribute('data-index');
        modalparent[ElementIndex].style.display = "none";
    };
}

window.onload = function() {
    setDataIndex();
};

window.onclick = function(event) {
    if (event.target === modalparent[event.target.getAttribute('data-index')]) {
        modalparent[event.target.getAttribute('data-index')].style.display = "none";
    }

    if (event.target === modal) {
        modal.style.display = "none";
    }
};