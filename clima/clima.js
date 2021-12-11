const axios = require('axios');

let getClima = async(lat, lng) => {
    // lat = 9.980694;
    // lng = -84.0907246;

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=6b06ea0483ca7be11193b4d49ed11be8`);
    if (resp.cod === '400')
        throw new Error('Las coordenadas tienen error');
    return resp.data.main.temp;


}


module.exports = {
    getClima
}