/*    MAIN
BUTTON FUNCTION*/



const displayNav = document.querySelector(".nav-bottom");
const navButton = document.getElementById("nav-toggle");


navButton.addEventListener("click", function display() {

   const makeVisible = displayNav.getAttribute("data-visible");

   if (makeVisible === "false") {

    displayNav.setAttribute("data-visible", true);

    } else if (makeVisible === "true") {
        displayNav.setAttribute("data-visible", false);
    }
    const rotateButton = navButton.getAttribute("data-visible");

     if (rotateButton === "false") {
        navButton.setAttribute("data-visible", true);
     } else if (rotateButton === "true") {
        navButton.setAttribute("data-visible", false);
     }

})


/*******  PLAYER SECTION *******/


// CONSTS

const musicPlayer = document.querySelector(".player-section1");
const musicPlayer2 = document.querySelector(".player-section2");
const playBtn = document.querySelector("#playButton1");
const playBtn2 = document.getElementById("playButton2");
const changeTitle = document.querySelector(".current-song");
const changeTitle2 = document.querySelector(".current-song2");
const currentTimer1 = document.querySelector(".current-time1");
const totalTime1 = document.querySelector(".total-time1");
const currentTimer2 = document.querySelector(".current-time2");
const totalTime2 = document.querySelector(".total-time2");
const audio1 = document.querySelector("#audio-song1");
const audio2 = document.querySelector("#audio-song2");
const progressBar1 = document.querySelector(".progress-bar1");
const progressBar2 = document.querySelector(".progress-bar2");
const progressBarContainer2 = document.querySelector(".pb-container2");
const progressBarContainer = document.querySelector(".pb-container");
const timerContainer_1 = document.querySelector("#timer1");
const timerContainer_2 = document.querySelector("#timer2");



const selectSong1 = document.querySelector("#song-list1");
const selectSong2 = document.querySelector("#song-list2");
const selectSong3 = document.querySelector("#song-list3");
const selectSong4 = document.querySelector("#song-list4");
const selectSong5 = document.querySelector("#song-list5");


const songList = document.querySelector(".song-name");

const songs2 = ["Un Poco de Ti"];
const songs = ["Me Recordare", "Mis Miedos Sin Ti", "Siempre Estas Tu", "Un Besito en la Boquita", "Un poco de Ti"];

let songIndex = 4;

let songIndex2 = 0;




// FUCNTIONs


function loadSongs(song) {

   // changeTitle.innerHTML = song;
   audio1.src = `audio/${song}.mp3`;
}
loadSongs(songs2[songIndex2]);



function playMusic1() {
   musicPlayer.classList.add("play");
   playBtn.querySelector(".fa-solid").classList.remove("fa-play");
   playBtn.querySelector(".fa-solid").classList.add("fa-pause");

   audio1.play();
}

function pauseMusic1() {
   musicPlayer.classList.remove("play")
   playBtn.querySelector(".fa-solid").classList.remove("fa-pause");
   playBtn.querySelector(".fa-solid").classList.add("fa-play");

   audio1.pause();
}

function playMusic2() {
   musicPlayer2.classList.add("play");
   playBtn2.querySelector(".fa-solid").classList.remove("fa-play");
   playBtn2.querySelector(".fa-solid").classList.add("fa-pause");

   audio2.play();
}

function pauseMusic2() {
   musicPlayer2.classList.remove("play")
   playBtn2.querySelector(".fa-solid").classList.remove("fa-pause");
   playBtn2.querySelector(".fa-solid").classList.add("fa-play");

   audio2.pause();
}


function progressUpdate(e) {

   const { duration, currentTime } = e.srcElement;
   const progressBarUpdate = (currentTime / duration) * 100;

   progressBar1.style.width = `${progressBarUpdate}%`;
   
   function timer() {

      const minutes = Math.floor(audio1.duration);
      const seconds = Math.floor(audio1.currentTime);
      
      if (seconds < 10) {
         timerContainer_1.innerText = `00:0${seconds}/00:${minutes}`;
      } else {
         timerContainer_1.innerText = `00:${seconds}/00:${minutes}`;
      }

   }
   timer()
   
}

function progressUpdate2(e) {

   const { duration, currentTime } = e.srcElement;
   const progressBarUpdate2 = (currentTime / duration) * 100;

   progressBar2.style.width = `${progressBarUpdate2}%`;
   

   function timer2() {

      const minutes2 = Math.floor(audio2.duration);
      const seconds2 = Math.floor(audio2.currentTime);
      
      if (seconds2 < 10) {
         timerContainer_2.innerText = `00:0${seconds2}/00:${minutes2}`;
      } else {
         timerContainer_2.innerText = `00:${seconds2}/00:${minutes2}`;
      }

   }
   timer2()
  
   
}



function setProgress(e) {

   const width = this.clientWidth;
   const clickX = e.offsetX;
   const duration = audio1.duration;

   audio1.currentTime = (clickX / width) * duration;

}
function setProgress2(e) {

   const width_2 = this.clientWidth;
   const clickX_2 = e.offsetX;
   const duration_2 = audio2.duration;

   audio2.currentTime = (clickX_2 / width_2) * duration_2;

}





// EVENT LISTENERS 

playBtn.addEventListener("click", function musicPlaying() {

   const playing = musicPlayer.classList.contains("play");

      if (playing) {
         pauseMusic1()
      } else {
         playMusic1()
      }

});
playBtn2.addEventListener("click", function musicPlaying() {

   const playing = musicPlayer2.classList.contains("play");

      if (playing) {
         pauseMusic2()
      } else {
         playMusic2()
      }

});


selectSong1.addEventListener("click", function changeSong() {

    changeTitle2.innerText = selectSong1.textContent;
    audio2.src = `audio/${selectSong1.textContent}.mp3`;

    if (selectSong1) {
      songIndex 
    } 

    audio2.play();
});
selectSong2.addEventListener("click", function changeSong() {

    changeTitle2.innerText = selectSong2.textContent;
    audio2.src = `audio/${selectSong2.textContent}.mp3`;

    if (selectSong2) {
      songIndex++; 
    } 

    audio2.play();
});
selectSong3.addEventListener("click", function changeSong() {

    changeTitle2.innerText = selectSong3.textContent;
    audio2.src = `audio/${selectSong3.textContent}.mp3`;

    if (selectSong3) {
      songIndex = songIndex + 2;
    } 

    audio2.play();
});
selectSong4.addEventListener("click", function changeSong() {

    changeTitle2.innerText = selectSong4.textContent;
    audio2.src = `audio/${selectSong4.textContent}.mp3`;

    if (selectSong4) {
      songIndex = songIndex + 3;
    } 

    audio2.play();

});
selectSong5.addEventListener("click", function changeSong() {

    changeTitle2.innerText = selectSong5.textContent;
    audio2.src = `audio/${selectSong5.textContent}.mp3`;

    if (selectSong5) {
      songIndex = songIndex + 3;
    } 

    audio2.play();
});

audio1.addEventListener("timeupdate", progressUpdate);
audio2.addEventListener("timeupdate", progressUpdate2);


progressBarContainer.addEventListener("click", setProgress);
progressBarContainer2.addEventListener("click", setProgress2);




/*******************************************************  
 * 
 * Gallery Pop-up 
 * 
 * *****************************************************/


