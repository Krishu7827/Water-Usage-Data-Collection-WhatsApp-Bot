const express = require('express');
const Router = express.Router();
const xlsx = require('xlsx');
const fs = require('fs');
const path = require('path');
const {client,whatsappNumber} = require('./whatsapp.config')

const dataFilePath = path.join(__dirname, 'water_usage_data.xlsx');

// Initialize the workbook and worksheet if the file doesn't exist
if (!fs.existsSync(dataFilePath)) {
    const wb = xlsx.utils.book_new();
    const ws = xlsx.utils.aoa_to_sheet([['Date', 'Value']]);
    xlsx.utils.book_append_sheet(wb, ws, 'Data');
    xlsx.writeFile(wb, dataFilePath);
}



/**Endpoint to Get Response from reciver side */
Router.post('/Webhook',async(req,res)=>{

    const incomingMessage = req.body.Body;
    const from = req.body.From;
    console.log(from);
    const date = new Date().toLocaleDateString();
   console.log(incomingMessage)
    try{
    if (incomingMessage.toLowerCase().includes('liters')) {
        // Extract the numeric value from the message
        const waterUsageMatch = incomingMessage.match(/\d+/);
        if (waterUsageMatch) {
            const waterUsage = waterUsageMatch[0];
            
            const wb =  xlsx.readFile(dataFilePath);
            const ws = wb.Sheets['Data'];
            const newRow = { Date: date, Value: `${waterUsage} liters` };
            const newRowData = [newRow.Date, newRow.Value];
            const wsData = xlsx.utils.sheet_to_json(ws, { header: 1 });
            wsData.push(newRowData);
            const newWs = xlsx.utils.aoa_to_sheet(wsData);
            wb.Sheets['Data'] = newWs;
          await xlsx.writeFile(wb, dataFilePath);
    

            // Send confirmation message
            client.messages.create({
                body: `Data received: ${waterUsage} liters on ${date}`,
                from: `whatsapp:${whatsappNumber}`,
                to: from
            });
        } else {
            // Handle case where no numeric value was found
            client.messages.create({
                body: `Please input the water usage in the format 'XXX liters'.`,
                from: `whatsapp:${whatsappNumber}`,
                to: from
            })
        }
    } else {
        client.messages.create({
            body: `Please input the water usage in the format 'XXX liters'.`,
            from: `whatsapp:${whatsappNumber}`,
            to: from
        });
    }

    res.sendStatus(200);
    }catch(err){
        console.log(err)
        res.status(400).send({err})
    }

})

module.exports = {Router}