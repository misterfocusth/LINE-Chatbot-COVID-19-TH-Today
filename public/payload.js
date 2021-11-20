/*jshint esversion: 8 */

const data = require("./data.js");
const index = require("./index.js");

var response = {};

// Payload Objects
class Payload {
  setResponseData(res) {
    response = res
  }

  getNumberWithComma(x) {
    return x.toLocaleString(undefined, { maximumFractionDigits: 0 })
  }

  getFlexById(flexId) {
    // CAROUSEL_1 = รายงานสถานการณ์วันนี้
    var CAROUSEL_1 = [{
      "type": "flex",
      "altText": "Flex Message",
      "contents": {
        "type": "carousel",
        "contents": [{
          "type": "bubble",
          "direction": "ltr",
          "hero": {
            "type": "image",
            "url": "https://firebasestorage.googleapis.com/v0/b/covid-19-th-situation-tracker.appspot.com/o/Line%2FHero_Images%2FHero_ShareTargetPicker_Flex.png?alt=media&token=c15a6ca4-4a17-4193-90e8-64e74b5a613e",
            "margin": "none",
            "size": "full",
            "aspectRatio": "2:1",
            "aspectMode": "fit"
          },
          "body": {
            "type": "box",
            "layout": "vertical",
            "contents": [{
              "type": "text",
              "text": "วันที่ : (" + response.data.updated_date + ")",
              "size": "sm",
              "align": "center",
              "weight": "bold"
            },
            {
              "type": "separator",
              "margin": "lg"
            },
            {
              "type": "text",
              "text": "ผู้ติดเชื้อรายใหม่วันนี้",
              "margin": "lg",
              "align": "center",
              "weight": "bold",
              "color": "#FF6D00"
            },
            {
              "type": "text",
              "text": "( + " + this.getNumberWithComma(response.data.daily_covid_cases) + " คน )",
              "margin": "md",
              "size": "sm",
              "align": "center",
              "weight": "bold",
              "color": "#FF6D00"
            },
            {
              "type": "separator",
              "margin": "xl"
            },
            {
              "type": "text",
              "text": "ผู้รักษาหายรายใหม่วันนี้",
              "margin": "lg",
              "align": "center",
              "weight": "bold",
              "color": "#64DD17"
            },
            {
              "type": "text",
              "text": "( + " + this.getNumberWithComma(response.data.daily_recovered) + " คน )",
              "margin": "md",
              "size": "sm",
              "align": "center",
              "weight": "bold",
              "color": "#64DD17"
            },
            {
              "type": "separator",
              "margin": "xl"
            },
            {
              "type": "text",
              "text": "ผู้เสียชีวิตรายใหม่วันนี้",
              "margin": "lg",
              "align": "center",
              "weight": "bold",
              "color": "#DD2C00"
            },
            {
              "type": "text",
              "text": "( + " + this.getNumberWithComma(response.data.daily_deaths) + " คน )",
              "margin": "md",
              "size": "sm",
              "align": "center",
              "weight": "bold",
              "color": "#DD2C00"
            },
            {
              "type": "separator",
              "margin": "xl"
            }
            ]
          },
          "footer": {
            "type": "box",
            "layout": "horizontal",
            "contents": [{
              "type": "text",
              "text": "ข้อมูลจาก : กรมควบคุมโรค กระทรวงสาธารณสุข",
              "size": "xs",
              "align": "center"
            }]
          }
        },
        {
          "type": "bubble",
          "direction": "ltr",
          "hero": {
            "type": "image",
            "url": "https://firebasestorage.googleapis.com/v0/b/covid-19-th-situation-tracker.appspot.com/o/Line%2FHero_Images%2F6.png?alt=media&token=69311fe2-2f5d-40bf-80b0-63411cb2c167",
            "size": "full",
            "aspectRatio": "2:1",
            "aspectMode": "fit"
          },
          "body": {
            "type": "box",
            "layout": "vertical",
            "contents": [{
              "type": "separator",
              "margin": "xl"
            },
            {
              "type": "text",
              "text": "จำนวนผู้ติดเชื้อสะสม : " + this.getNumberWithComma(response.data.cumulative_covid_cases63) + " คน",
              "margin": "lg",
              "size": "sm",
              "align": "center",
              "weight": "bold",
              "color": "#FF6D00"
            },
            {
              "type": "text",
              "text": "(เพิ่มขึ้นวันนี้ : + " + this.getNumberWithComma(response.data.daily_covid_cases) + ")",
              "margin": "md",
              "size": "xs",
              "align": "center",
              "weight": "bold"
            },
            {
              "type": "separator",
              "margin": "xl"
            },
            {
              "type": "text",
              "text": "จำนวนผู้รักษาหายสะสม : " + this.getNumberWithComma(response.data.cumulative_recovered_cases63) + " คน",
              "margin": "lg",
              "size": "sm",
              "align": "center",
              "weight": "bold",
              "color": "#64DD17"
            },
            {
              "type": "text",
              "text": "กำลังรักษาจำนวน : " + this.getNumberWithComma(response.data.daily_stay_patient) + " คน",
              "margin": "md",
              "size": "xs",
              "align": "center",
              "weight": "bold"
            },
            {
              "type": "text",
              "text": "(เพิ่มขึ้นวันนี้ : + " + this.getNumberWithComma(response.data.daily_recovered) + ")",
              "margin": "md",
              "size": "xs",
              "align": "center",
              "weight": "bold"
            },
            {
              "type": "separator",
              "margin": "xl"
            },
            {
              "type": "text",
              "text": "จำนวนผู้เสียชีวิตสะสม : " + this.getNumberWithComma(response.data.cumulative_deaths63) + " คน",
              "margin": "lg",
              "size": "sm",
              "align": "center",
              "weight": "bold",
              "color": "#DD2C00"
            },
            {
              "type": "text",
              "text": "(เพิ่มขึ้นวันนี้ : + " + this.getNumberWithComma(response.data.daily_deaths) + ")",
              "margin": "md",
              "size": "xs",
              "align": "center",
              "weight": "bold"
            },
            {
              "type": "separator",
              "margin": "xl"
            }
            ]
          },
          "footer": {
            "type": "box",
            "layout": "vertical",
            "contents": [{
              "type": "text",
              "text": "อัพเดทล่าสุด : " + response.data.updated_date,
              "size": "xs",
              "align": "center"
            },
            {
              "type": "text",
              "text": "ข้อมูลจาก : กรมควบคุมโรค กระทรวงสาธารณสุข",
              "margin": "md",
              "size": "xs",
              "align": "center"
            }
            ]
          },
          "styles": {
            "hero": {
              "backgroundColor": "#FFFFFF"
            }
          }
        },
        {
          "type": "bubble",
          "direction": "ltr",
          "hero": {
            "type": "image",
            "url": "https://firebasestorage.googleapis.com/v0/b/covid-19-th-situation-tracker.appspot.com/o/Line%2FHero_Images%2F5.png?alt=media&token=c6fc7fcc-460c-4dfb-8b6d-896a14ccfb70",
            "size": "full",
            "aspectRatio": "2:1",
            "aspectMode": "fit"
          },
          "body": {
            "type": "box",
            "layout": "vertical",
            "contents": [{
              "type": "separator"
            },
            {
              "type": "text",
              "text": "ผู้ติดเชื้อรายใหม่จำนวน (+ " + this.getNumberWithComma(response.data.daily_covid_cases) + ") คน" + "\n\nจำนวนผู้รักษาหายวันนี้เพิ่มขึ้น (+ " + this.getNumberWithComma(response.data.daily_recovered) + ") คน" + "\n\nกำลังรักษาตัวอยู่ในโรงพยาบาลจำนวน ( " + this.getNumberWithComma(response.data.daily_stay_patient) + ") คน" + "\n\nผู้เสียชีวิตรายใหม่ (+ " + this.getNumberWithComma(response.data.daily_deaths) + ") คน\n",
              "margin": "lg",
              "size": "sm",
              "align": "center",
              "gravity": "center",
              "weight": "bold",
              "wrap": true
            },
            {
              "type": "separator"
            },
            {
              "type": "button",
              "action": {
                "type": "uri",
                "label": "Share - เเชร์ข้อมูล",
                "uri": "https://liff.line.me/1654340969-ED5Nz3y1"
              },
              "margin": "xxl",
              "height": "sm",
              "style": "primary"
            }
            ]
          },
          "footer": {
            "type": "box",
            "layout": "vertical",
            "contents": [{
              "type": "text",
              "text": "อัพเดทล่าสุด : (" + response.data.updated_date + ")",
              "size": "xs",
              "align": "center"
            },
            {
              "type": "text",
              "text": "ข้อมูลจาก : กรมควบคุมโรค กระทรวงสาธารณสุข",
              "margin": "md",
              "size": "xs",
              "align": "center"
            }
            ]
          }
        },
        {
          "type": "bubble",
          "direction": "ltr",
          "hero": {
            "type": "image",
            "url": "https://firebasestorage.googleapis.com/v0/b/covid-19-th-situation-tracker.appspot.com/o/Line%2FHero_Images%2F3.png?alt=media&token=c029773b-6612-4dba-a377-66646a1d95c4",
            "size": "full",
            "aspectRatio": "2:1",
            "aspectMode": "fit"
          },
          "body": {
            "type": "box",
            "layout": "vertical",
            "contents": [{
              "type": "separator",
              "margin": "xl",
              "color": "#000000"
            },
            {
              "type": "text",
              "text": "LINE เเชทบอท COVID-19 TH - Today จัดทำขึ้นเพื่อติดตาม รายงานสถานการณ์ เเละเเสดงผลข้อมูล ข้อมูลเเละรายงานทั้งหมด มาจาก Open API ของ กรมควบคุมโรค",
              "margin": "lg",
              "size": "sm",
              "align": "start",
              "weight": "bold",
              "wrap": true
            },
            {
              "type": "separator",
              "margin": "lg",
              "color": "#000000"
            },
            {
              "type": "button",
              "action": {
                "type": "uri",
                "label": "ข้อมูลเพิ่มเติม",
                "uri": "https://ddc.moph.go.th/covid19-dashboard/"
              },
              "margin": "lg",
              "height": "sm",
              "style": "primary",
              "gravity": "top"
            },
            {
              "type": "button",
              "action": {
                "type": "uri",
                "label": "เกี่ยวกับนักพัฒนา",
                "uri": "https://github.com/misterfocusth/LINE-MessagingAPI-COVID-19-TH-Today"
              },
              "margin": "md",
              "height": "sm",
              "style": "primary",
              "gravity": "top"
            }
            ]
          },
          "footer": {
            "type": "box",
            "layout": "vertical",
            "contents": [{
              "type": "text",
              "text": "ออกเเบบ พัฒนาโดย : Sila Pakdeewong (misterfocusth)",
              "margin": "xl",
              "size": "xs",
              "align": "center",
              "wrap": true
            }]
          }
        }
        ]
      }
    },
    {
      "type": "text",
      "text": "ด้านบนคือข้อมูลทั้งหมดของวันนี้ ! หรือเลือกดูจากเมนูด้านล่างได้เลย",
      "quickReply": {
        "items": [{
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
            "label": "ความคืบหน้าฉีดวัคซีนวันนี้",
            "text": "QP:ความคืบหน้าฉีดวัคซีนวันนี้"
          }
        }
        ]
      }
    }
    ];

