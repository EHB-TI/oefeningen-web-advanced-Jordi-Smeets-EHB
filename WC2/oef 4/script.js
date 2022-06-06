'use-strict'
let student = {
    name: 'Jordi Smeets',
    age: 30,
    degree: 'Systeem en netwerkbeheer',
    courses: [],
    setPersonalDetails: function(name, age, degree){
        this.name = name;
        this.age = age;
        this.degree = degree;
    },

    addCourse:function(course){

        this.courses.push(course);

    },
    showStudent:function(){
        console.log(`Mijn naam is ${this.name}. Ik ben ${this.age} jaar oud en volg ${this.degree} aan EhB.`)
        console.log(`Mijn vakken zijn: ${this.courses.join(', ')}.`)
    }
    
};

const fullname=prompt('Voer een naam in:');
const age=prompt('Voer leeftijd in:');
const degree=prompt('Voer richting in:');

student.setPersonalDetails(fullname, age, degree);


while(true){
    let course=prompt('Voer vak in:');
    if(course !== ''){
       student.addCourse(course);
    }
    else{
        break;
    }
}
student.showStudent();


