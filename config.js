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
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/9dcef2b49909742db8dbd.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "null"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null,";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_26_08_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDg0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxODQsXG4gICAgICAgIDc4LFxuICAgICAgICAzOCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI5LFxuICAgICAgICAxODQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgODQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMjAyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE4LFxuICAgICAgICA4MixcbiAgICAgICAgMjIwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgODksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDcwLFxuICAgICAgICAxODYsXG4gICAgICAgIDkyLFxuICAgICAgICA3MCxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjI4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMSxcbiAgICAgICAgMjMwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTMwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTksXG4gICAgICAgIDgzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDU4LFxuICAgICAgICA0OCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDU2LFxuICAgICAgICAyNyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTMsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NixcbiAgICAgICAgMjMsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDkyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDM0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTM4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjE4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTM0LFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDIzLFxuICAgICAgICAxMDksXG4gICAgICAgIDIxMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA1OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA2MyxcbiAgICAgICAgOTksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTI4LFxuICAgICAgICA3MCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDMzLFxuICAgICAgICAxNSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMDksXG4gICAgICAgIDExNixcbiAgICAgICAgMjI5LFxuICAgICAgICAyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgODMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjUsXG4gICAgICAgIDg3LFxuICAgICAgICA3MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDk1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDU5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDU3LFxuICAgICAgICAxMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDU2LFxuICAgICAgICA5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDExNCxcbiAgICAgICAgODEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNzEsXG4gICAgICAgIDk3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNzJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTEzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI1LFxuICAgICAgICA2NixcbiAgICAgICAgMTU4LFxuICAgICAgICAxMzksXG4gICAgICAgIDY1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDkwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIwMixcbiAgICAgICAgNzMsXG4gICAgICAgIDk4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjE4LFxuICAgICAgICAzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDk5LFxuICAgICAgICAxODgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDc2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEwMixcbiAgICAgICAgNjksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDYwLFxuICAgICAgICAxOCxcbiAgICAgICAgODEsXG4gICAgICAgIDMyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDgwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyOSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDk0LFxuICAgICAgICA0MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTcyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDU3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMzEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDQyLFxuICAgICAgICAxMzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEzOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJQN280WkpIZ2liQkI3aUU5dXVyUW5IaDhzQ2xQUkc2UGN1SldxVmZpaEpzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzMzI0NzkyMzUyNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNTJBOERFNkMzRTg2MUI2NTY4QTM1MDQ0RTg3QjQ3RERcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI0Nzc5NTg4XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkVNUTk4YVh3UWYtLXNVejhBdEl0TFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiOGMzMDc0MjYtYzZmOS00ODc1LWJjZjgtOTY3ZDUwN2IzNjJlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1MyxcbiAgICAgIDEzNSxcbiAgICAgIDE3OSxcbiAgICAgIDQwLFxuICAgICAgMjQzLFxuICAgICAgMjAsXG4gICAgICA4LFxuICAgICAgODUsXG4gICAgICAyMDQsXG4gICAgICAyMixcbiAgICAgIDE1OCxcbiAgICAgIDI1MyxcbiAgICAgIDQyLFxuICAgICAgMjE3LFxuICAgICAgMTY3LFxuICAgICAgMjMyLFxuICAgICAgMTAwLFxuICAgICAgMTg3LFxuICAgICAgMTA3LFxuICAgICAgNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMixcbiAgICAgIDExOSxcbiAgICAgIDk0LFxuICAgICAgMTE2LFxuICAgICAgNTksXG4gICAgICAxMDgsXG4gICAgICAyMjIsXG4gICAgICAxODMsXG4gICAgICAxMzgsXG4gICAgICAwLFxuICAgICAgMTg0LFxuICAgICAgNTcsXG4gICAgICAzLFxuICAgICAgMTIxLFxuICAgICAgMTI0LFxuICAgICAgNjcsXG4gICAgICAxODEsXG4gICAgICAyMTMsXG4gICAgICA2NixcbiAgICAgIDIxNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJRRktBRjgzVFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjMzMjQ3OTIzNTI1Ojc2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMDcxNTkzMDg1ODcxNTY6NzZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSktxdytnRkVMdVl1TFlHR0NVZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI2cVhsVXBwN2RpTnpxeTIyQnhPYVpOUHFhU20xaEMxSkxpRFBlL0lUN2xrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjRRN013WnI1aDBKUE1HSlVNQkNKNEZuZ1ZEQjkvMmhuSm9WZ1Y1SjkybmdmWjNobE5NcXNKVVdncGNvRXY2NUd6ZFZ3UDZaTTFBYTlpV0d2QkRoZ0F3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImtwWkhVY0VFbk5XbW1FTC9VSzMwN2NxQ09jYUVMSWZWbGRFaGNoWGxEYXBTZ2theEtybEthNUt1bVdMT2FERm9ESTNZbllBaXVzN1NKNXlxTjk0RGlnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzMzI0NzkyMzUyNTo3NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA4OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI0Nzc5NTgzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRHg3XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEeDcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI1VWNFRk5nTGM4Q3hpbldxMklJYzhUaXpXYm1iV2IrMkpRV2JBMkNEdHFNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1NjEzODQyMTAsXCJjdXJyZW50SW5kZXhcIjoxNSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjMwMTAzNTg3ODJcIn0iCn0="  // PUT your SESSION_ID 


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
