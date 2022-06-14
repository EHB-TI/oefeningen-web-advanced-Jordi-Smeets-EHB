let students = [];
window.onload = () => {

    function student(name, age, degree) {
        this.name = name;
        this.age = age;
        this.degree =degree;
        this.details = [this.name, this.age,this.degree];
        this.courses= [];

        this.addCourse = function(...courses){
            this.courses=[this.courses,...courses];
        };
        
        this.showStudent= function(){ return`Je naam is ${this.name}.\nJe bent ${this.age} jaar oud.\nJe volgt ${this.degree}.\n Je vakken zijn ${this.courses.join(' ')}`;}
            
        }

    document.getElementById('student-registration').addEventListener('submit', (event)=>{
        event.preventDefault();
        let name = document.getElementById('name').value ;
        let  age = document.getElementById('age').value;
        let  degree = document.querySelector('input[type=radio]:checked').value;
        let  courses = document.querySelectorAll('input[type=checkbox]:checked');

        const inputs = document.querySelectorAll('#age, #name');

        inputs.forEach(input => {
          input.value = '';
        });

         // Do some checks
        if(name === '' || age === ''){
            //checking for empty values. Show error alert
            showAlert(false, 'An error has happened');
        }else{
            //Everything is good. Continue to save student
            let newStudent = new student(name, age, degree);
            //Add all courses
            for(let c of courses){
                newStudent.addCourse(c.value);
                c.checked = false;
            }
        students.push(newStudent);

        let studentStorage= JSON.stringify(students)
        localStorage.setItem('studentlist', studentStorage);
        }



    //document.getElementById('showStudents').addEventListener('click',showStudents);

    

    })
}

function showAlert(bool, alert){

    let reply =document.getElementById('reply');
    reply.innerHTML = `<div class="alert alert-primary" role="alert"> ${alert}
    </div>`;

}

