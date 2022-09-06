const express = require('express')
const app = express()
const port = process.env.PORT || 3000
// https://mess-management038.herokuapp.com/
app.get('/', (req, res) => {
  res.json({
    msg:"Hello Bhai2"
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})