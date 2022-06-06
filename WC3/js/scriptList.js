'use-strict'
let list = JSON.parse(localStorage.getItem('list'));

let classes = ['list-group-item-primary', 'list-group-item-secondary',
'list-group-item-success', 'list-group-item-danger',
'list-group-item-warning', 'list-group-item-info',
'list-group-item-light', 'list-group-item-dark'];

let html= `<div class="list-group">`;

let tab = '';

for(let student of list){
    let style= Math.floor(Math.random() * 7)
    html += `<a class="list-group-item list-group-item-action ${classes[style]}" data-toggle="list" href="#list${student.name}" role="tab" id='${student.name}' aria-controls="${student.name}">${student.name}</a>`;
    let text =`Mijn naam is ${student.name}.<br> Ik ben ${student.age} jaar oud en volg ${student.degree} aan EhB.<br> Mijn vakken zijn: ${student.courses}.`;

    let tabStudent = `<div class="tab-pane fade" role="tabpanel" id="list${student.name}" aria-labelledby="${student.name}">${text}</div> `
    tab += tabStudent;
}
html += `</div>`;

document.getElementById('studentlist').innerHTML= html;
document.getElementById('nav-tabContent').innerHTML= tab;

this.showStudent= function (){
    let text =
    `Mijn naam is ${this.name}. Ik ben ${this.age} jaar oud en volg ${this.degree} aan EhB.\nMijn vakken zijn: ${this.courses.join(', ')}.`;
    return text;
}