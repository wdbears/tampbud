import express from "express";
import { urlencoded, json } from "body-parser";
import cors from "cors";

const accountSid = "";
const authToken = "";
const client = require("twilio")(accountSid, authToken);

let app = express();

const port = process.env.PORT || 5000;

app.use(urlencoded({ extended: true }));
app.use(json());
app.use(cors());

let twilio = (phone, body) => {
  client.messages
    .create({
      to: phone,
      from: "+15512136544",
      body: body,
    })
    .then((message) => console.log(message.sid, message.status))
    .done();
};

app.post("/", (req, res) => {
  console.log(req.body);
  twilio(`${req.body.phone}`, `${req.body.message}`);
});

app.listen(port, function () {
  console.log(`Server started on port ${port}`);
});
