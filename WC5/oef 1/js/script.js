'use-strict'
window.onload = async () => {
    let studentConfig= await fetch('data.json');
    let student= await studentConfig.json();
    console.log(student);

    let p= document.getElementById('par');
    p.innerText= `Ik heet ${student.name} en ben ${student.age} jaar oud.` 

}
console.log('test');
