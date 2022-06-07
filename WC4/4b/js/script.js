'use-strict'

async function getConfig(){
    let resp = await fetch('config.json');
    let data = await resp.json();
    config = data;
}

getConfig();
let timeMovie;
let counter = 0;

window.onload = () => {

    

    if (localStorage.getItem('movieCounter')) {
        counter = parseInt(localStorage.getItem('movieCounter'));
    }

    async function getData(searchParam){
        let resp = await fetch(`${config.baseurl}s=${searchParam}${config.apikey}`);
        let data = await resp.json();
        return data.Search;
    }


    async function showMovie(event) {
        let text =event.target.text;
        let title =(text.split('/'))[0];
        let year =(text.split('/'))[1];

        let resp = await fetch(`${config.baseurl}t=${title}&y=${year}${config.apikey}`);
        let movie = await resp.json();

        timeMovie = movie.Runtime;
        
        document.getElementById('movie-title').innerText = movie.Title;
        document.getElementById('movie-description').innerText =movie.Plot;
        document.getElementById('movie-releasedate').innerText= movie.Released;
        document.getElementById('movie-director').innerText= `Directed by: ${movie.Director}`;
        document.getElementById('movie-poster').setAttribute('src', `${movie.Poster}`);

        //DOM MANIP 
        document.getElementById('movie-card').removeAttribute('hidden');
    }

    function showMovies(movies) {
        let count=1;
        for(movie of movies){
            if(count < 5)
            {
                
                let resultItem= document.getElementById(`result${count}`)
                resultItem.innerText = `${movie.Title} / ${movie.Year}`;
                resultItem.removeAttribute('hidden');
                count++;
                
            }
        }      
        for (index = 5; index > count-1; index--) {
            
            document.getElementById(`result${index}`).setAttribute('hidden','true')
        }
    }

    function addMovie(){
        if(parseInt(timeMovie)){
            runtime= parseInt(timeMovie);
            counter += parseInt(runtime);    
            document.getElementById('counter').innerText= `Time wasted on movies: ${counter} min`;
            localStorage.setItem('movieCounter',counter);
        }
    }

    let submitForm = (event) => {
        event.preventDefault();
        title= event.target.value;
        //let title =document.getElementById('title').value;

        // search for movie
        getData(title).then(result => {
            movies = result;
            if (result){
                showMovies(result);
            }

        });
        
    };

    //document.getElementById('movie-form').addEventListener('submit',submitForm);
    document.getElementById('add-movie').addEventListener('click',addMovie);
    document.getElementById('movie-input').addEventListener('keyup',submitForm);
    let items =document.getElementsByClassName('list-group-item');
    for( let i of items)
    {
        i.addEventListener('click',showMovie);
    }
}