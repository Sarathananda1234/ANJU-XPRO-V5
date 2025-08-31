//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibU9lN0oxcmo1anBUbmxPaWlHTGpTWEJ2dWREV0R1Q3RyYmROQStZM21VVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0pzTU5kSnMwaUpCZWdiV2t5VVc5ZklteUtyUHJkT2ZtZFZYajc3R3Izaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlSzc1RTNWRGI2U3BrV3hhRERjVzVCWHZ3THZuMnlFT1ZkYW5XUVg2cDBjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFemxNNjNyMm5PZ1ZZV2l0UUpkL1lySlh5bnVVQ1RVcVJMQXVwUUlTOHpjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitQM2xkd2pRdmRMVkNsbSt5OEZRamlCWHZBMXlZa3FCZTFNT2d0azFJRlE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkR6WnpCemJmM1JaTHI4QjBLbW80YnYzdzlBbUNzeDRncTdvbFkybHFaVDg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUdHemFFUENSaktLdWJQemduLy9PNjFlRE9sSVp1cklOdFlBUjZFQWhtcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiei9heEM5VzJaSzAxTkZkUkNYd2dZV0JHamI2VW9HTHlObUEyc2U3RUFBST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhFZS81ZzdPSUEybGpMenpOa1BrOGVvcDk4dXNkYy9BKzg2eVE2Y1h4YWE3MjNRMXh0b0RsV2NyL3ZETGdybllPUVNrRGkwNEYxR1Eyc1dPZlQ5SUFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzEsImFkdlNlY3JldEtleSI6IlU0TnRkQ3RNZUsyMmQvQ1ljbXRpelF3VXlzb0UwNCtlKzJobzNWK1BYMWs9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InRaRy1JN3VrUWQ2TDhUVXp0UW5HWUEiLCJwaG9uZUlkIjoiZTlmZGJmY2YtNDBlYy00NThiLThlOTgtMmQ1MWE2ZmU2NjRiIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndHNUNTck83STh3bWZTdExYV0tnY2FaSG50UT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNSExUMnZSYW5VTmJhbXo5NWpXK3BTaHlsbGM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWjFaM1RUQTEiLCJtZSI6eyJpZCI6Ijk0NzQyMzE0NDg1Ojg2QHMud2hhdHNhcHAubmV0IiwibmFtZSI6ImBSSU9gIiwibGlkIjoiMTc5NDIyODYyNzc0Mjk1Ojg2QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS0tnN05zSEVQNlQwc1VHR0FnZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZk5Ra3RMdFhCbjdKQ3RidWlxdGM3K2FyWmhyc2Npb1N4OUJldVl4aFRVWT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiNHdmMUNoZENxaktPYW9HRm1mZU1zaVB3ODdIR0cyUEkyZDU1bmMzN0FUM0xSZk9qSGtwMlRVNk9HR1pNakEvKzBDdjZuQXUxa2RqOEtaZy82SUc5RGc9PSIsImRldmljZVNpZ25hdHVyZSI6IkZVbDh0dURWcU01T0VleGgramFRRXVxQ3h2YVJFU3VibGFmcTJCK014bTRTMmNvcEc2L3hnWWFqT0ZHVU5yb1NjZXE4VFJZYVhhZFVJakh5VDVCU0R3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NDIzMTQ0ODU6ODZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWHpVSkxTN1Z3Wit5UXJXN29xclhPL21xMllhN0hJcUVzZlFYcm1NWVUxRyJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSURRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU2NjYyMjg1LCJsYXN0UHJvcEhhc2giOiIyVjc3cVUiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUJYTiJ9",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94742314485",
  PASSWORD: 
    process.env.PASSWORD || "sahan321456",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
