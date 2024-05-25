const Weather = ({message, weatherInfo}) => {
    //TODO use props
    return (
        <div>
            <p>Location: {weatherInfo.country}, {weatherInfo.city}</p>
            <p>Temp:{weatherInfo.temp}</p>
            <p>Pressure: {weatherInfo.pressure}</p>
            <p>{message}</p>
        </div>
    );
};

export default Weather;