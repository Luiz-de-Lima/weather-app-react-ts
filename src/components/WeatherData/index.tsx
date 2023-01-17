import React, { useState } from "react";
import { BsDropletFill } from "react-icons/bs";
import { FaMapMarkerAlt, FaWind } from "react-icons/fa";
import { WeatherProps } from "../types/weather";
interface weatherDataProps {
  data: WeatherProps;
}
export const WeatherData = ({ data }: weatherDataProps) => {
  return (
    <>
      {data && (
        <>
          <div className="weather-data">
            <h4>
              <i>
                <FaMapMarkerAlt />
              </i>
              <span>{data.city}</span>
              <img
                className="weather-data_flag_country"
                crossOrigin="anonymous"
                src={`https://countryflagsapi.com/png/${data.countryElement}`}
                alt=""
              />
            </h4>

            <p className="weather-data_temperature">
              Temperatura: {parseInt(data.temperature)} &deg; C
            </p>
            <div className="weather-data__description">
              <p>{data.desc}</p>

              <img
                src={`http://openweathermap.org/img/wn/${data.icon}.png`}
                alt="teste"
              />
            </div>
          </div>
          <div className="weather-data__details">
            <p className="humidity">
              <i>
                <BsDropletFill />
              </i>
              <span>{data.humidity}%</span>
            </p>
            <p className="windy">
              <i>
                <span>
                  <FaWind />
                </span>
              </i>
              <span>{data.wind}km/h</span>
            </p>
          </div>
        </>
      )}
    </>
  );
};
