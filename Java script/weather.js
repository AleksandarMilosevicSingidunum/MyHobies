function poziv() {
    $.ajax({
      url: "http://api.openweathermap.org/data/2.5/weather?q=Pozarevac&units=metric&APPID=1920de3e8680a50b93f33543dd421a6b", 
      type: "GET" , 
      dataType: "json", 
      success:function(data){
        console.log(data);
        document.getElementById('city').innerHTML = data.name;
        document.getElementById('temp').innerHTML = parseInt(data.main.temp) + "&deg;C";
        document.getElementById('imgw').src = "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png"

      }
      
    })
    
}
$(document).ready(function(){ poziv(); })

