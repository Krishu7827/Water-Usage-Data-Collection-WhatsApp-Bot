# Water Usage Data Collection WhatsApp Bot

This project is a WhatsApp bot designed to collect water usage data from factory workers and store it in an Excel sheet for analysis. The bot is built using Node.js, Twilio's WhatsApp API, and `xlsx` for Excel file management.

## Prerequisites

Before getting started, make sure you have the following installed:

- **Node.js** and **npm**: [Install Node.js](https://nodejs.org/)
- **Twilio Account**: [Sign up for Twilio](https://www.twilio.com/)
- **ngrok**: [Install ngrok](https://dashboard.ngrok.com/get-started/setup/)
- **Git**: [Install Git](https://git-scm.com/)

## Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Krishu7827/Water-Usage-Data-Collection-WhatsApp-Bot.git
cd Water-Usage-Data-Collection-WhatsApp-Bot
```

## 2. Twilio Configuration
1. Log in to your Twilio account and navigate to the WhatsApp Sandbox section.
2. Copy your Account SID and Auth Token.
3. Get your WhatsApp Sandbox Number from the sandbox settings.
4. Join the sandbox by sending the provided code to the WhatsApp number.

## 3. Create a .env File
Create a `.env` file in the root of your project and add the following environment variables:

```bash
# Twilio Account SID - Your unique identifier for the Twilio account
Account_Sid=your_account_sid

# Twilio Auth Token - Your Twilio authentication token (keep this secure!)
Auth_Token=your_auth_token

# Twilio WhatsApp Number - The number provided by Twilio for sending WhatsApp messages
Sender_Phone_Number=whatsapp:+14155238886  # Replace with your Twilio WhatsApp number

# Receiver Phone Number - The test number where you want to receive messages from the bot.
# Make sure to include the country code. For example, for India, use the format +91XXXXXXXXXX
Reciver_Phone_Number=+919999999999  # Replace with your test number

```
## 4. Install Dependencies:
```bash
npm install
```

## 5. Run the Application:
```bash
npm run dev
```

## 6. Set Up ngrok (Windows)
**6.1 Install ngrok (Windows)**
- Open PowerShell as an administrator and run:

```bash
choco install ngrok
```

**6.2 Configure ngrok**
- After installation, run the following command to add your ngrok authentication token:

```bash
ngrok config add-authtoken your_ngrok_auth_token
```
**6.3 Start ngrok**
- Start an ngrok session to expose your local server:
```bash
ngrok http 9090  
```
You will receive a public URL from ngrok (e.g., `https://0a71-2401-4900-820c-fe50-5f9-f9c5-6baf-2b29.ngrok-free.app`).

#### Note: `For other OS visit on` [Install ngrok](https://dashboard.ngrok.com/get-started/setup/)

## 7. Configure Twilio Webhook
1. Go to your Twilio WhatsApp Sandbox settings.
2. In the `When a message comes` in section, paste the ngrok URL followed by /Whatsapp/Webhook (e.g., `https://your-ngrok-url/Whatsapp/Webhook`).
3. This webhook URL allows Twilio to forward incoming WhatsApp messages to your server.

## Usage 
Once everything is set up, the bot will send a message every 5 minutes asking for the day's water usage data:
```text
Please send today's Water Usage Data.
```

## Endpoints
- **POST /Whatsapp/Webhook:**
   - This endpoint receives messages from WhatsApp.
   - If the message format is `XXX liters` (replace `XXX` with your value), the data will be saved in the Excel sheet, and the bot will respond:
```text
Data received: XXX liters on YYYY-MM-DD
```
   - If the message is in an incorrect format, the bot will respond:
```text
Please input the water usage in the format 'XXX liters'.
```

## Deployment
If you are unable to deploy using ngrok, you can deploy the application on other cloud platforms like AWS or Railway.

## Congratulations! 🎉
You have successfully set up and deployed your WhatsApp bot for water usage data collection. 


