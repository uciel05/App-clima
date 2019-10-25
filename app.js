const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: '-d',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

//console.log(argv.direccion);
//lugar.getLugarLatLng(argv.direccion).then(console.log);

// clima.getClima(24.820000, -107.529999)
//      .then(console.log)
//      .catch(console.log);

getInfo = async (direccion) => {
    try{
        const coords = await lugar.getLugarLatLng(direccion);
        const temperatura = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${ coords.direccion } es de ${ temperatura}`;
    }catch(e){
        return `No se puedo determinar el clima de ${direccion}`;
    }
}

getInfo(argv.direccion).then(console.log).catch(console.log);