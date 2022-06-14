window.onload = () => {

    let klasgroep = document.getElementById('klasgroep');
    let leerlingen = document.getElementById('leerlingen');
    let data;
    (async function getData(){

        response= await fetch('data.json');
    
        if (response.ok)
        {
            return await response.json();
        }
    
    })().then(result =>{
        for (const i in result) {
            let option = document.createElement('option');
            option.innerText= i;
            klasgroep.appendChild(option);
        }
        data= result;

        // addEventListeners

        klasgroep.addEventListener('change', ()=>{
            selectGroup();
        })
        
        selectGroup()
        leerlingen.addEventListener('change', ()=>{
            selectLeerling(event);
        })

    
    });
    
    
    function selectGroup(){
        leerlingen.innerHTML='';

        let klas = document.querySelector('option:checked').value;
        let selectedKlas =data[klas]
        for(const leerling in selectedKlas)
        {
            let option = document.createElement('option');
            option.innerText= selectedKlas[leerling];
            leerlingen.appendChild(option);        

        }
    }

    function selectLeerling(event){
    
        let reply =document.getElementById('reply');
        reply.innerText=event.target.value;



    }

        
        

}


