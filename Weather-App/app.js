const apiKey = "YOUR_API_KEY";
const weatherInfo= document.getElementById('weatherInfo');

function getWeather(){
    const cityInput = document.getElementById('cityInput');
    const cityName = cityInput.value.trim();

    if(cityName !== ''){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            //check request is succesful
            if(data.code == '404'){
                weatherInfo.innerHTML=`<p>#{data.message}</p>`;
                
            } else{
                //Display weather info
                const temperature = Math.round(data.main.temp - 273.15);
                const description = data.weather[0].description;
                const icon = data.weather[0].icon;
                // console.log(data.code);
                weatherInfo.innerHTML=`
                    <p>Temperature: ${temperature} C</p>
                    <p>Description: ${description}</p>
                    <img src="http://openweathermap.org/img/w/${icon}.png" alt="Weather Icon">
                `;
            }
        })
        .catch(error =>{
            console.error('Error Fecthing weather data:', error);
            weatherInfo.innerHTML='<p>Failed to fetch weathe rdata. please try again later</p>';
        });
    } else{
        weatherInfo.innerHTML='<p>Please enter a city name</p>';
    }
}
