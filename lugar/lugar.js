const axios = require('axios');

let getLugar = async(direccion) => {
    let encodeDireccion = encodeURI(argv.direccion);

    let rest = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeDireccion}&key=AIzaSyAdPW4WZUs-Mzg82oXJzWKdDScPU4w1Fmo`)

    if (rest.data.status === 'ZERO_RESULTS')
        throw new Error(`No hay resultado para la ciudad ${direccion}`);

    let location = result.data.results[0];
    let corrs = location.geometry.location;

    return {
        direccion: location.formatted_address,
        lag: corrs.lag,
        lng: corrs.lng
    }
}
module.exports = {
    getLugar
}