/* eslint no-console: 0 */
const path = require('path');
const express = require('express');
const app = express();
const PORT =  3005;



app.get('/data.json', (req, res) => {

  res.sendFile(path.resolve(__dirname, 'todos.json'));

});


app.listen(PORT, 'localhost', (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Listening at http://localhost:${PORT}`);
});
