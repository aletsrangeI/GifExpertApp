export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=1WYFJckAOc3jKsvUaBK4COlv7pWPrra9&q=${category}&limit=20`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  return gifs;
};
