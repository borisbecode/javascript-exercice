/* becode/javascript
 *
 * /07-classes/01-instances/script.js - 7.1: instances
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    const run = document.getElementById("run") 

    run.addEventListener("click",function(){


        const chat1 = new Cat("skitty","9ans")
        console.log(chat1)
        const chat2 = new Cat("pixel","6ans")
        console.log(chat2)




    })
})();
