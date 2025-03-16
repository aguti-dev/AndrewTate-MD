const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || "https://andrewtate-md-1-p8vs.onrender.com"     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Accra,Ghana."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Ghana";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/68ab85fe183de156be48a.jpg" || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Suhail²²¹-X-Whatsapp bot Beta!" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "233201555801";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233201555801";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '2'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "true" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "true" // "true" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "false,";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "false,";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "false,";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_58_03_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICA0NSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxODgsXG4gICAgICAgIDY1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMjksXG4gICAgICAgIDEwMCxcbiAgICAgICAgODUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjI5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzLFxuICAgICAgICA1NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDEwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgODIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDU4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzEsXG4gICAgICAgIDIxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNDgsXG4gICAgICAgIDMxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDU2LFxuICAgICAgICA2NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTUxLFxuICAgICAgICA2MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTM2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTQwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTQzLFxuICAgICAgICA4NSxcbiAgICAgICAgMTg3LFxuICAgICAgICA4OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDI5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDM2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDM5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDcwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDU1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgOCxcbiAgICAgICAgMjU0LFxuICAgICAgICAzMCxcbiAgICAgICAgMTU0LFxuICAgICAgICA2NixcbiAgICAgICAgOTUsXG4gICAgICAgIDExNixcbiAgICAgICAgMjIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMjksXG4gICAgICAgIDI1LFxuICAgICAgICAzMCxcbiAgICAgICAgNTksXG4gICAgICAgIDExOCxcbiAgICAgICAgOCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNixcbiAgICAgICAgMTQsXG4gICAgICAgIDc0LFxuICAgICAgICA0NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNixcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDY3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyOSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDk4LFxuICAgICAgICA2NixcbiAgICAgICAgMjA3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDUsXG4gICAgICAgIDYzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTAyLFxuICAgICAgICAxNyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMzksXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTE2LFxuICAgICAgICA0NixcbiAgICAgICAgMTMzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDM3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIwNixcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzLFxuICAgICAgICA3NixcbiAgICAgICAgMTgwLFxuICAgICAgICAzMSxcbiAgICAgICAgMSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNyxcbiAgICAgICAgMjA1LFxuICAgICAgICA0NCxcbiAgICAgICAgNjksXG4gICAgICAgIDExNSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxODQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxOCxcbiAgICAgICAgMTk3LFxuICAgICAgICAzOCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA5OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAzNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDc5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjIzLFxuICAgICAgICA4MixcbiAgICAgICAgMTIwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTYxLFxuICAgICAgICA4NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTcwLFxuICAgICAgICA1MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTM0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNDksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxODQsXG4gICAgICAgIDMzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDcwLFxuICAgICAgICA5NixcbiAgICAgICAgNzksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTc3LFxuICAgICAgICAxMTksXG4gICAgICAgIDUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDM0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDg5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDU5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIrV25OS3NwRTBzL2xxb3VEZS9zODNPZzY2bzZzcGNUVkZtQUtYd1BIWC84PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJWVzBwdVVTWFJBaTI1bEpFYmVWVHhnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjIzZDE3ZTA4LTcxYTUtNDkyZi05YWE0LTk0ZTc2MThmNmU0NlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjQsXG4gICAgICAxMDAsXG4gICAgICAyMDcsXG4gICAgICAyMjMsXG4gICAgICAxNzcsXG4gICAgICAxMSxcbiAgICAgIDE5NyxcbiAgICAgIDEwMCxcbiAgICAgIDYwLFxuICAgICAgOTQsXG4gICAgICAyMSxcbiAgICAgIDE5OCxcbiAgICAgIDIyOCxcbiAgICAgIDksXG4gICAgICAyMTIsXG4gICAgICA1MCxcbiAgICAgIDE2MCxcbiAgICAgIDExOCxcbiAgICAgIDk2LFxuICAgICAgNTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjYsXG4gICAgICAxMTEsXG4gICAgICA2NixcbiAgICAgIDE4LFxuICAgICAgMTU1LFxuICAgICAgMTAxLFxuICAgICAgOTEsXG4gICAgICA5NixcbiAgICAgIDIyNSxcbiAgICAgIDIxNyxcbiAgICAgIDIxNyxcbiAgICAgIDQyLFxuICAgICAgMTE1LFxuICAgICAgMjM2LFxuICAgICAgNDYsXG4gICAgICAyMDksXG4gICAgICAxNDcsXG4gICAgICAyNyxcbiAgICAgIDE5NixcbiAgICAgIDI0N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJRNjk5RzhOTlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjMzMjAxNTU1ODAxOjUyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNDc1NjY0NDUzNjU1NTo1MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJQzVvNThERUxtKzNMNEdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImFUYlpMU3prbnorUExRMG9COUcwVm1WaGNwMmhSL3J5a0ZleVZHVmN4bjA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiL3V4bElwVEhnRmpncVd3K1ljdGZIY0VQM1N5aEowNTB6NHg0MjQwdTBYM3BTckhBVWRLUXV1Q0IrM3Z4VjNQSkZoRDMxRnNId01FK3FpRkVkYjF2QWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWE4wYXRxamN4Skd5c3c4ekExYm1xSkpBM0dGdVFmdVg1eUZpUFZyWTBhS2w1a0xzZTJTYlYrc0hqTmV6dWc5RWppSDZMdEowVkJVUHVEaWVXOHU2QXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjMzMjAxNTU1ODAxOjUyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEyNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQyMTUxNDg1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQXBjXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBcGMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI4YktuYmNySExnMTZDL2s0RUJWQTVtYjEvNWkzR1l4T1lNZFgxeHpiZTJRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjg3MDg5ODgxMyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "aguti-dev", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "aguti-dev",
  packname: process.env.PACK_NAME || "aguti-dev",
  botname : process.env.BOT_NAME  || "aguti-dev",
  ownername:process.env.OWNER_NAME|| "aguti-dev",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
