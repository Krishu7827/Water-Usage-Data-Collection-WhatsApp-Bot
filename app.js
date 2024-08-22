const express = require('express');
const app = express();
const {Router} = require('./endpoint')
const {whatsappNumber, client} = require('./whatsapp.config')
require('dotenv').config();

app.use(express.urlencoded({extended:true}));





app.use('/Whatsapp',Router);

/**Send message after every minutes to ask water usage data */
setInterval(() => {
   client.messages.create({
       body: "Please send today's Water Usage Data.",
       from: `whatsapp:${whatsappNumber}`,
       to: `whatsapp:${process.env.Reciver_Phone_Number}`  // Replace with the Your number
   });


}, 300000);  // 300000 ms = 5 minutes


app.listen(9090,()=>{
   console.log('Server is Running on 9090')
})