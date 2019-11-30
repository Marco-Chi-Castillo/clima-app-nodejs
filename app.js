
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

/**Usamos option cuando queremos usar el comando directamente
 * sin poner el prefijo.
 * Solamente usamos 'node app --direccion dato'
 */
const argv = require('yargs').option({
  direccion: {
    alias: 'd',
    desc: 'Direccion de la ciudad para optener el clima',
    demand: true
  }
}).argv;

const getInfo = async (direccion) => {
  try {
    let coordenadas = await lugar.getLugarlatLng(direccion);
    let temp = await clima.getClima(coordenadas.lat, coordenadas.lng);
    return `El clima de ${coordenadas.direccion} es de ${temp}`;
  } catch (error) {
    return `No se pudo determinar el clima de ${direccion}`
  }
}

getInfo(argv.direccion)
  .then(console.log)
  .catch(console.log)