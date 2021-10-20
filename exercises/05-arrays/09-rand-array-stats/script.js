/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    
    const chiffre = [
        27,
        42,
        38,
        7,
        64,
        98,
        13,
        21,
        84,
        46,
    ]

    var button = document.getElementById("run");

    button.addEventListener("click",function(){


       for(i = 1 ; i <=10 ; i++){
           document.getElementById("n-"+[i]).textContent = chiffre[i-1]
       }

       function compare(x,y){
        return x - y 
       }
        chiffre.sort(compare)
       document.getElementById("min").textContent = chiffre[0]
        
       document.getElementById("max").textContent = chiffre[9]



       const somme = (previousValue, currentValue) => previousValue + currentValue  ;
      
      document.getElementById("sum").textContent = chiffre.reduce(somme)

      
      function numAverage(a) {
        var b = a.length,
            c = 0, i;
        for (i = 0; i < b; i++){
          c += Number(a[i]);
        }
        return c/b;
      }
      
     
      document.getElementById("average").textContent = numAverage([27,42,38,7,64,98,13,21,84,46])

      /* ou faire simplement la somme / 10 enfaite .... */
      
     })

})();
