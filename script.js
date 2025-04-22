var arr = [
    { songName: "pyar ki umar", url: "./songs/pyar-ki-umar.mp3", img: "./images/pyar ki umar.jpg" },
    { songName: "Millionaire", url: "./songs/Millionaire.mp3", img: "./images/Millionaire.jpg" },
    { songName: "Main-rat-din-ye", url: "./songs/Main-rat-din-ye.mp3", img: "./images/may rat din yea duya karu.jpg" }
];

var allSongs = document.querySelector("#all-songs")

var audio = new Audio()


function mainFunction() {
    var clutter = ""
    arr.forEach(function (elem, index) {
        clutter += `<div class="song-card" id=${index}>
                    <div class="part1">
                        <img src="${elem.img}" alt="">
                        <h2>${elem.songName}</h2>
                    </div>
                    <h6>3:56</h6>
                </div>`
    })


    allSongs.innerHTML = clutter
}
mainFunction() 

allSongs.addEventListener("click", function (dets) {
    audio.src = arr[dets.target.id].url
    audio.play();
})
