/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

     
    var cible = document.getElementById("target")
    const jour = ["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"]
    const mois = ["janvier","fevrier","mars","avril","mai","juin","juillet","aout","septembre","octobre","novembre","decembre"]
    
    var d = new Date();
    
    var dayName = jour[d.getDay()];

    var monthName = mois[d.getMonth()]


  

 
        
   cible.textContent = "Nous sommes le " + dayName +" " + d.getDay() + " " + monthName + " " + d.getFullYear()
 




})();
