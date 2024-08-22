const express = require('express');
const app = express();
const {Router} = require('./endpoint')
const {whatsappNumber, client} = require('./whatsapp.config')


app.use(express.urlencoded({extended:true}));





app.use('/Whatsapp',Router);


setInterval(() => {
   client.messages.create({
       body: "Please send today's Water Usage Data.",
       from: `whatsapp:${whatsappNumber}`,
       to: 'whatsapp:+919718537367'  // Replace with the test number
   });

//    client.messages.create({
//       body: `Please input the water usage in the format 'XXX liters'.`,
//       from: whatsappNumber,
//       to: from
//   });
}, 300000);  // 300000 ms = 5 minutes


app.listen(9090,()=>{
   console.log('Server is Running on 9090')
})