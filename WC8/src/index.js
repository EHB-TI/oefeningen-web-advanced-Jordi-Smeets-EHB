import Cleave from "cleave.js";

let photoList= [];
let personalPhotoAlbum =[];
window.onload=()=>{

    // haal foto's op
    getPhotos().then((result) => {
        photoList = result;

        if(localStorage.getItem('personalPhotoAlbum'))
        {
            personalPhotoAlbum = localStorage.getItem('personalPhotoAlbum').split(',');
            getPersonalAlbum();
        }
      
    });

    // haal albums op
    getAlbums(10).then(() => {
    

    // add eventlisteners
        Array.from(document.getElementsByClassName('list-group-item')).forEach(element => {
           element.addEventListener('click',showPhotos);
           
           // uitbreiding om dit dynamisch te doen
           element.addEventListener('mouseenter',()=>{
            if(!element.className.includes(' hoverOver'))
            {
                element.className+=' hoverOver' 
            }

           })
           element.addEventListener('mouseleave',()=>{
            if(element.className.includes(' hoverOver'))
            {
                element.className=element.className.split(' hoverOver')[0];
            }            
           })
       });

    });


    document.getElementById('save-album').addEventListener('click',()=>{
        let albumname =document.getElementById('name').value ;
        localStorage.setItem('albumname',albumname);
        localStorage.setItem('personalPhotoAlbum',personalPhotoAlbum);
    })

    let cleave = new Cleave('#name', {
        delimiters: ['.','-'],
        blocks: [4, 3, 3],
        uppercase: true
        });

        console.log(cleave)
    
        
};

async function getAlbums(amount){
    let response =await fetch('https://jsonplaceholder.typicode.com/albums');
    let albums = await response.json();

    let counter = 0;
    let albumList = document.getElementById('album-list');
   
    while(counter < amount)
    {
        const listItem =document.createElement('li');
        listItem.className= 'list-group-item';
        
        const textnode = document.createTextNode(albums[counter].title);
        listItem.appendChild(textnode);

        albumList.appendChild(listItem);
        counter+=1;

        listItem.id= `album-${counter}`;
    }
}

async function getPhotos(){
    let response = await fetch('https://jsonplaceholder.typicode.com/photos');
    return await response.json();

}

function showPhotos(event){

   
    // remove blue selector
    if(document.querySelector('.selected')){
        document.querySelector('.selected').className='list-group-item';
    }

    // add blue selector to current selected item
    event.target.className = 'selected';

     let photoAlbumList= document.getElementById('photo-list');

    // remove old photos
    while (photoAlbumList.firstChild) {
        
        photoAlbumList.removeChild(photoAlbumList.lastChild);
    }

   
    let albumid= event.target.id.slice(6);
    
    let counter = 1;
    // add photos and divs
    for (const foto of photoList) {
        
        if(foto.albumId == albumid && counter < 21){
            let img = document.createElement('img');
            img.className= 'image';
            img.id=foto.id;
            img.src= foto.thumbnailUrl;
            photoAlbumList.appendChild(img);
            counter++;
        }
        
    }

    //add eventlistener foto's

    Array.from(document.getElementsByClassName('image')).forEach(element => {
        element.addEventListener('click',photoSelect);
    });

}

function photoSelect(eventl){
    let photoId= event.target.id;
    let photoSrc= event.target.src;
    let photo= document.getElementById(photoId);
    let personalAlbum= document.getElementById('personal-album');

    // border verwijderen
    if(document.querySelector('.borderImage')){
        document.querySelector('.borderImage').className='image';
    }

    if(personalPhotoAlbum.length < 5 && !personalPhotoAlbum.includes(photoId)){ 
      
        //nieuwe border
        photo.className+=' borderImage';
        personalPhotoAlbum.push(photoId);
        let newPhoto= document.createElement('img');
        newPhoto.src = photoSrc;
        newPhoto.id= photoId;
        personalAlbum.appendChild(newPhoto); 
        newPhoto.addEventListener('click', (event) =>{
            personalAlbum.removeChild(event.target);

            if(personalPhotoAlbum.includes(event.target.id))
            {
                personalPhotoAlbum=personalPhotoAlbum.filter(function(value, index, personalPhotoAlbum){ 
                    return value !=event.target.id;
                });
            }
           
        })
       
    }

 }
function getPersonalAlbum(){

    for (const photo of personalPhotoAlbum) {
        let personalAlbum= document.getElementById('personal-album');
        let newPhoto= document.createElement('img');
        newPhoto.id= photo;
        newPhoto.src = photoList[newPhoto.id].thumbnailUrl;

        personalAlbum.appendChild(newPhoto); 

        newPhoto.addEventListener('click', (event) =>{
            personalAlbum.removeChild(event.target);

            if(personalPhotoAlbum.includes(event.target.id))
            {
                personalPhotoAlbum=personalPhotoAlbum.filter(function(value, index, personalPhotoAlbum){ 
                    return value !=event.target.id;
                });
            }
           
        })
        
        
    }

}
