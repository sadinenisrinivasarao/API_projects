var search = document.getElementById("search");
search.addEventListener("keyup", e => {
    var searchText= e.target.value;
    getMovies(searchText);
});

function getMovies(searchText) {
//console.log(searchText);
const imdbApi = ` http://www.omdbapi.com/?s=${searchText}&apikey=8e7cf4bc ` ;
window.fetch(imdbApi)
  .then(movies => {
    movies.json()
    .then(data =>{ 
        const movieData= data.Search;
        //console.log(movieData);
        var output = [];
        for(let movie of movieData) {
            output += `
            <div class="container">
                <section id="movie">
                    <h1>${movie.Title}</h1>
                    <span class="badge badge-success">${movie.Year}</span>
                    <span class="badge badge-info">${movie.Rated}</span>
                    <span class="badge badge-primary">${movie.Genre}</span>
                    <span class="badge badge-primary">${movie.RunTime}</span>
                    <button class="btn btn-danger">go to home</button>
                    <p>
                    <img src="${movie.Poster}">
<hr style="height=100px">
                </section>

            </div> 
            `; 
            document.getElementById("template").innerHTML = output;
         } 
    })
    .catch(err => console.log(err))
}).catch(err => console.log(err))
};
