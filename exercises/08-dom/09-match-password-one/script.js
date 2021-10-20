/* becode/javascript
 *
 * /08-dom/09-match-password-one/script.js - 8.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    var button = document.getElementById("run")






    button.addEventListener("click",function(){


        var pass1 = document.getElementById("pass-one")
        var pass2 = document.getElementById("pass-two")

        if(pass2.value == pass1.value ){

           

            pass2.style.border = "2px solid green";


        }

        else{
           
          

            pass2.style.border = "2px solid red";

        }









    })








})();
