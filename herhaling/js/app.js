
// window.onload = () => {
//     console.log('test');
//     document.getElementById('get-info').addEventListener('submit', (event)=>{event.preventDefault();
//         console.log('test');
//         let name = document.getElementById('name').value;
//         let  age = document.getElementById('age').value;

//         console.log('test');
//         document.getElementById('reply-text').innerHTML= `<p>${name} is ${age} jaar oud!</p>`;
//     })
// }

function capitalizeFirst(input){
     input= input.trim();
     input = input.slice(0,1).toUpperCase() + input.substring(1);
   
 
    return input;
}


let name1 = 'mike derycke'
let name2 = '   max power    '
let name3 = ' judas de verrader'
console.log(capitalizeFirst(name1));
console.log(capitalizeFirst(name2));
console.log(capitalizeFirst(name3));


function changeItUp(input){
    input = input.replace('Essentials', 'advanced');
    return input;

}

function grootsteLand (...landen){

}

console.log(changeItUp("Javascript is the main focus of Web Essentials"));
console.log(grootsteLand('Nederland','Amerika','Oezbekistan','Spanje'));

if('2' === 2){console.log('test')}

// 