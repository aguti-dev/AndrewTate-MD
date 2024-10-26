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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_07_46_10_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDg4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDIxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTcxLFxuICAgICAgICAxODMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTY1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTE4LFxuICAgICAgICA3MyxcbiAgICAgICAgMTU4LFxuICAgICAgICA5NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTYxLFxuICAgICAgICA3NixcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTExLFxuICAgICAgICA5NixcbiAgICAgICAgMTAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMCxcbiAgICAgICAgMixcbiAgICAgICAgMjUyLFxuICAgICAgICAxNjksXG4gICAgICAgIDI0LFxuICAgICAgICAzNSxcbiAgICAgICAgMTM3LFxuICAgICAgICA1MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjI0LFxuICAgICAgICAxODAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTkwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDU4LFxuICAgICAgICA4LFxuICAgICAgICA1MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxODYsXG4gICAgICAgIDg2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTUxLFxuICAgICAgICA1NixcbiAgICAgICAgNDAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjI0LFxuICAgICAgICA2MixcbiAgICAgICAgMjI3LFxuICAgICAgICA4OSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTg0LFxuICAgICAgICA5MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTYzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDU3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjU0LFxuICAgICAgICA3MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgODMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTIzLFxuICAgICAgICAzNixcbiAgICAgICAgMjA5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTU4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDQ3LFxuICAgICAgICAzMCxcbiAgICAgICAgMixcbiAgICAgICAgMTAxLFxuICAgICAgICA4MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgODUsXG4gICAgICAgIDYxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDM2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDg1LFxuICAgICAgICA3MyxcbiAgICAgICAgNSxcbiAgICAgICAgMjExLFxuICAgICAgICA2NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDkxLFxuICAgICAgICA2OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDgxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTM3LFxuICAgICAgICA2NixcbiAgICAgICAgMTM3LFxuICAgICAgICA4MCxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU3LFxuICAgICAgICA5OSxcbiAgICAgICAgODIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjE0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDk4LFxuICAgICAgICA4NixcbiAgICAgICAgNTQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDYyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDQwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgODEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTUyLFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgOTdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDU1LFxuICAgICAgICA0LFxuICAgICAgICA4NCxcbiAgICAgICAgODcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIyNixcbiAgICAgICAgODQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDc1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDQ3LFxuICAgICAgICA3NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDksXG4gICAgICAgIDkzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDEsXG4gICAgICAgIDQwLFxuICAgICAgICA0OCxcbiAgICAgICAgODUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDgyLFxuICAgICAgICA0OSxcbiAgICAgICAgOTksXG4gICAgICAgIDEzNixcbiAgICAgICAgMTY0LFxuICAgICAgICA3NixcbiAgICAgICAgMTEzLFxuICAgICAgICA2OSxcbiAgICAgICAgMTQwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMzUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwid29vL1hoUTdYcitIV0ZDOXhXYzF6WWZ3VlllOEEzbitBQzBaZTZDbit5Zz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUTVyMlVQTUdUalN2RkhrOHFkOXRad1wiLFxuICBcInBob25lSWRcIjogXCJjNWEzYjA2MS1kZjBkLTQyMWItYjdiYi0zYzU2NTJkMTI2ODVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYzLFxuICAgICAgMTgzLFxuICAgICAgNzMsXG4gICAgICAyNDAsXG4gICAgICA4MSxcbiAgICAgIDIwLFxuICAgICAgMTk3LFxuICAgICAgMCxcbiAgICAgIDE1OCxcbiAgICAgIDExMixcbiAgICAgIDE3NCxcbiAgICAgIDk1LFxuICAgICAgODYsXG4gICAgICAyNDIsXG4gICAgICAyMDEsXG4gICAgICAxMzQsXG4gICAgICAyNDEsXG4gICAgICAyMTEsXG4gICAgICAxNzAsXG4gICAgICA5NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzcsXG4gICAgICAyOSxcbiAgICAgIDk1LFxuICAgICAgNSxcbiAgICAgIDEyNyxcbiAgICAgIDc4LFxuICAgICAgMjQwLFxuICAgICAgNDgsXG4gICAgICA4MCxcbiAgICAgIDE5NyxcbiAgICAgIDE1MyxcbiAgICAgIDQwLFxuICAgICAgMjU1LFxuICAgICAgMjM5LFxuICAgICAgMTAzLFxuICAgICAgMjgsXG4gICAgICAyMCxcbiAgICAgIDc5LFxuICAgICAgMjUxLFxuICAgICAgMTIzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjhLQ1ZLMVhNXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzMyNDc5MjM1MjU6OTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIwNzE1OTMwODU4NzE1Njo5NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQcjlvL01GRU55ODhyZ0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImdqNlNFaElaZk5SNEtGOHNvYmFHbi9RdFh5WlFuK3pwdzJTNXZFb3Y5RzA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTGRnWU94enRDVC9BbXRjeDVRN0puYkgrMGNjTGhyY3ZXTmwxQ0JYNGt3dHBxMTZCK0JhaHZDRWZLS0dWTEhCSEJQUWFDSHdyUnJpWlY4dEtZa01JQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiajNEOEdKbGVScnM4RDhNSDhjSnE3Wm52U0ZBMG81YjVYNi92TCtNUWFmOVNxK0ZZQXVDWnB2S1R0VWVPWTM0STlRYVVRMlROMDE0QXVqdzd1TXlLaFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjMzMjQ3OTIzNTI1Ojk0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTA5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mjk5Mjg4MDAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDYkFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUNiQS5qc29uIjogIntcImtleURhdGFcIjpcInFEdDVLQTQ5REQvbnFPdFBEamM4YUVadVRLK1FhRVY1U2ZUMmNYbkpZdnc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTU4MzkzOTMwNyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
