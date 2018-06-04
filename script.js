$(document).ready(function(){
    let $cityInput = $('.city-input');
    let $checkBtn = $('.check-btn');
    let $cityName = $('.city-name');
    let $cityTemp = $('.city-temp');
    let $citySky = $('.city-sky');

    function watherFetch(){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${$cityInput.val()},pl&units=metric&appid=21aaf70b5fc4f3bd6de175114b2ec26e`)
        .then( (res) => res.json())
        .then( (data) => {
            console.log(data)
            $cityName.text(`${data.name}`);
            $cityTemp.text(`${data.main.temp}`);
            $citySky.text(`${data.weather[0].description}`);
        })
           
    }

    checkWeather = () => {
        console.log('test klika')
        console.log($cityInput.val())
    }
    $checkBtn.on('click', checkWeather);
    $checkBtn.on('click', watherFetch);



    
});