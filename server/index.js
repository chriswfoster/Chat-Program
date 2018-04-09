const express = require('express')
const {json} = require('body-parser')
const cors = require('cors')

const PORT = 3080;


const app = express();
app.use(json())
app.use(cors())





app.listen(PORT, () => console.log(`You are now listening to ${PORT}FM`))