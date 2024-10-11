const express = require('express');
const cors = require('cors');
require('dotenv').config() ;

const studentRoutes = require('./routes/studentRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/',studentRoutes);
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})