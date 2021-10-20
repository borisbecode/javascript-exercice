/* becode/javascript
 *
 * /08-dom/11-change-event-input-one/script.js - 8.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
   
    let pass = document.getElementById('pass-one');
    let count = document.getElementById('counter');
    let maxLength = 10;
    pass.setAttribute('maxlength', maxLength);
    pass.addEventListener('input', () => {
        count.innerText = `${pass.value.length}/${maxLength}`;
    })

})();
