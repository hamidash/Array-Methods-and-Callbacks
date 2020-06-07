import { fifaData } from './fifa.js';
//console.log(fifaData);

//console.log('its working');

// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data */

// (a) Home Team name for 2014 world cup final
let finalObject = fifaData.filter( final => final.Year == "2014" && final.Stage == "Final");

console.log(finalObject[0]["Home Team Name"]);

//(b) Away Team name for 2014 world cup final
console.log(finalObject[0]["Away Team Name"]);

//(c) Home Team goals for 2014 world cup final
console.log(finalObject[0]['Home Team Goals']);

//(d) Away Team goals for 2014 world cup final
console.log(finalObject[0]['Away Team Goals']);

//(e) Winner of 2014 world cup final
let finalHomegoals = finalObject[0]['Home Team Goals'];
let finalAwayGoals = finalObject[0]['Away Team Goals'];
if(finalHomegoals>finalAwayGoals){
    console.log(finalObject[0]["Home Team Name"]);
}
else{
    console.log(finalObject[0]["Away Team Name"]);
}

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {

    return data.filter(item => item.Stage == "Final")

};

console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(callback,data) {
    let years = callback(data).map(item => item.Year);
    return years;
    /* code here */
};

console.log(getYears(getFinals,fifaData));

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(callback,data) {
    
    // let finalHomeTeamGoals = callback.map(item => item['Home Team Goals']);
    // let finalAwayTeamGoals = callback.map(item => item['Away Team Goals']);
    let winnersObj = callback(data);
    let winners = winnersObj.map((item,index)=>{

            let finalHomeGoals = winnersObj[index]['Home Team Goals'];
            let finalAwayGoals = winnersObj[index]['Away Team Goals'];

            if(finalHomeGoals>finalAwayGoals){
                return winnersObj[index]['Home Team Name'];
            }
            else if(finalHomeGoals==finalAwayGoals) {
                let winCondStr = winnersObj[index]["Win conditions"];
                let winCondArr = winCondStr.split(" ");
                return winCondArr[0];
            }
            else {
                return winnersObj[index]['Away Team Name'];
            }
        }
    )
    
    return winners;
    /* code here */
};

console.log(getWinners(getFinals,fifaData));

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(callback1,callback2) {
    
    return callback2.map((year,index) => {
        let country = callback1[index];
        return `In ${year}, ${country} won the world cup!`
 })
};

console.log(getWinnersByYear(getWinners(getFinals,fifaData), getYears(getFinals,fifaData)));

/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {

    let totalHomeGoals = data.reduce((total,goals) => {
        total += goals["Home Team Goals"];
        //console.log(total);
        return total;
    },0)

    let totalAwayGoals = data.reduce((total,goals) => {
        total += goals["Away Team Goals"];
        //console.log(total);
        return total;
    },0)

    let avgHomeGoals = (totalHomeGoals / (data.length)).toFixed(2);
    let avgAwayGoals = (totalAwayGoals / (data.length)).toFixed(2);
    
   return `Avg. Home Goals: ${avgHomeGoals} & Avg. Away Goals: ${avgAwayGoals}` ; 
    /* code here */

};

console.log(getAverageGoals(fifaData));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
