const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app =express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri,{ useNewUrlParser: true,useCreateIndex:true, useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

const exerciseRouter = require('./routes/exercises')
const userRouter = require('./routes/users')

app.use('/exercises',exerciseRouter)
app.use('/users',userRouter)

app.listen(port, () => {
    console.log(`server is runnibg on port :  ${port}`); 
});