import { ProxyState } from "../AppState.js";
import { songsService } from "../Services/SongsService.js"


function _draw() {
  let template = ''
  ProxyState.songs.forEach(s => template += s.songsTemplate)
  document.getElementById('songs').innerHTML = template

}

function _activeDraw() {

  document.getElementById('active-song').innerHTML = ProxyState.activeSong[0].activeTemplate
}

function _playlistDraw() {

}


export default class SongsController {


  constructor() {
    ProxyState.on("songs", _draw);
    ProxyState.on("activeSong", _activeDraw);
    ProxyState.on("myPlaylist", _playlistDraw);

  }

  search(event) {
    event.preventDefault()
    let query = event.target.query.value

    songsService.getMusicByQuery(query)
    console.log(query)

  }

  selectSong(songId) {
    songsService.selectSong(songId)
    console.log(ProxyState.activeSong)
  }



}