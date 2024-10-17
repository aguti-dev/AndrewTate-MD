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
global.readcmds = process.env.READ_COMMAND || "no"
global.readmessage = process.env.READ_MESSAGE || "no"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "no,";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "no"
global.save_status = process.env.AUTO_SAVE_STATUS || "no"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "no,";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "no,";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_08_10_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjAzLFxuICAgICAgICA2OCxcbiAgICAgICAgMTgyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTA0LFxuICAgICAgICA1MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTA5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjM5LFxuICAgICAgICA3NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxLFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzEsXG4gICAgICAgIDI1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDczLFxuICAgICAgICA4OCxcbiAgICAgICAgMzksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNixcbiAgICAgICAgMTA2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzMixcbiAgICAgICAgNTQsXG4gICAgICAgIDMzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDcxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDMzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgNzgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDYwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDExNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDcsXG4gICAgICAgIDY5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxODYsXG4gICAgICAgIDgwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDkxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjE0LFxuICAgICAgICA3MixcbiAgICAgICAgMTM1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMixcbiAgICAgICAgMTczLFxuICAgICAgICAxODEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTUxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNjksXG4gICAgICAgIDM4LFxuICAgICAgICAxMTksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTg1LFxuICAgICAgICA2OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgODMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTY0LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxODYsXG4gICAgICAgIDMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTUzLFxuICAgICAgICAyMjksXG4gICAgICAgIDU0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDc0LFxuICAgICAgICA0NixcbiAgICAgICAgMjEwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDc5LFxuICAgICAgICA1NCxcbiAgICAgICAgMjAyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDUzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIyMixcbiAgICAgICAgNzIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTEwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTg3LFxuICAgICAgICA3NCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDk3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgODYsXG4gICAgICAgIDkwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE4LFxuICAgICAgICAzMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDcyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTg1LFxuICAgICAgICA0M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMjZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA0NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MixcbiAgICAgICAgMjIyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgODAsXG4gICAgICAgIDMyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTIwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDk5LFxuICAgICAgICA1MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTMsXG4gICAgICAgIDMxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDQzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDc2LFxuICAgICAgICA3NyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMjksXG4gICAgICAgIDIyNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTI1LFxuICAgICAgICA3MixcbiAgICAgICAgMjIsXG4gICAgICAgIDg1LFxuICAgICAgICA3NixcbiAgICAgICAgODMsXG4gICAgICAgIDIsXG4gICAgICAgIDI2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDU5LFxuICAgICAgICAyMzksXG4gICAgICAgIDE5NCxcbiAgICAgICAgOTksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTM2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxODIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUFJTOWUrTDNxbFZxaVYzSWNYWGpVNEM0Znk4Ymc5Tnd3VGJSak5XY3phdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzMyNDc5MjM1MjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjZERUM5OTYxQzRDREEwNTEyOTYwRDJFQUE2NjhFQzlBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyOTE3MDQ4NFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzMzI0NzkyMzUyNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQjJFQ0Y4RjAwRDA4NjVDQzA5QUNDNTFDQjQwQkIyNEVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI5MTcwNDg1XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjMzMjQ3OTIzNTI1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJGQTYyQzY5QjA2QTJDNDRBRUMzNDFBQTA4Q0EyM0YzRVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjkxNzA0ODdcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzMyNDc5MjM1MjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjY3MzQ2RDk0OEQ2QjUxNkEwMkU1NjZEMUJBMUIwNjZCXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyOTE3MDQ4OFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJDV05tQ0FTYVRiLWJCcEdYMFVKS3J3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjU1NmVjNTFiLWM1ZGQtNGZkNS04MjdjLTRmODE5Yzg3MmJjZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDcsXG4gICAgICAxNTAsXG4gICAgICAyNTMsXG4gICAgICAxOTgsXG4gICAgICAxNjMsXG4gICAgICAyNTQsXG4gICAgICAxMDIsXG4gICAgICAyNDksXG4gICAgICAyNDEsXG4gICAgICAxNDIsXG4gICAgICAxNTksXG4gICAgICAxODcsXG4gICAgICAzNixcbiAgICAgIDQ4LFxuICAgICAgMTQwLFxuICAgICAgNTMsXG4gICAgICA5MyxcbiAgICAgIDE5NixcbiAgICAgIDk1LFxuICAgICAgMjA4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5OSxcbiAgICAgIDEyNixcbiAgICAgIDE3OCxcbiAgICAgIDIyMyxcbiAgICAgIDE5MCxcbiAgICAgIDI2LFxuICAgICAgMjQ0LFxuICAgICAgNjksXG4gICAgICA5MyxcbiAgICAgIDQ0LFxuICAgICAgMTEwLFxuICAgICAgNTIsXG4gICAgICAxNDMsXG4gICAgICAxMjUsXG4gICAgICA0OSxcbiAgICAgIDEyMSxcbiAgICAgIDE4OSxcbiAgICAgIDEyMixcbiAgICAgIDI1MSxcbiAgICAgIDI4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlMzOVlCU1dNXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzMyNDc5MjM1MjU6NzZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIwNzE1OTMwODU4NzE1Njo3NkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLwn4eyIPCfh7cg8J+HvCDwn4euIPCfh7Eg8J+HsVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0kvTms3c0hFS3lZeExnR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQmJvb0pqVVlJczBWQTMzYVlVbUtvZUlpd1FPNHErSU1aS2phY1hVSFFTbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIzWXBkLzlBSUxmRC9CWGtUTVlTUWFmdnk5SS9wQ0RwQUFDaEhGZk1GVmZabFUrYk12K1VYTlhRRE9QZG1BdnFQYnpNalQyQzlFOGIzZVRDNklVUFVEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIwZlVqOTBYaHRDd1AzNU5ITXc0UGxGamJRcFNWYVBlbllLb1AyK2xySVpOWWhJS0JuR1dpbXhaZE53QXI4aHIvRjJlbmtNdkhkSjZMUDFiMDVDY3ZnUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzMyNDc5MjM1MjU6NzZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA0MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI5MTcwNDgyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTGROXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMZE4uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJJdm5ELzVlVXBqQ0hmOXNIQmFMdGJoMEQrMUxCalFYTXd2SGJHMHhyTXI0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwMDMxMDEzMjcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyOTE3MDQ4MzIzOVwifSIKfQ=="  // PUT your SESSION_ID 


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
