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
            <img src="${returnData.img}" alt="${returnData.alt}">
        

        <div class="cardContainer">
            <h2 id="artistName">${returnData.artistName}</h2>
            <p id="name">${returnData.name}</p>
            <p id="bio">${returnData.bio}</p>

            <button><a href="${returnData.wikipedia}">Wikipedia</a></button>
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

    break;

    case 1: 
        today = weekdayArray[1];

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
            button: 'Avicii - The Nights'
        };
        

    break;

    case 3: 
        today = weekdayArray[3];

        returnData = {
            img: 'profile/zedd.jpeg',
            alt: 'Picture of Avicii',
            artistName: 'Zedd',
            name: 'Anton Zaslavski',
            bio: 'Known professionally as Zedd, is a Russian-German DJ and music producer. Zedd grew up and began his musical journey in Kaiserslautern, Germany. His stage name, Zedd, was derived from zed, the English pronunciation, barring American English, for the first letter of his surname, Z.',
            wikipedia: 'https://en.wikipedia.org/wiki/Zedd',
            video: 'videos/ZeddHappyNow.mp4',
            button: 'Zedd, Elley Duhé - Happy Now'
        };

    break;

    case 4: 
        today = weekdayArray[4];

    break;

    case 5: 
        today = weekdayArray[5];

    break;

    case 6: 
        today = weekdayArray[6];

    break;

    case 7: 
        today = weekdayArray[7];

    default:
        today = "Something went wrong!";

}

console.log(today);





document.getElementById('container').innerHTML = Template(returnData);



/*
Known professionally as Avicii, was a Swedish DJ, remixer and music producer. At the age of 16,
Bergling began posting his remixes on electronic music forums, which led to his first record
deal. He rose to prominence in 2011 with his single "Levels".

                        */