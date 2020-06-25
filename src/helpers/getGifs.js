export const getGif = async (categoria) => {
        
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria)}&limit=10&api_key=B7rQd3ZZJHPqvP2jrDdPbN8s67ja4BII`;
    const res = await fetch(url);
    const {data} = await res.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })

    return gifs;

}