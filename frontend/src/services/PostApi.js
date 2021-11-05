const requestOptions = (item) => ({
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify(item)
})

const PostApi = async (item) => {
  const endpoint = 'http://localhost:3000/anuncios/';
  const dataInfo = await fetch(endpoint, requestOptions(item));
  const dataJson = await dataInfo.json();
  console.log(dataJson)
  // const {anuncios} = await dataJson;
  // return dataJson;
}

export default PostApi;