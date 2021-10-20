/* becode/javascript
 *
 * /09-misc/04-worst-ui-two/script.js - 9.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  
var part1 = document.getElementById("part-one")
var part2 = document.getElementById("part-two")
var part3 = document.getElementById("part-three")
var part4 = document.getElementById("part-four")



var target = document.getElementById("target")
var num = target.textContent
var chiffre = num.split(''); /* pour en faire un tableau */

var liste = chiffre.slice(1); /* pour refaire un tableau sans le +  */
/* var goodone = liste.shift() */

var chiffre460 = parseInt(liste[0] + liste[1] + liste[2])
var chiffre2 =  "0" + 0
var chiffre3 = "0" + 0 
var chiffre4 = "0" + 0



/* var tel = parseInt(chiffre)  pour en faire un chiffre  */




console.log(chiffre460)





    part1.addEventListener("click",function(){


        chiffre460++

        if(chiffre460 >499){
            chiffre460 = 460
        }
       
        target.textContent = chiffre[0] + chiffre460 + chiffre2 + chiffre3 + chiffre4

       
        
    })
    var i = 0
    part2.addEventListener("click",function(){
        

        chiffre2++
        i++

        if(i<10){
            chiffre2 = "0" + i
        }

        if(chiffre2 >99){
            chiffre2 = 00
        }
       
        target.textContent = chiffre[0] + chiffre460 + chiffre2 + chiffre3 + chiffre4

       
        
    })
    var j = 0
    part3.addEventListener("click",function(){
        

        chiffre3++
        j++

        if(j<10){
            chiffre3 = "0" + j
        }

        if(chiffre3 >99){
            chiffre3 = 00
        }
       
        target.textContent = chiffre[0] + chiffre460 + chiffre2 + chiffre3 + chiffre4

       
        
    })
    var k = 0
    part4.addEventListener("click",function(){
        

        chiffre4++
        k++

        if(k<10){
            chiffre4 = "0" + k
        }

        if(chiffre4 >99){
            chiffre4 = 00
        }
       
        target.textContent =chiffre[0]+ chiffre460 + chiffre2 + chiffre3 + chiffre4

       
        
    })


























})();
