/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
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
    var minute  = now.getMinutes();

 if(heure<=17 || heure == 17 && minute <= 30){

   
        cible.textContent = "bonjour"
 }
   
  

    else{
        cible.textContent = "bonsoir"
    }

   




     


})();
