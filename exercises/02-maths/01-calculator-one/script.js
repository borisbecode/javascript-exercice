/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
   var resultat = document.getElementById("resultat")
   var chiffre1 =  document.getElementById("op-one")
   var chiffre2 = document.getElementById("op-two")

    document.getElementById("addition").addEventListener("click", () => {
       resultat.textContent = parseInt(chiffre1.value) + parseInt(chiffre2.value)
    });

    document.getElementById("substraction").addEventListener("click", () => {
        resultat.textContent = parseInt(chiffre1.value) - parseInt(chiffre2.value)
    });

    document.getElementById("multiplication").addEventListener("click", () => {
        resultat.textContent = parseInt(chiffre1.value) * parseInt(chiffre2.value)
    });
   

    document.getElementById("division").addEventListener("click", () => {
        resultat.textContent = parseInt(chiffre1.value) / parseInt(chiffre2.value)
    });
})();
