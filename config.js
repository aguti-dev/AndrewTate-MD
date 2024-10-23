const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || "https://andrewtate-md-1-p8vs.onrender.com"     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "233247923525";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233247923525";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '2'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "true" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 2
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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_50_10_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMCxcbiAgICAgICAgNDksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIxLFxuICAgICAgICA3NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDUyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTkxLFxuICAgICAgICA2MSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyOCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMzksXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTU2LFxuICAgICAgICA5NyxcbiAgICAgICAgNzksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDc3LFxuICAgICAgICA0OCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMDksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMDksXG4gICAgICAgIDcxLFxuICAgICAgICA0OCxcbiAgICAgICAgMTY1LFxuICAgICAgICA0LFxuICAgICAgICA5MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDMwLFxuICAgICAgICAxNDksXG4gICAgICAgIDM0LFxuICAgICAgICA2NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDg4LFxuICAgICAgICA5MCxcbiAgICAgICAgOCxcbiAgICAgICAgMjksXG4gICAgICAgIDEzMixcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNTksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMCxcbiAgICAgICAgMjAwLFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTcsXG4gICAgICAgIDM2LFxuICAgICAgICA5NSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTE4LFxuICAgICAgICA5MixcbiAgICAgICAgNTksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxLFxuICAgICAgICAyNDksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE1LFxuICAgICAgICAxMjksXG4gICAgICAgIDExNSxcbiAgICAgICAgMTk0LFxuICAgICAgICAzNixcbiAgICAgICAgMjE2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDIyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDYwLFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgNzMsXG4gICAgICAgIDE1LFxuICAgICAgICA3NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDY1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxODAsXG4gICAgICAgIDE3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjEzLFxuICAgICAgICA1OSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMjksXG4gICAgICAgIDI0LFxuICAgICAgICA2OSxcbiAgICAgICAgMTksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTgyLFxuICAgICAgICA2NCxcbiAgICAgICAgODMsXG4gICAgICAgIDM2LFxuICAgICAgICAxMDksXG4gICAgICAgIDE3OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTUwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDEsXG4gICAgICAgIDExOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzksXG4gICAgICAgIDY0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDk5LFxuICAgICAgICA3MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDg4LFxuICAgICAgICA2MyxcbiAgICAgICAgMixcbiAgICAgICAgOTUsXG4gICAgICAgIDI3LFxuICAgICAgICAyMDksXG4gICAgICAgIDE0MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMzksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjEzLFxuICAgICAgICA2NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNzhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNixcbiAgICAgICAgMTg2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjIwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTk0LFxuICAgICAgICA0NSxcbiAgICAgICAgMjM2LFxuICAgICAgICAzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDM4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDg1LFxuICAgICAgICAxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjI4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDksXG4gICAgICAgIDEzLFxuICAgICAgICAxOCxcbiAgICAgICAgNTksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjQxLFxuICAgICAgICA1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgODEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJnRU15bmtUZElXQURWU005Q1Y1K2IyZ01KY0lmMm9YYUV6MkZaaWdKMGhVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzMzI0NzkyMzUyNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMEE5MUE4NzUzMTYyN0I3NTE2NDU2QTkxM0U4NDRDMzlcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI5NDIxNDA2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjMzMjQ3OTIzNTI1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI5NjBBQTUwNDg1NEUzQUVCNTI1MUUzQkE0Q0QwODZFQ1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3Mjk0MjE0MDlcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwieXJrSHRTQkVSVHFRVmhjZ1hma1FaQVwiLFxuICBcInBob25lSWRcIjogXCJkYzIxMzMyNi1iY2ZmLTQwZTgtYjY3MS01MGRhZWU3NzFmYjRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTUsXG4gICAgICA4MixcbiAgICAgIDIzMCxcbiAgICAgIDE4NSxcbiAgICAgIDE3NyxcbiAgICAgIDE1MyxcbiAgICAgIDg4LFxuICAgICAgMTE0LFxuICAgICAgMTUxLFxuICAgICAgNTMsXG4gICAgICAyMTEsXG4gICAgICAyNCxcbiAgICAgIDQwLFxuICAgICAgNDQsXG4gICAgICAxNTYsXG4gICAgICAyMzUsXG4gICAgICAyNTQsXG4gICAgICAxMjUsXG4gICAgICAyMTUsXG4gICAgICAyMDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ4LFxuICAgICAgMTM4LFxuICAgICAgMjIzLFxuICAgICAgNjEsXG4gICAgICAxOTYsXG4gICAgICAxMDUsXG4gICAgICAxNzYsXG4gICAgICA4MixcbiAgICAgIDE5NyxcbiAgICAgIDEyMixcbiAgICAgIDE4NixcbiAgICAgIDEyMixcbiAgICAgIDEzMCxcbiAgICAgIDIyOSxcbiAgICAgIDc3LFxuICAgICAgMjEwLFxuICAgICAgOTcsXG4gICAgICAyMzAsXG4gICAgICAxMzcsXG4gICAgICAxNTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWVRMU0RKUldcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzMzI0NzkyMzUyNTo4MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjA3MTU5MzA4NTg3MTU2OjgwQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIvCfh7Ig8J+HtyDwn4e8IPCfh64g8J+HsSDwn4exXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT3o5by9NRkVOREEwN2dHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJnajZTRWhJWmZOUjRLRjhzb2JhR24vUXRYeVpRbit6cHcyUzV2RW92OUcwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlBiSTF5Qk9NcVk5RXRLOVpqQk1IRnhWR3FKOHBsSlI4WHo4Y3RJcDFSYmZYQnE4YjNqMVhJZDk1VjZRd3YvS0dQdW5STmtjd3dSc05mVTB2Y080eEFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlRBL2p2aGM3TmNHYjYzaDNmZ3dYbHEvMkhYK2tUekJQV3BhaDZUVU5HcVhTM2lSL25YMkh2Q2E4bTh2WkVlRzRIR0RqVlA4TnVGdFRaUDh4U08wbkFnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzMzI0NzkyMzUyNTo4MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEwOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI5NDIxNDAzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQ2JDXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDYkMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ2T292d3F1OVpkUkZuSFdkd0VOWUFqanM4RVdKaEFHN2RnM0tENWxEZzZvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1ODM5MzkzMDgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyOTQyMTQwOTAwOFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "MRWILL-available", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "MRWILL-available",
  packname: process.env.PACK_NAME || "MRWILL-available",
  botname : process.env.BOT_NAME  || "MRWILL-available",
  ownername:process.env.OWNER_NAME|| "MRWILL-available",


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
