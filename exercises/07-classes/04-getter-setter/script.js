/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
 
    class Person {
        constructor(firstname,lastname){
            this.firstname = firstname
            this.lastname = lastname
        }


       /*  get fullname(){
           return this.firstname + this.lastname
        }

        set fullname(val) {

            
            const names = val.split(" ");
            this.firstname = names[0];
            this.lastname = names[1];



        } */

        get fullName() {
            return this.firstname + this.lastname
        }
         set fullName(space) {
            const parts = space.split(' ');
            this.firstname = parts[0];
            this.lastname = parts[1];
        } 

    }

    const run = document.getElementById("run") ;

    run.addEventListener("click",function(){


        const Boris = new Person("elfamoso","Borisu")
        console.log(Boris.firstname)
        console.log(Boris.lastname)
        console.log(Boris.fullName)
    })














})();
