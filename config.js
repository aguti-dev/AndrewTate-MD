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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_15_03_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDk3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDUyLFxuICAgICAgICAxODIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjA5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNixcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgODQsXG4gICAgICAgIDQyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDY4LFxuICAgICAgICA3NyxcbiAgICAgICAgOTMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjM4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDExNSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDQyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTU2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDM5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDQxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDQ4LFxuICAgICAgICAzMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDc2LFxuICAgICAgICA2OSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE4LFxuICAgICAgICA4NyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDksXG4gICAgICAgIDI0MixcbiAgICAgICAgNzAsXG4gICAgICAgIDY5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDYyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkzLFxuICAgICAgICA2OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDYxLFxuICAgICAgICA1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMzksXG4gICAgICAgIDI0NixcbiAgICAgICAgNjAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDQ2LFxuICAgICAgICAxODgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjA4LFxuICAgICAgICA3MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDcyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDYzLFxuICAgICAgICA5NSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMixcbiAgICAgICAgMTQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDY1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNzksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMzksXG4gICAgICAgIDI4LFxuICAgICAgICA1MixcbiAgICAgICAgMjI0LFxuICAgICAgICAyOSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNTEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjU1LFxuICAgICAgICAzNixcbiAgICAgICAgMTc1LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTM4LFxuICAgICAgICA2MixcbiAgICAgICAgMTkwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjU0LFxuICAgICAgICA5MSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjMzLFxuICAgICAgICA3LFxuICAgICAgICA0NSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDMzLFxuICAgICAgICA0MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgODksXG4gICAgICAgIDExOSxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDkwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAzM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDk5LFxuICAgICAgICAxMixcbiAgICAgICAgMTMwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTYxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQwLFxuICAgICAgICA2MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE1NixcbiAgICAgICAgOTksXG4gICAgICAgIDM4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2LFxuICAgICAgICAxMjksXG4gICAgICAgIDE5NixcbiAgICAgICAgMTgzLFxuICAgICAgICA5MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDY3LFxuICAgICAgICAxODUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE5LFxuICAgICAgICA2MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTcyLFxuICAgICAgICAxNjksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTM0LFxuICAgICAgICA2NixcbiAgICAgICAgNzMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDY3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDgyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTgwLFxuICAgICAgICA4OSxcbiAgICAgICAgODcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTQxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJINXZOeWU1ckkxMlZSN3ZTaGpoZHVGKzRjY1o0cG5vNWQwbFFQVGFUV3NZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzMzIwMTU1NTgwMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQjYxNjk5MzA1MUU0MUU1MzA5OUVFNDhBNzAxNzY5QzJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzQxNjMwNTM4XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImZRc0Z5ZlhFUjVPZTNqVW16S0g4d3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiMWRkNTRjNWEtNWFhNS00ZTZkLTg1M2EtMjk3NTdmMDAyZjVhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI4LFxuICAgICAgNzIsXG4gICAgICA4OCxcbiAgICAgIDM3LFxuICAgICAgMTcsXG4gICAgICA4MSxcbiAgICAgIDM1LFxuICAgICAgOTYsXG4gICAgICA4MixcbiAgICAgIDE0MCxcbiAgICAgIDE2NixcbiAgICAgIDIzLFxuICAgICAgNjQsXG4gICAgICAyMDcsXG4gICAgICAxOTAsXG4gICAgICAxNzgsXG4gICAgICAxMTgsXG4gICAgICAyNTEsXG4gICAgICA3NSxcbiAgICAgIDk1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3MyxcbiAgICAgIDE0NyxcbiAgICAgIDIyOSxcbiAgICAgIDE2MixcbiAgICAgIDE2NCxcbiAgICAgIDkxLFxuICAgICAgMjIyLFxuICAgICAgOTgsXG4gICAgICAxNzEsXG4gICAgICA5NixcbiAgICAgIDgsXG4gICAgICA2NyxcbiAgICAgIDEyNSxcbiAgICAgIDIyLFxuICAgICAgMTY1LFxuICAgICAgMjI5LFxuICAgICAgMjMxLFxuICAgICAgMTgzLFxuICAgICAgOTcsXG4gICAgICAxOTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTjc4WVBMWU5cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzMzIwMTU1NTgwMTo0OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjQ3NTY2NDQ1MzY1NTU6NDhAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi8J2UvvCdlZLwnZWT8J2VliDwnZWE8J2VmvCdlZjwnZWZ8J2VpSDwn6STXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUDI0bzU4REVMN1l2TDRHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJhVGJaTFN6a256K1BMUTBvQjlHMFZtVmhjcDJoUi9yeWtGZXlWR1ZjeG4wPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjBLcXAwRy8zTDA3L1ZIVUlJdmtNeWw1N0ZVL21VenNKcU9RTmxQY01PbXg2NWMyYW5mbjJHUnM2SWNnS2JOT0hoZUs3aGpaajJaQTF3YzdldUt6eER3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIitYUVJPK0Fyb1pjb0RBN3lKa3Fhbm11RVY4Rjc2MG14UlNFYWlhRXZCZlZnSmkrdzR2NnhFTklYWWVBZEtDcmVyU0U4dzQ0QStWVXdmWlNhcWR5RmdBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzMzIwMTU1NTgwMTo0OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMjVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0MTYzMDUzMSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUFwY1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQXBjLmpzb24iOiAie1wia2V5RGF0YVwiOlwiOGJLbmJjckhMZzE2Qy9rNEVCVkE1bWIxLzVpM0dZeE9ZTWRYMXh6YmUyUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4NzA4OTg4MTMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc0MTYzMDUzNTk4M1wifSIKfQ=="  // PUT your SESSION_ID 


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
