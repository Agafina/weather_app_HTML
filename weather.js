document.addEventListener('DOMContentLoaded', function(){
    
const checkWeather = () =>{
    const cityName = document.querySelector('.search > input').value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=c17bb62405366ed54d3e082604f6e925&units=metric`)
    .then(response => response.json())
    .then(data => {
        try{
        // const temp =data.main.temp.toFixed(1); 
        // const cityNamVal = data.name;
        // const wind = data.wind.speed;
        // const humidity = data.main.humidity;
        // const weatherImg = data.weather[0].main;
        const {main: {temp , humidity}, name: cityNamVal , wind:{speed: wind}, weather} = data;
        const weatherImg = weather[0].main
        document.querySelector('.temp').innerHTML = `${temp.toFixed(1)}°C`;
        document.querySelector('.city').innerHTML = cityNamVal;
        document.querySelector('.wind').innerHTML = `${wind} km/h`;
        document.querySelector('span').innerHTML =`${humidity}`;
        document.querySelector('.weather-icon').setAttribute('src', `images/${weatherImg}.png`);
        console.log(weatherImg);
        }catch(error){
           const cityMsg = document.querySelector('.city');
           const errorMsg = document.querySelector('.temp');
           const humidErroMsg = document.querySelector('.wind')
           const windErrorMsg = document.querySelector('.span');
            errorMsg.innerHTML = 'Not Available';
            cityMsg.innerHTML = '-'
            cityMsg.style.fontSize = '40px'
            humidErroMsg.innerHTML ='-';
            windErrorMsg.innerHTML ='-';
        }
        
    });
};

document.querySelector('.search > input').addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        checkWeather();
    }
document.querySelector('button').onclick = checkWeather;
});
});

