/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
   
   /*  var addition = document.getElementById(addition)
    var substraction = document.getElementById(substraction)
    var multiplication = document.getElementById(multiplication)
    var division = document.getElementById(division) */
    const performOperation = operation => {
        var chiffre1 = parseInt(document.getElementById("op-one").value);
        var chiffre2 = parseInt(document.getElementById("op-two").value);

        switch(operation){

            case "addition":
                alert(chiffre1 + chiffre2)
                break;
            case "substraction":
                alert(chiffre1 - chiffre2)
                break;
            case "multiplication":
                alert(chiffre1 * chiffre2)
                break;
            case "division":
                alert(chiffre1 / chiffre2)
                break;







        }





    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
        
        

    );
})();
