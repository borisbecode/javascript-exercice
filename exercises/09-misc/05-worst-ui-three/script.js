/* becode/javascript
 *
 * /09-misc/05-worst-ui-three/script.js - 9.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    var target = document.getElementById("target")
    var part1 = document.getElementById("part-one").value
    var part2 = document.getElementById("part-two").value
    var part3 = document.getElementById("part-three").value
    var part4 = document.getElementById("part-four").value
    var button = document.getElementById("fix-part-one")
    var button2 = document.getElementById("fix-part-two")
    var button3 = document.getElementById("fix-part-three")
    var button4 = document.getElementById("fix-part-four")


    var num = target.textContent
    var chiffre = num.split(''); /* pour en faire un tableau */

    var liste = chiffre.slice(1); /* pour refaire un tableau sans le +  */
        /* var goodone = liste.shift() */

    var chiffre460 = parseInt(liste[0] + liste[1] + liste[2])



  


    var x = 460

    var i = "0" + 0

   

    function casino() {
        x++

        if (x > 499) { x = 460 }
        document.getElementById("part-one").setAttribute("value", x)
        target.textContent = "+"+  document.getElementById("part-one").value + document.getElementById("part-two").value + document.getElementById("part-three").value + document.getElementById("part-four").value

    }
    var interval1 = setInterval(casino, 50)
    var intervalboleen = true
    casino()

    function click() {

        if (intervalboleen == true) {
            clearInterval(interval1)
            intervalboleen = false
        }
        else {
            interval1 = setInterval(casino, 50)
               intervalboleen = true
        }
    }

    /* CAAAAAAAAAAAAAAAASIIIIIIIIIINOOOOOOOOOOOOOOOOO 22222222222222222222222222 */

    function casino2() {
        

        i++
        
        if(i < 10){ i = "0" + i}
        if (i > 99) { i = 0 }
        document.getElementById("part-two").setAttribute("value", i)
        target.textContent = "+"+ document.getElementById("part-one").value + document.getElementById("part-two").value + document.getElementById("part-three").value + document.getElementById("part-four").value
    }

    var interval2 = setInterval(casino2, 50)
    var intervalboleen2 = true
    casino2()

    function click2() {
        if (intervalboleen2 == true) {
            clearInterval(interval2)
            intervalboleen2 = false
        }
        else {
            interval2 = setInterval(casino2, 50)
            intervalboleen2 = true
        }
    }
    /* CAAAAAAAAAAASINOOOOOOOOOOOOOOOOOOO 33333333333 */

    function casino3() {
        i++
        if(i < 10){ i = "0" + i}
        if (i > 99) { i = 0 }
        document.getElementById("part-three").setAttribute("value", i)
        target.textContent = "+"+  document.getElementById("part-one").value + document.getElementById("part-two").value + document.getElementById("part-three").value + document.getElementById("part-four").value
       
    }
    var interval3 = setInterval(casino3, 50)
    var intervalboleen3 = true
    casino3()

    function click3() {
        if (intervalboleen3 == true) {
            clearInterval(interval3)
            intervalboleen3 = false
        }
        else {
            interval3 = setInterval(casino3, 50)
            intervalboleen3 = true
        }
    }

    /* 4EME--------------------------------------- BOUTTON */

    function casino4() {
        i++
        if(i < 10){ i = "0" + i}
        if (i > 99) { i = 0 }
        document.getElementById("part-four").setAttribute("value", i)
        target.textContent = "+"+  document.getElementById("part-one").value + document.getElementById("part-two").value + document.getElementById("part-three").value + document.getElementById("part-four").value
      

    }
    var interval4 = setInterval(casino4, 50)
    var intervalboleen4 = true
    casino4()

    function click4() {

        if (intervalboleen4 == true) {
            clearInterval(interval4)
            intervalboleen4 = false
        }
        else {
            interval4 = setInterval(casino4, 50)
            intervalboleen4 = true
        }
    }



    button.addEventListener("click", function () {
        click()

    })



    button2.addEventListener("click", function () {
        click2()

    })
    
    button3.addEventListener("click", function () {
        click3()

    })

    button4.addEventListener("click", function () {
        click4()

    })








})();
