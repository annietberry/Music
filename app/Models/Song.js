

export default class Song {
  constructor(data) {
    this.artist = data.artistName
    this.album = data.collectionName
    this.title = data.trackName
    this.preview = data.previewUrl
    this.price = data.trackPrice
    this.albumArt = data.artworkUrl30
    this.user = data.user || 'Annie'
    this.songId = data.collectionId
  }

  get songsTemplate() {
    return `
    <div class="row justify-content-between" onclick="app.songsController.selectSong('${this.songId}')">

    <div class="col-3">
        <span><img src= "${this.albumArt}"></span>
    </div>
    <div class="col-6">
        <div class="row">${this.album}</div>
        <div class="row">${this.title}</div>
    </div>
</div>
    
    
    `
  }

  get activeTemplate() {
    return `
    <span>Now Playing</span>
    <img src="${this.albumArt}">
    <h2>${this.artist} - ${this.title}</h2>
    <span>Album: ${this.album} - Buy now: ${this.price}</span>
    <audio src="${this.preview}" type="audio"></audio>
  
    `
  }
  get playlistTemplate() {
    return `
    
    
    `
  }

}
