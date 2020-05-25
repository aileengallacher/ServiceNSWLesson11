const readline = require('readline');

const axios = require("axios");
const { weatherApiKey } = require("../config/Keys");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function askQuestion(question) {
    let answer;

    return new Promise((resolve, reject) => {
        rl.question(question, (ans) => {
            resolve(ans);
        })
    });
}
async function Program() {
    let city = await askQuestion("Enter city name you want the weather for: ");
    let weather = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${weatherApiKey}`);
   // console.log(`temp is ${response.name}`);
   // console.log(response.data);  // gives us the JSON data

  // let weather=" assign response got from API to here";

let minArray=[];
let maxArray=[];  
for (let i of weather.list)  
 {  minArray.push(Number( i.main.temp_min)) ; 
    maxArray.push(Number(i.main.temp_max));  }
  console.log("min temp is "+ Math.min(...minArray));
 console.log("max temp is "+ Math.max(...maxArray));
}

Program().then(() => {
    process.exit(0);
});