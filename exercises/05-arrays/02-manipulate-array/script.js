/* becode/javascript
 *
 * /05-arrays/02-manipulate-array/script.js - 5.2: manipulation de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    var button = document.getElementById("run");




    const fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    var enleve = fruits.splice(0,1,"banane")
    enleve = fruits.splice(-1,1,"kiwi")
    
    button.addEventListener("click",function(){

        alert(fruits)
        
            })

    // your code here
})();
