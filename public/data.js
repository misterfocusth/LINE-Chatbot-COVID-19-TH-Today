/*jshint esversion: 8 */
const axios = require("axios");

class Data {
  async fetchData() {
    var dataRes = {};
    const API_KEY = "12c8f541-c0f7-4eed-9888-202107164a9ef46387";

    const response = await axios.get("https://api-lab-covid.mindbase.co.th/v2/stats/daily?key=" + API_KEY)
    dataRes = response.data;

    return dataRes;
  }
}

module.exports = new Data();