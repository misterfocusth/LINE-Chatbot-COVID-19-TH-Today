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
  res.sendFile("./share.html");
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

  const res = await data.fetchData();
  payload.setResponseData(res)

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
    return client.replyMessage(event.replyToken, payload.getFlexById(1));
  } else if (event.message.text == "QP:ยอดสะสมในไทยทั้งหมด") {
    client.replyMessage(event.replyToken, payload.getFlexById(2));
  } else if (event.message.text == "QP:สรุปสถานการณ์ผู้ติดเชื้อวันนี้") {
    return client.replyMessage(event.replyToken, payload.getFlexById(3));
  } else if (event.message.text == "QP:คำเเนะนำเเละการป้องกัน" || event.message.text == "เมนู:คำเเนะนำเเละการป้องกัน") {
    return client.replyMessage(event.replyToken, payload.getFlexById(4));
  } else if (event.message.text == "QP:เกี่ยวกับนักพัฒนา" || event.message.text == "เมนู:เกี่ยวกับนักพัฒนา") {
    return client.replyMessage(event.replyToken, payload.getFlexById(5));
  } else if (event.message.text == "QP:ความคืบหน้าฉีดวัคซีนวันนี้" || event.message.text == "เมนู:ความคืบหน้าฉีดวัคซีนวันนี้") {
      return client.replyMessage(event.replyToken, payload.getFlexById(6));
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

// listen on port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
  data.fetchData();
});