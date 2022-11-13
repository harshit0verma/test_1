const cowsay = require("cowsay");
const oneLinerJoke = require('one-liner-joke');


const getRandomJoke = oneLinerJoke.getRandomJoke();
// const getRandomJoke = oneLinerJoke.getRandomJokeWithTag('dirty');

// console.log(getRandomJoke);
console.log(cowsay.think({
    text : getRandomJoke.body,
    e : "oOps",
    T : "UwU "
}));
