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
cd your-repository-folder
```

## 2. Twilio Configuration
1. Log in to your Twilio account and navigate to the WhatsApp Sandbox section.
2. Copy your Account SID and Auth Token.
3. Get your WhatsApp Sandbox Number from the sandbox settings.
4. Join the sandbox by sending the provided code to the WhatsApp number.

## 3. Create a .env File
Create a `.env` file in the root of your project and add the following environment variables:

```bash
Account_Sid=your_account_sid
Auth_Token=your_auth_token
Sender_Phone_Number=whatsapp:+14155238886  # Replace with your Twilio WhatsApp number
```

