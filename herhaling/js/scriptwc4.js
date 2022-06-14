let random =Math.floor(Math.random() * 20);
window.onload=()=>{
document.getElementById('guess').addEventListener('click', ()=>{
    let nr =document.getElementById('input-number').value;
    
    
    compareNumber(nr).then(
        result => alert(result),
        error => alert(error)
    )



})


}



function compareNumber(nr) {

    console.log(nr);
    console.log(random);
    
    let promise = new Promise((resolve,reject) => {
        if (nr >0  && nr < 21 )
        {
            if (nr> random) {
                resolve('getal is te groot');
            }
            else if (nr < random)
            {
                resolve('getal is te klein');
            }
            else 
            {
                resolve('getal is juist');
            }
        }
        else
        {
            reject('getal bestaat niet');

        }


    })
    return promise;

}