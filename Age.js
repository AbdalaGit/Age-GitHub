
//     Daye : ${daye = Age * 365} |
//     months : ${months = Age * 12} |
//     Weeks : ${weeks = months * 4} |
//     Hours : ${Hours = daye * 24} |
//     Minutes : ${ minutes = Hours * 60} | 
//     Seconds : ${Seconds  = minutes * 60}`;

let Age = document.getElementById("Age");
let ResultDaye = document.getElementById("ResultDaye");
let ResultMonths = document.getElementById("ResultMonths");
let ResultWeeks = document.getElementById("ResultWeeks");
let ResultHours = document.getElementById("ResultHours");
let ResultMinutes = document.getElementById("ResultMinutes");
let ResultSeconds = document.getElementById("ResultSeconds");
let good = document.getElementById("good");
let goood = document.getElementById("goood");


function result(){
    if(Age.value != ''){
        let Agee = +Age.value * 365;
        ResultDaye.innerHTML = Agee;

        let monthss = +Age.value * 12;
        ResultMonths.innerHTML = monthss;

        let weekss = +monthss * 4;
        ResultWeeks.innerHTML = weekss;

        let Hourss = +Agee * 24;
        ResultHours.innerHTML = Hourss;

        let minutess = +Hourss * 60;
        ResultMinutes.innerHTML = minutess;

        let Secondss = +minutess * 60;
        ResultSeconds.innerHTML = Secondss;

        good.classList.add("action");
        good.style.display = "block";
        ResultDaye.style.color = "#00ff22";
        ResultMonths.style.color = "#00ff22";
        ResultWeeks.style.color = "#00ff22";
        ResultHours.style.color = "#00ff22";
        ResultMinutes.style.color = "#00ff22";
        ResultSeconds.style.color = "#00ff22";
        Stages()
    }
    else{
        Age.placeholder = ` !!!اكتب رقم يااعم `;
        good.classList.remove("action");
        good.style.display = "none";

        ResultDaye.innerHTML = '';
        ResultMonths.innerHTML = '';
        ResultWeeks.innerHTML = '';
        ResultHours.innerHTML = '';
        ResultMinutes.innerHTML = '';
        ResultSeconds.innerHTML = '';
    }
}

function Stages(){
    if(Age.value <= 10){
        goood.innerHTML = "&#129299; لسة صغير";
    }

    else if(Age.value <= 15){
        goood.innerHTML = "&#128579; بداية المراهقة";
    }

    else if(Age.value <= 19){
        goood.innerHTML = "&#128532; مرحلة المراهقة";
    }

    else if(Age.value <= 29){
        goood.innerHTML = "&#128526; مرحلة الشباب";
    }

    else if(Age.value <= 39){
        goood.innerHTML = "&#129488; مرحلة النضج (الرشد)";
    }

    else if(Age.value <= 59){
        goood.innerHTML = "&#128562; مرحلة منتصف العمر";
    }

    else if(Age.value <= 74){
        goood.innerHTML = "&#128561; كبير في السن";
    }

    else if(Age.value > 74){
        goood.innerHTML = "&#128557; الشيخوخة";
    }
}