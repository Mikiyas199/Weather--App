import axios from 'axios';

export const fetchWeather = async (city) => {
  const res = await axios.get(`http://localhost:5000/api/weather?city=${city}`);
  return res.data;
};
