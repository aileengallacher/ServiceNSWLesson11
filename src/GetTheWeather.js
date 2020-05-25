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
    let city = await askQuestion("Enter city name you want the weather for:");
    let response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${weatherApiKey}`);
    console.log(`The max temp in ${response.data.name} is ${response.data.main.temp_max - 273.1}`);
   // console.log(response.data);  // gives us the JSON data
}

Program().then(() => {
    process.exit(0);
});