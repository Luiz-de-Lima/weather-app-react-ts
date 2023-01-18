import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { WeatherProps } from "../types/weather";
import { WeatherData } from "../WeatherData";
import { api } from "../../api";
import "./styles.scss";

export const Weather = () => {
  const [weather, setWeather] = useState<WeatherProps>();
  const [inputContent, setInputContent] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputContent(e.target.value);
  };
  const getWeather = async (city: string) => {
    if (inputContent) {
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
      } catch (error) {
        alert(
          "Não foi possivel encontrar o clima de uma cidade com este nome."
        );
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
          <WeatherData data={weather} />
        </>
      )}
    </div>
  );
};
