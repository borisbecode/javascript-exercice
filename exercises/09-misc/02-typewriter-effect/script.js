/* becode/javascript
 *
 * /09-misc/02-typewriter-effect/script.js - 9.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

  /*  var target = document.getElementById("target")

   var t = target.textContent


   target.textContent = " "
*/
  /*  for (i = 0; i < t.length; i++) {



       var span = document.createElement('span');
       span.textContent = t.charAt(i);

       target.appendChild(span);




       span.setAttribute("style", "visibility:hidden;")



     


       setTimeout(function(){
          
           
           span.setAttribute("style", "visibility:visible;")
       }, 3000);



   } */


  /* x = 1
      for (x = 0; x < t.length; x++){
  
         
  
         
  
          
          setTimeout(function(){
             
              var z = span[5]
              z.setAttribute("style", "visibility:visible;")
          }, 3000);
  
  
         Math.floor(Math.random() * 100) + 10
      }
   */
  var i = 0;

  var target = document.getElementById("target");



  var txt = target.textContent;
  target.textContent = ""








  function typeWriter() {


    if (i < txt.length) {
      document.getElementById("target").innerHTML += txt.charAt(i);
      i++;

      

      

      var j = Math.floor(Math.random() * 100) + i;
      
      var speed =  50

      const temps = setTimeout(typeWriter, speed + j)
      setTimeout(typeWriter, speed + j)
      clearTimeout(temps)

      


     
      }
      

    

   
   
    /*  setTimeout(typeWriter,Math.floor(Math.random() * 100) + 10);  */






  }



  typeWriter();
  






})();
