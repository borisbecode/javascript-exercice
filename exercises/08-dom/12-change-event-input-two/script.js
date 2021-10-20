/* becode/javascript
 *
 * /08-dom/12-change-event-input-two/script.js - 8.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let pass = document.getElementById('pass-one');
    let count = document.getElementById('validity');
   
   

  
    pass.addEventListener('input', () => {

        var reg = new RegExp("^(?=(.*[a-zA-Z]){1,})(?=(.*[0-9]){2,}).{8,64}$");
      
      if(pass.value.match(reg)){
        count.textContent = "ok"

      }
      else{

        count.textContent = "Pas ok"
      }
      
      
      
      
      
      
        /* count.innerText = `${pass.value.length}/${maxLength}`; */
    })

})();
