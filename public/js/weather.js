//Dynamically generate the weather window 
$("#main").prepend(`<div class="row">
                        <div class="col-md-5 ml-auto">
                            <div class="card">
                              <div class="card-body" id="weather">
                                  <h1 class="display-4">Atlanta, GA</h1>
                              </div>
                            </div>
                        </div>
                    </div>`);

//This function converts unixtimestamp to the timezone
const convertTime = function (unixTimeStamp) {
  const date = new Date(unixTimeStamp * 1000);
  return date.toLocaleString();
};

//This function converts values into percentages
const getpercentage = function (value) {
  let percent = value * 100;
  percent = `${percent}`;
  if (percent.includes(".")) {
    const dotIndex = percent.indexOf(".");
    percent = percent.substring(0, dotIndex + 3);
  }
  return percent;
}

//This function converts meters per seconds to miles per hour
const getSpeed = function (numb) {
  let mph = numb * (3600 / 1609.3);
  mph = `${mph}`;
  if (mph.includes(".")) {
    const dotIndex = mph.indexOf(".");
    mph = mph.substring(0, dotIndex + 3);
  }
  return mph;
}


// API key
const APIKey = '482352b90547e9e4ea9f55ee0c352d57';

// URL
const corsAnywhere = "http://cors-anywhere.herokuapp.com/";
let queryURL = `${corsAnywhere}https://api.darksky.net/forecast/${APIKey}/33.7490,-84.3880?exclude=minutely,alerts,flags&unit=us`;

//AJAX call to the darksky API
$.ajax({
  url: queryURL,
  method: 'GET'
}).then(function (data) {
  console.log(data);

  //Create anelement to append the results
  const weather = $("#weather");

  //Grab the values
  const time = data.currently.time;
  const temp = data.currently.temperature;
  const humidity = data.currently.humidity;
  const rainProba = data.currently.precipProbability;
  const windspeed = data.currently.windSpeed;
  const icon = data.currently.icon;

  //Convert values
  const UTCtime = convertTime(time);
  const humidityPercent = getpercentage(humidity);
  const rainChance = getpercentage(rainProba);
  const mphSpeed = getSpeed(windspeed);


  //Append to the html page
  weather.append(`<p>${UTCtime}</p>`);

  weather.append(`<h2><i class="fas fa-temperature-high"></i>${temp}</h2>`);

  //Create a new div to append geo variables
  const geoVar = $("<div>").addClass("geoVar float-right");

  geoVar.append(`<p>humidity: ${humidityPercent} %</p>
                 <p>Precipitation: ${rainChance} %</p>
                 <p>Wind: ${mphSpeed} mph</p>`);

  weather.append(geoVar);

  //Grab temperatures for the next 6 hours
  const hourlyForecast = data.hourly.data;

  for (let i = 0; i < 6; i++) {
    const hours = data.hourly.data[i].time;
    const hTemperatures = data.hourly.data[i].temperature;
    console.log(`${hours}  ${hTemperatures}`);
  }

  //Grab temperatures for the week
  const dailyForecast = data.daily.data;

  for (let i = 0; i < 6; i++) {
    const days = data.daily.data[i].time;
    const highTemperatures = data.daily.data[i].temperatureHigh;
    const lowTemperatures = data.daily.data[i].temperatureLow;
    console.log(`${days}  ${highTemperatures}`);
    console.log(`${i}  ${lowTemperatures}`);
  }














});