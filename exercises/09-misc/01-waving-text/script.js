/* becode/javascript
 *
 * /09-misc/01-waving-text/script.js - 9.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    var target = document.getElementById("target")

 var t = target.textContent
    

    target.textContent = " "

    for(i = 0 ; i < t.length ; i++){

     

        var span = document.createElement('span');
        span.textContent = t.charAt(i);
        
        target.appendChild(span);


        let x = 0 

            while(x <= 16){
                x = Math.round(Math.random()*70);

               
            }

                span.setAttribute("style","font-size: "+ x + "px;")
          
      

           
            
        
        
        
     

    }


   


 
        















})();
