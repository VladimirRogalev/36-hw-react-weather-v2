import React, {useState} from 'react';
import Form from "./Form.jsx";
import Weather from "./Weather.jsx";
import {API_KEY, BASE_URL, HPA} from "../utils/constants.js";

const Data = () => {

    const [weatherInfo, setWeatherInfo] = useState({});
    const [message, setMessage] = useState("Enter city name");


    const getWeather = (city) => {
        fetch(`${BASE_URL}/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
            .then(response => response.json())
            .then(data => {
                setWeatherInfo({
                    country: data.sys.country,
                    city: data.name,
                    temp: data.main.temp.toFixed(1),
                    pressure: data.main.pressure * HPA,
                });
                setMessage(null);

            })
            .catch(e => console.log(e));
    };


    return (<div>
        <Form getWeather={getWeather}></Form>
        <Weather message={message} weatherInfo={weatherInfo}/>
    </div>);
};


export default Data;



