
(function showStudents(){

    let studentlist =localStorage.getItem('studentlist');
    
    if(studentlist){
        studentlist = JSON.parse(studentlist);

        let jumbo = document.getElementsByClassName('jumbotron')[0];
        
        for(let s of studentlist){
           
            p = document.createElement('p');
            p.innerText = `Je naam is ${s.name}.\nJe bent ${s.age} jaar oud.\nJe volgt ${s.degree}.\n Je vakken zijn ${s.courses.join(' ')}`;
            jumbo.appendChild(p);
        }
        
    }


})();



