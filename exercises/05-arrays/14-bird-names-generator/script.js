/* becode/javascript
 *
 * /05-arrays/14-bird-names-generator/script.js - 5.14: générateur de noms d'oiseau
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const birds = [
        {name: "mouette", fem: true},
        {name: "corbeau"},
        {name: "mésange", fem: true},
        {name: "hibou"},
        {name: "buse", fem: true},
        {name: "pigeon"},
        {name: "pie", fem: true},
        {name: "vautour"},
        {name: "faucon"},
        {name: "rouge-gorge"},
        {name: "tourterelle", fem: true},
        {name: "corneille", fem: true},
    ];
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);

    var button = document.getElementById("run");

    button.addEventListener("click",function(){  

        var cible = document.getElementById("target")

      /*   var nom = birds.filter(element => element.name)
        nom.forEach(element => console.log(element.name)) */

        

            const random = Math.floor(Math.random() * birds.length);
            const oiseaurandom = birds[random].name


            var nouveau = Array.from(adjectives)

            const adjectifrandom = Math.floor(Math.random() * nouveau.length);
           
            console.log(nouveau[adjectifrandom])


            if(birds[random].fem === true){

                cible.textContent = oiseaurandom + " " + nouveau[adjectifrandom] + "e"
                
            }
            else{
                cible.textContent = oiseaurandom + " " + nouveau[adjectifrandom] 
               
            } 

        












     })


})();
