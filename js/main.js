/* -------------------------------------------------------
   Function for getting weather information
   ------------------------------------------------------- */

function weatherBalloon() {
  var key = 'e35ca5623af73c61e78b08a4d03a4462';
  var lat = '41.825226';
  var lon = '-71.418884';
  fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&units=imperial&appid=' + key)  
  .then(function(resp) { return resp.json() }) // Convert data to json
  .then(function(data) {
    drawWeather(data);
    console.log(data);
  })
  .catch(function() {
    // catch any errors
  });
}


/* -------------------------------------------------------
   Function for display weather information
   ------------------------------------------------------- */

function drawWeather( d ) {

  // placeholder div for testing output
  $('.high').html(convertTemp(d.daily[0].temp.max) );
  $('.low').html(convertTemp(d.daily[0].temp.min) );
  $('.temp').html(convertTemp(d.current.temp) );
  $('.description h2').html((d.current.weather[0].description) );

  $('.humidity .number ').html(convertTemp(d.current.humidity) );
  $('.perciptation .number ').html(convertTemp(d.daily[0].temp.min) );
  $('.sunrise p').html(convertTime(d.current.sunrise) );
  $('.sunset p').html(convertTime(d.current.sunset) );

$('.one .icon').html(printGraphic(d.daily[1].weather[0].description));
 $('.two .icon').html(printGraphic(d.daily[2].weather[0].description));
 $('.three .icon').html(printGraphic(d.daily[3].weather[0].description));
$('.four .icon').html(printGraphic(d.daily[4].weather[0].description));
$('.five .icon').html(printGraphic(d.daily[5].weather[0].description));
  $('.six .icon').html(printGraphic(d.daily[6].weather[0].description));

   $('.one h4').html(convertTemp(d.daily[1].temp.day) );
  $('.two h4').html(convertTemp(d.daily[2].temp.day) );
  $('.three h4').html(convertTemp(d.daily[3].temp.day) );
  $('.four h4').html(convertTemp(d.daily[4].temp.day) );
  $('.five h4').html(convertTemp(d.daily[5].temp.day) );
  $('.six h4').html(convertTemp(d.daily[6].temp.day) );

   $('.low-one').html(convertTemp(d.daily[1].temp.min) );
  $('.low-two').html(convertTemp(d.daily[2].temp.min) );
  $('.low-three').html(convertTemp(d.daily[3].temp.min) );
  $('.low-four').html(convertTemp(d.daily[4].temp.min) );
  $('.low-five').html(convertTemp(d.daily[5].temp.min) );
  $('.low-six').html(convertTemp(d.daily[6].temp.min) );

  $('.high-one').html(convertTemp(d.daily[1].temp.max) );
  $('.high-two').html(convertTemp(d.daily[2].temp.max) );
  $('.high-three').html(convertTemp(d.daily[3].temp.max) );
  $('.high-four').html(convertTemp(d.daily[4].temp.max) );
  $('.high-five').html(convertTemp(d.daily[5].temp.max) );
  $('.high-six').html(convertTemp(d.daily[6].temp.max) );

  $('.one h3').html(displayDay(1));
  $('.two h3').html(displayDay(2));
  $('.three h3').html(displayDay(3));
  $('.four h3').html(displayDay(4));
  $('.five h3').html(displayDay(5));
  $('.six h3').html(displayDay(6));
}



/* --------------------------------------------------
   Event to get weather information when page loads
   -------------------------------------------------- */

window.onload = function() {
  weatherBalloon();
}

/* --------------------------------------------------
   Trigger opening panel
   -------------------------------------------------- */

$('button').click(function(){
  $('.cover').addClass('slide'); 
  })
