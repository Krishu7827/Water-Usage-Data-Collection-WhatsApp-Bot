const twillo = require('twilio');
require('dotenv').config();


const client = new twillo(process.env.Account_Sid, process.env.Auth_Token);
const whatsappNumber = process.env.Sender_Phone_Number;


module.exports = {client,whatsappNumber}
