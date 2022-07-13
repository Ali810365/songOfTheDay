const monthArray = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const weekdayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

let date = new Date();
let day = date.getDate();
let weekday = weekdayArray[date.getDay()];
let month = monthArray[date.getMonth()];
let intDay = date.getDay();

let currentDay = document.getElementById('day');
let currentWeekday = document.getElementById('weekday');
let currentMonth = document.getElementById('month');

currentDay.innerHTML = day;
currentWeekday.innerHTML = weekday;
currentMonth.innerHTML = month;

function Template(){
    let returnedData = "";
    returnedData +=`
    <div class="row">
            
    <div class="column">
        <div class="card">
            <div class="photo">
            <img src="${returnData.img}" alt="${returnData.alt}">
            </div>

        <div class="cardContainer">
            <h2 id="artistName">${returnData.artistName}</h2>
            <p id="name">${returnData.name}</p>
            <p id="bio">${returnData.bio}</p>

            <button><a href="${returnData.wikipedia}">Wikipedia Link</a></button>
        </div>

    </div>



</div>




</div>

<div class="video">
<div class="videoCard">
    <video width="515"  controls>
        <source src="${returnData.video}" type="video/mp4">
        
      </video>

      <button>${returnData.button}</button>
</div>
</div>
    `
    return returnedData;
}


const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
if(urlParams.has("day")){
    intDay = urlParams.get("day");

} 

intDay = parseInt(intDay);
console.log(intDay);
let today = "";
let returnData = '';

switch(intDay){
    case 0: 
        today = weekdayArray[0];

        returnData = {
            img: 'profile/adele.jpg',
            alt: 'Picture of Adele',
            artistName: 'Adele ',
            name: 'Adele Laurie Blue Adkins',
            bio: 'An English singer and songwriter. After graduating in arts from the BRIT School in 2006, Adele signed a record deal with XL Recordings. Her debut album, 19, was released in 2008 and spawned the UK top-five singles "Chasing Pavements" and "Make You Feel My Love".',
            wikipedia: 'https://en.wikipedia.org/wiki/Adele',
            video: 'videos/AdeleHello.mp4',
            button: 'Adele | Song - Hello',
            feature: "Today's Artist | Adele"
        };

    break;

    case 1: 
        today = weekdayArray[1];

        returnData = {
            img: 'profile/ed.jpg',
            alt: 'Picture of Ed Sheeran',
            artistName: 'Ed Sheeran',
            name: 'Edward Christopher Sheeran',
            bio: 'An English singer-songwriter. Born in Halifax, West Yorkshire and raised in Framlingham, Suffolk, he began writing songs around the age of eleven. In early 2011, Sheeran independently released the extended play, No. 5 Collaborations Project.',
            wikipedia: 'https://en.wikipedia.org/wiki/Ed_Sheeran',
            video: 'videos/EdSheeranPerfect.mp4',
            button: 'Ed Sheeran | Song - Perfect',
            feature: "Today's Artist | Ed Sheeran"

        };

    break;

    case 2: 
        today = weekdayArray[2];

        returnData = {
            img: 'profile/Avicii.jpg',
            alt: 'Picture of Avicii',
            artistName: 'Avicii',
            name: 'Tim Bergling',
            bio: 'Known professionally as Avicii, was a Swedish DJ, remixer and music producer. At the age of 16, Bergling began posting his remixes on electronic music forums, which led to his first record deal. He rose to prominence in 2011 with his single "Levels".',
            wikipedia: 'https://en.wikipedia.org/wiki/Avicii',
            video: 'videos/aviciiTheNights.mp4',
            button: 'Avicii | Song - The Nights',
            feature: "Today's Artist | Avicii"

        };
        

    break;

    case 3: 
        today = weekdayArray[3];

        returnData = {
            img: 'profile/zedd.jpeg',
            alt: 'Picture of Zedd',
            artistName: 'Zedd',
            name: 'Anton Zaslavski',
            bio: 'Known professionally as Zedd, is a Russian-German DJ and music producer. Zedd grew up and began his musical journey in Kaiserslautern, Germany. His stage name, Zedd, was derived from zed, the English pronunciation, barring American English, for the first letter of his surname, Z.',
            wikipedia: 'https://en.wikipedia.org/wiki/Zedd',
            video: 'videos/ZeddHappyNow.mp4',
            button: 'Zedd, Elley Duhé | Song - Happy Now',
            feature: "Today's Artist | Zedd / Elley Duhé"

        };

    break;

    case 4: 
        today = weekdayArray[4];

        returnData = {
            img: 'profile/justin.jpg',
            alt: 'Picture of Justin Bieber',
            artistName: 'Justin Bieber',
            name: 'Justin Drew Bieber',
            bio: 'Justin Drew Bieber is a Canadian singer. Bieber is widely recognised for his genre-melding musicianship and has played an influential role in modern-day popular music.',
            wikipedia: 'https://en.wikipedia.org/wiki/Justin_Bieber',
            video: 'videos/JustinBieberGhost.mp4',
            button: 'Justin Bieber | Song - Ghost',
            feature: "Today's Artist | Justin Bieber"

        };


    break;

    case 5: 
        today = weekdayArray[5];

        returnData = {
            img: 'profile/Khalid.jpeg',
            alt: 'Picture of Khalid',
            artistName: 'Khalid',
            name: 'Khalid Donnel Robinson',
            bio: 'An American singer signed to Right Hand Music Group and RCA Records. He rose to fame after the release of his debut studio album American Teen, which was certified 4× platinum by the Recording Industry Association of America.',
            wikipedia: 'https://en.wikipedia.org/wiki/Khalid_(singer)',
            video: 'videos/KhalidBetter.mp4',
            button: 'Khalid | Song - Better',
            feature: "Today's Artist | Khalid"

        };

    break;

    case 6: 
        today = weekdayArray[6];

        returnData = {
            img: 'profile/zara.jpg',
            alt: 'Picture of Zara',
            artistName: 'Zara Larsson',
            name: 'Zara Maria Larsson',
            bio: 'Zara Maria Larsson is a Swedish pop singer. In 2008, at the age of 10, she won the second season of the talent show Talang, the Swedish version of the Got Talent format.',
            wikipedia: 'https://en.wikipedia.org/wiki/Zara_Larsson',
            video: 'videos/ZaraLarssonSymphony.mp4',
            button: 'Zara Larsson | Song - Symphony',
            feature: "Today's Artist | Zara Larsson"

        };

    break;

    default:
        today = "Something went wrong!";

}

console.log(today);





document.getElementById('container').innerHTML = Template(returnData);
document.getElementById('highlight').innerHTML = returnData.feature;




/*
Known professionally as Avicii, was a Swedish DJ, remixer and music producer. At the age of 16,
Bergling began posting his remixes on electronic music forums, which led to his first record
deal. He rose to prominence in 2011 with his single "Levels".

                        */