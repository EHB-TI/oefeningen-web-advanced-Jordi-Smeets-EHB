import Cleave from "cleave.js";
import "cleave.js/dist/addons/cleave-phone.be";
import "./style.css"

document.getElementById('get-info').addEventListener('submit',fillCard);



// inputvelden opmaak met cleave

new Cleave('#rijksregisternummer', {
    blocks:[2,2,2,3,2],
    delimiters: ['.','.','-','.']
})

new Cleave('#birthdate', {
    date: true,
    datePattern: ['d', 'm', 'Y'],
    delimiters: ['-','-']
})

new Cleave('#name', {
    blocks:[7,20],
    prefix: 'STUDENT',
    delimiters: ['-']

})

new Cleave('#age', {
    numeral: true,
    numeralPositiveOnly: true

})

new Cleave('#phonenumber', {
    phone: true,
    phoneRegionCode: 'BE'
})


function fillCard(event){
    event.preventDefault();
    let name = document.getElementById('name').value;
    let birthdate = document.getElementById('birthdate').value;;
    let age = document.getElementById('age').value;;
    let phonenumber = document.getElementById('phonenumber').value;;
    let rijksregisternummer = document.getElementById('rijksregisternummer').value;;

    document.getElementById('card-name').innerText= name;
    document.getElementById('card-info').innerText = `
    ${birthdate}
    ${age}
    ${phonenumber}
    ${rijksregisternummer}
    ` ;
    document.querySelector('#card').style.opacity=1;
};