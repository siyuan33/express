const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  console.log("请求过来了");
  res.send('你好!\n')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))