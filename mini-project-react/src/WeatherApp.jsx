import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherInfo(){
  const [weatherInfo,setWeatherInfo] = useState({
        city:"Delhi",
        feelslike: 23, 
        temp: 25,
        tempMax:29,
        tempMin:21,
        humidity:47,
        weather:"Haze",
  });

  let updateInfo = (result) =>{
        setWeatherInfo(result);
  }

  return(
    <div style={{textAlign:"center"}}>
      <h2>The Weather App</h2>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo}/>
    </div>
  )
}