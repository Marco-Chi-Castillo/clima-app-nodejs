const axios = require('axios');

const getClima = async (lat, lng) => {
  /**Link de API de clima OpenWeatherMap */
  const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=5c216da7c3aa83c1fa6f93b30bd6a181&units=metric`);
  return resp.data.main.temp;
}

module.exports = {
  getClima
};