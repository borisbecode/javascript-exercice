/* becode/javascript
 *
 * /08-dom/07-generate-table-one/script.js - 8.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
   var target = document.getElementById("target")
   /* tr>td*5 */
  
    var table = document.createElement("table")
    
    
   /*  var tr = document.createElement("tr") */
    /* il faut 10 tr  */
    /* var td =document.createElement("td")
 */

    /* il faut 1 td dans chaque tr  */

 

    for(i = 0 ; i <10 ; i++){
        var tr = document.createElement("tr")
        var td =document.createElement("td")
        tr.appendChild(td)
        table.appendChild(tr)


    }


   


    target.appendChild(table)

    
    

})();
