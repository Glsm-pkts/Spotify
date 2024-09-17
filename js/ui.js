import { elements } from "./halpers.js";

export const renderSongs = (songs) => {
    elements.list.innerHTML = "";
    songs.forEach((song) => {
        if (!song || !song.album || !song.album.artists || !song.album.images) return;

        const div = document.createElement("div");
        div.dataset.url = song.preview_url || "#";
        div.dataset.title = song.name || "Unknown Title";
        div.dataset.subtitle = song.album.artists[0]?.name || "Unknown Artist";
        div.dataset.img = song.album.images[1]?.url || "";

        div.className = "card";
        div.innerHTML = `
            <figure>
                <img src="${song.album.images[0]?.url || ''}" alt="image" />
                <div class="play">
                    <i class="bi bi-play-fill" id="play-btn"></i>
                </div>
            </figure>
            <h4>${song.album.artists[0]?.name || 'Unknown Artist'}</h4>
            <h5>${song.name.length > 30 ? song.name.slice(0, 30) + "..." : song.name || 'Unknown Title'}</h5>
        `;
        elements.list.appendChild(div);
    });
};

export const renderSearchMusic = (songs) =>{    
    elements.list.innerHTML = "";
    songs.forEach((song) =>{
        const div = document.createElement("div");
        div.dataset.url = song.hub?.actions?.pop().uri;
        div.dataset.title = song.title;
        div.dataset.subtitle = song.subtitle;
        div.dataset.img = song.images?.coverart;
        div.className = "card";
        div.innerHTML = `
        <figure>
            <img src="${song.images?.coverart}" alt="image" />
            <div class="play">
                <i class="bi bi-play-fill" id="play-btn"></i>
            </div>
        </figure>
        <h4>${song.subtitle}</h4>
        <h5>${song.title.length > 30 ? song.title.slice(0, 30) + "..." : song.title}</h5>
        `;
        elements.list.appendChild(div);
    })
}

export const renderPlayingInfo = (song) => {
elements.playingInfo.innerHTML = `
<img
        src="${song.img}"
        id="info-img"
        class=""
        alt=""
    />
    <div>
        <p>Şu an oynatılıyor...</p>
        <h3>${song.title}</h3>
        <h6>( ${song.subtitle} )</h6>
    </div>`;
}


export const updateTitle = (message) => {
    elements.title.innerText = message;
}