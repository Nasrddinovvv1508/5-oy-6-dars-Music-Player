let play = document.getElementById(`play`);
let audio = document.querySelector(`audio`);
let forward = document.getElementById(`forward`);
let backward = document.getElementById(`backward`);
let artistPic = document.getElementById(`artist_pic`);
let playPause = document.getElementById(`play-pause`);
let trackTitle = document.querySelector(`h1`);
let inputRange = document.getElementById(`input_range`);
let volumeNum = document.getElementById(`volume_number`)

let tracks = [
    'DrDre-Eminem-ForgotAboutDre',
    `Eminem-Beautiful`,
    'Eminem-Business',
    `Eminem-LoseYourself`,
    `Eminem-NotAfraid`,
    `Eminem-RapGod`,
    `Eminem-Venom`,
];

let images = [
    'DrDre-Eminem-ForgotAboutDre',
    `Eminem-Beautiful`,
    'Eminem-Business',
    `Eminem-LoseYourself`,
    `Eminem-NotAfraid`,
    `Eminem-RapGod`,
    `Eminem-Venom`,
]

let currentTrack = 0;

let changeTrack = (i) => {
    audio.src = `static/audio/${tracks[i]}.mp3`;
    artistPic.src = `./static/img/${tracks[i]}.png`;
    trackTitle.textContent = `${tracks[i]}`
}

backward.addEventListener(`click`, () => {
    currentTrack -= 1;
    if (currentTrack < 0) {
        currentTrack = (tracks.length - 1);
        changeTrack(currentTrack);
    }
    changeTrack(currentTrack);
    audio.play();
    playPause.setAttribute('class', `fa-solid fa-pause`);
})

forward.addEventListener(`click`, () => {
    currentTrack++;

    if (currentTrack > tracks.length - 1) {
        currentTrack = 0
        changeTrack(currentTrack);
    }

    changeTrack(currentTrack);
    audio.play();
    playPause.setAttribute('class', `fa-solid fa-pause`);
})

let toggle = true;
play.addEventListener('click', function () {
    if (toggle) {
        playPause.setAttribute('class', `fa-solid fa-pause`);
        audio.play();
    } else {
        playPause.setAttribute(`class`, 'fa-solid fa-play');
        audio.pause();
    }

    toggle = !toggle;
})

inputRange.addEventListener(`input`, (e) => {
    audio.volume = e.target.value;
    let target = e.target.value * 100;
    volumeNum.textContent = target;

    setTimeout(() => {
        volumeNum.textContent = ``;
    }, 1000);
})