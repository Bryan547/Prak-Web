const token = "ce2d15e061afd6aa9498f57ab29b32f1"

const artistName = document.querySelector(".artistName")
const artistDisplay = document.querySelector("#artistDisplay")
const button = document.querySelector(".button-submit")
const track = [document.querySelector(".track1"), document.querySelector(".track2"), document.querySelector(".track3"),
              document.querySelector(".track4"), document.querySelector(".track5")]
const playCount = [document.querySelector(".play1"), document.querySelector(".play2"), document.querySelector(".play3"),
              document.querySelector(".play4"), document.querySelector(".play5")]

button.addEventListener("click", async () => {
    console.log(artistDisplay)
    const getURL = `http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${artistName.value}&api_key=${token}&format=json`

    const response = await fetch(getURL)
    const data = await response.json()

    if (data.toptracks.track.length)
    {
        console.log("BANANA")
    }
 
    console.log(data.toptracks.track[0].artist.name)

    artistDisplay.innerHTML = data.toptracks.track[0].artist.name;
    
    for (let i = 0; i < track.length; i++) {
        playCount[i].innerText = data.toptracks.track[i].playcount;
        track[i].innerText = data.toptracks.track[i].name;
    }

    const mbid = data.toptracks.track[0].artist.mbid;

    if (mbid) {
        const url = 'https://musicbrainz.org/ws/2/artist/' + mbid + '?inc=url-rels&fmt=json';
        console.log(url);
         fetch(url)
             .then(res => res.json())
             .then((out) => {
                 const relations = out.relations;
                 console.table(relations);
                 // Find image relation
                 for (let i = 0; i < relations.length; i++) {
                     if (relations[i].type === 'image') {
                         let image_url = relations[i].url.resource;
                         if (image_url.startsWith('https://commons.wikimedia.org/wiki/File:')) {
                             const filename = image_url.substring(image_url.lastIndexOf('/') + 1);
                             image_url = 'https://commons.wikimedia.org/wiki/Special:Redirect/file/' + filename;
                             document.getElementById("imageid").src=image_url;
                         }
                         console.log(image_url);
                         success(image_url);
                     }
                 }
             })
             .catch(err => { throw console.log(err) });
        
     }
})

// function getArtistInfo(artist, success, error)
// {
//     this.get('artist.getinfo', {artist: artist}, function(response) {
//         const mbid = response.artist.mbid;
//         console.table(response);
//         if (mbid) {
//            const url = 'https://musicbrainz.org/ws/2/artist/' + mbid + '?inc=url-rels&fmt=json';
//            console.log(url);
//             fetch(url)
//                 .then(res => res.json())
//                 .then((out) => {
//                     const relations = out.relations;
//                     console.table(relations);
//                     // Find image relation
//                     for (let i = 0; i < relations.length; i++) {
//                         if (relations[i].type === 'image') {
//                             let image_url = relations[i].url.resource;
//                             if (image_url.startsWith('https://commons.wikimedia.org/wiki/File:')) {
//                                 const filename = image_url.substring(image_url.lastIndexOf('/') + 1);
//                                 image_url = 'https://commons.wikimedia.org/wiki/Special:Redirect/file/' + filename;
//                             }
//                             console.log(image_url);
//                             success(image_url);
//                         }
//                     }
//                 })
//                 .catch(err => { throw console.log(err) });
//         }
//     }, error);
// }
