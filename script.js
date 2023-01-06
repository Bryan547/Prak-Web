var token = "ce2d15e061afd6aa9498f57ab29b32f1"

const artistName = document.querySelector(".artistName")
const artistDisplay = document.querySelector("#artistDisplay")
const track1 = document.querySelector(".track1")
const track2 = document.querySelector(".track2")
const track3 = document.querySelector(".track3")
const track4 = document.querySelector(".track4")
const track5 = document.querySelector(".track5")
const button = document.querySelector(".button-submit")

// button.addEventListener("click", getArtistTopTracks)

// async function getArtistTopTracks (){
    
//     console.log(artistDisplay)
//     const getURL = `http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${artistName.value}&api_key=${token}&format=json`
//     var setData;
//     // const jsonData = await fetch(getURL)
//     const response = await fetch(getURL)
//     .then(response => response.json())
//     .then(data => function(){
//         data = setData
//     })
//     console.log(setData)

//     if(data.toptracks.track.length)
//     {
//         console.log(data)
//     }

    
//     console.log(data.toptracks.track[0].artist.name)

//     artistDisplay.innerHTML = data.toptracks.track[0].artist.name;
//     track1.innerHTML = data.toptracks.track[0].name;

// }

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
    track1.innerHTML = data.toptracks.track[0].name;
    track2.innerHTML = data.toptracks.track[1].name;
    track3.innerHTML = data.toptracks.track[2].name;
    track4.innerHTML = data.toptracks.track[3].name;
    track5.innerHTML = data.toptracks.track[4].name;
})
