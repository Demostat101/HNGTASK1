const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const d = days[new Date().getDay()-1]
const day =`${d} `;
document.getElementById("day").innerHTML = `${day}`;

let date = new Date();
let hour = date.getHours() - 1;
let min = date.getMinutes();
let sec = date.getSeconds();
let period = "AM";

const showTime = ()=>{


    if(hour == 0){
        hour = 12;
    }

    if( hour > 12){
        hour = hour - 12;
        period = "PM"
    }

    if(hour < 10){
        hour =` 0${hour}`
    }

    if(min < 10){
        min =` 0${min}`
    }

    if(sec < 10){
        sec = `0${sec};`
    }

    let time = `${hour}:${min}:${sec} ${period}`

    document.getElementById("time").innerHTML = time;

   
    
}
setInterval(showTime,1000);


