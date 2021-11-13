import React, {useState} from 'react';
import { fetchWeather } from './api/fetchApi';

const Aplication = () => {

    const [query, setQuery] =useState('')
    const [weather, setWeather] =useState({})

    const search = async(e)=>{
        if(e.key==='Enter'){
            const data= await fetchWeather(query);
            setWeather(data);
            setQuery()
        }
    }

    return (
        <>
            <div className="main-container row">
                <div className="search col-md-8">
                    <input
                    type="text"
                    className="search-input"
                    placeholder="search..."
                    value={query}
                    onChange={(e)=>setQuery(e.target.value)}
                    onKeyPress={search}
                    />
                </div>
                {weather.main && (
                    <div className="city">
                        <div className="info">
                            <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                        </div>
                        <div className="details">
                            <h2 className="city-name">
                                <span>{weather.name}</span>
                                <sup>{weather.sys.country}</sup>
                            </h2>
                            <div className="city-temp">
                                <h4>{Math.round(weather.main.temp)}<sup>&deg;C</sup></h4>
                                <p className="w-description">{weather.weather[0].description}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
        
    );
};


export default Aplication;