'use-strict'

//Oef 1.1
//alert("Hello World")


/* Oef 1.2

let a = 10;
a=a + 5;
console.log(a);
*/

/* Oef 1.3

let age =prompt();
if (age > 18) {
    console.log("Welkom!");
  }
*/

//Oef 1.4

  
  document.getElementById("formOef1").addEventListener('submit',checkAge);
    
  function checkAge(event){
    event.preventDefault();
    
    const age= document.getElementById("age").value;
    console.log(age)
    if (age > 18) {
      const name= document.getElementById("name").value;
      console.log(`${name}, je bent ouder dan 18 jaar!`);
    }
  }