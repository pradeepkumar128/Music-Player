const music = document.getElementById("musicPlayer");
const play = document.getElementById("play");
const img = document.querySelector("img");
const artist = document.getElementById("artist");
const title = document.getElementById("title");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

const songs = [
  {
    imgURl:"jaishreeram1",
    name: "128-Ram Siya Ram - Sachet Tandon 128 Kbps",
    title: "Ram Siya Ram",
    artist: "Sachet Tandon",
  },
  { imgURl:"guru2",
    name: "O Maahi Dunki 128 Kbps",
    title: "O Maahi Dunki",
    artist: "Arijit Singh",
  },
  {
    imgURl:"guru3",
    name: "Paagal Badshah 128 Kbps",
    title: "Paagal Badshah",
    artist: "Badshah",
  },
  {
    imgURl:"guru4",
    name: "Banda Dunki 128 Kbps",
    title: "Banda Dunki",
    artist: "Arijit Singh",
  },
  {
    imgURl:"guru5",
    name: "Gulabi Aankhen Universally Sanam 128 Kbps",
    title: "Gulabi Aankhen",
    artist: "Sanam",
  },
  {
    imgURl:"guru6",
    name: "Lutt Putt Gaya Dunki 128 Kbps",
    title: "Lutt Putt Gaya ",
    artist: "Arijit Singh",
  },
  {
    imgURl:"guru7",
    name: "Milo Na Tum Verma 128 Kbps",
    title: "Milo Na Tum ",
    artist: "Gajendra Verma",
  },
  {
    imgURl:"guru8",
    name: "128-Braat - Guri 128 Kbps",
    title: "Braat",
    artist: "Guri",
  },
  {
    imgURl:"guru9",
    name: "128-Firse Machayenge - Emiway Bantai 128 Kbps",
    title: "Firse Machayenge",
    artist: "Emiway Bantai",
  },
  {
    imgURl:"guru10",
    name: "128-Naach Meri Rani - Guru Randhawa 128 Kbps",
    title: "Naach Meri Rani",
    artist: "Guru Randhawa",
  },
  {
    imgURl:"guru11",
    name: "128-O Jaan Waale - Akhil Sachdeva 128 Kbps",
    title: "O Jaan Waale",
    artist: "Akhil Sachdeva",
  },
  {
    imgURl:"guru12",
    name: "128-Surma Surma - Guru Randhawa 128 Kbps",
    title: "Surma Surma",
    artist: "Guru Randhawa",
  },
  {
    imgURl:"guru13",
    name: "128-Tere Karke - Guri 128 Kbps",
    title: "Tere Karke",
    artist: "Guri",
  },
  {
    imgURl:"guru14",
    name: "128-Teri Ban Jaungi Reprise - Tulsi Kumar, Akhil Sachdeva 128 Kbps",
    title: "Teri Ban Jaungi Reprise",
    artist: "Tulsi Kumar, Akhil Sachdeva",
  },
  {
    imgURl:"guru1",
    name: "192-Channa Ve - Bhoot - Part One The Haunted Ship 192 Kbps",
    title: "Channa Ve",
    artist: "Akhil Sachdeva",
  },
  {
    imgURl:"jaishreeram2",
    name: "128-Ram Siya Ram - Adipurush 128 Kbps",
    title: "Ram Siya Ram2",
    artist: "Adipurush",
  },
];

let isPlaying = false;
let songIndex = 0;

const playMusic = () => {
  isPlaying = true;
  music.play();
  play.classList.replace("fa-play", "fa-pause");
  img.classList.add("anime");
};

const pauseMusic = () => {
  isPlaying = false;
  music.pause();
  play.classList.replace("fa-pause", "fa-play");
  img.classList.remove("anime");
};

play.addEventListener("click", () => {
  isPlaying ? pauseMusic() : playMusic();
});

const loadSong = (song) => {
  title.textContent = song.title;
  artist.textContent = song.artist;
  music.src = `./music/${song.name}.mp3`;
  img.src = `./images/${song.imgURl}.jpg`;
};

const nextSong = () => {
  songIndex = (songIndex + 1) % songs.length;
  loadSong(songs[songIndex]);
  playMusic();
};

const prevSong = () => {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  loadSong(songs[songIndex]);
  playMusic();
};

next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);

loadSong(songs[songIndex]);
pauseMusic();
