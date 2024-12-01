// import { DateTime } from 'luxon';

// **************

//my openwearther API key
const appId="69ede41b2832d1bb5ca4912942e76ea0";
var city= document.location.pathname;
console.log(city);
// getting substring starting at position 1 till position of .
city =city.substring(1, city.indexOf("."));
console.log(city);



const url = "https://api.openweathermap.org/data/2.5/weather?appid=69ede41b2832d1bb5ca4912942e76ea0&units=metric";

const url2="https://api.openweathermap.org/data/2.5/forecast?units=metric";



var DateTime = luxon.DateTime;

//console.log(DateTime.now().toString());


  

function showCurrentData(data) {
    let liContent="";
    console.log(data);
    //console.table(data);
    //console.table(data.list);
    console.log(data.cnt);
    console.log(data.city.name);

    for (let i = 0; i < data.cnt ; i+=8) {
        console.log(data.list[i].dt_txt); 
        console.log(data.list[i].dt);
        let dt = DateTime.fromFormat(data.list[i].dt,"dd-MM-yyyy");
        console.log(dt); //=> May 15, 2017 at 8:30);
        
        // console.log("4 loop");
    }

    document.querySelector("#cityName").textContent=data.city.name;
    document.querySelector("#description").textContent=data.list[0].weather[0].description;
    document.querySelector("#currentTemperature").textContent=data.list[0].main.temp;
    document.querySelector("#hightestTemperature").textContent=data.list[0].main.temp_max;
    document.querySelector("#lowestTemperature").textContent=data.list[0].main.temp_min;
    let icon=data.list[0].weather[0].icon;
    document.querySelector("#iconImage").src=`https://openweathermap.org/img/wn/${icon}@2x.png`;


    for (let i = 0; i < data.cnt ; i+=8) {
        console.log(data.list[i].dt_txt);
        
        // console.log("4 loop");
    }



}

// function showWeather(city) {
// function showWeather(lat,lon) {

// function showWeather(value1,value2) {
//     let params;
//     if (value2===undefined) {
//         params=`q=${value1}`;
//     } else {
//         params=`lat=${value1}&lon=${value2}`;
//     }
//     fetch(`${url}&${params}`)
//         .then(response => {
//             if (!response.ok) {
//                 return Promise.reject("URL does not exist!");
//             } else {
//                 return response.json();
//             }
//         })
//         .then (data => {
//             showData(data);
//         })
//         .catch(error => console.log(error));
// }

function showWeatherCity(city) {
    fetch(`${url2}&q=${city}&appid=${appId}`)
    // fetch(`${url3}`)
        .then(response => {
            if (!response.ok) {
                return Promise.reject("URL does not exist!");
            } else {
                return response.json();
            }
        })
        .then (data => {
            showCurrentData(data);
        })
        .catch(error => console.log(error));
}

// fCityName.addEventListener("change", function() {
//     // const city = fCityName.value;
//     // showWeatherCity(city);
//     // showWeatherCity(fCityName.value);
//     showWeather(fCityName.value);
// })
// elBtSearch.addEventListener("click", function() {
//     // 41.158650193984144, -8.632945411933829
//     showWeather(fLat.value,fLon.value);
//     fLat.value="";
//     fLon.value="";
// })

//checkCity();
showWeatherCity(city);