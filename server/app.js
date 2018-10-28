const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const accountSid = 'AC3e6e920841fa73c28d3e30a508f01669';
const authToken = '0715e24b6f1e34095fc735ceae80d84b';
const client = require('twilio')(accountSid, authToken);

let app = express();

const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())

let twilio = (phone, body) => {
  client.messages
    .create({
      to: phone,
      from: '+15512136544',
      body: body
    })
    .then((message) => console.log(message.sid, message.status))
    .done();
};

app.post('/', (req, res) => {
  console.log(req.body)
  twilio(`${req.body.phone}`,`${req.body.message}`);
});

app.listen(port, function(){
  console.log(`Server started on port ${port}`);
});