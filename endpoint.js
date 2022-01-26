// Technical Support Exercise 2
// Noah Slyker
// Requires nodejs runtime, fs and cross fetch
// To install packages: npm install cross-fetch, npm install fs
// run: node endpoint.js

const fs = require('fs');
const fetch = require('cross-fetch');

let url = "https://catfact.ninja/fact";

function getCatFact(time) {
    return fetch(url)
    .then(res => res.json())
    .then(json => {
        fs.appendFile("log.txt",  time + "\n" + json.fact + "\n", function (err) {
            if (err) throw err;
            console.log(time);
        });
    });
}

setInterval(() => {
    var now = new Date();
    var [hour, minuntes, seconds] = [now.getHours().toString(), now.getMinutes().toString(), now.getSeconds().toString()]; 
    getCatFact("h:m:s " + hour + ":" + minuntes + ":" + seconds);
}, 10000); // 10 seconds for testing, 3600000 = 1 hour   


