var arr = [
    { songName: "pyar ki umar", url: "./songs/pyar-ki-umar.mp3", img: "./images/pyar-ki-umar.jpg" },
    { songName: "Millionaire", url: "./songs/Millionaire.mp3", img: "./images/Millionaire.jpg" },
    { songName: "Main-rat-din-ye", url: "./songs/Main-rat-din-ye.mp3", img: "./images/may-rat-din-yea-duya-karu.jpg" }
];

var allSongs = document.querySelector("#all-songs")

var poster = document.querySelector("#left")

var play = document.querySelector("#play")
var backward = document.querySelector("#backward")
var forward = document.querySelector("#forward")

var audio = new Audio()

var selectedSong = 0


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

    audio.src = arr[selectedSong].url
    allSongs.innerHTML = clutter
    poster.style.backgroundImage = `url(${arr[selectedSong].img})`
}
mainFunction()

allSongs.addEventListener("click", function (dets) {
    selectedSong = dets.target.id
    play.innerHTML = `<i class="ri-pause-line"></i>`
    flag = 1
    mainFunction()
    audio.play();
})

var flag = 0
play.addEventListener("click", function () {
    if (flag == 0) {
        play.innerHTML = `<i class="ri-pause-line"></i>`
        mainFunction()
        audio.play()
        flag = 1
    } else {
        play.innerHTML = `<i class="ri-play-line"></i>`
        mainFunction()
        audio.pause()
        flag = 0
    }

})

