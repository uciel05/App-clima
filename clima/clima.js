const axios = require('axios');

const getClima = async (lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=a059e172b867d71d1148f3f56c493458`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}