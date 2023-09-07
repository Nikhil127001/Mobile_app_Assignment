const express = require('express');
const app  = express();
const bodyparser = require('body-parser');
const apiRoutes = require('./Routes/apiRoutes');
const cors = require('cors');

require('./Db')
require('dotenv').config();
app.use(bodyparser.json());
app.use(cors());
app.use(express.urlencoded({extended : true}))

app.use('/api', apiRoutes)

app.use((err,res)=>{
    res.json({
        message: err.message
    })
})
const port = 8000;

app.listen(port,() => {
    console.log(`app listen on port ${port}`);
})