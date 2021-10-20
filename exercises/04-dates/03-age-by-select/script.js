/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {


    var button = document.getElementById("run")

    button.addEventListener("click", function (date) {

        var jour = document.getElementById("dob-day").value
        var mois = document.getElementById("dob-month").value
        var annee = document.getElementById("dob-year").value
        var today = new Date();
        var age = today.getFullYear() - annee;
        if (today.getMonth()+1 < mois || (today.getMonth()+1 == mois && today.getDate() < jour)) {
            age--;
          }
        
        

        alert(" vous avez " + age )



        






    })













})();
