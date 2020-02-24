const weather = document.querySelector(".js-weather");

const WEATHER_API_KEY = "5035cdeee349093915fac82b42b84d6a";
const COORDS = "coords";

function getWeather(lat, lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    )
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature}Cº in ${place}`;
    });
    //then 사용 이유 : fetch가 완료되길 기다려야 하기 때문. 안하면 정상적으로 완료X일수도..

}

/*javascript는 웹사이트로 request를 보내고 응답을 통해 데이터 얻기 가능.
~> 가져온 데이터를 refresh없이도 적용가능해서!*/


function saveCoords(coordsObj){
    localStorage.setItem(COORDS,JSON.stringify(coordsObj)); // 로컬 스토리지 저장
}
function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj={
        latitude: latitude,
        longitude: longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError(){
    console.log("Can't access geo location"); 
}
function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}
function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS); // 가져와
    if(loadedCoords === null){
        askForCoords();
    }
    else{
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude,parsedCoords.longitude);
    }
}

function init(){
    loadCoords();
}

init();