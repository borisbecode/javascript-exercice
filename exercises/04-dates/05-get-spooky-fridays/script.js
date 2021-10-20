/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    
    var cible = document.getElementById("run") ;
  
    
    


        

        cible.addEventListener("click",function(){


            var year = document.getElementById("year").value

            for(i = 0 ; i < 12 ; i++ ){

                var année13 = new Date(year,i,13);
                const mois = ["janvier","fevrier","mars","avril","mai","juin","juillet","aout","septembre","octobre","novembre","decembre"]
                var mois13;
                if(année13.getDay() === 5){
                    mois13 = mois[i];
                    alert(mois13);
                }

            }
          
        })


        



    













})();
