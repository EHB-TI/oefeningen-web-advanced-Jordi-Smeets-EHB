'use-strict'

let randomNumber =Math.floor(Math.random() * 20);
console.log(randomNumber);

// hoofdletter P bij Promise
function compareNumber(nr) {
    let promise = new Promise(function(resolve, reject){

        console.log(randomNumber);
        console.log(nr);
        if(nr === randomNumber){
            resolve('Je hebt het mysterieuze nummer geraden!');
        }
        else if (nr< 0 || nr > 20){
            reject('Dat is geen geldig nummer (Fout)');
        }
        else if ( nr < randomNumber){
            reject('Het mysterieuze getal is hoger. Raad nog eens!');
        }
        else {
            reject('Het mysterieuze getal is lager. Raad nog eens!');
        }
    });
    return promise;

}

document.getElementById('numberForm').addEventListener('submit', (event)=>{
    event.preventDefault();
    let number = parseInt(document.getElementById('number').value);
    let result = compareNumber(number);
    
    result.then(
        (value)=> {alert(value)},
        (error)=> {alert(error)}
    )
});

    

