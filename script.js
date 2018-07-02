$(document).ready(function(){
    let $cityInput = $('.city-input');
    let $checkBtn = $('.check-btn');
    let $cityName = $('.city-name');
    let $cityTemp = $('.city-temp');
    let $citySky = $('.city-sky');
    let $citySkyIcon = $('.city-sky-icon');
    let $cityPressure = $('.city-pressure');

    function watherFetch(){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${$cityInput.val()},pl&units=metric&appid=21aaf70b5fc4f3bd6de175114b2ec26e`)
        .then( (res) => res.json())
        .then( (data) => {
            console.log(data)
            $cityName.text(`${data.name}`);
            $cityTemp.text(`${data.main.temp}`);
            $cityPressure.text(`${data.main.pressure}`);
            console.log(`Ikona: http://openweathermap.org/img/w/${data.weather[0].icon}.png`)
            // $citySky.text(`${data.weather[0].description}`);
            switch (data.weather[0].description) {
                default:
                    text = 'Brak info';
                    break;
                case 'clear sky':
                    text = 'Czyste niebo';
                    break;
                case 'few clouds':
                    text = 'Lekko zachmurzone';
                    break;
                case 'scattered clouds':
                    text = 'Rozproszone chmury';
                    break;
                case 'broken clouds':
                    text = 'Rozbite chmury';
                    break;
                case 'shower rain':
                    text = 'Obfity deszcz';
                    break;
                case 'rain':
                    text = 'Deszcz';
                    break;
                case 'thunderstorm':
                    text = 'Burza';
                    break;
                case 'snow':
                    text = 'Śnieg';
                    break;
                case 'mist':
                    text = 'Mgła';    
                    break;            
            }
            $citySky.text(text);
            // $citySkyIcon.text(`<img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png">`);
            
        })
           
    }

    checkWeather = () => {
        console.log('test klika')
        console.log($cityInput.val())
    }

    
    $checkBtn.on('click', checkWeather);
    $checkBtn.on('click', watherFetch);    
});