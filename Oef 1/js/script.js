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

//oef 1.9

function changeEssentials(sentence){
  sentence=sentence.replace("Essentials","Advanced");
  console.log(sentence)
}
changeEssentials("Javascript is the main focus of Web Essentials");

//oef 1.10

function longestCountryCalc(...countries){
  let longestCountry=''

  for(country of countries )
  {
    length= country.length;

    if (length > longestCountry.length)
    {
      longestCountry=country;
    }
  }
  console.log(longestCountry);

}
longestCountryCalc('Nederland','Rusland','Japan','Turkmenistan')

//oef 1.12

function transformDate(date)
{
  let day= date.getDate();
  let month= date.getMonth();
  let year= date.getFullYear();
  
  const months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  month= months[month];

  fulldate= `${day} ${month} ${year}`;
  return fulldate;
}

const date = new Date();
console.log(transformDate(date));

//oef 1.13

function calcBirthday(birthday){
  const now = new Date();

  let day= birthday.getDate();
  let month= birthday.getMonth();
  let year= now.getFullYear();
  
  
  let nextBirthday = new Date(year,month,day);

  // check if birthday has passed this year
  if(nextBirthday.getTime() < now.getTime() )
  {
    nextBirthday = new Date(year+1,month,day);
  }
  
  // time in miliseconds
  let delta =nextBirthday.getTime() - now.getTime();
  let days= delta/86400000;

  return Math.round(days);
}
// note months -> starts at 0 -> so - 1
const birthday= new Date(1992,04,10);
console.log(birthday)

console.log(calcBirthday(birthday));