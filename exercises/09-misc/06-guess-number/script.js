/* becode/javascript
 *
 * /09-misc/06-guess-number/script.js - 9.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {



    var chiffre = Math.floor(Math.random() * 100) ;
    console.log(chiffre)
    


    window.onload = function() { 


    var proposition = prompt("Rentre un numéro , je te dirai s'il est plus grand ou plus petit que le numéro sélectionné") 


    
    while( parseInt(proposition) != chiffre) {

        

        if(parseInt(proposition) > chiffre ){

            alert("c'est moins")
        }
        else{

            alert("c'est plus")
        }

       var proposition = prompt("rentre un numéro")

        

    }

    alert(" Bien joué , tu as gagné un voyage!")

        
    


}






})();
