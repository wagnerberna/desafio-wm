const GetApi = async () => {
  const endpoint = 'http://localhost:3000/anuncios';
  const dataInfo = await fetch(endpoint);
  const dataJson = await dataInfo.json();
  const {anuncios} = await dataJson;
  return anuncios;
}

export default GetApi;