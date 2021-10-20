/* becode/javascript
 *
 * /09-misc/07-storage-clicker/script.js - 9.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    var target = document.getElementById("target")
    var button = document.getElementById("increment")
   
    target.textContent = "Tu as cliqué  " + localStorage.clickcount + " fois"
    


    button.addEventListener("click",function(){

        localStorage.clickcount = Number(localStorage.clickcount) + 1;
        
        target.textContent = "Tu as cliqué  " + localStorage.clickcount + " fois"



    })












})();
