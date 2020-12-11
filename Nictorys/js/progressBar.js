setTimeout(function() {
  var bars = document.getElementsByClassName('progress-bar');
  for (var i = 0; i < bars.length; i++) {
    bars[i].children[0].style.width = bars[i].dataset.percent;
    bars[i].children[1].innerHTML = bars[i].dataset.percent;
  };
}, 0);