/* becode/javascript
 *
 * /08-dom/08-generate-table-two/script.js - 8.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let table = document.createElement("table");
    for (i = 0; i < 10; i++) {
        let tr = document.createElement("tr");
        for (j = 0; j < 10; j++) {
            let td = document.createElement('td');
            td.innerHTML = (j + 1) * (i + 1);
      
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    target.appendChild(table);

})();
