/*jshint esversion: 8 */

const fetch = require("node-fetch");
const payload = require("./payload.js");

let dataRes = {};

function fetchData() {
    fetch("https://covid19.th-stat.com/api/open/today")
      .then(res => res.json())
      .then((res) => {
        dataRes = res;
      }).catch(error => console.log(error))
      .then((result) => {
        payload.setResponse(dataRes);
      }).catch((err) => {
        console.log(err);
      });
}

module.exports = {fetchData};