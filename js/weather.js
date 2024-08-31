fetch("https://freetestapi.com/api/v1/weathers")
  .then((response) => response.json())
  .then((data) => {
    const cityData = data[0]; 
    console.log(data)
    console.log(cityData); 
    console.log(cityData.city); 
    console.log(cityData.forecast); 
    // Process the JSON data here
    // data.forEach((value, index)=>{
    //     console.log(value)
    // })

    // Assignment - search using city name and display the temperature of two days. 

  })
  .catch((error) => {
    console.log(`There is an error ${error} `);
  });
