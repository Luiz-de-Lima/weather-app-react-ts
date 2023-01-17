import axios from "axios";
const apiKey = "2f69db67980e749c10edb3b98615fadc";

export const api = {
  requestWeather: async (city: string) => {
    const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

    let response = await axios.get(BASE_URL);
    
    return response.data;
  },
};
