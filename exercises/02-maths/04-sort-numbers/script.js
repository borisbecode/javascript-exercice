/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value
  
    
   

    document.getElementById("run").addEventListener("click", () => {



        var a = document.getElementById("numbers").value
        var b = a.split(',').map(function(item) {
            return parseInt(item, 10);
        });
        
        
        function compare(x, y) {
            return x - y;
        }


        b.sort(compare);
        alert(b);


        
    });
})();
