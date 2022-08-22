var songs=[
    {
        id:1,
        imageSrc:"./Thumbnail/Ludo.jpg",
        audioSrc:"./Audio/Aabaad Barbaad - Ludo 128 Kbps.mp3",
        tittle:"Aabaad Barbaad - Pritam,Arijit Singh"
    },
    {
        id:2,
        imageSrc:"./Thumbnail/ABCD.jpg",
        audioSrc:"./Audio/Awww ! Tera Happy B-Day.mp3",
        tittle:"Tera Happy Birthday- Sachin Jiger"
    },
    {
        id:3,
        imageSrc:"./Thumbnail/Pati_Patni_aur_Woh.jpg",
        audioSrc:"./Audio/Dheeme Dheeme - Pati Patni Aur Woh 128 Kbps.mp3",
        tittle:"Dheeme Dheeme - Neha Kakkar"
    },
    {
        id:4,
        imageSrc:"./Thumbnail/Kabir_Singh.jpg",
        audioSrc:"./Audio/Kaise Hua - Kabir Singh 128 Kbps.mp3",
        tittle:"Kaise Hua- Vishal Mishra"
    },
    {
        id:5,
        imageSrc:"./Thumbnail/Kalank.jpg",
        audioSrc:"./Audio/Kalank - Title Track 128 Kbps.mp3",
        tittle:"Kalank - Arijit Singh"
    },
    {
        id:6,
        imageSrc:"./Thumbnail/Drive.jpg",
        audioSrc:"./Audio/Makhna - Drive 128 Kbps.mp3",
        tittle:"Makna- Asees Kaur"
    },
    {
        id:7,
        imageSrc:"./Thumbnail/English_Vinglish.jpg",
        audioSrc:"./Audio/Navrai Maajhi.mp3",
        tittle:"Navrai Maajhi- Sunidhi Chauhan"
    },
    {
        id:8,
        imageSrc:"./Thumbnail/Love_Aaj_Kal.jpg",
        audioSrc:"./Audio/Shayad - Love Aaj Kal 128 Kbps.mp3",
        tittle:"Shayad - Pritam,Arijit Singh"
    },
]

function generateAudioCards(){
    let htmlString="";

    songs.forEach(function(song,index){
        let songHtML=`
        <div class="audio">
                    <div class="audio_img">
                        <img src="${song.imageSrc}" />
                    </div>
                    <div class="audio_detail">
                        <h1 class="audio_tittle">${song.tittle}</h1>
                        <button class="btn" onclick="playAudio(${song.id})">Play</button>
                    </div>
                </div>
        
        `;
        htmlString=htmlString+songHtML;
    })

document.getElementById("audios").innerHTML=htmlString;

}
generateAudioCards();

function playAudio(songid){

    var song=songs.find(function(song,index){
        return song.id===songid
    })

    document.getElementById("thumbnail").src=song.imageSrc;
    document.getElementById("audio_player").src=song.audioSrc;
    document.getElementById("audio_player_tittle").innerText=song.tittle;

    document.getElementById("audio_player").play();
}