document.getElementById("button-search").addEventListener("click", () => {
  const cityInput = document.getElementById("city-input").value.toLowerCase();
  fetch("https://freetestapi.com/api/v1/weathers")
    .then((response) => response.json())
    .then((data) => {
      const upDesc =document.getElementById("up-desc")
      const todayDesc =document.getElementById("today-desc")
      const tomDesc =document.getElementById("tom-desc")
      const tomToDesc =document.getElementById("tom-to-desc")
      const tomorrowTo =document.getElementById("tom-to")
      const tomorrow =document.getElementById("tom")
      const toDayTemperature = document.getElementById("current-temperature");
      const city = document.getElementById("city-name");
      const toDayTemp = document.getElementById("temp");
      const result = data.find((item) => item.city.toLowerCase() === cityInput);
      if (result) {
        console.log(result);
        upDesc.innerHTML=result.weather_description;
        city.innerHTML = result.city;
        toDayTemperature.innerHTML = `${result.temperature}°C`;
        toDayTemp.innerHTML = `${result.temperature}°C`;
      tomorrow.innerHTML=`${result.forecast[0].temperature}°C`;
      tomorrowTo.innerHTML=`${result.forecast[1].temperature}°C`;
      todayDesc.innerHTML=result.weather_description;
tomDesc.innerHTML=result.forecast[0].weather_description;
tomToDesc.innerHTML=  result.forecast[1].weather_description;
    } else {
        alert("city not found");
      }
      /*const cityData = data[0];
      console.log(data);
      console.log(data[1]);
      console.log(cityData);
      console.log(cityData.city);
      console.log(cityData.forecast);
      // Process the JSON data here
      data.forEach((mpunga, index) => {
        console.log(mpunga.city);
      });*/

      // Assignment - search using city name and display the temperature of two days.
    });
});

