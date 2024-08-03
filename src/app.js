const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const  connectDB = require('./db/db');
const { student } = require('./router/student');

connectDB()


dotenv.config()


const PORT =  process.env.PORT || 2005;

const app= express()

app.use(express.json());


app.use(express.static(path.join(__dirname, '..', 'public')));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });

app.use(student)