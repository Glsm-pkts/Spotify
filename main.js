import { API } from "./js/api.js";

//!sayfa yüklendiği anda çalışacak
document.addEventListener("DOMContentLoaded",()=> console.log("çalıştı"));

const api = new API()
api.getPopuler();