export const getGifts = async (category) => {
  const urlApi = `https://api.giphy.com/v1/gifs/search?api_key=rRC22CRrFJn5VH3CCI29MEVo7bUhVpDq&q=${category}&limit=20`;
  const resp = await fetch(urlApi);
  const { data } = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  return gifs;
};
