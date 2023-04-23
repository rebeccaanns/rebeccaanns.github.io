const express = require('express');
const app = express();
const port = process.env.port || 3000;

app.get('/', (req,res) => {
  res.send("Mason Jankiewicz");
});

app.listen(port);
console.log('Web Server is listening at port '+ port);

module.exports = app;