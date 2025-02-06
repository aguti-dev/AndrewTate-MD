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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_30_02_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDUzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDk5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDYyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDcyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDg2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0LFxuICAgICAgICA1MixcbiAgICAgICAgMjQwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTAyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDU4LFxuICAgICAgICA4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTkxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDc2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTA0LFxuICAgICAgICA3MixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDU4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDcxLFxuICAgICAgICAyNCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxODMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNDksXG4gICAgICAgIDQ3LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxODMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTcwLFxuICAgICAgICA3NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMTYsXG4gICAgICAgIDc2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDM4LFxuICAgICAgICA1NixcbiAgICAgICAgOTksXG4gICAgICAgIDEyMSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjM3LFxuICAgICAgICAwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDk3LFxuICAgICAgICA1MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3OSxcbiAgICAgICAgNTIsXG4gICAgICAgIDQwLFxuICAgICAgICAxNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNjksXG4gICAgICAgIDE2NixcbiAgICAgICAgMjM2LFxuICAgICAgICAyMTksXG4gICAgICAgIDg2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTE5LFxuICAgICAgICA0MixcbiAgICAgICAgOTAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDgzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMTAzLFxuICAgICAgICA5NSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTU1LFxuICAgICAgICA4NCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgODUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDg5LFxuICAgICAgICA2MixcbiAgICAgICAgMTkzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDI3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTA4LFxuICAgICAgICA4NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIzMixcbiAgICAgICAgODMsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMixcbiAgICAgICAgNyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDYzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDMzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQ0LFxuICAgICAgICA4OSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDczLFxuICAgICAgICAzMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDcyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgOTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MyxcbiAgICAgICAgMTIwLFxuICAgICAgICAzMixcbiAgICAgICAgMjE0LFxuICAgICAgICA1MSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNzksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA2OCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTEzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTE4LFxuICAgICAgICA2NixcbiAgICAgICAgNzIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjIyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDMyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDgwLFxuICAgICAgICAyMzksXG4gICAgICAgIDExMixcbiAgICAgICAgNTMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDY1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDg0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTY5LFxuICAgICAgICA4OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDU5LFxuICAgICAgICA4MSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTYzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjFMbEZlQTZIM1UraUN6djdXemlXWU5BaTMvWlJ4SEptVTAwcnUvN1FYQlU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjMzMjAxNTU1ODAxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI3QUIyNERBREY0RDNCNTNBQUEwQjIyMDM1RTMxQkVBNlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3Mzg4NjMwMzFcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRzRtMS10RUFRcHFvRW1YeTBXSlpJd1wiLFxuICBcInBob25lSWRcIjogXCJhMmJjYTkyMi05ZGNkLTQyZGMtOWM2MC0yY2RjNDFjZWZmMDlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkxLFxuICAgICAgMTU4LFxuICAgICAgMTk0LFxuICAgICAgMTA5LFxuICAgICAgMjA1LFxuICAgICAgOTAsXG4gICAgICAyMjcsXG4gICAgICA5MCxcbiAgICAgIDE4NSxcbiAgICAgIDIsXG4gICAgICAyMTAsXG4gICAgICA5OCxcbiAgICAgIDU2LFxuICAgICAgMTEyLFxuICAgICAgNTMsXG4gICAgICAxMTgsXG4gICAgICA0NyxcbiAgICAgIDI0NSxcbiAgICAgIDM3LFxuICAgICAgODNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjYsXG4gICAgICAxOTUsXG4gICAgICA5NSxcbiAgICAgIDE2NyxcbiAgICAgIDE1LFxuICAgICAgMjE0LFxuICAgICAgOTYsXG4gICAgICAyMjAsXG4gICAgICA1OCxcbiAgICAgIDIyOCxcbiAgICAgIDcyLFxuICAgICAgMTI4LFxuICAgICAgMTgsXG4gICAgICAxMTIsXG4gICAgICAxNjYsXG4gICAgICAyNTEsXG4gICAgICAxMTQsXG4gICAgICAyMTgsXG4gICAgICAxODksXG4gICAgICAyMDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRDU3TkNDQk5cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzMzIwMTU1NTgwMTozOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjQ3NTY2NDQ1MzY1NTU6MzhAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUFM0bzU4REVLM2prNzBHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJhVGJaTFN6a256K1BMUTBvQjlHMFZtVmhjcDJoUi9yeWtGZXlWR1ZjeG4wPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInpKaHZyakwxRlRGN0pNUnl4K3Boc0NjQ3VDdjA3ZzZ6bVI3ZEJaQ0w1UUVXT0dQUE1MWStWUTdRL29zZGhmRVlRY3NjY1NDUmdEL1lHZWlvaHlESUJnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImV3eGZnSzlaU1lYT20rMkhHeXplaFdEK2ZFQmxSM1lrVzF2WHB5WkV4VUxVQjBoaGk2cUthcVpkbHpYYmdVNm11NUZ0ck5QWjFTNTFJdWtvWXRmZ2h3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzMzIwMTU1NTgwMTozOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMjVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczODg2MzAyNSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJKc1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQkpzLmpzb24iOiAie1wia2V5RGF0YVwiOlwidXdGKzBQWXl0RkJBLzgveEl6bi9jaHZjRTNZbldsdUxPQ1loeG5BTE5Ecz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4NzA4OTg3OTMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzY4OTgyNjQ5NjhcIn0iCn0="  // PUT your SESSION_ID 


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
