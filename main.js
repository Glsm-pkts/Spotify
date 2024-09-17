import { API } from "./js/api.js";
import { elements } from "./js/halpers.js";
import { renderPlayingInfo, updateTitle } from "./js/ui.js";

const api = new API()
api.getPopuler();
//!sayfa yüklendiği anda çalışacak
document.addEventListener("DOMContentLoaded", async () => await api.getPopuler());

const playMusic = (url) => {
    elements.audioSource.src = url
    elements.audio.load();
    elements.audio.play();
}

//! liste alanındaki tıklamaları izleme
const handleClick = (e) =>{
    if(e.target.id === "play-btn")
{
  const parent = e.target.closest(".card");
  //çalınacak müziğin bilgilerini ekrana basar
  renderPlayingInfo(parent.dataset);

  //müziği çalar
  playMusic(parent.dataset.url)
}
};

document.addEventListener("click", handleClick);

const animatePhoto = () => {
   const img = document.querySelector(".info img");
   img.className = "animate";
};

const stopAnimation = () => {
    const img = document.querySelector(".info img");
    img.className = "animate";
}
elements.audio.addEventListener("play", animatePhoto);
elements.audio.addEventListener("pause", stopAnimation);

elements.form.addEventListener("submit",(e) => {
    e.preventDefault(e);
    const query = (e.target[0].value);
    if(!query){ 
        alert("Lütfen bütün alanları doldurunuz!");
        return;
    }
    updateTitle(`${query} için sonuçlar..` );
    api.searchMusic(query);
});










