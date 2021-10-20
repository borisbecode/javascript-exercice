/* becode/javascript
 *
 * /09-misc/03-worst-ui-one/script.js - 9.3: la pire interface (1) : phone slider
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
   var target = document.getElementById("target")
   var slider = document.getElementById("slider")

  


    var rangeSlider = document.getElementById("rs-range-line");
    var rangeBullet = document.getElementById("rs-bullet");

    slider.addEventListener("input", showSliderValue, false);

    function showSliderValue() {
  target.innerHTML = slider.value;
  var bulletPosition = (rangeSlider.value /rangeSlider.max);
  rangeBullet.style.left = (bulletPosition * 578) + "px";

}


/* https://codepen.io/mayuMPH/pen/ZjxGEY */

})();
