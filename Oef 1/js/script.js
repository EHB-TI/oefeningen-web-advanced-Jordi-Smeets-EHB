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

//oef 1.7 + 1.8

function capitalize(name){ 

  let names=name.trim().split(" ");
  let capitalNames = new Array;

  /*
  for(let i in names)
  {
    name= names[i]
    capitalNames[i]= name.charAt(0).toUpperCase() + name.substring(1);
  }
  */

  for(let name of names)
  {
    capitalNames.push(name.charAt(0).toUpperCase() + name.substring(1));
  }

  console.log(capitalNames.join(" "));
  
}

capitalize("smeets jordi");
capitalize("mike derycke");
capitalize("   max power    ");
capitalize(" judas de verrader");
