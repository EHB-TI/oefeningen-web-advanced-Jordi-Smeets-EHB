'use-strict'

document.getElementById('create').addEventListener('click', createStudent);
document.getElementById('show').addEventListener('click', showStudents);

function Student(name, age, degree){
    this.name = name;
    this.age = age;
    this.degree = degree;
    this.courses = [];

    this.setPersonalDetails = function(details){
        [this.name,this.age,this.degree] = details;
    },
    this.addCourse= function (...courses){
        this.courses = [...this.courses, ...courses];
    },
    this.showStudent= function (){
        let text =
        `Mijn naam is ${this.name}. Ik ben ${this.age} jaar oud en volg ${this.degree} aan EhB.\nMijn vakken zijn: ${this.courses.join(', ')}.`;
        return text;
    }

}

let listOfStudents = [];

function createStudent()
{
    let details= [];
    details.push(prompt('Voer een naam in:'));
    details.push(prompt('Voer leeftijd in:'));
    details.push(prompt('Voer richting in:'));

    let student = new Student();
    student.setPersonalDetails(details);

    while(true){
        let course=prompt('Voer vak in:');
        if(course !== ''){
        student.addCourse(course);
        }
        else{
            break;
        }
    }
    listOfStudents.push(student);
}

function showStudents(){
    for (let student of listOfStudents)
    {
        let p = document.createElement('p');

        p.innerHTML = student.showStudent();
        console.log(student.showStudent());
        document.getElementById('content').appendChild(p);
    }

}


