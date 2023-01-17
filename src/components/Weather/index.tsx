import React, { useState } from "react";
import { FaWind, FaMapMarkerAlt, FaSearch } from "react-icons/fa";
import { BsMoisture, BsDropletFill } from "react-icons/bs";
import { WeatherProps } from "../types/weather";
import { api } from "../../api";
import "./styles.scss";
import { WeatherData } from "../WeatherData";

export const Weather = () => {
  const apiCountry = "https://countryflagsapi.com/png/";

  const [weather, setWeather] = useState<WeatherProps>();
  const [inputContent, setInputContent] = useState("");
  const [erro, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputContent(e.target.value);
  };
  const getWeather = async (city: string) => {
    if (inputContent !== "") {
      try {
        let json = await api.requestWeather(city);
        setWeather({
          city: json.name,
          cod: json.cod,
          desc: json.weather[0].description,
          icon: json.weather[0].icon,
          humidity: json.main.humidity,
          temperature: json.main.temp,
          wind: json.wind.speed,
          countryElement: json.sys.country,
        });
        setInputContent("");
      } catch (error) {
        setError(
          "Não foi possivel encontrar o clima de uma cidade com este nome."
        );
        setInputContent("");
      }
    } else {
      alert("Digite uma cidade");
    }
  };

  return (
    <div className="container">
      <h3 className="container__place">Confira o clima de uma cidade</h3>
      <div className="container-search">
        <input
          type="text"
          value={inputContent}
          placeholder="nome da cidade"
          className="container-search_input"
          onChange={handleChange}
        />
      </div>
      <button
        className="container-search_button"
        onClick={() => getWeather(inputContent)}
      >
        <FaSearch />
      </button>
      {weather && (
        <>
          <WeatherData data={weather} erro={erro} />
        </>
      )}
    </div>
  );
};
