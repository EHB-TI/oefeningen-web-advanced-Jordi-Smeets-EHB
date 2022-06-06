'use-strict'

document.getElementById('student-registration').addEventListener('submit', createStudent);

function Student(name, age, degree){
    this.name = name;
    this.age = age;
    this.degree = degree;
    this.courses = [];

    this.setPersonalDetails = function(details){
        [this.name,this.age,this.degree] = details;
    },
    this.addCourses= function (...courses){
        this.courses = [...this.courses, ...courses];
    },
    this.addCourse= function (course){
        this.courses.push(course);
    },
    this.showStudent= function (){
        let text =
        `Mijn naam is ${this.name}. Ik ben ${this.age} jaar oud en volg ${this.degree} aan EhB.\nMijn vakken zijn: ${this.courses.join(', ')}.`;
        return text;
    }

}

let listOfStudents = [];

function createStudent(e)
{
    e.preventDefault()

    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let degree = document.querySelector('input[type=radio]:checked').value;
    
   
    if(name)
    {
        if(age >0)
        {
            let student = new Student(name,age,degree);
            var boxes=document.querySelectorAll('input[type=checkbox]:checked');
            for(let b of boxes){
                student.addCourse(b.value);
            }
             //maak inputvelden leeg

            document.getElementById('name').value = '';
            document.getElementById('age').value= '';
            
            // toon alert 
            
            addAlert(true,'Student created!')
            listOfStudents.push(student);

            localStorage.setItem('list',JSON.stringify(listOfStudents));
        }
        else
        {
            addAlert(false,'Input a valid age!')
        }
    }
    else
    {
        addAlert(false,'Input a valid name!')
    }
   
}

function showStudents(){
    for (let student of listOfStudents)
    {
        let p = document.createElement('p');

        p.innerHTML = student.showStudent();
        document.getElementById('content').appendChild(p);
    }

}

function addAlert(status, message){
    let content='';
    
    if(status){
        content = `<div class="alert alert-success" role="alert">
        ${message}</div>`
    }
    else{
        content = `<div class="alert alert-warning" role="alert">
        ${message}</div>`
    }

    document.getElementById('messages').innerHTML = content;

}

