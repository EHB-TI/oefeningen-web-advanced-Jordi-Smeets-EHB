
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


// function changeItUp(input){
//     input = input.replace('Essentials', 'advanced');
//     return input;

// }

// arrow functie met consise syntax

let changeItUp = input =>  input.replace('Essentials', 'advanced');

//variadic arrow function met block body syntax
let grootsteLand = ([...landen])=>{
    let grootste = '';
    let aantalLetters = 0;
    for (const land of [...landen]) {
        if(land.length > aantalLetters)
        {
            aantalLetters = land.length;
            grootste = land;
        }
    }
    return grootste;
}

list = ['Nederland','Amerika','Oezbekistan','Spanje']

console.log(changeItUp("Javascript is the main focus of Web Essentials"));
console.log(grootsteLand(list));


let getDate= () => {
    let date =new Date();
    dag= date.getDate();
    jaar = date.getFullYear();

    // wellicht beter met array -> maar wou gewoon zien hoe een switch statement syntax eruit zag
    switch (date.getMonth()) {
        case 0:
            maand= 'January';
            break;
        case 1:
            maand= 'February';
        break;
        case 2:
            maand= 'March';
            break;
        case 3:
            maand= 'May';
            break;
        case 4:
            maand= 'June';
            break;
        case 5:
            maand= 'July';
            break;
        default:
            maand= 'etcet....'
            break;
    }

    return `${dag} ${maand} ${jaar}`;

}



// 