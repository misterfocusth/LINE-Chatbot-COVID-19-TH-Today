/*jshint esversion: 8 */

const line = require('@line/bot-sdk');
const express = require('express');
const data = require("./data.js");
const payload = require("./payload.js");

// create LINE SDK config from env variables
const config = {
  channelAccessToken: process.env.CAT,
  channelSecret: process.env.CS,
};

const client = new line.Client(config);

const app = express();
app.use(express.static('public'));

app.get("/", (req, res) => {
  res.send("Ready !");
});

app.get("/share", (req, res) => {
  console.log(__dirname);
  res.sendFile("/app/index.html"); // index.html
});

app.post('/callback', line.middleware(config), (req, res) => {
  Promise
    .all(req.body.events.map(handleEvent))
    .then((result) => res.json(result))
    .catch((err) => {
      console.error(err);
      res.status(500).end();
    });
});

// event handler
async function handleEvent(event) {

  await data.fetchData(); // Get Data From API

  await payload.resetValue(); // Reset Data In Payload

  if (event.type !== 'message' || event.message.type !== 'text') {
    const msg = [{
      "type": "text", // ①
      "text": "หรือคุณหมายถึง ?",
      "quickReply": { // ②
        "items": [{
            "type": "action",
            "action": {
              "type": "message",
              "label": "รายงานวันนี้",
              "text": "เมนู:รายงานวันนี้"
            }
          },
          {
            "type": "action",
            "action": {
              "type": "message",
              "label": "ยอดสะสมในไทยทั้งหมด",
              "text": "QP:ยอดสะสมในไทยทั้งหมด"
            }
          },
          {
            "type": "action",
            "action": {
              "type": "message",
              "label": "สรุปสถานการณ์ผู้ติดเชื้อวันนี้",
              "text": "QP:สรุปสถานการณ์ผู้ติดเชื้อวันนี้"
            }
          },
          {
            "type": "action",
            "action": {
              "type": "message",
              "label": "คำเเนะนำเเละการป้องกัน",
              "text": "QP:คำเเนะนำเเละการป้องกัน"
            }
          },
          {
            "type": "action",
            "action": {
              "type": "message",
              "label": "เกี่ยวกับนักพัฒนา",
              "text": "QP:เกี่ยวกับนักพัฒนา"
            }
          }
        ]
      }
    }];
    return client.replyMessage(event.replyToken, msg);
  } else if (event.message.text == "Open_LIFF" && event.message.type == "text") {
    const msg = [{
        type: "text",
        text: "Your Message : " + event.message.text
      },
      {
        "type": "sticker",
        "packageId": "11538",
        "stickerId": "51626501"
      }
    ];
    client.replyMessage(event.replyToken, msg);
  } else if (event.message.text == "เมนู:รายงานวันนี้" && event.message.type == "text") {
    return client.replyMessage(event.replyToken, getFlexById(1));
  } else if (event.message.text == "QP:ยอดสะสมในไทยทั้งหมด") {
    client.replyMessage(event.replyToken, getFlexById(2));
  } else if (event.message.text == "QP:สรุปสถานการณ์ผู้ติดเชื้อวันนี้") {
    return client.replyMessage(event.replyToken, getFlexById(3));
  } else if (event.message.text == "QP:คำเเนะนำเเละการป้องกัน" || event.message.text == "เมนู:คำเเนะนำเเละการป้องกัน") {
    return client.replyMessage(event.replyToken, getFlexById(4));
  } else if (event.message.text == "QP:เกี่ยวกับนักพัฒนา" || event.message.text == "เมนู:เกี่ยวกับนักพัฒนา") {
    return client.replyMessage(event.replyToken, getFlexById(5));
  } else {
    const msg = [{
      "type": "text", // ①
      "text": "หรือคุณหมายถึง ?",
      "quickReply": { // ②
        "items": [{
            "type": "action",
            "action": {
              "type": "message",
              "label": "รายงานวันนี้",
              "text": "เมนู:รายงานวันนี้"
            }
          },
          {
            "type": "action",
            "action": {
              "type": "message",
              "label": "ยอดสะสมในไทยทั้งหมด",
              "text": "QP:ยอดสะสมในไทยทั้งหมด"
            }
          },
          {
            "type": "action",
            "action": {
              "type": "message",
              "label": "สรุปสถานการณ์ผู้ติดเชื้อวันนี้",
              "text": "QP:สรุปสถานการณ์ผู้ติดเชื้อวันนี้"
            }
          },
          {
            "type": "action",
            "action": {
              "type": "message",
              "label": "คำเเนะนำเเละการป้องกัน",
              "text": "QP:คำเเนะนำเเละการป้องกัน"
            }
          },
          {
            "type": "action",
            "action": {
              "type": "message",
              "label": "เกี่ยวกับนักพัฒนา",
              "text": "QP:เกี่ยวกับนักพัฒนา"
            }
          }
        ]
      }
    }];
    return client.replyMessage(event.replyToken, msg);
  }
}

let flexTodayReport = {}; // FLEX : รายงานสถานการณ์วันนี้
let flexTotalInTH = {}; // FLEX : ยอดสะสมในไทยทั้งหมด
let flexTodaySummary = {}; // FLEX : สรุปสถานการณ์ผู้ติดเชื้อวันนี้
let flexPreventAndRecomadation = {}; // FLEX : คำเเนะนำเเละการป้องกัน
let flexAboutDeveloper = {}; // FLEX : เกี่ยวกับนักพัฒนา
 
const setFlexObjects = (res, flex1, flex2, flex3, flex4, flex5) => {
  flexTodayReport = flex1;
  flexTotalInTH = flex2;
  flexTodaySummary = flex3;
  flexPreventAndRecomadation = flex4;
  flexAboutDeveloper = flex5;

  console.log(res);
};

function getFlexById(flexId) {
  switch(flexId) {
    case 1 : return flexTodayReport;
    case 2 : return flexTotalInTH;
    case 3 : return flexTodaySummary;
    case 4 : return flexPreventAndRecomadation;
    case 5 : return flexAboutDeveloper;
  }
}

// listen on port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
  data.fetchData();
});

exports.setFlexObjects = setFlexObjects;