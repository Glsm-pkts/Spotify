import { renderSearchMusic, renderSongs } from "./ui.js";


const url = 'https://spotify23.p.rapidapi.com/recommendations/?limit=20&seed_tracks=0c6xIDDpzE81m2q797ordA&seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '1f47da72fbmsh734c46883502bd9p17249ajsn0c277d567694',
		'x-rapidapi-host': 'spotify23.p.rapidapi.com'
	}
};

export class API {
    constructor(){
        this.songs = [];
    }

  async getPopuler(){
      const res = await fetch(url, options);
      const data = await res.json();

      this.songs = data.tracks;
      
//ekrana popüler müziklerini aktar
      renderSongs(this.songs)
    }


   // arama metodu
   async searchMusic(query) {
    try {
      const urlSearch = `https://shazam.p.rapidapi.com/search?term=${query}&locale=tr-TR`;
      const optionsSearch = {
        method: "GET",
        headers: {
          headers: {
            'x-rapidapi-key': '6ad72a036cmsh9832e8732b1c6f2p18737cjsn98b92290c4ec',
            'x-rapidapi-host': 'spotify23.p.rapidapi.com'
          }// Doğru host değeri
        },
      };
      const res = await fetch(urlSearch, optionsSearch);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      console.log(data); // API'den gelen veriyi kontrol etmek için

      if (data.tracks && data.tracks.hits) {
        const newData = data.tracks.hits.map((song) => ({ ...song.track }));
        this.songs = newData;
        renderSearchMusic(this.songs);
      } else {
        console.log("Aradığınız sonuçlar bulunamadı.");
      }
    } catch (e) {
      console.log("Hata: Bir sorun oluştu.", e.message);
    }
  }
}