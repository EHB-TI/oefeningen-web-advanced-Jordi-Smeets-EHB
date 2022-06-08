'use-strict'
let data;
let studentElement;
window.onload = async () => {

    //Data inladen 

    let dataJson= await fetch('data.json');
    data =await dataJson.json();

    // uitbreiding iteraten over objecten met for of
    // why javascript why

    // let classElement = document.getElementById('klasgroep');

        // await dataJson.json().then((data) => {
        //     for (let classGroup of iterate_object(data))
        //     {
        //             console.log(classGroup[0]);
        //             let option =document.createElement('option');
        //             option.value = classGroup;
        //             option.innerText = classGroup;
        //             classElement.appendChild(option);
        //     }
        // })

    
    //Klasgroep drop down invullen
    let classElement = document.getElementById('klasgroep');
    studentElement =document.getElementById('leerlingen');

    for (let classGroup in data)
    {
        let option =document.createElement('option');
        option.value = classGroup;
        option.innerText = classGroup;
        classElement.appendChild(option);
    }
    // leerlingen toevoegen
    console.log(data[0]);
    selectGroup(undefined,'2a');

    // event listner toevoegen
    classElement.addEventListener('change', selectGroup);
    studentElement.addEventListener('change', selectLeerling);

}

function* iterate_object(o) {
    var keys = Object.keys(o);
    for (var i=0; i<keys.length; i++) {
        yield [keys[i], o[keys[i]]];
    }
}


function selectGroup(event, classGroup){
    if(classGroup === undefined)
    {
        classGroup = event.target.value;
    }

    let students =data[classGroup];
    studentElement.innerText= '';

    for(id in students)
    {
        let option =document.createElement('option');
        option.value = students[id];
        option.innerText = students[id];
        studentElement.appendChild(option);
    }

}

function selectLeerling(event){
    let h2 = document.createElement('h2');
    h2.innerText= event.target.value;
    document.body.appendChild(h2);
}