    // Flex : ยอดสะสมในไทยทั้งหมด
    var FLEX_ALL_IN_TH = [{
      "type": "flex",
      "altText": "Flex Message",
      "contents": {
        "type": "bubble",
        "direction": "ltr",
        "hero": {
          "type": "image",
          "url": "https://firebasestorage.googleapis.com/v0/b/covid-19-th-situation-tracker.appspot.com/o/Line%2FHero_Images%2F6.png?alt=media&token=69311fe2-2f5d-40bf-80b0-63411cb2c167",
          "size": "full",
          "aspectRatio": "2:1",
          "aspectMode": "fit"
        },
        "body": {
          "type": "box",
          "layout": "vertical",
          "contents": [{
            "type": "separator",
            "margin": "xl"
          },
          {
            "type": "text",
            "text": "จำนวนผู้ติดเชื้อสะสม : " + this.getNumberWithComma(response.data.cumulative_covid_cases63) + " คน",
            "margin": "lg",
            "size": "sm",
            "align": "center",
            "weight": "bold",
            "color": "#FF6D00"
          },
          {
            "type": "text",
            "text": "(เพิ่มขึ้นวันนี้ : + " + this.getNumberWithComma(response.data.daily_covid_cases) + ")",
            "margin": "md",
            "size": "xs",
            "align": "center",
            "weight": "bold"
          },
          {
            "type": "separator",
            "margin": "xl"
          },
          {
            "type": "text",
            "text": "จำนวนผู้รักษาหายสะสม : " + this.getNumberWithComma(response.data.cumulative_recovered_cases63) + " คน",
            "margin": "lg",
            "size": "sm",
            "align": "center",
            "weight": "bold",
            "color": "#64DD17"
          },
          {
            "type": "text",
            "text": "กำลังรักษาจำนวน : " + this.getNumberWithComma(response.data.daily_stay_patient) + " คน",
            "margin": "md",
            "size": "xs",
            "align": "center",
            "weight": "bold"
          },
          {
            "type": "text",
            "text": "(เพิ่มขึ้นวันนี้ : + " + this.getNumberWithComma(response.data.daily_recovered) + ")",
            "margin": "md",
            "size": "xs",
            "align": "center",
            "weight": "bold"
          },
          {
            "type": "separator",
            "margin": "xl"
          },
          {
            "type": "text",
            "text": "จำนวนผู้เสียชีวิตสะสม : " + this.getNumberWithComma(response.data.cumulative_deaths63) + " คน",
            "margin": "lg",
            "size": "sm",
            "align": "center",
            "weight": "bold",
            "color": "#DD2C00"
          },
          {
            "type": "text",
            "text": "(เพิ่มขึ้นวันนี้ : + " + this.getNumberWithComma(response.data.daily_deaths) + ")",
            "margin": "md",
            "size": "xs",
            "align": "center",
            "weight": "bold"
          },
          {
            "type": "separator",
            "margin": "xl"
          }
          ]
        },
        "footer": {
          "type": "box",
          "layout": "vertical",
          "contents": [{
            "type": "text",
            "text": "อัพเดทล่าสุด : " + response.data.updated_date,
            "size": "xs",
            "align": "center"
          },
          {
            "type": "text",
            "text": "ข้อมูลจาก : กรมควบคุมโรค กระทรวงสาธารณสุข",
            "margin": "md",
            "size": "xs",
            "align": "center"
          }
          ]
        },
        "styles": {
          "hero": {
            "backgroundColor": "#FFFFFF"
          }
        }
      }
    },
    {
      "type": "text",
      "text": "ต้องการดูข้อมูลอื่นอีกไหม ?",
      "quickReply": {
        "items": [{
          "type": "action",
          "action": {
            "type": "message",
            "label": "รายงานของวันนี้",
            "text": "เมนู:รายงานวันนี้"
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
            "label": "ความคืบหน้าฉีดวัคซีนวันนี้",
            "text": "QP:ความคืบหน้าฉีดวัคซีนวันนี้"
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
    }
    ];

    // Flex : สรุปสถานการณ์ผู้ติดเชื้อวันนี้
    var FLEX_TODAY = [{
      "type": "flex",
      "altText": "Flex Message",
      "contents": {
        "type": "bubble",
        "direction": "ltr",
        "hero": {
          "type": "image",
          "url": "https://firebasestorage.googleapis.com/v0/b/covid-19-th-situation-tracker.appspot.com/o/Line%2FHero_Images%2F5.png?alt=media&token=c6fc7fcc-460c-4dfb-8b6d-896a14ccfb70",
          "size": "full",
          "aspectRatio": "2:1",
          "aspectMode": "fit"
        },
        "body": {
          "type": "box",
          "layout": "vertical",
          "contents": [{
            "type": "separator"
          },
          {
            "type": "text",
            "text": "ผู้ติดเชื้อรายใหม่จำนวน (+ " + this.getNumberWithComma(response.data.daily_covid_cases) + ") คน" + "\n\nจำนวนผู้รักษาหายวันนี้เพิ่มขึ้น (+ " + this.getNumberWithComma(response.data.daily_recovered) + ") คน" + "\n\nกำลังรักษาตัวอยู่ในโรงพยาบาลจำนวน (" + this.getNumberWithComma(response.data.daily_stay_patient) + ") คน" + "\n\nผู้เสียชีวิตรายใหม่ (+ " + this.getNumberWithComma(response.data.daily_deaths) + ") คน\n",
            "margin": "lg",
            "size": "sm",
            "align": "center",
            "gravity": "center",
            "weight": "bold",
            "wrap": true
          },
          {
            "type": "separator"
          },
          {
            "type": "button",
            "action": {
              "type": "uri",
              "label": "Share - เเชร์ข้อมูล",
              "uri": "https://linecorp.com"
            },
            "margin": "xxl",
            "height": "sm",
            "style": "primary"
          }
          ]
        },
        "footer": {
          "type": "box",
          "layout": "vertical",
          "contents": [{
            "type": "text",
            "text": "อัพเดทล่าสุด : (" + response.data.updated_date + ")",
            "size": "xs",
            "align": "center"
          },
          {
            "type": "text",
            "text": "ข้อมูลจาก : กรมควบคุมโรค กระทรวงสาธารณสุข",
            "margin": "md",
            "size": "xs",
            "align": "center"
          }
          ]
        }
      }
    },
    {
      "type": "text",
      "text": "ต้องการดูข้อมูลอื่นอีกไหม ?",
      "quickReply": {
        "items": [{
          "type": "action",
          "action": {
            "type": "message",
            "label": "รายงานของวันนี้",
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
    }
    ];

    // Flex : เกี่ยวกับนักพัฒนา
    var FLEX_ABOUT_DEVELOPER = [{
      "type": "flex",
      "altText": "Flex Message",
      "contents": {
        "type": "bubble",
        "direction": "ltr",
        "hero": {
          "type": "image",
          "url": "https://firebasestorage.googleapis.com/v0/b/covid-19-th-situation-tracker.appspot.com/o/Line%2FHero_Images%2F3.png?alt=media&token=c029773b-6612-4dba-a377-66646a1d95c4",
          "size": "full",
          "aspectRatio": "2:1",
          "aspectMode": "fit"
        },
        "body": {
          "type": "box",
          "layout": "vertical",
          "contents": [{
            "type": "separator",
            "margin": "xl",
            "color": "#000000"
          },
          {
            "type": "text",
            "text": "LINE เเชทบอท COVID-19 TH - Today จัดทำขึ้นเพื่อติดตาม รายงานสถานการณ์ เเละเเสดงผลข้อมูล ข้อมูลเเละรายงานทั้งหมด มาจาก Open API ของ กรมควบคุมโรค",
            "margin": "lg",
            "size": "sm",
            "align": "start",
            "weight": "bold",
            "wrap": true
          },
          {
            "type": "separator",
            "margin": "lg",
            "color": "#000000"
          },
          {
            "type": "button",
            "action": {
              "type": "uri",
              "label": "ข้อมูลเพิ่มเติม",
              "uri": "https://ddc.moph.go.th/covid19-dashboard/"
            },
            "margin": "lg",
            "height": "sm",
            "style": "primary",
            "gravity": "top"
          },
          {
            "type": "button",
            "action": {
              "type": "uri",
              "label": "เกี่ยวกับนักพัฒนา",
              "uri": "https://github.com/misterfocusth/LINE-MessagingAPI-COVID-19-TH-Today"
            },
            "margin": "md",
            "height": "sm",
            "style": "primary",
            "gravity": "top"
          }
          ]
        },
        "footer": {
          "type": "box",
          "layout": "vertical",
          "contents": [{
            "type": "text",
            "text": "ออกเเบบ พัฒนาโดย : Sila Pakdeewong (misterfocusth)",
            "margin": "xl",
            "size": "xs",
            "align": "center",
            "wrap": true
          }]
        }
      }
    },
    {
      "type": "text",
      "text": "ต้องการดูข้อมูลอื่นอีกไหม ?",
      "quickReply": {
        "items": [{
          "type": "action",
          "action": {
            "type": "message",
            "label": "รายงานของวันนี้",
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
            "label": "คำเเนะนำเเละการป้องกัน",
            "text": "QP:คำเเนะนำเเละการป้องกัน"
          }
        },
        {
          "type": "action",
          "action": {
            "type": "message",
            "label": "สรุปสถานการณ์ผู้ติดเชื้อวันนี้",
            "text": "QP:สรุปสถานการณ์ผู้ติดเชื้อวันนี้"
          }
        }
        ]
      }
    }
    ];

    // CAROUSEL_2 = คำเเนะนำเเละการป้องกัน
    var CAROUSEL_2 = [{
      "type": "flex",
      "altText": "Flex Message",
      "contents": {
        "type": "carousel",
        "contents": [{
          "type": "bubble",
          "direction": "ltr",
          "hero": {
            "type": "image",
            "url": "https://firebasestorage.googleapis.com/v0/b/covid-19-th-situation-tracker.appspot.com/o/Line%2FHero_Images%2F4.png?alt=media&token=1e61db6f-bea4-4d12-981c-f1c9f0c09c2e",
            "size": "full",
            "aspectRatio": "2:1",
            "aspectMode": "fit"
          },
          "body": {
            "type": "box",
            "layout": "vertical",
            "contents": [{
              "type": "text",
              "text": "รู้สึกไม่สบาย ?",
              "size": "sm",
              "align": "center",
              "weight": "bold"
            },
            {
              "type": "text",
              "text": "จะติดโควิด-19 รึเปล่า ?",
              "margin": "md",
              "size": "sm",
              "align": "center",
              "weight": "bold"
            },
            {
              "type": "text",
              "text": "ลองทำเเบบประเมินความเสี่ยงด้านล่าง หากอาการยังไม่ดีขึ้น ควรรีบไปพบเเพทย์เพื่อทำการตรวจโรคอย่างละเอียด",
              "margin": "md",
              "size": "sm",
              "wrap": true
            }
            ]
          },
          "footer": {
            "type": "box",
            "layout": "horizontal",
            "contents": [{
              "type": "button",
              "action": {
                "type": "uri",
                "label": "ทำเเบบประเมิน",
                "uri": "http://bkkcovid19.bangkok.go.th/covid/frontend/web/"
              },
              "style": "primary"
            }]
          }
        },
        {
          "type": "bubble",
          "direction": "ltr",
          "body": {
            "type": "box",
            "layout": "vertical",
            "contents": [{
              "type": "image",
              "url": "https://firebasestorage.googleapis.com/v0/b/covid-19-th-situation-tracker.appspot.com/o/Line%2FHero_Images%2FCOVID-INFO-01.jpg?alt=media&token=7623aa99-2b6a-49e8-aa7c-010b5aa03680",
              "size": "full",
              "aspectRatio": "1:1"
            },
            {
              "type": "text",
              "text": "รู้จักกับ COVID-19",
              "margin": "md",
              "size": "sm",
              "align": "center",
              "weight": "bold"
            }
            ]
          },
          "footer": {
            "type": "box",
            "layout": "horizontal",
            "contents": [{
              "type": "button",
              "action": {
                "type": "uri",
                "label": "รายละเอียดเพิ่มเติม",
                "uri": "https://firebasestorage.googleapis.com/v0/b/covid-19-th-situation-tracker.appspot.com/o/Line%2FHero_Images%2FCOVID-INFO-01.jpg?alt=media&token=7623aa99-2b6a-49e8-aa7c-010b5aa03680"
              },
              "style": "primary"
            }]
          }
        },
        {
          "type": "bubble",
          "direction": "ltr",
          "body": {
            "type": "box",
            "layout": "vertical",
            "contents": [{
              "type": "image",
              "url": "https://firebasestorage.googleapis.com/v0/b/covid-19-th-situation-tracker.appspot.com/o/Line%2FHero_Images%2FCOVID-INFO-02.jpg?alt=media&token=40b36455-4046-4b5f-9acd-0d6c59457f73",
              "size": "full",
              "aspectRatio": "1:1"
            },
            {
              "type": "text",
              "text": "การปฎิบัติเมื่อต้องกักตัว 14 วัน",
              "margin": "md",
              "size": "sm",
              "align": "center",
              "weight": "bold"
            }
            ]
          },
          "footer": {
            "type": "box",
            "layout": "horizontal",
            "contents": [{
              "type": "button",
              "action": {
                "type": "uri",
                "label": "รายละเอียดเพิ่มเติม",
                "uri": "https://firebasestorage.googleapis.com/v0/b/covid-19-th-situation-tracker.appspot.com/o/Line%2FHero_Images%2FCOVID-INFO-02.jpg?alt=media&token=40b36455-4046-4b5f-9acd-0d6c59457f73"
              },
              "style": "primary"
            }]
          }
        },
        {
          "type": "bubble",
          "direction": "ltr",
          "body": {
            "type": "box",
            "layout": "vertical",
            "contents": [{
              "type": "image",
              "url": "https://firebasestorage.googleapis.com/v0/b/covid-19-th-situation-tracker.appspot.com/o/Line%2FHero_Images%2FCOVID-INFO-03.jpg?alt=media&token=9bbceab8-a41e-4108-a902-7b8aedb8979b",
              "size": "full",
              "aspectRatio": "1:1"
            },
            {
              "type": "text",
              "text": "ใส่หน้ากากอนามัยยังไงให้ถูกวิธ๊ ?",
              "margin": "md",
              "size": "sm",
              "align": "center",
              "weight": "bold"
            }
            ]
          },
          "footer": {
            "type": "box",
            "layout": "horizontal",
            "contents": [{
              "type": "button",
              "action": {
                "type": "uri",
                "label": "รายละเอียดเพิ่มเติม",
                "uri": "https://firebasestorage.googleapis.com/v0/b/covid-19-th-situation-tracker.appspot.com/o/Line%2FHero_Images%2FCOVID-INFO-03.jpg?alt=media&token=9bbceab8-a41e-4108-a902-7b8aedb8979b"
              },
              "style": "primary"
            }]
          }
        },
        {
          "type": "bubble",
          "direction": "ltr",
          "body": {
            "type": "box",
            "layout": "vertical",
            "contents": [{
              "type": "image",
              "url": "https://firebasestorage.googleapis.com/v0/b/covid-19-th-situation-tracker.appspot.com/o/Line%2FHero_Images%2FCOVID-INFO-04.jpg?alt=media&token=dff887fc-1d84-4367-8c20-6bf4f6f4c4d1",
              "size": "full",
              "aspectRatio": "1:1"
            },
            {
              "type": "text",
              "text": "หน้าฝนเเล้ว รับมือกับ COVID-19 ยังไงดี ?",
              "margin": "md",
              "size": "sm",
              "align": "center",
              "weight": "bold"
            }
            ]
          },
          "footer": {
            "type": "box",
            "layout": "horizontal",
            "contents": [{
              "type": "button",
              "action": {
                "type": "uri",
                "label": "รายละเอียดเพิ่มเติม",
                "uri": "https://firebasestorage.googleapis.com/v0/b/covid-19-th-situation-tracker.appspot.com/o/Line%2FHero_Images%2FCOVID-INFO-04.jpg?alt=media&token=dff887fc-1d84-4367-8c20-6bf4f6f4c4d1"
              },
              "style": "primary"
            }]
          }
        },
        {
          "type": "bubble",
          "direction": "ltr",
          "body": {
            "type": "box",
            "layout": "vertical",
            "contents": [{
              "type": "image",
              "url": "https://firebasestorage.googleapis.com/v0/b/covid-19-th-situation-tracker.appspot.com/o/Line%2FHero_Images%2FCOVID-INFO-05.jpg?alt=media&token=a6dc37f7-8d7a-4fd3-b100-2024271dcaed",
              "size": "full",
              "aspectRatio": "1:1"
            },
            {
              "type": "text",
              "text": "การล้างมือช่วยลดความเสียงในการติดโรคได้",
              "margin": "md",
              "size": "sm",
              "align": "center",
              "weight": "bold"
            }
            ]
          },
          "footer": {
            "type": "box",
            "layout": "horizontal",
            "contents": [{
              "type": "button",
              "action": {
                "type": "uri",
                "label": "รายละเอียดเพิ่มเติม",
                "uri": "https://firebasestorage.googleapis.com/v0/b/covid-19-th-situation-tracker.appspot.com/o/Line%2FHero_Images%2FCOVID-INFO-05.jpg?alt=media&token=a6dc37f7-8d7a-4fd3-b100-2024271dcaed"
              },
              "style": "primary"
            }]
          }
        },
        {
          "type": "bubble",
          "direction": "ltr",
          "body": {
            "type": "box",
            "layout": "vertical",
            "contents": [{
              "type": "image",
              "url": "https://firebasestorage.googleapis.com/v0/b/covid-19-th-situation-tracker.appspot.com/o/Line%2FHero_Images%2FCOVID-INFO-06.png?alt=media&token=ab41efbd-322b-4a12-b9e1-0b39c222e461",
              "size": "full",
              "aspectRatio": "1:1"
            },
            {
              "type": "text",
              "text": "เรื่องควรรู้เกี่ยวกับ COVID-19",
              "margin": "md",
              "size": "sm",
              "align": "center",
              "weight": "bold"
            }
            ]
          },
          "footer": {
            "type": "box",
            "layout": "horizontal",
            "contents": [{
              "type": "button",
              "action": {
                "type": "uri",
                "label": "รายละเอียดเพิ่มเติม",
                "uri": "https://firebasestorage.googleapis.com/v0/b/covid-19-th-situation-tracker.appspot.com/o/Line%2FHero_Images%2FCOVID-INFO-06.png?alt=media&token=ab41efbd-322b-4a12-b9e1-0b39c222e461"
              },
              "style": "primary"
            }]
          }
        },
        {
          "type": "bubble",
          "direction": "ltr",
          "body": {
            "type": "box",
            "layout": "vertical",
            "contents": [{
              "type": "image",
              "url": "https://firebasestorage.googleapis.com/v0/b/covid-19-th-situation-tracker.appspot.com/o/Line%2FHero_Images%2FCOVID-INFO-07.jpg?alt=media&token=4fe4f8a5-18c4-4075-b516-44fbe2451ef4",
              "size": "full",
              "aspectRatio": "1:1"
            },
            {
              "type": "text",
              "text": "9 วิธีในการหนี COVID-19",
              "margin": "md",
              "size": "sm",
              "align": "center",
              "weight": "bold"
            }
            ]
          },
          "footer": {
            "type": "box",
            "layout": "horizontal",
            "contents": [{
              "type": "button",
              "action": {
                "type": "uri",
                "label": "รายละเอียดเพิ่มเติม",
                "uri": "https://firebasestorage.googleapis.com/v0/b/covid-19-th-situation-tracker.appspot.com/o/Line%2FHero_Images%2FCOVID-INFO-07.jpg?alt=media&token=4fe4f8a5-18c4-4075-b516-44fbe2451ef4"
              },
              "style": "primary"
            }]
          }
        },
        {
          "type": "bubble",
          "direction": "ltr",
          "body": {
            "type": "box",
            "layout": "vertical",
            "contents": [{
              "type": "text",
              "text": "เยี่ยมชมหน้าเว็บไซค์อย่างเป็นทางการของ กรมควบคุมโรค กระทรวงสาธารณสุข",
              "align": "center",
              "weight": "bold",
              "wrap": true
            }]
          },
          "footer": {
            "type": "box",
            "layout": "horizontal",
            "contents": [{
              "type": "button",
              "action": {
                "type": "uri",
                "label": "Button",
                "uri": "http://bkkcovid19.bangkok.go.th/covid/frontend/web/"
              },
              "style": "primary"
            }]
          }
        }
        ]
      }
    },
    {
      "type": "text",
      "text": "ต้องการดูข้อมูลอื่นอีกไหม ?",
      "quickReply": {
        "items": [{
          "type": "action",
          "action": {
            "type": "message",
            "label": "รายงานของวันนี้",
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
            "label": "เกี่ยวกับนักพัฒนา",
            "text": "QP:เกี่ยวกับนักพัฒนา"
          }
        }
        ]
      }
    }
    ];

    var FLEX_VACCINE = [{
      "type": "flex",
      "altText": "Flex Message",
      "contents": {
        "type": "carousel",
        "contents": [
          {
            "type": "bubble",
            "direction": "ltr",
            "hero": {
              "type": "image",
              "url": "https://firebasestorage.googleapis.com/v0/b/covid-19-th-situation-tracker.appspot.com/o/Line%2FHero_Images%2FVaccine_Today.png?alt=media&token=d877ad2c-ba59-474e-b19d-cd6ed5096ca6",
              "size": "full",
              "aspectRatio": "2:1",
              "aspectMode": "fit"
            },
            "body": {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "separator"
                },
                {
                  "type": "text",
                  "text": "จำนวนผู้ได้รับวัคซีนเข็มที่ 1 วันนี้",
                  "weight": "bold",
                  "color": "#4287F5FF",
                  "align": "center",
                  "margin": "lg",
                  "contents": []
                },
                {
                  "type": "text",
                  "text": "เพิ่มขึ้น : " + this.getNumberWithComma(response.data.daily_vaccine1),
                  "weight": "bold",
                  "size": "xs",
                  "align": "center",
                  "margin": "md",
                  "contents": []
                },
                {
                  "type": "text",
                  "text": "จำนวนฉีดสะสม : " + this.getNumberWithComma(response.data.cumulative_vaccine1),
                  "weight": "bold",
                  "size": "xs",
                  "align": "center",
                  "margin": "md",
                  "contents": []
                },
                {
                  "type": "separator",
                  "margin": "xl"
                },
                {
                  "type": "text",
                  "text": "จำนวนผู้ได้รับวัคซีนเข็มที่ 2 วันนี้",
                  "weight": "bold",
                  "color": "#4287F5FF",
                  "align": "center",
                  "margin": "lg",
                  "contents": []
                },
                {
                  "type": "text",
                  "text": "เพิ่มขึ้น : " + this.getNumberWithComma(response.data.daily_vaccine2),
                  "weight": "bold",
                  "size": "xs",
                  "align": "center",
                  "margin": "md",
                  "contents": []
                },
                {
                  "type": "text",
                  "text": "จำนวนฉีดสะสม : " + this.getNumberWithComma(response.data.cumulative_vaccine2),
                  "weight": "bold",
                  "size": "xs",
                  "align": "center",
                  "margin": "md",
                  "contents": []
                },
                {
                  "type": "separator",
                  "margin": "xl"
                },
                {
                  "type": "text",
                  "text": "ประเทศไทยฉีดวัคซีนไปเเล้ว",
                  "weight": "bold",
                  "color": "#000000FF",
                  "align": "center",
                  "margin": "lg",
                  "contents": []
                },
                {
                  "type": "text",
                  "text": "เพิ่มขึ้น : " + this.getNumberWithComma((response.data.daily_vaccine1 + response.data.daily_vaccine2)),
                  "weight": "bold",
                  "size": "xs",
                  "align": "center",
                  "margin": "md",
                  "contents": []
                },
                {
                  "type": "text",
                  "text": "จำนวนฉีดสะสม : " + this.getNumberWithComma(response.data.cumulative_vaccines),
                  "weight": "bold",
                  "size": "xs",
                  "align": "center",
                  "margin": "md",
                  "contents": []
                },
                {
                  "type": "separator",
                  "margin": "xl"
                }
              ]
            },
            "footer": {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "text",
                  "text": "อัพเดทล่าสุด : " + response.data.updated_date,
                  "size": "xs",
                  "align": "center",
                  "contents": []
                },
                {
                  "type": "text",
                  "text": "ข้อมูลจาก : กรมควบคุมโรค กระทรวงสาธารณสุข",
                  "size": "xs",
                  "align": "center",
                  "margin": "md",
                  "contents": []
                }
              ]
            },
            "styles": {
              "hero": {
                "backgroundColor": "#FFFFFF"
              }
            }
          },
          {
            "type": "bubble",
            "direction": "ltr",
            "hero": {
              "type": "image",
              "url": "https://firebasestorage.googleapis.com/v0/b/covid-19-th-situation-tracker.appspot.com/o/Line%2FHero_Images%2FVaccine_1.png?alt=media&token=fb119ca2-aea7-41dd-be58-bbf888253cd7",
              "size": "full",
              "aspectRatio": "2:1",
              "aspectMode": "fit"
            },
            "body": {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "separator"
                },
                {
                  "type": "text",
                  "text": "จำนวนผู้ได้รับวัคซีนเข็มที่ 1 วันนี้",
                  "weight": "bold",
                  "color": "#4287F5FF",
                  "align": "center",
                  "margin": "lg",
                  "contents": []
                },
                {
                  "type": "text",
                  "text": "เพิ่มขึ้น : " + this.getNumberWithComma(response.data.daily_vaccine1),
                  "weight": "bold",
                  "size": "xs",
                  "align": "center",
                  "margin": "lg",
                  "contents": []
                },
                {
                  "type": "text",
                  "text": "จำนวนฉีดสะสม : " + this.getNumberWithComma(response.data.cumulative_vaccine1),
                  "weight": "bold",
                  "size": "xs",
                  "align": "center",
                  "margin": "lg",
                  "contents": []
                },
                {
                  "type": "separator",
                  "margin": "xl"
                },
                {
                  "type": "text",
                  "text": "ยอดสะสมการฉีดวัคซีนเข็มที่ 1",
                  "weight": "bold",
                  "color": "#4287F5FF",
                  "align": "center",
                  "margin": "lg",
                  "contents": []
                },
                {
                  "type": "text",
                  "text": "ยอดสะสม : " + this.getNumberWithComma(response.data.cumulative_vaccine1),
                  "weight": "bold",
                  "size": "xs",
                  "align": "center",
                  "margin": "lg",
                  "contents": []
                },
                {
                  "type": "text",
                  "text": "คิดเป็นร้อยละ : "  + ((response.data.cumulative_vaccine1 / 70000000) * 100).toFixed(2) + " %",
                  "weight": "bold",
                  "size": "xs",
                  "align": "center",
                  "margin": "lg",
                  "contents": []
                },
                {
                  "type": "text",
                  "text": "(ร้อยละยอดสะสมโดยประมาณต่อประชากรเป้าหมาย 70 ล้านคน)",
                  "weight": "bold",
                  "size": "xs",
                  "align": "center",
                  "margin": "lg",
                  "wrap": true,
                  "contents": []
                },
                {
                  "type": "separator",
                  "margin": "xl"
                }
              ]
            },
            "footer": {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "text",
                  "text": "อัพเดทล่าสุด : " + response.data.updated_date,
                  "size": "xs",
                  "align": "center",
                  "contents": []
                },
                {
                  "type": "text",
                  "text": "ข้อมูลจาก : กรมควบคุมโรค กระทรวงสาธารณสุข",
                  "size": "xs",
                  "align": "center",
                  "margin": "md",
                  "contents": []
                }
              ]
            },
            "styles": {
              "hero": {
                "backgroundColor": "#FFFFFF"
              }
            }
          },
          {
            "type": "bubble",
            "direction": "ltr",
            "hero": {
              "type": "image",
              "url": "https://firebasestorage.googleapis.com/v0/b/covid-19-th-situation-tracker.appspot.com/o/Line%2FHero_Images%2FVaccine_2.png?alt=media&token=aba4e8cd-4eb8-42c2-888d-684fa8ceebdb",
              "size": "full",
              "aspectRatio": "2:1",
              "aspectMode": "fit"
            },
            "body": {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "separator"
                },
                {
                  "type": "text",
                  "text": "จำนวนผู้ได้รับวัคซีนเข็มที่ 2 วันนี้",
                  "weight": "bold",
                  "color": "#4287F5FF",
                  "align": "center",
                  "margin": "lg",
                  "contents": []
                },
                {
                  "type": "text",
                  "text": "เพิ่มขึ้น : " + this.getNumberWithComma(response.data.daily_vaccine2),
                  "weight": "bold",
                  "size": "xs",
                  "align": "center",
                  "margin": "lg",
                  "contents": []
                },
                {
                  "type": "text",
                  "text": "จำนวนฉีดสะสม : " + this.getNumberWithComma(response.data.cumulative_vaccine2),
                  "weight": "bold",
                  "size": "xs",
                  "align": "center",
                  "margin": "lg",
                  "contents": []
                },
                {
                  "type": "separator",
                  "margin": "xl"
                },
                {
                  "type": "text",
                  "text": "ยอดสะสมการฉีดวัคซีนเข็มที่ 2",
                  "weight": "bold",
                  "color": "#4287F5FF",
                  "align": "center",
                  "margin": "lg",
                  "contents": []
                },
                {
                  "type": "text",
                  "text": "ยอดสะสม : " + this.getNumberWithComma(response.data.cumulative_vaccine2),
                  "weight": "bold",
                  "size": "xs",
                  "align": "center",
                  "margin": "lg",
                  "contents": []
                },
                {
                  "type": "text",
                  "text": "คิดเป็นร้อยละ : "  + ((response.data.cumulative_vaccine2 / 70000000) * 100).toFixed(2) + " %",
                  "weight": "bold",
                  "size": "xs",
                  "align": "center",
                  "margin": "lg",
                  "contents": []
                },
                {
                  "type": "text",
                  "text": "(ร้อยละยอดสะสมโดยประมาณต่อประชากรเป้าหมาย 70 ล้านคน)",
                  "weight": "bold",
                  "size": "xs",
                  "align": "center",
                  "margin": "lg",
                  "wrap": true,
                  "contents": []
                },
                {
                  "type": "separator",
                  "margin": "xl"
                }
              ]
            },
            "footer": {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "text",
                  "text": "อัพเดทล่าสุด : " + response.data.updated_date,
                  "size": "xs",
                  "align": "center",
                  "contents": []
                },
                {
                  "type": "text",
                  "text": "ข้อมูลจาก : กรมควบคุมโรค กระทรวงสาธารณสุข",
                  "size": "xs",
                  "align": "center",
                  "margin": "md",
                  "contents": []
                }
              ]
            },
            "styles": {
              "hero": {
                "backgroundColor": "#FFFFFF"
              }
            }
          }
        ]
      }
    },
    {
      "type": "text",
      "text": "ต้องการดูข้อมูลอื่นอีกไหม ?",
      "quickReply": {
        "items": [{
          "type": "action",
          "action": {
            "type": "message",
            "label": "รายงานของวันนี้",
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
    }]

    switch (flexId) {
      case 1: return CAROUSEL_1;
      case 2: return FLEX_ALL_IN_TH;
      case 3: return FLEX_TODAY;
      case 4: return CAROUSEL_2;
      case 5: return FLEX_ABOUT_DEVELOPER;
      case 6: return FLEX_VACCINE;
    }
  }

}

module.exports = new Payload();

// function setResponse(res) {
//   response = res;
//   resetValue();
// }

// function resetValue() {

//   index.setFlexObjects(response, CAROUSEL_1, FLEX_ALL_IN_TH, FLEX_TODAY, CAROUSEL_2, FLEX_ABOUT_DEVELOPER);

// }

// module.exports = { setResponse, resetValue };