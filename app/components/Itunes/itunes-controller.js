import ItunesService from "./itunes-service.js";

//PRIVATE

const itunesService = new ItunesService()

function drawSongs(results) {
  console.log(results)
  //YOUR CODING STARTS HERE
  let template = ``
  let trimmedString = ''.substring(0, 20);
  for (let i = 0; i < results.length; i++) {
    let song = results[i]
    let newTitle = song.title;
    let newArtist = song.artist;
    let newPrice = song.price;
    let newCollection = song.collection;
    // if (!song.collection) console.log('no collectiion')
    // if (!newCollection) {
    //   return ''
    // } else {
    //   return newCollection.substring(0, 20);
    // }

    template += `
    <div class="col-12 col-md-6 col-lg-4 col-xl-3 pb-4  d-flex justify-content-center">
      <div class="card card2" style="width: 255px; height: 70vh;">
        <img class="card-img-top card-img" src='${song.albumArt}' alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${!newTitle ? '' : newTitle.substring(0, 20)} </h5>
          <p class="card-text">${!newArtist ? '' : newArtist.substring(0, 20)}</p> 
          <p>$${!newPrice ? '' : newPrice}</p>
          <p>${!newCollection ? '' : newCollection.substring(0, 25)}</p>
          <div class="d-flex justify-content-center">
            <audio controls style="width: 18vw;">
              <source src="${song.preview}" type="audio/mpeg">
            </audio>
          </div>
        </div>
      </div>
    </div>`
    // template += `img src='${results[i].albumArt}'> `
    // template += `${results[i].artist} `
    // template += `${results[i].price} `
    // template += `${results[i].collection} `
    // template += `${results[i].title} `

  }

  document.getElementById("songs").innerHTML = template


}


//PUBLIC
class ItunesController {
  //DO NOT MODIFY THIS METHOD
  getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    //changes the button to loading while songs load
    $('#get-music-button').text('LOADING....');
    itunesService.getMusicByArtist(artist).then(results => {
      drawSongs(results)
      //changes button back to GET MUSIC once songs are loaded
      $('#get-music-button').text('GET MUSIC');
    })
  }


}


export default ItunesController