const express = require('express')
const app = express()

const PORT = 3000

app.get("/",(req,res) => {
    res.status(200).send("Subscribe to Dhaas!!!")
})

app.listen(process.env.port || PORT, () => {
    console.log("server started")
})
