/* becode/javascript
 *
 * /04-dates/01-title-by-hour-one/script.js - 4.1: texte en fonction de l'heure (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    var cible = document.getElementById("target")
    var now = new Date()
    var heure = now.getHours();

 if(heure<18){
     cible.textContent = "bonjour"

 }
 else{
     cible.textContent = "bonsoir"
 }

})();
