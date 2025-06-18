

var temperature=document.querySelector("#temp");
var weather=document.querySelector("#wea");
var city=document.querySelector(".city");
var button=document.querySelector(".btn");
var image=document.querySelector(".image"); 
 function getEmoji(description) {
      description = description.toLowerCase();
      if (description.includes("clear")) return "☀️";
      if (description.includes("cloud")) return "☁️";
      if (description.includes("rain")) return "🌧️";
      if (description.includes("thunder")) return "⛈️";
      if (description.includes("snow")) return "❄️";
      if (description.includes("mist") || description.includes("fog") || description.includes("haze")) return "🌫️";
      if (description.includes("wind")) return "💨";
      return "🌈"; // default
    }
button.addEventListener("click",function(){
  const apikey = "88aa1b51c2119e383c80121b8e8e26ed"; // Correct declaratio
  let city_name=document.querySelector(".text-1").value;
    if(city_name.length ==0){
        alert("please Enter some location");
    }
    else{
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${apikey}`;
        console.log(url); 
       fetch(url).then(res => res.json())
       .then(data => {
         console.log(data);
         const { name }=data;
         const{ feels_like }=data.main;
         const{ description }=data.weather[0];
         const { country }=data.sys;
          const emoji = getEmoji(description);
         temperature.innerText=Math.floor(feels_like-273);
         weather.innerText=description;
    city.innerText=name; 
    image.innerText=emoji;
   document.querySelector(".text-1").value=" ";
      })
      .catch(()=>{
        alert("Enter vaild location");
         document.querySelector(".city").innerText = "City";
          document.querySelector("#temp").innerText = "--";
          document.querySelector("#wea").innerText = "--";
          document.querySelector(".image").innerText = "❌";
      });
    
    }
     });
    
