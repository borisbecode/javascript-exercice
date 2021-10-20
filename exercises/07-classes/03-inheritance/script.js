/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Animal {

        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }



    class Cat extends Animal {
        static greeting = " MIAOUCH Miaouch " ; 


        constructor(name){
            super(name);
            this.name = name 
        }


    }

    class Dog extends Animal {
        static greeting = " baow baow " ; 


        constructor(name){
            super(name);
            this.name = name 
        }


    } 
    
    const run = document.getElementById("run") ;

    run.addEventListener("click",function(){


        const chat1 = new Cat("Persephone")
        const dog1 = new Dog("Billy")

        console.log(chat1.sayHello())
        console.log(dog1.sayHello())




     })

  



})();
