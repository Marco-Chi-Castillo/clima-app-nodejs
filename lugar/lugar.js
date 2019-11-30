const axios = require('axios');

const getLugarlatLng = async (dir) => {
  /**encodeURI lo que hace es transforma un texto en formato para que pueda ser usado
   * en una dirección web. Ya que si tiene espacios en blanco puede mal interpretarse, por ello
   * para usar un texto dinamico en un url se debe usar el encodeURI
   */
  const encodedUrl = encodeURI(dir);

  const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
    headers: { 'x-rapidapi-key': 'b8235c8f13mshbf01731c69435a9p1ed241jsna23861f39b66' }
  });

  //instance.get() es una promesa, por ello esperamos la respuesta con el await.
  const resp = await instance.get();

  /**Si es cero es que no encontro ningun dato y retorno un resp vacio. */
  if (resp.data.Results[0].length === 0) {
    throw new Error(`No hay resultados para la ciudad ${dir}`);
  }

  const data = resp.data.Results[0];
  const direccion = data.name;
  const lat = data.lat;
  const lng = data.lon;

  return {
    direccion,
    lat,
    lng
  }
}

module.exports = {
  getLugarlatLng
}
