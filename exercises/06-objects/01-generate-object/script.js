/* becode/javascript
 *
 * /06-objects/01-generate-object/script.js - 6.1: générer un object
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    var personne = {
        nom: "lorenzonetto",
        prenom: "boris",
        age: 29,
        sexe: "masculin",
        ville: "bruxelles",
        pays:"belgique",
      };
     
      var run = document.getElementById("run")

      run.addEventListener("click",function(){



        console.log(personne)


      })

})();
