/* becode/javascript
 *
 * /08-dom/05-hover-image/script.js - 8.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

   /*  var source = document.getElementsByTagName("img")[0].getAttribute("src") ; */
    
    var img = document.getElementsByTagName("img")[0];

    var imghover = img.getAttribute("data-hover");

  
    console.log(img)
  


    img.addEventListener("mouseover",function(){



           img.src = imghover ;




 })



   




    
    


    

  
    

})();
