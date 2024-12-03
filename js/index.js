

const appId = "69ede41b2832d1bb5ca4912942e76ea0";
const url = "https://api.openweathermap.org/data/2.5/forecast?units=metric";
var city = "";
var elBtnSubmit = "";
var elDialog = "";
var closeButton = "";

function checkURL() {
    if (document.location.href.includes('berlin') ||
        document.location.href.includes('plovdiv') ||
        document.location.href.includes('lahore') ||
        document.location.href.includes('prague')) {
        var city = document.location.pathname;
        // console.log(city);
        // getting substring starting at position 1 till position of .
        city = city.substring(1, city.indexOf("."));
        showWeatherCity(city);
    }
    if (document.location.href.includes('suggestion')) {
        elBtnSubmit = document.querySelector("#uBtnSubmit");
        elDialog = document.querySelector("dialog");
        closeButton = document.querySelector("dialog button");
        suggestionForm();
    }

}

function showCurrentData(data) {
    const list = document.getElementById("weatherList");
    let date="";
    let dtString ="";
    console.log(data);
    document.querySelector("#cityName").textContent = data.city.name;
    document.querySelector("#description").textContent = data.list[0].weather[0].description;
    document.querySelector("#currentTemperature").textContent = data.list[0].main.temp;
    document.querySelector("#hightestTemperature").textContent = data.list[0].main.temp_max;
    document.querySelector("#lowestTemperature").textContent = data.list[0].main.temp_min;
    let icon = data.list[0].weather[0].icon;
    document.querySelector("#iconImage").src = `https://openweathermap.org/img/wn/${icon}@2x.png`;

    for(let i=8; i<40;i=i+8){
     date = new Date(data.list[i].dt * 1000);
     dtString = date.toDateString();
    console.log(dtString);
    let splitIndex = dtString.indexOf(' ');
    let newDay = dtString.substring(0, splitIndex);
    let newDate = dtString.substring(splitIndex + 1);

    list.innerHTML += `<li class="list-group-item"><span class="fw-semibold">${newDate}  </span> | ${data.list[i].main.temp} &#x2103; | ${data.list[i].weather[0].main}</li>`;
}
}


function showWeatherCity(city) {
    fetch(`${url}&q=${city}&appid=${appId}`)
        .then(response => {
            if (!response.ok) {
                return Promise.reject("URL does not exist!");
            } else {
                return response.json();
            }
        })
        .then(data => {
            showCurrentData(data);
        })
        .catch(error => console.log(error));
}

function suggestionForm() {
    elBtnSubmit.addEventListener('click', function () {
        //console.log("yes");
        var elInputCity = document.querySelector("#uCity").value;
        var elSelectReason = document.querySelector("#uSelect").value;
        // const dialog = document.querySelector("dialog");
        var msg = "WoOoow ! You are too lazzzyy to fill a form, but want me to go & explore a new city"
        //console.log(elInputCity);
        //console.log(elSelectReason);
        if (elInputCity === "" || elSelectReason === "") {
            console.clear();
            console.log("City Value = " + elInputCity);
            console.log("Selected Option = " + elSelectReason);
            console.log(msg);
        } else {
            console.clear();
            console.log("City Value = " + elInputCity);
            console.log("Selected Option = " + elSelectReason);
            msg = elSelectReason + " is a very good reason to go to " + elInputCity;
            console.log(msg);
        }
        document.querySelector("#uMessage").textContent = msg;
        elDialog.showModal();
    });
    // "Close" button closes the dialog
    closeButton.addEventListener("click", () => {
        elDialog.close();
    });
}

checkURL();




