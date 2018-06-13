const express = require('express');
const fs = require("fs");

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/data', (req, res) => {
  fs.readFile( __dirname + "/" + "data.json", 'utf8', function (err, data) {
       console.log(data);
       res.end(data);
      // res.send(data);
   });

});

app.listen(port, () => console.log(`Listening on port ${port}`));
