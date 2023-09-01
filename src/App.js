import { useEffect, useState } from "react";
import Search from "./components/Search";
import Temp from "./components/Temp";
import useFetch from "./hook/useFetch";
import { BounceLoader } from "react-spinners";

const App = () => {
  const [isDay, setIsDay] = useState(false);
  const [cityName, setCityName] = useState("Chennai");
  const [weatherData, setWeatherData] = useState({});
  const { data, isLoading, error, refetch } = useFetch(cityName);
  const date = new Date();

  useEffect(() => {
    setWeatherData({ ...data, city: cityName, type: "C" });
  }, [data]);

  useEffect(() => {
    refetch()
  },[cityName])

  const UpdateCityName = (city) => {
    setCityName(city);
  };

  const toggleType = (type) => {
    if (type === "C") {
      setWeatherData({
        ...data,
        temp: ((9 / 5) * weatherData.temp + 32).toFixed(1),
        temp_max: ((9 / 5) * weatherData.temp_max + 32).toFixed(1),
        temp_min: ((9 / 5) * weatherData.temp_min + 32).toFixed(1),
        type: "F",
        city: cityName
      });
    } else {
      setWeatherData({
        ...data,
        temp: (((weatherData.temp - 32) * 5) / 9).toFixed(1),
        temp_max: (((weatherData.temp_max - 32) * 5) / 9).toFixed(1),
        temp_min: (((weatherData.temp_min - 32) * 5) / 9).toFixed(1),
        type: "C",
        city: cityName
      });
    }
  };

  return (
    <div className="App">
      {isDay ? (
        <div className="morning"></div>
      ) : (
        <div className="night"></div>
      )}
      {isLoading ? (
        <BounceLoader color="#ffffff" />
      ) : (
        <>
          <Temp data={weatherData} date={date} toggleType={toggleType} />
          <Search
            cityName={cityName}
            UpdateCityName={UpdateCityName}
          />
        </>
      )}
    </div>
  );
};

export default App;
