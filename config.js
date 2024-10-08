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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233247923525";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '2'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "true" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/9dcef2b49909742db8dbd.jpg" // "true" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_07_46_10_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDEzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjI4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTg5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA3MixcbiAgICAgICAgMTkxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTMyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNyxcbiAgICAgICAgMTM4LFxuICAgICAgICA0NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTg0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQxLFxuICAgICAgICAzMSxcbiAgICAgICAgMjEzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDQ2LFxuICAgICAgICA3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgODcsXG4gICAgICAgIDIzNixcbiAgICAgICAgODYsXG4gICAgICAgIDQ5LFxuICAgICAgICA0OCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgOSxcbiAgICAgICAgNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDksXG4gICAgICAgIDMwLFxuICAgICAgICA5NyxcbiAgICAgICAgOTMsXG4gICAgICAgIDgwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDY5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTE5LFxuICAgICAgICA0MSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDMzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzksXG4gICAgICAgIDExMixcbiAgICAgICAgMzQsXG4gICAgICAgIDM0LFxuICAgICAgICAyMzksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDk3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQyLFxuICAgICAgICA4NCxcbiAgICAgICAgMjAyLFxuICAgICAgICA5MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDUyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDYsXG4gICAgICAgIDM3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTY1LFxuICAgICAgICA2MixcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjUwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgODUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTkxLFxuICAgICAgICA5MSxcbiAgICAgICAgNzksXG4gICAgICAgIDE0MixcbiAgICAgICAgNDIsXG4gICAgICAgIDg1LFxuICAgICAgICA2MSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyLFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDksXG4gICAgICAgIDc5LFxuICAgICAgICAzNixcbiAgICAgICAgMjMxLFxuICAgICAgICA1MCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDksXG4gICAgICAgIDM4LFxuICAgICAgICAxOTksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDExMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDcyLFxuICAgICAgICA4MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTgxLFxuICAgICAgICA1MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA3N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDksXG4gICAgICAgICAgNDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDM3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDU3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDg4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTMyLFxuICAgICAgICA2NixcbiAgICAgICAgMTE3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTU4LFxuICAgICAgICA4NixcbiAgICAgICAgMTgxLFxuICAgICAgICA2OSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyOCxcbiAgICAgICAgMjExLFxuICAgICAgICA0NixcbiAgICAgICAgMjE0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMzgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMixcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDI5LFxuICAgICAgICA2NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDY0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDY3LFxuICAgICAgICAxOTksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTA4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDQ2LFxuICAgICAgICAwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTU5LFxuICAgICAgICA4NCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDc2LFxuICAgICAgICAzOCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ4S2tKeFZDZ2JYdzJBS3ErSEcxYlBKSDFsMjdqQWcvTUpYdXRuTG9QV3R3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJhV0RMZVhXclRTdWJWZTRIWnppelZnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjdjY2ZjMzkyLTQ4ZWMtNDc4Mi1hYjEyLTQ5ZTQwZDE4ZGMxZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4MyxcbiAgICAgIDUwLFxuICAgICAgMzUsXG4gICAgICA0OSxcbiAgICAgIDExMSxcbiAgICAgIDk3LFxuICAgICAgNTMsXG4gICAgICAxMTYsXG4gICAgICA4NCxcbiAgICAgIDExNixcbiAgICAgIDE0MCxcbiAgICAgIDI1NSxcbiAgICAgIDIyMCxcbiAgICAgIDE0MixcbiAgICAgIDI0LFxuICAgICAgMjA1LFxuICAgICAgMjE5LFxuICAgICAgMTA4LFxuICAgICAgMTYsXG4gICAgICAxMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3LFxuICAgICAgODMsXG4gICAgICAxODksXG4gICAgICAyMTMsXG4gICAgICAxNTMsXG4gICAgICAxMTAsXG4gICAgICA5MixcbiAgICAgIDYxLFxuICAgICAgMjAsXG4gICAgICAyMTcsXG4gICAgICAxODQsXG4gICAgICAyMzcsXG4gICAgICAxNjgsXG4gICAgICAxNzksXG4gICAgICA1OSxcbiAgICAgIDI0MixcbiAgICAgIDY3LFxuICAgICAgMTI3LFxuICAgICAgMTUyLFxuICAgICAgMTUxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkY5WFZMVjZQXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzMyNDc5MjM1MjU6NzVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIwNzE1OTMwODU4NzE1Njo3NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNORDd3WndIRU5YR2s3Z0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlNIR2lpeXpvaEp6V25GT0xMK0pqV2xYV0tMVUVvdC9wczZRYlF6TTIxam89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwib0VIRloycVZOTDB0dXpGcDlFZEQzWUUzZzdUdGE1ellpbitVRHl2ZkJqT3M1cWRmTWw0MmQ4SGF6SlBHaERxSGNvbnhBejFieEt4VjFVMWhhTmZjQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQTQ2c2hUNFNlZEo0UndNbUlvc0p4aGhIMmxWQ1hqRUlzTVZZLyt2ZVQ1RUdGdTF1NHFNbURPVWV6MjZ5V2pCT1hEWGl6azFjaUlzM3IyM0x1RGJGQ2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjMzMjQ3OTIzNTI1Ojc1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA1OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI4MzczNTkzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUHQxXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQdDEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJMREwzNUpIcWtiZ3h1Y0srZUhyUzhORXF5ZDA3Zkgrd3lzaHlNbWhvM2QwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5Mzg4NDkyMzIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyODM3MzU5NTk5MVwifSIKfQ=="  // PUT your SESSION_ID 


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
