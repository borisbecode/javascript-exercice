/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
   var red = document.getElementById("red")
   var green = document.getElementById("green")
   var yellow = document.getElementById("yellow")
   var blue = document.getElementById("blue")
 
 
    

    red.addEventListener("click", () => {
        document.body.style.background = "red" ;
     });
     green.addEventListener("click", () => {
        document.body.style.background = "green" ;
     });

     blue.addEventListener("click", () => {
        document.body.style.background = "blue" ;
     });

     yellow.addEventListener("click", () => {
        document.body.style.background = "yellow" ;
     });




})();
