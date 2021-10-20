/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    do{
        var age = prompt("quel est ton age?")
        var sexe = prompt("tu es un homme ou une femme?")
        var ville = prompt("quel est ta ville?")
        var confirmation = confirm("confimez vous bien que vous avez "+ age +" ans  \n et que vous etes un " + sexe + "  \n et que vous habitez a " + ville)
    }
    while (confirmation == false){
        alert(" merci")
    }
})();
