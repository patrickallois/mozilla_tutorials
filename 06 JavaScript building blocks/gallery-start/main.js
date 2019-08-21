var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

var btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */
for (i = 1; i < 6; i++) {
  var newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/pic' + i + '.jpg');
  //run a function passing it src
  function setToDisplay(e) {
    //find the value of the src attribute of the current image
    var srcValue = e.target.getAttribute('src');
    displayedImage.setAttribute('src', srcValue);
  }
  //event handler function sets the src attribute of displayed-img
  newImage.addEventListener('click', setToDisplay);
  thumbBar.appendChild(newImage);
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', function() {
  //check the current class name
  var current = btn.getAttribute('class');
  //if the class name is "dark"
  if (current === 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = "rgba(0,0,0,0)";
  }
})
