let play = document.getElementById(`play`);
let audio = document.querySelector(`audio`);
let forward = document.getElementById(`forward`);
let backward = document.getElementById(`backward`);
let artistPic = document.getElementById(`artist_pic`);

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
    artistPic.src = `./static/img/${images[i]}.png`;
}

backward.addEventListener(`click`, () => {
    currentTrack -= 1;
    if (currentTrack < 0) {
        currentTrack = (tracks.length - 1);
        changeTrack(currentTrack);
    }
    changeTrack(currentTrack);
    audio.play();
})

forward.addEventListener(`click`, () => {
    currentTrack++;

    if (currentTrack > tracks.length - 1) {
        currentTrack = 0
        changeTrack(currentTrack);
    }

    changeTrack(currentTrack);
    audio.play();
})

play.addEventListener('click', function () {
    currentTrack = 0;
    changeTrack(currentTrack);
    audio.play();
})