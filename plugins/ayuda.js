

let handler = async (m, { conn }) => {

    let info1 = '𝙰𝚈𝚄𝙳𝙰 𝙳𝙴𝙻 𝙱𝙾𝚃'


    let info
        = `
*𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝙲𝙸𝙾𝙽 𝙳𝙴𝙻 𝙱𝙾𝚃*
    
╭─[ *𝚃𝙰𝙺𝚄-𝙱𝙾𝚃-𝚇𝙳* ]
│ *➤ 𝙷𝙾𝙻𝙰 ${name}*
│
│ *ミ🤖 𝙴𝚂𝚃𝙰𝙳𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃 🤖彡*
│ *=> 𝙱𝙾𝚃 𝙰𝙲𝚃𝙸𝚅𝙾 ✅*
│ *=> 𝙱𝙾𝚃 𝙳𝙴 𝚄𝚂𝙾 𝙿𝚄𝙱𝙻𝙸𝙲𝙾 ✅*
│ *=> 𝚃𝙸𝙴𝙼𝙿𝙾 𝙰𝙲𝚃𝙸𝚅𝙾: ${uptime}*
╰───────────────
    
*¿𝚀𝚄𝙴 𝙴𝚂 𝚄𝙽 𝙱𝙾𝚃?*
    
𝚄𝚗 𝚋𝚘𝚝 𝚍𝚎 𝚠𝚑𝚊𝚝𝚜𝚊𝚙𝚙 𝚎𝚜 𝚞𝚗𝚊 𝚒𝚗𝚝𝚎𝚕𝚒𝚐𝚎𝚗𝚌𝚒𝚊 𝚊𝚛𝚝𝚒𝚏𝚒𝚌𝚒𝚊𝚕 𝚌𝚘𝚗 𝚕𝚊 𝚌𝚞𝚊𝚕 𝚙𝚘𝚍𝚛𝚊𝚜 𝚒𝚗𝚝𝚎𝚛𝚊𝚌𝚝𝚞𝚊𝚛
𝚊 𝚝𝚛𝚊𝚟𝚎𝚜 𝚍𝚎 𝚌𝚘𝚖𝚊𝚗𝚍𝚘𝚜 𝚚𝚞𝚎 𝚙𝚞𝚎𝚍𝚎𝚜 𝚟𝚎𝚛 𝚎𝚜𝚌𝚛𝚒𝚋𝚒𝚎𝚗𝚍𝚘 #menu, 𝚎𝚜𝚝𝚘𝚜 𝚌𝚘𝚖𝚊𝚗𝚍𝚘𝚜 𝚜𝚘𝚗 𝚌𝚊𝚙𝚊𝚌𝚎𝚜 
𝚍𝚎 𝚛𝚎𝚊𝚕𝚒𝚣𝚊𝚛 𝚍𝚒𝚟𝚎𝚛𝚜𝚊𝚜 𝚝𝚊𝚛𝚎𝚊𝚜 𝚌𝚘𝚖𝚘 𝚍𝚎𝚜𝚌𝚊𝚛𝚐𝚊𝚛 𝚖𝚞𝚜𝚒𝚌𝚊, 𝚟𝚒𝚍𝚎𝚘𝚜, 𝚌𝚛𝚎𝚊𝚛 𝚜𝚝𝚒𝚌𝚔𝚎𝚛𝚜, 𝚍𝚎𝚜𝚌𝚊𝚛𝚐𝚊 𝚍𝚎 
𝚒𝚖𝚊𝚐𝚎𝚗𝚎𝚜 𝚎𝚝𝚌. 𝚁𝚎𝚌𝚞𝚎𝚛𝚍𝚊 𝚚𝚞𝚎 𝚌𝚊𝚍𝚊 𝚌𝚘𝚖𝚊𝚗𝚍𝚘 𝚍𝚎𝚋𝚎 𝚜𝚎𝚛 𝚎𝚓𝚎𝚌𝚞𝚝𝚊𝚍𝚘 𝚌𝚘𝚗 𝚜𝚞 𝚙𝚛𝚎𝚏𝚒𝚓𝚘 # 𝚊𝚗𝚝𝚎𝚜 𝚍𝚎 𝚎𝚜𝚌𝚛𝚒𝚋𝚒𝚛𝚕𝚘, 𝚎𝚓𝚎𝚖𝚙𝚕𝚘 #aesthetic.
𝚂𝚒 𝚒𝚗𝚝𝚎𝚗𝚝𝚊𝚜 𝚙𝚘𝚗𝚎𝚛 𝚞𝚗 𝚌𝚘𝚖𝚊𝚗𝚍𝚘 𝚀𝚞𝚎 𝚗𝚘 𝚎𝚜 𝚍𝚎𝚕 𝚊𝚕 𝚋𝚘𝚝 𝚎𝚜𝚝𝚎 𝚜𝚒𝚖𝚙𝚕𝚎𝚖𝚎𝚗𝚝𝚎 𝚗𝚘 𝚛𝚎𝚜𝚙𝚘𝚗𝚍𝚎𝚛𝚊, 𝚊𝚜𝚒 𝚚𝚞𝚎 𝚛𝚎𝚟𝚒𝚜𝚊 𝚋𝚒𝚎𝚗 𝚎𝚕 𝚖𝚎𝚗𝚞 𝚍𝚎 𝚌𝚘𝚖𝚊𝚗𝚍𝚘𝚜 𝚍𝚒𝚜𝚙𝚘𝚗𝚒𝚋𝚕𝚎𝚜
  
    
*𝙵𝙰𝙻𝙻𝙾𝚂 𝙾 𝙻𝙴𝙽𝚃𝙸𝚃𝚄𝙳 𝙳𝙴 𝚁𝙴𝚂𝙿𝚄𝙴𝚂𝚃𝙰𝚂 𝙳𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂:*
    
𝚂𝚒 𝚋𝚒𝚎𝚗 𝚎𝚕 𝚋𝚘𝚝 𝚗𝚘 𝚎𝚜𝚝𝚊 𝚊𝚌𝚝𝚒𝚟𝚘 𝟸𝟺 𝚑𝚘𝚛𝚊𝚜 𝚍𝚎𝚕 𝚍𝚒𝚊 𝙿𝚎𝚛𝚘 𝚙𝚞𝚎𝚍𝚎 𝚚𝚞𝚎 𝚎𝚗 𝚍𝚎𝚝𝚎𝚛𝚖𝚒𝚗𝚊𝚍𝚘 𝚖𝚘𝚖𝚎𝚗𝚝𝚘 𝚎𝚕 𝚋𝚘𝚝 𝚍𝚎𝚓𝚎 𝚍𝚎 𝚏𝚞𝚗𝚌𝚒𝚘𝚗𝚊𝚛 𝚙𝚘𝚛 𝚞𝚗𝚘𝚜 𝚖𝚒𝚗𝚞𝚝𝚘𝚜 𝚜𝚒 𝚙𝚊𝚜𝚊 𝚖𝚊𝚜 𝚍𝚎 𝟷𝟶 𝚖𝚒𝚗𝚞𝚝𝚘𝚜 𝚜𝚎𝚛 𝚙𝚊𝚜𝚌𝚒𝚎𝚗𝚝𝚎𝚜, 𝚎𝚕 𝚋𝚘𝚝 𝚟𝚘𝚕𝚟𝚎𝚛𝚊. 𝚃𝚊𝚖𝚋𝚒𝚎𝚗 𝚙𝚞𝚎𝚍𝚎 𝚚𝚞𝚎 𝚟𝚊𝚛𝚒𝚘𝚜 𝚌𝚘𝚖𝚊𝚗𝚍𝚘𝚜 𝚗𝚘 𝚏𝚞𝚗𝚌𝚒𝚘𝚗𝚎𝚗 𝚍𝚎𝚋𝚒𝚍𝚘 𝚊 𝚖𝚊𝚕𝚊 𝚛𝚎𝚜𝚙𝚞𝚎𝚜𝚝𝚊 𝚍𝚎𝚕 𝚜𝚎𝚛𝚟𝚒𝚍𝚘𝚛, 𝚜𝚒 𝚗𝚘 𝚏𝚞𝚗𝚌𝚒𝚘𝚗𝚊 𝚜𝚒𝚖𝚙𝚕𝚎𝚖𝚎𝚗𝚝𝚎 𝚒𝚗𝚝𝚎𝚗𝚝𝚊 𝚎𝚗 𝚘𝚝𝚛𝚘 𝚖𝚘𝚖𝚎𝚗𝚝𝚘.
    
*𝙲𝚁𝙴𝙰𝙳𝙾𝚁:*
    
*𝙴𝚂𝚃𝙴 𝙱𝙾𝚃 𝙴𝚂 𝙶𝚁𝙰𝚃𝙸𝚂, 𝙽𝙾 𝚃𝙸𝙴𝙽𝙴 𝙽𝙸𝙽𝙶𝚄𝙽 𝙵𝙸𝙽 𝙳𝙴 𝙻𝚄𝙲𝚁𝙾, 𝙴𝙻 𝙱𝙾𝚃 𝙵𝚄𝙴 𝙲𝚁𝙴𝙰𝙳𝙾 𝙿𝙾𝚁 𝚃𝙰𝙺𝚄 𝙿𝚁𝙾𝙶𝚁𝙰𝙼𝙰𝙳𝙾𝚁 𝙽𝙾𝚅𝙰𝚃𝙾.*

*𝙻𝙸𝙼𝙸𝚃𝙴𝚂*

𝙿𝚊𝚛𝚊 𝚎𝚟𝚒𝚝𝚊𝚛 𝚊𝚋𝚞𝚜𝚘𝚜 𝚍𝚎𝚕 𝚋𝚘𝚝, 𝚎𝚜𝚝𝚎 𝚝𝚒𝚎𝚗𝚎 𝚞𝚗 𝚜𝚒𝚜𝚝𝚎𝚖𝚊 𝚍𝚎 𝚕𝚒𝚖𝚒𝚝𝚎𝚜 𝚎𝚕 𝚌𝚞𝚊𝚕 𝚝𝚎 𝚌𝚘𝚗𝚜𝚞𝚖𝚒𝚛𝚊 𝚜𝚎𝚐𝚞𝚗 𝚎𝚕 𝚌𝚘𝚖𝚊𝚗𝚍𝚘 𝚎𝚓𝚎𝚌𝚞𝚝𝚊𝚍𝚘, 𝚙𝚘𝚛 𝚍𝚎𝚏𝚎𝚌𝚝𝚘 𝚜𝚎 𝚘𝚝𝚘𝚛𝚐𝚊𝚗 𝟷𝟻 𝚕𝚒𝚖𝚒𝚝𝚎𝚜 𝚙𝚘𝚛 𝚞𝚜𝚞𝚊𝚛𝚒𝚘 𝚙𝚎𝚛𝚘 𝚙𝚞𝚎𝚍𝚎𝚜 𝚘𝚋𝚝𝚎𝚗𝚎𝚛 𝚖𝚊𝚜 𝚊𝚕 𝚍𝚒𝚊 𝚞𝚜𝚊𝚗𝚍𝚘 𝚎𝚕 𝚌𝚘𝚖𝚊𝚗𝚍𝚘 #𝚛𝚎𝚌𝚕𝚊𝚖𝚊𝚛𝚡𝚙, 𝚞𝚗𝚊 𝚟𝚎𝚣 𝚑𝚎𝚌𝚑𝚘 𝚎𝚜𝚝𝚘 𝚎𝚓𝚎𝚌𝚞𝚝𝚊𝚛 𝚎𝚕 𝚌𝚘𝚖𝚊𝚗𝚍𝚘 #𝚋𝚞𝚢𝚊𝚕𝚕 𝚙𝚊𝚛𝚊 𝚘𝚋𝚝𝚎𝚗𝚎𝚛 𝚖𝚊𝚜 𝚕𝚒𝚖𝚒𝚝𝚎𝚜. 𝚁𝚎𝚌𝚞𝚎𝚛𝚍𝚊 𝚚𝚞𝚎 𝚜𝚘𝚕𝚘 𝚎𝚜 𝚙𝚘𝚜𝚒𝚋𝚕𝚎 𝚞𝚗𝚊 𝚟𝚎𝚣 𝚊𝚕 𝚍𝚒𝚊 𝚊𝚜𝚒 𝚚𝚞𝚎 𝚞𝚜𝚊𝚕𝚘𝚜 𝚜𝚊𝚋𝚒𝚊𝚖𝚎𝚗𝚝𝚎. 𝙳𝚎 𝚒𝚐𝚞𝚊𝚕 𝚖𝚊𝚗𝚎𝚛𝚊 𝚜𝚒 𝚎𝚛𝚎𝚜 𝚊𝚌𝚝𝚒𝚟𝚘 𝚎 𝚒𝚗𝚝𝚎𝚛𝚊𝚌𝚝𝚞𝚊𝚜 𝚌𝚘𝚗 𝚎𝚕 𝚋𝚘𝚝 𝚙𝚘𝚍𝚛𝚊𝚜 𝚌𝚘𝚖𝚙𝚛𝚊𝚛 𝚖𝚊𝚜 𝚕𝚒𝚖𝚒𝚝𝚎𝚜 𝚊𝚕 𝚐𝚊𝚗𝚊𝚛 𝚖𝚊𝚜 𝙴𝚇𝙿.
𝙴𝚇𝙿 = 𝙴𝚡𝚙𝚎𝚛𝚒𝚎𝚗𝚜𝚊 𝚍𝚎 𝚞𝚜𝚘 𝚍𝚎𝚕 𝚋𝚘𝚝
    
*𝙴𝙽𝚃𝚁𝙰𝚁 𝙰 𝙶𝚁𝚄𝙿𝙾𝚂 𝙾 𝚄𝚂𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃 𝙴𝙽 𝙿𝚅*
    
𝚂𝙴 𝙰𝙳𝙼𝙸𝚃𝙴 𝚄𝚂𝙰𝚁 𝙴𝙻 𝙱𝙾𝚃 𝙴𝙽 𝙿𝚁𝙸𝚅𝙰𝙳𝙾, 𝚂𝙸 𝚅𝙰𝚂𝙰 𝙰 𝙸𝙽𝚅𝙸𝚃𝙰𝚁 𝙰𝙻 𝙱𝙾𝚃 𝙰 𝚃𝚄 𝙶𝚁𝚄𝙿𝙾, 𝙴𝙻 𝙲𝚁𝙴𝙰𝙳𝙾𝚁 𝙾𝚆𝙽𝙴𝚁 𝙳𝙴𝙻 𝙱𝙾𝚃 𝚃𝙸𝙴𝙽𝙴 𝚀𝚄𝙴 𝚂𝙴𝚁 𝙰𝙳𝙼𝙸𝙽𝚂.
    
*𝚁𝙴𝙿𝙾𝚂𝙸𝚃𝙾𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*
 
𝙰𝚚𝚞𝚒 𝚝𝚑𝚎 𝚍𝚎𝚓𝚘 𝚎𝚕 𝚛𝚎𝚙𝚘𝚜𝚒𝚝𝚘𝚛𝚒𝚘 𝚘𝚏𝚏𝚒𝚌𝚒𝚊𝚕 𝚍𝚎𝚕 𝙱𝚘𝚝, 𝙱𝚘𝚝 𝚎𝚍𝚒𝚝𝚊𝚋𝚕𝚎. 𝚕𝚒𝚗𝚔 𝚍𝚎 𝚍𝚎𝚜𝚌𝚊𝚛𝚐𝚊 𝚝𝚘𝚝𝚊𝚕𝚖𝚎𝚗𝚝𝚎 𝚐𝚛𝚊𝚝𝚞𝚒𝚝𝚘𝚞𝚜  https://github.com/THETAKU09/Taku-Bot-xD *𝙰𝚀𝚄𝙸 𝚃𝙴𝙽𝙳𝚁𝙰𝚂 𝙻𝙰 𝙸𝙽𝚂𝚃𝚁𝚄𝙲𝙲𝙸𝙾𝙽𝙴𝚂 𝙳𝙴 𝙲𝙾𝙼𝙾 𝚃𝙴𝙽𝙴𝚁 𝙴𝙻 𝙱𝙾𝚃 𝙴𝙽 𝚃𝚄 𝙽𝚄𝙼𝙴𝚁𝙾*

*𝚂𝚄𝙱 𝙱𝙾𝚃𝚂*

𝙷𝚊𝚢 𝚞𝚗𝚊 𝚖𝚊𝚗𝚎𝚛𝚊 𝚍𝚎 𝚝𝚎𝚗𝚎𝚛 𝚎𝚕 B𝚘𝚝 𝚎𝚗 𝚝𝚞 𝚗𝚞𝚖𝚎𝚛𝚘 𝙼𝚊𝚜 𝚜𝚎𝚗𝚌𝚒𝚕𝚕𝚊, *𝙲𝙾𝙽 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾* #jadibot 𝙿𝚘𝚍𝚛𝚊𝚜 𝚂𝚎𝚛 𝚂𝚄𝙱 𝙱𝙾𝚃 𝙳𝙴 𝚃𝙰𝙺𝚄-𝙱𝙾𝚃-𝙼𝙳
*¿𝚀𝚄𝙴 𝙴𝚂 𝚄𝙽 𝚂𝚄𝙱 𝙱𝙾𝚃?*
𝚄𝚗 𝚂𝚞𝚋 𝙱𝚘𝚝 𝚎𝚜 𝙴𝚜 𝚞𝚗𝚊 𝚌𝚘𝚙𝚒𝚊 𝚍𝚎𝚕 𝙱𝚘𝚝 𝚘𝚛𝚒𝚐𝚒𝚗𝚊𝚕 𝚍𝚘𝚗𝚍𝚎 𝚙𝚘𝚍𝚛𝚊 𝚊𝚜𝚎𝚛 𝚕𝚊𝚜 𝚖𝚒𝚜𝚖𝚊𝚜 𝙵𝚞𝚗𝚌𝚒𝚘𝚗𝚎𝚜 𝙳𝙴𝙻 𝙱𝙾𝚃 𝚘𝚛𝚒𝚐𝚒𝚗𝚊𝚕.
¿𝙲𝙾𝙼𝙾 𝙿𝚄𝙴𝙳𝙾 𝙳𝙴𝙹𝙰𝚁 𝙳𝙴 𝚂𝙴𝚁 𝚂𝚄𝙱 𝙱𝙾𝚃?
𝚂𝚒 𝚚𝚞𝚒𝚎𝚛𝚎𝚜 𝚍𝚎𝚓𝚊𝚛 𝚍𝚎 𝚜𝚎𝚛 𝚜𝚞𝚋 𝙱𝚘𝚝 𝙴𝚜𝚌𝚛𝚒𝚋𝚒𝚛 #stopjadibot 𝚈 𝙳𝚎𝚓𝚊𝚛𝚊𝚜 𝚍𝚎 𝚜𝚎𝚛 𝚜𝚞𝚋 𝙱𝚘𝚝, 𝚘 𝚝𝚊𝚖𝚋𝚒𝚎𝚗 𝚙𝚞𝚎𝚍𝚎𝚜 𝚌𝚎𝚛𝚛𝚊𝚛 𝚜𝚎𝚜𝚜𝚒𝚘𝚗 𝙴𝚗 𝚆𝚑𝚊𝚝𝚜𝙰𝚙𝚙 𝚆𝙴𝙱 𝙻𝚘 𝚌𝚞𝚊𝚕 𝚗𝚘 𝚙𝚘𝚍𝚛𝚊𝚜 𝚜𝚎𝚛 𝚜𝚞𝚋 𝙽𝚘𝚝 𝚊𝚜𝚝𝚊 𝚚𝚞𝚎 𝚟𝚞𝚎𝚕𝚟𝚊𝚜 𝚊 𝚎𝚜𝚌𝚊𝚗𝚎𝚊𝚛 𝚎𝚕 𝙲𝚘𝚍𝚒𝚐𝚘 𝚀𝚁 𝙳𝚎 𝚗𝚞𝚎𝚟𝚘
*𝙽𝙾 𝙴𝚂 𝙽𝙴𝙲𝙴𝚂𝙰𝚁𝙸𝙾 𝙴𝚂𝙲𝙰𝙽𝙴𝙰𝚁 𝙴𝙻 𝙲𝙾𝙳𝙸𝙶𝙾 𝙲𝙰𝙳𝙰 𝚅𝙴𝚉 𝚀𝚄𝙴 𝙴𝙻 𝙱𝙾𝚃 𝚂𝙴 𝙳𝙴𝚂𝙲𝙾𝙽𝙴𝙲𝚃𝙰, 𝚂𝙾𝙻𝙾 𝙿𝙾𝙽𝙴𝚁 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾:* #getcode  *𝚈 𝙴𝙻 𝙱𝙾𝚃 𝚃𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙰 𝚄𝙽 𝙲𝙾𝙳𝙸𝙶𝙾 𝙴𝙽 𝙻𝙴𝚃𝚁𝙰𝚂 𝙻𝙾 𝙲𝚄𝙰𝙻 𝚃𝙴𝙽𝙳𝚁𝙰𝚂 𝚀𝚄𝙴 𝙴𝙽𝚅𝙸𝙰𝚁 𝙰𝙻 𝙱𝙾𝚃 𝙲𝙰𝙳𝙰 𝚅𝙴𝚉 𝚀𝚄𝙴 𝙴𝙻 𝙱𝙾𝚃 𝚂𝙴 𝙳𝙴𝚂𝙲𝙾𝙽𝙴𝙲𝚃𝙴* 𝙴𝙹𝙴𝙼𝙿𝙻𝙾: #jadibot (ᴄᴏᴅɪɢᴏ) *𝚈 𝚈𝙰 𝙴𝚂𝚃𝙰𝚁𝙰𝚂 𝙲𝙸𝙴𝙽𝙳𝙾 𝚂𝚄𝙱 𝙱𝙾𝚃 𝙽𝚄𝙴𝚅𝙰𝙼𝙴𝙽𝚃𝙴*

𝙽𝙾𝚃𝙰: ᴇʟ ᴄᴏᴍᴍᴀɴᴅᴏ ᴊᴀᴅɪʙᴏᴛ ɴᴏ ᴇsᴛᴀ 100% ᴛʀᴀʙᴀᴊᴀᴅᴏ ᴘᴜᴇᴅᴇ ǫᴜᴇ ᴛᴇ ᴅᴇ ᴜɴ ᴇʀʀᴏʀ, ʀᴇᴍᴏᴍᴇɴᴅᴀᴅᴏ ᴇs ǫᴜᴇ ɪɴsᴛᴀʟᴇs ᴇʟ ʙᴏᴛ ᴇɴ ᴛᴇʀᴍᴜx


*𝙴𝙹𝙴𝙲𝚄𝚃𝙰𝚁 𝙴𝙽 𝚃𝙴𝚁𝙼𝚄𝚇*
1. Escribe asi como esta en la lista de orden cada comando para ejecutar en Termux

$ termux-setup-storage
$ apt upgrade && apt update
$ pkg upgrade && pkg update
$ pkg install git -y
$ pkg install nodejs -y
$ pkg install ffmpeg -y
$ pkg install imagemagick -y
$ pkg install yarn
$ git clone https://github.com/THETAKU09/Taku-Bot-xD.git (si descargas el archivo zip: cd storage)
$ cd Taku-Bot-xD
$ npm install NOTA: si aparece error "symlink" ejecutar: npm install --no-bin-links
$ npm start
```
2. Espera a que el bot inicie...
3. Escanea el codigo QR desde un segundo dispositivo, o si tienes PC puedes tomar captura enviarla al WhatsApp web y desde ahi escanear el QR. (Ve a whatsapp > Disposivos vinculados > Pulsa en `Multi Device` > Pulsa en `Vincular Dispositivo`)

 *𝙳𝙸𝚂𝙵𝚁𝚄𝚃𝙰 𝙳𝙴𝙻 𝙱𝙾𝚃*
BY Taku-Bot-xD/Leonardo ;)
`
    conn.sendButton(m.chat, info1, info, author, [['MENU💬', `#menu`]], m)
}


handler.customPrefix = /ayuda|terminos|infobot|informacion|dildo|botmorto/i
handler.command = new RegExp
handler.help = ['ayuda']
handler.tags = ['main']
handler.fail = null
export default handler

