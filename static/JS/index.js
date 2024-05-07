let play = document.getElementById(`play`);
let audio = document.querySelector(`audio`);

let tracks = [
    'DrDre-Eminem-ForgotAboutDre',
    `Eminem-Beautiful`,
    'Eminem-Business',
    `Eminem-LoseYourself`,
    `Eminem-NotAfraid`,
    `Eminem-RapGod`,
    `Eminem-Venom`,
]

play.addEventListener('click', function () {
    audio.play();
})