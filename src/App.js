import React, { useState } from 'react'
import './App.css'
import btnStyles from './Button.module.css';
import cloud_icon from '../image/Assets/cloud.png';
import humidity_icon from '../image/Assets/humidity.png';
import search_icon from '../image/Assets/search.png';
import wind_icon from '../image/Assets/wind.png';


const App = () => {
    const [val, setVal] = useState();
    let apiKey = 'dd94f859a0e52d6e4767fddf735f04a7';
    const search = async () => {
        const element = document.getElementsByClassName('cityInput');
        if (element[0].value === "") {
            return 0;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=metric&appid=${apiKey}`;

        let response = await fetch(url);
        console.log(response);
        let data = await response.json();
        setVal(data);
    }
    console.log("val->>>>>>>>>>>>", val);
    return (
        <div className='container'>
            <div className="top-bar">
                <input type="text" name="cityInput" className='cityInput' placeholder='Enter City name' id="cityInput" />
                <div className="search-icon" onClick={() => { search() }}>
                    <img src={search_icon} alt=""  />
                </div>
            </div>
            <div className="weather-image" >
                <img src={cloud_icon} alt="" />
            </div>
            {
                (val) ?
                    <div>
                        <div className="weather-temp">{val.main.temp} &deg;C</div>
                        <div className="weather-location">{val.name}</div>
                        <div className="data-container">
                            <div className="show_data" >
                                <div className="element">
                                    <img src={humidity_icon} alt="" className="icon" />
                                    <div className="data">
                                        <div className="humidity-percentage">{val.main.humidity}</div>
                                        <div className="text">Humidity</div>
                                    </div>
                                </div>
                                <div className="element">
                                    <img src={wind_icon} alt="" className="icon" />
                                    <div className="data">
                                        <div className="humidity-percentage">{val.wind.speed}</div>
                                        <div className="text">Wind Speed</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> : ""
            }
        </div>
    )
}

export default App