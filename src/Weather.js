import React from 'react';


export default function Weather({weather, city}) {
    console.log(weather);
    return (
            <div className="city">
                <h2 className="city-name">
                 <span>{city.name}</span>
                    <sup>{city.country}</sup>
                </h2>
                <p>{weather.dt_txt}</p>
                <div className="city-temp">
                    {Math.round(weather.main.temp)}
                    <sup>&deg;C</sup>
                </div>
                <div className="info">
                    <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} 
                    alt={weather.weather[0].description}/>
                    <p>{weather.weather[0].description}</p>
                </div>
            </div>
    )
}