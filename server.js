const PORT = process.env.PORT || 8905;
const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist/unighana'));
app.use(express.json());


app.get('*', (request, response) => {
  response.sendFile(path.join(__dirname + '/dist/unighana/index.html'));
});

app.listen(PORT, () => console.log(PORT));
