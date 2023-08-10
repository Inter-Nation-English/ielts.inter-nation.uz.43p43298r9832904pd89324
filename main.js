const ScoreSpeaking = document.getElementById("ScoreSpeaking")
const ScoreWriting = document.getElementById("ScoreWriting")
const ScoreReading = document.getElementById("ScoreReading")
const ScoreListeting = document.getElementById("ScoreListeting")

const PhoneNumber = document.getElementById("PhoneNumber")

const OverScore = document.getElementById("OverAll")

const BlockPage = document.getElementById("Bloker");

ScoreSpeaking.innerHTML = "8.0"
ScoreWriting.innerHTML = "5.5"
ScoreReading.innerHTML = "4.5"
ScoreListeting.innerHTML = "7.0"

//PhoneNumber.innerHTML = prompt("Phone Number");
var Spliten = PhoneNumber.innerHTML.split('');

if (PhoneNumber.innerHTML == ""){
    PhoneNumber.innerHTML = "+99899-519-25-29"
}

var FixTheNum;
for (let i = 0; i < Spliten.length; i++) {
    if (i == 6 || i== 9 || i == 11 || i == 13 && Spliten[i] != undefined){
        FixTheNum += "-" + Spliten[i];
    }else if (Spliten[i] != undefined){
        FixTheNum += Spliten[i];
    }
    PhoneNumber.innerHTML = FixTheNum.slice(9);
}


var Result = Number(ScoreReading.innerHTML) + Number(ScoreSpeaking.innerHTML) + Number(ScoreWriting.innerHTML) + Number(ScoreListeting.innerHTML) 
var Drop = Result / 4;
Result = Drop

if ((Number(OverScore.innerHTML.length)) == 3){
    var AllValues = Result.toString().split('');
    if (AllValues[2] == 5){
        OverScore.innerHTML = Result.toFixed(1);
    }
}else{
    OverScore.innerHTML = Math.round(Result).toFixed(1);
}


document.ondragstart = noselect;
document.onselectstart = noselect;
//document.oncontextmenu = noselect;
function noselect() {return false;}


function CheckingSizeOfDisplay(){
    setTimeout(function(){
        CheckingSizeOfDisplay();
        if (window.screen.width > 500){

        }
    } , 1000)
}
function ChangeOpacity(){
    BlockPage.style.opacity = "10";
}
