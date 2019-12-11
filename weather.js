 /*var button = document.querySelector(".button");
var inputValue = document.querySelector(".search");
var name = document.querySelector(".name");
var desc = document.querySelector(".desc");
var temp = document.querySelector(".temp");


button.addEventListener('click', function() { 

window.fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=43c767cc11504e3cde3ad77e2e621574')
.then(respond => {
     respond.json().then(data => { console.log(data);
var nameValue = data['name'];
var tempValue = data['main']['temp'];
var descValue = data['weather'][0]['description'];


namae.innerHTML = nameValue;
temp.innerHTML = tempValue;
desc.innerHTML = descValue;
})
.catch( err => alert("wrong city name"))
}).catch(err => console.log("wrng cityh entered"))
});  
*/






var search = document.getElementById("search");

//events
search.addEventListener('keyup', (e) => {
    if(e.keyCode === 13)  {
        var getCityName = e.target.value;
    }
    getWeather(getCityName);
});



function getWeather(getCityName) { 
    const weatherAPI = ` http://api.openweathermap.org/data/2.5/weather?q=${getCityName}&&mode=json&units=metric&APPID=43c767cc11504e3cde3ad77e2e621574 `;
    //const weatherAPI = ` http://api.openweathermap.org/data/2.5/weather?q=${getCityName}&APPID=43c767cc11504e3cde3ad77e2e621574 `;
    window.fetch(weatherAPI)
    .then( data => {
        data.json()
        .then(weather => {   
            var output = "";
           
            var weatherData = weather.weather;
            for (let x of weatherData) {
                output += `
                <div class = "col-md-4 offset-4 mt-4 card">
                <div class="card-body">
                <h1> ${weather.name}</h1>
                
                <span class="icon"><img src="http://openweathermap.org/img/wn/${x.icon}.png"/></span>
                
                <p><span>temp:</span>
                
                 <span class="temp"> ${weather.main.temp}&deg;c</span></p>
                 
                </div>
                </div> 
                `
               document.getElementById("name").innerHTML=output;
                
            } 

 
        }).catch(err =>  alert("wrong city entered"));
    }).catch(err =>  alert("wrong city entered"));
} 





