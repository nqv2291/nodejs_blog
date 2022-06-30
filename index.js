const express = require('express');
const app = express(); // đây là đối tượng website (sử dụng xuyên suốt website)
const port = 3000;

// route
app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})