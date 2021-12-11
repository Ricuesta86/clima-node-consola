const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('./config/yargs').argv;

// console.log(argv.direccion);

let getInfo = async(direccion) => {

    try {

        let coors = await lugar.getLugar(direccion);
        let temp = await clima.getClima(coors.lag, coors.lng);

        return `El clima en ${coors.direccion} es de ${temp}`;

    } catch (e) {
        return `No se pudo determinar el clima en ${direccion}`;
    }

}

getInfo(argv.direccion)
    .then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    });

// lugar.getLugar(argv.direccion)
//     .then((result) => {
//         console.log(result)
//     }).catch((err) => {
//         console.log(err)
//     });



// clima.getClima(9.980694, -84.0907246)
//     .then((result) => {
//         console.log(result)
//     }).catch((err) => {
//         console.log(err)
//     });