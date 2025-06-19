let audio=document.getElementById("audio");
let img=document.getElementById("img");
let Track=document.getElementById("Trackname");
let play=document.getElementById("play");
let next=document.getElementById("next");
let prev=document.getElementById("prev");
let volumeup=document.getElementById("volumeup");
let volumedown=document.getElementById("volumedown");
let card=document.getElementById("card");
let Tracknamee=document.getElementById("Tracknamee");
let audios=[
    "Yemito.mp3",
    "Thanu.mp3",
    "Hello Guru.mp3"
]
let imgUrl=[
    "ar.webp",
    "hit-3.jpg",
    "Nirnayam.jpg"
]
let Tracks=[
    "Yemito",
    "Thanu",
    "Hello Guru"
]
let cardd=[];
Tracks.forEach((track, index) => {
    const p = document.createElement("p");
    p.textContent = `${index + 1}. ${track}`;
    card.appendChild(p);
    cardd.push(p);
});
function highlightCurrent() {
    cardd.forEach((el, i) => {
        if (i === currentIndex) {
            el.innerHTML = `<strong class="hl">${i + 1}. ${Tracks[i]}</strong>`;
        } else {
            el.innerHTML = `${i + 1}. ${Tracks[i]}`;
        }
    });
}


play.addEventListener("click", function (event) {
    
    if (audio.paused) {
        audio.play();
        play.innerHTML = '<i class="bi bi-pause-fill"></i>';
        img.classList.add("rotate");
    } else {
        audio.pause();
        play.innerHTML = '<i class="bi bi-play-fill"></i>';
        img.classList.remove("rotate");
    }

});

let currentIndex=0;
highlightCurrent()
next.addEventListener("click",function(event)
{
    currentIndex++;
    if(currentIndex>=audios.length)
    {
        currentIndex=0;
    }
    audio.src=audios[currentIndex];
    img.src=imgUrl[currentIndex];
    Track.textContent=Tracks[currentIndex];
    audio.play();
    play.innerHTML = '<i class="bi bi-pause-fill"></i>';
    img.classList.add("rotate");
    highlightCurrent()
    

});
prev.addEventListener("click",function(event)
{
    currentIndex--;
    if(currentIndex<0)
    {
        currentIndex=audios.length-1;
    }
    audio.src=audios[currentIndex];
    img.src=imgUrl[currentIndex];
    Track.textContent=Tracks[currentIndex];
    audio.play();
    play.innerHTML = '<i class="bi bi-pause-fill"></i>';
    img.classList.add("rotate");
    highlightCurrent()
    

});
volumeup.addEventListener("click",function(event)
{
    if(audio.volume<1)
        audio.volume+=0.1;
    if(audio.volume>1)
        audio.volume=1;
});
volumedown.addEventListener("click",function(event)
{
    if(audio.volume>0)
        audio.volume-=0.1;
    if(audio.volume<0)
        audio.volume=0;
});
