const url = "https://shazam.p.rapidapi.com/charts/list"
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0d8e5a56admsh3ab38ef73bdc313p13f45ejsnbb73a6966989',
		'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
	}
};
export class API {
    constructor(){
        this.songs = [];
    }
    getPopuler(){
      const res = fetch(url, options);
      console.log(res);
    }
}