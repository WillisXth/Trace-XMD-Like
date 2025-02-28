const {
  exec
} = require("child_process");
const {
  king
} = require("../france/king");
const {
  Sticker,
  StickerTypes
} = require('wa-sticker-formatter');
const {
  ajouterOuMettreAJourJid,
  mettreAJourAction,
  verifierEtatJid
} = require('../data/antilien');
const {
  atbajouterOuMettreAJourJid,
  atbverifierEtatJid
} = require("../data/antibot");
const {
  search,
  download
} = require("aptoide-scraper");
const fs = require("fs-extra");
const conf = require('../set');
const {
  default: axios
} = require('axios');
const {
  getBinaryNodeChild,
  getBinaryNodeChildren
} = require("@whiskeysockets/baileys")["default"];
king({
  'nomCom': "app",
  'aliases': ["apk", "application"],
  'reaction': '✨',
  'categorie': "Download"
}, async (_0x538b92, _0x35c95b, _0x1bdb68) => {
  const {
    repondre: _0x36664b,
    arg: _0x17723b,
    ms: _0x1ecf6e
  } = _0x1bdb68;
  try {
    const _0x2912a5 = _0x17723b.join(" ");
    if (!_0x2912a5) {
      return _0x36664b("*Enter the name of the application to search for*");
    }
    const _0x2b0936 = await axios.get("https://api.junn4.my.id/search/playstore?query=" + encodeURIComponent(_0x2912a5));
    const _0x754d7 = _0x2b0936.data;
    if (_0x754d7.status !== 0xc8 || !_0x754d7.result || _0x754d7.result.length === 0x0) {
      return _0x36664b("*Can't find application, please enter another name*");
    }
    const _0x2ab8cf = _0x754d7.result[0x0];
    const _0x592cb5 = "*🌠FLASH-MD APPLICATION🌠*\n\n" + ("*Name:* " + _0x2ab8cf.nama + "\n") + ("*Developer:* " + _0x2ab8cf.developer + "\n") + ("*Rating:* " + _0x2ab8cf.rate + "\n") + ("*Download Link:* " + _0x2ab8cf.link + "\n") + ("*Developer's Apps:* " + _0x2ab8cf.link_dev);
    const _0x28ab9c = {
      'image': {
        'url': _0x2ab8cf.img
      },
      'caption': _0x592cb5
    };
    await _0x35c95b.sendMessage(_0x538b92, _0x28ab9c, {
      'quoted': _0x1ecf6e
    });
    _0x36664b("Application details and link to the Play Store have been sent.");
  } catch (_0x55ee09) {
    console.error("Error during apk command processing:", _0x55ee09.response ? _0x55ee09.response.data : _0x55ee09.message);
    _0x36664b("*Error during apk command processing: " + _0x55ee09.message + '*');
  }
});
king({
  'nomCom': 'add',
  'categorie': "Group",
  'reaction': '👨🏿‍💼'
}, async (_0x59e7a6, _0x19a67a, _0x16a486) => {
  let {
    repondre: _0x315b5a,
    verifAdmin: _0x275af4,
    msgRepondu: _0x1675e5,
    infosGroupe: _0x1dcc86,
    auteurMsgRepondu: _0x4eead4,
    verifGroupe: _0x281bc8,
    auteurMessage: _0x25661e,
    superUser: _0x31defe,
    idBot: _0x57a27f,
    arg: _0x3068c6
  } = _0x16a486;
  if (!_0x281bc8) {
    return _0x315b5a("*This command works in groups only!*");
  }
  if (!_0x31defe) {
    _0x315b5a("You are too weak to do that");
    return;
  }
  ;
  if (!_0x275af4) {
    _0x315b5a("You are not an admin here!");
    return;
  }
  ;
  let _0x8cf14d;
  try {
    _0x8cf14d = await _0x19a67a.groupMetadata(_0x59e7a6);
  } catch (_0x17709a) {
    return _0x315b5a("Failed to fetch group metadata.");
  }
  let _0xf075b2 = _0x8cf14d.participants;
  if (!_0x3068c6[0x0]) {
    return _0x315b5a("Provide number to be added. Example:\nadd 254722222222");
  }
  let _0xb4cbd8 = _0x3068c6.join(" ");
  const _0xe10136 = _0xf075b2.map(_0x486768 => _0x486768.id);
  let _0x5eae1b = [];
  let _0x2ab6fc = [];
  try {
    const _0x4f5e4b = await Promise.all(_0xb4cbd8.split(',').map(_0x443902 => _0x443902.replace(/[^0-9]/g, '')).filter(_0x48ac20 => _0x48ac20.length > 0x4 && _0x48ac20.length < 0x14).map(async _0x283c9a => [_0x283c9a, await _0x19a67a.onWhatsApp(_0x283c9a + "@s.whatsapp.net")]));
    _0x4f5e4b.forEach(([_0x470e8c, _0x4a021f]) => {
      const _0x5ccddb = _0x470e8c + "@s.whatsapp.net";
      if (_0xe10136.includes(_0x5ccddb)) {
        _0x2ab6fc.push(_0x5ccddb);
      } else if (_0x4a021f[0x0]?.["exists"]) {
        _0x5eae1b.push(_0x470e8c + "@c.us");
      }
    });
  } catch (_0x1c0570) {
    return _0x315b5a("Error validating phone numbers.");
  }
  for (const _0x530a17 of _0x2ab6fc) {
    _0x315b5a("That user is already in this group!");
  }
  let _0x1a7cb7;
  try {
    if (_0x5eae1b.length > 0x0) {
      _0x1a7cb7 = await _0x19a67a.query({
        'tag': 'iq',
        'attrs': {
          'type': "set",
          'xmlns': "w:g2",
          'to': _0x59e7a6
        },
        'content': _0x5eae1b.map(_0x204406 => ({
          'tag': "add",
          'attrs': {},
          'content': [{
            'tag': "participant",
            'attrs': {
              'jid': _0x204406
            }
          }]
        }))
      });
      for (const _0x393192 of _0x5eae1b) {
        _0x315b5a("Successfully added @" + _0x393192.split('@')[0x0]);
      }
    }
  } catch (_0x17825d) {
    return _0x315b5a("Failed to add user to the group!");
  }
  let _0x1036d1;
  try {
    _0x1036d1 = await _0x19a67a.profilePictureUrl(_0x59e7a6, 'image')["catch"](() => 'https://telegra.ph/file/39436fea9098ae0aeded3.jpg');
  } catch (_0x3fc924) {
    _0x1036d1 = 'https://telegra.ph/file/39436fea9098ae0aeded3.jpg';
  }
  let _0x16504c = Buffer.alloc(0x0);
  if (_0x1036d1) {
    try {
      const _0x481b25 = await fetch(_0x1036d1);
      if (_0x481b25.ok) {
        _0x16504c = await _0x481b25.buffer();
      } else {
        console.error("Failed to fetch profile picture:", _0x481b25.statusText);
      }
    } catch (_0x2d9b0a) {
      console.error("Error fetching profile picture:", _0x2d9b0a);
    }
  }
  const _0x1f4d91 = _0x1a7cb7?.["content"]["find"](_0x7e6e2 => _0x7e6e2.tag === "add");
  const _0x521d6a = _0x1f4d91?.['content']['filter'](_0x3cf154 => _0x3cf154.attrs.error == 0x193);
  let _0x44e705;
  try {
    _0x44e705 = await _0x19a67a.groupInviteCode(_0x59e7a6);
  } catch (_0x365805) {
    return _0x315b5a("Failed to generate group invite code.");
  }
  for (const _0x21991a of _0x521d6a || []) {
    const _0x4b6e93 = _0x21991a.attrs.jid;
    const _0xc2ecf0 = _0x21991a.content.find(_0x3b472c => _0x3b472c.tag === "add_request");
    const _0x3fb8cd = _0xc2ecf0.attrs.code;
    const _0x42d614 = _0xc2ecf0.attrs.expiration;
    const _0x472bbd = "I cannot add @" + _0x4b6e93.split('@')[0x0] + " due to privacy settings, Let me send an invite link instead.";
    await _0x315b5a(_0x472bbd);
    let _0x475286 = "You have been invited to join the group " + _0x8cf14d.subject + ":\n\nhttps://chat.whatsapp.com/" + _0x44e705 + "\n\n*POWERED BY FLASH-MD 🤖*";
    await _0x19a67a.sendMessage(_0x4b6e93, {
      'image': {
        'url': _0x1036d1
      },
      'caption': _0x475286
    }, {
      'quoted': _0x1675e5
    });
  }
});
king({
  'nomCom': 'broadcast',
  'aliases': ['bc', "cast"],
  'reaction': '📢',
  'categorie': "General"
}, async (_0x545ab7, _0x31612c, _0x2f70e3) => {
  const {
    ms: _0x18eb33,
    repondre: _0x4c442e,
    arg: _0x494a3f,
    nomAuteurMessage: _0x25c8b1,
    superUser: _0x4ce488
  } = _0x2f70e3;
  let _0x47125a = _0x494a3f.join(" ");
  if (!_0x494a3f[0x0]) {
    _0x4c442e("After the command *broadcast*, type your message to be sent to all groups you are in.");
    return;
  }
  if (!_0x4ce488) {
    _0x4c442e("You are too weak to do that");
    return;
  }
  let _0x31c435 = await _0x31612c.groupFetchAllParticipating();
  let _0x1dbdfc = Object.entries(_0x31c435).slice(0x0).map(_0x1190df => _0x1190df[0x1]);
  let _0x4439e6 = _0x1dbdfc.map(_0x2028d5 => _0x2028d5.id);
  await _0x4c442e("*FLASH-MD is sending this message to all groups you are in*...");
  for (let _0x247e59 of _0x4439e6) {
    let _0x580a4f = "*𝐅𝐋𝐀𝐒𝐇-𝐌𝐃 𝐁𝐑𝐎𝐀𝐃𝐂𝐀𝐒𝐓*\n\n🀄 Message: " + _0x47125a + "\n\n🗣️ Author: " + _0x25c8b1;
    await _0x31612c.sendMessage(_0x247e59, {
      'image': {
        'url': "https://telegra.ph/file/ee2916cd24336231d8194.jpg"
      },
      'caption': '' + _0x580a4f
    });
  }
});
king({
  'nomCom': "disap-off",
  'categorie': "Group",
  'reaction': '👻'
}, async (_0x37d6ae, _0x119cc7, _0x1546ba) => {
  const {
    ms: _0x13c911,
    repondre: _0x24a164,
    arg: _0x14f2c5,
    verifGroupe: _0x556a9d,
    nomGroupe: _0x4d95a1,
    infosGroupe: _0x5ad7ec,
    nomAuteurMessage: _0x14bafa,
    verifAdmin: _0x59db0a,
    superUser: _0x3e91bf
  } = _0x1546ba;
  if (!_0x556a9d) {
    _0x24a164("This command works in groups only");
    return;
  }
  ;
  if (!_0x59db0a) {
    _0x24a164("You are not an admin here!");
    return;
  }
  ;
  await _0x119cc7.groupToggleEphemeral(_0x37d6ae, 0);
  _0x24a164("Dissapearing messages successfully turned off!");
});
king({
  'nomCom': 'disap',
  'categorie': 'Group',
  'reaction': '👻'
}, async (_0x5abaf0, _0x4a22be, _0x3535c0) => {
  const {
    ms: _0x302aa1,
    repondre: _0x3a1f2d,
    arg: _0x48a160,
    verifGroupe: _0x12318a,
    nomGroupe: _0x4c5800,
    infosGroupe: _0x47319d,
    nomAuteurMessage: _0x19a374,
    verifAdmin: _0x26b6c0,
    superUser: _0x15b53e
  } = _0x3535c0;
  if (!_0x12318a) {
    _0x3a1f2d("This command works in groups only");
    return;
  }
  ;
  if (!_0x26b6c0) {
    _0x3a1f2d("You are not an admin here!");
    return;
  }
  ;
  _0x3a1f2d("*Do you want to turn on disappearing messages?*\n\nIf yes type _*disap1* for messages to disappear after 1 day._\n_or *disap7* for messages to disappear after 7 days._\n_or *disap90* for messages to disappear after 90 days._\n\n To turn in off, type *disap-off*");
});
king({
  'nomCom': "req",
  'categorie': "Group",
  'reaction': "☑️ "
}, async (_0x24d6f7, _0x4b8fff, _0xb1625) => {
  const {
    ms: _0x3e431f,
    repondre: _0x50e54f,
    arg: _0x18925f,
    verifGroupe: _0x43b6ed,
    nomGroupe: _0xfb83ff,
    infosGroupe: _0x2db096,
    nomAuteurMessage: _0x113369,
    verifAdmin: _0x912e3c,
    superUser: _0x1d5741
  } = _0xb1625;
  if (!_0x43b6ed) {
    _0x50e54f("This command works in groups only");
    return;
  }
  ;
  if (!_0x912e3c) {
    _0x50e54f("You are not an admin here, what will you do if there are pending requests?!");
    return;
  }
  ;
  const _0x951ca3 = await _0x4b8fff.groupRequestParticipantsList(_0x24d6f7);
  if (_0x951ca3.length === 0x0) {
    return _0x50e54f("there are no pending join requests.");
  }
  let _0x23d07f = '';
  _0x951ca3.forEach((_0x118b6b, _0xb52184) => {
    _0x23d07f += '+' + _0x118b6b.jid.split('@')[0x0];
    if (_0xb52184 < _0x951ca3.length - 0x1) {
      _0x23d07f += "\n";
    }
  });
  _0x4b8fff.sendMessage(_0x24d6f7, {
    'text': "Pending Participants:- 🕓\n" + _0x23d07f + "\n\nUse the command approve or reject to approve or reject these join requests."
  });
  _0x50e54f(_0x23d07f);
});
king({
  'nomCom': "disap90",
  'categorie': "Group",
  'reaction': '👻'
}, async (_0x3ce9c8, _0x3a6739, _0x537696) => {
  const {
    ms: _0x180da0,
    repondre: _0x4cf540,
    arg: _0x3298d8,
    verifGroupe: _0x4f035f,
    nomGroupe: _0x324ed6,
    infosGroupe: _0x143cc0,
    nomAuteurMessage: _0x3e415d,
    verifAdmin: _0x2bda08,
    superUser: _0x5a4ab8
  } = _0x537696;
  if (!_0x4f035f) {
    _0x4cf540("This command works in groups only");
    return;
  }
  ;
  if (!_0x2bda08) {
    _0x4cf540("You are not an admin here!");
    return;
  }
  ;
  await _0x3a6739.groupToggleEphemeral(_0x3ce9c8, 7776000);
  _0x3ce9c8("Dissapearing messages successfully turned on for 90 days!");
});
king({
  'nomCom': "reject",
  'aliases': ['rejectall', "rej", 'reject-all'],
  'categorie': "Group",
  'reaction': '👻'
}, async (_0xd5af8f, _0x323388, _0xb5901d) => {
  const {
    repondre: _0x4cf757,
    verifGroupe: _0x44380d,
    verifAdmin: _0x9f30e9
  } = _0xb5901d;
  if (!_0x44380d) {
    _0x4cf757("This command works in groups only");
    return;
  }
  if (!_0x9f30e9) {
    _0x4cf757("You are not an admin here!");
    return;
  }
  const _0x58a6ec = await _0x323388.groupRequestParticipantsList(_0xd5af8f);
  if (_0x58a6ec.length === 0x0) {
    return _0x4cf757("There are no pending join requests for this group.");
  }
  for (const _0x2ca217 of _0x58a6ec) {
    const _0x171677 = await _0x323388.groupRequestParticipantsUpdate(_0xd5af8f, [_0x2ca217.jid], 'reject');
    console.log(_0x171677);
  }
  _0x4cf757("All pending join requests have been rejected.");
});
king({
  'nomCom': "disap7",
  'categorie': "Group",
  'reaction': '👻'
}, async (_0x356b8b, _0x282ef5, _0x1d78a9) => {
  const {
    ms: _0x4b7164,
    repondre: _0x46ae6a,
    arg: _0x45ea79,
    verifGroupe: _0x15c519,
    nomGroupe: _0x5355d2,
    infosGroupe: _0xa2eec4,
    nomAuteurMessage: _0x31eabe,
    verifAdmin: _0x589844,
    superUser: _0x143d82
  } = _0x1d78a9;
  if (!_0x15c519) {
    _0x46ae6a("This command works in groups only");
    return;
  }
  ;
  if (!_0x589844) {
    _0x46ae6a("You are not an admin here!");
    return;
  }
  ;
  await _0x282ef5.groupToggleEphemeral(_0x356b8b, 604800);
  _0x356b8b("Dissapearing messages successfully turned on for 7 days!");
});
king({
  'nomCom': 'disap1',
  'categorie': 'Group',
  'reaction': '👻'
}, async (_0x2df339, _0xf39352, _0x1c42e7) => {
  const {
    ms: _0x696d56,
    repondre: _0x411417,
    arg: _0x3a1502,
    verifGroupe: _0x1ae1d2,
    nomGroupe: _0x2a19dd,
    infosGroupe: _0x543b06,
    nomAuteurMessage: _0x1a944c,
    verifAdmin: _0x4a4626,
    superUser: _0x2f48aa
  } = _0x1c42e7;
  if (!_0x1ae1d2) {
    _0x411417("This command works in groups only");
    return;
  }
  ;
  if (!_0x4a4626) {
    _0x411417("You are not an admin here!");
    return;
  }
  ;
  await _0xf39352.groupToggleEphemeral(_0x2df339, 86400);
  _0x2df339("Dissapearing messages successfully turned on for 24 hours");
});
king({
  'nomCom': 'approve',
  'aliases': ["approve-all", "accept"],
  'categorie': 'Group',
  'reaction': '☑️'
}, async (_0x3d7674, _0x12db1f, _0x1514aa) => {
  const {
    repondre: _0x4eeed2,
    verifGroupe: _0x43b2fc,
    verifAdmin: _0x35b4ea
  } = _0x1514aa;
  if (!_0x43b2fc) {
    _0x4eeed2("This command works in groups only");
    return;
  }
  if (!_0x35b4ea) {
    _0x4eeed2("You are not an admin here!");
    return;
  }
  const _0x44a49a = await _0x12db1f.groupRequestParticipantsList(_0x3d7674);
  if (_0x44a49a.length === 0x0) {
    return _0x4eeed2("There are no pending join requests.");
  }
  for (const _0x5a70b5 of _0x44a49a) {
    const _0x3fe529 = await _0x12db1f.groupRequestParticipantsUpdate(_0x3d7674, [_0x5a70b5.jid], "approve");
    console.log(_0x3fe529);
  }
  _0x4eeed2("All pending participants have been approved to join.");
});
king({
  'nomCom': "vcf",
  'aliases': ["savecontact", "savecontacts"],
  'categorie': "Group",
  'reaction': '🎉'
}, async (_0x3503b9, _0x31eff4, _0x459987) => {
  const {
    repondre: _0x5eb44a,
    verifGroupe: _0x34f631,
    verifAdmin: _0x510d88,
    ms: _0x3c9f7b
  } = _0x459987;
  const _0x2e8958 = require('fs');
  if (!_0x510d88) {
    _0x5eb44a("You are not an admin here!");
    return;
  }
  if (!_0x34f631) {
    _0x5eb44a("This command works in groups only");
    return;
  }
  try {
    let _0xef88df = await _0x31eff4.groupMetadata(_0x3503b9);
    const _0x1616c4 = await _0xef88df.participants;
    let _0x44bdb9 = '';
    for (let _0x505031 of _0x1616c4) {
      let _0x2c1333 = _0x505031.id.split('@')[0x0];
      let _0x440c05 = _0x505031.name || _0x505031.notify || "[FMD] +" + _0x2c1333;
      _0x44bdb9 += "BEGIN:VCARD\nVERSION:3.0\nFN:" + _0x440c05 + "\nTEL;type=CELL;type=VOICE;waid=" + _0x2c1333 + ':+' + _0x2c1333 + "\nEND:VCARD\n";
    }
    await _0x5eb44a("A moment, *FLASH-MD* is compiling " + _0x1616c4.length + " contacts into a vcf...");
    await _0x2e8958.writeFileSync('./contacts.vcf', _0x44bdb9.trim());
    await _0x31eff4.sendMessage(_0x3503b9, {
      'document': _0x2e8958.readFileSync('./contacts.vcf'),
      'mimetype': "text/vcard",
      'fileName': _0xef88df.subject + '.Vcf',
      'caption': "VCF for " + _0xef88df.subject + "\nTotal Contacts: " + _0x1616c4.length + "\n*KEEP USING FLASH-MD*"
    }, {
      'ephemeralExpiration': 0x15180,
      'quoted': _0x3c9f7b
    });
    _0x2e8958.unlinkSync('./contacts.vcf');
  } catch (_0x5c400c) {
    console.error("Error while creating or sending VCF:", _0x5c400c.message || _0x5c400c);
    _0x5eb44a("An error occurred while creating or sending the VCF. Please try again.");
  }
});
king({
  'nomCom': "tagall",
  'categorie': "Group",
  'reaction': '📣'
}, async (_0x5e0a28, _0x56df4c, _0x36d04b) => {
  const {
    ms: _0x51e7c7,
    repondre: _0x28a5ae,
    arg: _0x4ca5f2,
    verifGroupe: _0x4027c7,
    nomGroupe: _0x523c19,
    infosGroupe: _0x3091d1,
    nomAuteurMessage: _0x3c61ec,
    verifAdmin: _0x25de97,
    superUser: _0x1b5556
  } = _0x36d04b;
  if (!_0x4027c7) {
    _0x28a5ae("✋🏿 ✋🏿this command works in groups only ❌");
    return;
  }
  if (!_0x4ca5f2 || _0x4ca5f2 === " ") {
    mess = "Aucun Message";
  } else {
    mess = _0x4ca5f2.join(" ");
  }
  ;
  let _0x56d7e3 = _0x4027c7 ? await _0x3091d1.participants : '';
  var _0xaf0a5e = '';
  _0xaf0a5e += "========================\n  \n        🌟 *FLASH-MD* 🌟\n========================\n\n👥 Group : " + _0x523c19 + " 🚀 \n👤 Author : *" + _0x3c61ec + "* 👋 \n📜 Message : *" + mess + "* 📝\n========================\n\n\n\n\n";
  let _0xcc42b9 = ['🦴', '👀', "😮‍💨", '❌', '✔️', '😇', '⚙️', '🔧', '🎊', '😡', "🙏🏿", '⛔️', '$', '😟', '🥵', '🐅'];
  let _0x504891 = Math.floor(Math.random() * (_0xcc42b9.length - 0x1));
  for (const _0x7ba4c3 of _0x56d7e3) {
    _0xaf0a5e += _0xcc42b9[_0x504891] + "      @" + _0x7ba4c3.id.split('@')[0x0] + "\n";
  }
  if (_0x25de97 || _0x1b5556) {
    _0x56df4c.sendMessage(_0x5e0a28, {
      'text': _0xaf0a5e,
      'mentions': _0x56d7e3.map(_0x384607 => _0x384607.id)
    }, {
      'quoted': _0x51e7c7
    });
  } else {
    _0x28a5ae("command reserved for admins");
  }
});
king({
  'nomCom': 'invite',
  'aliases': ["link"],
  'categorie': "Group",
  'reaction': '🙋'
}, async (_0x4acd19, _0x27f3df, _0x1a1391) => {
  const {
    repondre: _0x13a887,
    nomGroupe: _0xc55a87,
    nomAuteurMessage: _0x565911,
    verifGroupe: _0x367c80
  } = _0x1a1391;
  if (!_0x367c80) {
    _0x13a887("*This command works in groups only!*");
    return;
  }
  try {
    const _0x2f5319 = await _0x27f3df.groupInviteCode(_0x4acd19);
    const _0x236ad3 = "https://chat.whatsapp.com/" + _0x2f5319;
    const _0x508111 = "Hello " + _0x565911 + ", here is the group link of " + _0xc55a87 + ":\n\nClick Here To Join: " + _0x236ad3;
    _0x13a887(_0x508111);
  } catch (_0x5cbd99) {
    console.error("Error fetching group invite link:", _0x5cbd99.message || _0x5cbd99);
    _0x13a887("An error occurred while fetching the group invite link. Please try again.");
  }
});
king({
  'nomCom': "promote",
  'categorie': "Group",
  'reaction': "👨🏿‍💼"
}, async (_0x2802bd, _0x29d9f5, _0x49b523) => {
  let {
    repondre: _0x4fd6aa,
    msgRepondu: _0x2391e5,
    infosGroupe: _0x232432,
    auteurMsgRepondu: _0x3e1334,
    verifGroupe: _0x4e2863,
    auteurMessage: _0x1ab5b7,
    superUser: _0x33173d,
    idBot: _0x59769a
  } = _0x49b523;
  let _0x58fe25 = _0x4e2863 ? await _0x232432.participants : '';
  if (!_0x4e2863) {
    return _0x4fd6aa("For groups only");
  }
  const _0x214032 = _0x4f069a => {
    for (const _0x151f8f of _0x58fe25) {
      if (_0x151f8f.id !== _0x4f069a) {
        continue;
      } else {
        return true;
      }
    }
  };
  const _0x1aaeb9 = _0xb1a1d3 => {
    let _0x11f62c = [];
    for (m of _0xb1a1d3) {
      if (m.admin == null) {
        continue;
      }
      _0x11f62c.push(m.id);
    }
    return _0x11f62c;
  };
  const _0x3d8f53 = _0x4e2863 ? _0x1aaeb9(_0x58fe25) : '';
  let _0x4cdccc = _0x4e2863 ? _0x3d8f53.includes(_0x3e1334) : false;
  let _0x2655ce = _0x214032(_0x3e1334);
  let _0x1af811 = _0x4e2863 ? _0x3d8f53.includes(_0x1ab5b7) : false;
  zkad = _0x4e2863 ? _0x3d8f53.includes(_0x59769a) : false;
  try {
    if (_0x1af811 || _0x33173d) {
      if (_0x2391e5) {
        if (zkad) {
          if (_0x2655ce) {
            if (_0x4cdccc == false) {
              var _0x14bb1e = "🎊🍾  @" + _0x3e1334.split('@')[0x0] + " Has been promoted as a group Admin.";
              await _0x29d9f5.groupParticipantsUpdate(_0x2802bd, [_0x3e1334], 'promote');
              _0x29d9f5.sendMessage(_0x2802bd, {
                'text': _0x14bb1e,
                'mentions': [_0x3e1334]
              });
            } else {
              return _0x4fd6aa("This member is already an administrator of the group.");
            }
          } else {
            return _0x4fd6aa("This user is not part of the group.");
          }
        } else {
          return _0x4fd6aa("Sorry, I cannot perform this action because I am not an administrator of the group.");
        }
      } else {
        _0x4fd6aa("please tag the member to be nominated");
      }
    } else {
      return _0x4fd6aa("Sorry I cannot perform this action because you are not an administrator of the group.");
    }
  } catch (_0x4a7548) {
    _0x4fd6aa("oups " + _0x4a7548);
  }
});
king({
  'nomCom': "demote",
  'categorie': "Group",
  'reaction': '👨🏿‍💼'
}, async (_0x352535, _0x34ddb7, _0x4275f2) => {
  let {
    repondre: _0x293a3f,
    msgRepondu: _0x57b94,
    infosGroupe: _0xb3d9f0,
    auteurMsgRepondu: _0x1170aa,
    verifGroupe: _0x30d0bf,
    auteurMessage: _0x23bcc9,
    superUser: _0x28c7c5,
    idBot: _0x45885f
  } = _0x4275f2;
  let _0x24ae5d = _0x30d0bf ? await _0xb3d9f0.participants : '';
  if (!_0x30d0bf) {
    return _0x293a3f("For groups only");
  }
  const _0x458466 = _0x273b92 => {
    for (const _0x46b09e of _0x24ae5d) {
      if (_0x46b09e.id !== _0x273b92) {
        continue;
      } else {
        return true;
      }
    }
  };
  const _0x16e43b = _0x414e81 => {
    let _0x4acb9d = [];
    for (m of _0x414e81) {
      if (m.admin == null) {
        continue;
      }
      _0x4acb9d.push(m.id);
    }
    return _0x4acb9d;
  };
  const _0x17614f = _0x30d0bf ? _0x16e43b(_0x24ae5d) : '';
  let _0x5cc310 = _0x30d0bf ? _0x17614f.includes(_0x1170aa) : false;
  let _0x7e28f5 = _0x458466(_0x1170aa);
  let _0x4c0912 = _0x30d0bf ? _0x17614f.includes(_0x23bcc9) : false;
  zkad = _0x30d0bf ? _0x17614f.includes(_0x45885f) : false;
  try {
    if (_0x4c0912 || _0x28c7c5) {
      if (_0x57b94) {
        if (zkad) {
          if (_0x7e28f5) {
            if (_0x5cc310 == false) {
              _0x293a3f("This member is not a group administrator.");
            } else {
              var _0x535123 = '@' + _0x1170aa.split('@')[0x0] + " was removed from his position as a group administrator\n";
              await _0x34ddb7.groupParticipantsUpdate(_0x352535, [_0x1170aa], "demote");
              _0x34ddb7.sendMessage(_0x352535, {
                'text': _0x535123,
                'mentions': [_0x1170aa]
              });
            }
          } else {
            return _0x293a3f("This user is not part of the group.");
          }
        } else {
          return _0x293a3f("Sorry I cannot perform this action because I am not an administrator of the group.");
        }
      } else {
        _0x293a3f("please tag the member to be removed");
      }
    } else {
      return _0x293a3f("Sorry I cannot perform this action because you are not an administrator of the group.");
    }
  } catch (_0xaa25ad) {
    _0x293a3f("oups " + _0xaa25ad);
  }
});
king({
  'nomCom': "remove",
  'categorie': "Group",
  'reaction': "👨🏿‍💼"
}, async (_0x432ef0, _0x1904f1, _0x257e35) => {
  let {
    repondre: _0x53fc29,
    msgRepondu: _0xc3b97d,
    infosGroupe: _0x391dbf,
    auteurMsgRepondu: _0x4ebe6b,
    verifGroupe: _0x9da5fb,
    nomAuteurMessage: _0x438499,
    auteurMessage: _0x1492ce,
    superUser: _0x46ace8,
    idBot: _0x527d48
  } = _0x257e35;
  let _0x2aa9b0 = _0x9da5fb ? await _0x391dbf.participants : '';
  if (!_0x9da5fb) {
    return _0x53fc29("for groups only");
  }
  const _0x10937b = _0x3c8a98 => {
    for (const _0x3705f9 of _0x2aa9b0) {
      if (_0x3705f9.id !== _0x3c8a98) {
        continue;
      } else {
        return true;
      }
    }
  };
  const _0x2a58bd = _0x45170c => {
    let _0xbce78 = [];
    for (m of _0x45170c) {
      if (m.admin == null) {
        continue;
      }
      _0xbce78.push(m.id);
    }
    return _0xbce78;
  };
  const _0x16a30e = _0x9da5fb ? _0x2a58bd(_0x2aa9b0) : '';
  let _0x259b4c = _0x9da5fb ? _0x16a30e.includes(_0x4ebe6b) : false;
  let _0xfd67ca = _0x10937b(_0x4ebe6b);
  let _0x2e99a6 = _0x9da5fb ? _0x16a30e.includes(_0x1492ce) : false;
  zkad = _0x9da5fb ? _0x16a30e.includes(_0x527d48) : false;
  try {
    if (_0x2e99a6 || _0x46ace8) {
      if (_0xc3b97d) {
        if (zkad) {
          if (_0xfd67ca) {
            if (_0x259b4c == false) {
              var _0x12f0b2 = new Sticker("https://raw.githubusercontent.com/djalega8000/Zokou-MD/main/media/remover.gif", {
                'pack': 'FLASH-MD',
                'author': _0x438499,
                'type': StickerTypes.FULL,
                'categories': ['🤩', '🎉'],
                'id': "12345",
                'quality': 0x32,
                'background': "#000000"
              });
              await _0x12f0b2.toFile("st.webp");
              var _0x41263f = '@' + _0x4ebe6b.split('@')[0x0] + " was removed from the group.\n";
              await _0x1904f1.groupParticipantsUpdate(_0x432ef0, [_0x4ebe6b], "remove");
              _0x1904f1.sendMessage(_0x432ef0, {
                'text': _0x41263f,
                'mentions': [_0x4ebe6b]
              });
            } else {
              _0x53fc29("This member cannot be removed because he is an administrator of the group.");
            }
          } else {
            return _0x53fc29("This user is not part of the group.");
          }
        } else {
          return _0x53fc29("Sorry, I cannot perform this action because I am not an administrator of the group.");
        }
      } else {
        _0x53fc29("please tag the member to be removed");
      }
    } else {
      return _0x53fc29("Sorry I cannot perform this action because you are not an administrator of the group .");
    }
  } catch (_0xf23231) {
    _0x53fc29("oups " + _0xf23231);
  }
});
king({
  'nomCom': "del",
  'categorie': "User",
  'reaction': '🧹'
}, async (_0x14ad22, _0x80e401, _0x862691) => {
  const {
    ms: _0x42b4d3,
    repondre: _0x31c8ce,
    verifGroupe: _0x4e8543,
    auteurMsgRepondu: _0x52b191,
    idBot: _0x147b55,
    msgRepondu: _0xad81a5,
    verifAdmin: _0x531fd7,
    superUser: _0x445372
  } = _0x862691;
  if (!_0xad81a5) {
    _0x31c8ce("Please mention the message to delete.");
    return;
  }
  if (_0x445372 && _0x52b191 === _0x147b55) {
    if (_0x52b191 === _0x147b55) {
      const _0x3840f3 = {
        'remoteJid': _0x14ad22,
        'fromMe': true,
        'id': _0x42b4d3.message.extendedTextMessage.contextInfo.stanzaId
      };
      await _0x80e401.sendMessage(_0x14ad22, {
        'delete': _0x3840f3
      });
      return;
    }
  }
  if (_0x4e8543) {
    if (_0x531fd7 || _0x445372) {
      try {
        const _0xa4290c = {
          'remoteJid': _0x14ad22,
          'id': _0x42b4d3.message.extendedTextMessage.contextInfo.stanzaId,
          'fromMe': false,
          'participant': _0x42b4d3.message.extendedTextMessage.contextInfo.participant
        };
        await _0x80e401.sendMessage(_0x14ad22, {
          'delete': _0xa4290c
        });
        return;
      } catch (_0x11f409) {
        _0x31c8ce("I need admin rights.");
      }
    } else {
      _0x31c8ce("Sorry, you are not an administrator of the group.");
    }
  }
});
king({
  'nomCom': "info",
  'categorie': 'Group'
}, async (_0x83e14f, _0xacdfd9, _0x41840f) => {
  const {
    ms: _0x16ff98,
    repondre: _0x405bb5,
    verifGroupe: _0x41b039
  } = _0x41840f;
  if (!_0x41b039) {
    _0x405bb5("order reserved for the group only");
    return;
  }
  ;
  try {
    ppgroup = await _0xacdfd9.profilePictureUrl(_0x83e14f, "image");
  } catch {
    ppgroup = conf.IMAGE_MENU;
  }
  const _0x7aa3fe = await _0xacdfd9.groupMetadata(_0x83e14f);
  let _0x1430d3 = {
    'image': {
      'url': ppgroup
    },
    'caption': "*━━━━『GROUP INFO』━━━━*\n\n*🎐Name:* " + _0x7aa3fe.subject + "\n\n*🔩Group's ID:* " + _0x83e14f + "\n\n*🔍Desc:* \n\n" + _0x7aa3fe.desc
  };
  _0xacdfd9.sendMessage(_0x83e14f, _0x1430d3, {
    'quoted': _0x16ff98
  });
});
king({
  'nomCom': "antilink",
  'categorie': "Group",
  'reaction': '🔗'
}, async (_0x423ef7, _0x4da410, _0x3aad05) => {
  var {
    repondre: _0x40ae09,
    arg: _0x26662f,
    verifGroupe: _0x169866,
    superUser: _0x342694,
    verifAdmin: _0x11043c
  } = _0x3aad05;
  if (!_0x169866) {
    return _0x40ae09("*This Command works in Groups Only*");
  }
  if (_0x342694 || _0x11043c) {
    const _0x44e916 = await verifierEtatJid(_0x423ef7);
    try {
      if (!_0x26662f || !_0x26662f[0x0] || _0x26662f === " ") {
        _0x40ae09("antilink on to activate the anti-link feature\nantilink off to deactivate the anti-link feature\nantilink action/remove to directly remove the link without notice\nantilink action/warn to give warnings\nantilink action/delete to remove the link without any sanctions\n\nPlease note that by default, the anti-link feature is set to delete.");
        return;
      }
      ;
      if (_0x26662f[0x0] === 'on') {
        if (_0x44e916) {
          _0x40ae09("the antilink is already activated for this group");
        } else {
          await ajouterOuMettreAJourJid(_0x423ef7, 'oui');
          _0x40ae09("the antilink is activated successfully");
        }
      } else {
        if (_0x26662f[0x0] === "off") {
          if (_0x44e916) {
            await ajouterOuMettreAJourJid(_0x423ef7, "non");
            _0x40ae09("The antilink has been successfully deactivated");
          } else {
            _0x40ae09("antilink is not activated for this group");
          }
        } else {
          if (_0x26662f.join('').split('/')[0x0] === "action") {
            let _0xaff5de = _0x26662f.join('').split('/')[0x1].toLowerCase();
            if (_0xaff5de == "remove" || _0xaff5de == "warn" || _0xaff5de == 'delete') {
              await mettreAJourAction(_0x423ef7, _0xaff5de);
              _0x40ae09("The anti-link action has been updated to " + _0x26662f.join('').split('/')[0x1]);
            } else {
              _0x40ae09("The only actions available are warn, remove, and delete");
            }
          } else {
            _0x40ae09("antilink on to activate the anti-link feature\nantilink off to deactivate the anti-link feature\nantilink action/remove to directly remove the link without notice\nantilink action/warn to give warnings\nantilink action/delete to remove the link without any sanctions\n\nPlease note that by default, the anti-link feature is set to delete.");
          }
        }
      }
    } catch (_0x157974) {
      _0x40ae09(_0x157974);
    }
  } else {
    _0x40ae09("You are not entitled to this order");
  }
});
king({
  'nomCom': 'antibot',
  'categorie': "Group",
  'reaction': '🔗'
}, async (_0x517d71, _0x41e7fd, _0x6b72fc) => {
  var {
    repondre: _0x777855,
    arg: _0xb8320e,
    verifGroupe: _0x35a225,
    superUser: _0x4cd111,
    verifAdmin: _0x5b946b
  } = _0x6b72fc;
  if (!_0x35a225) {
    return _0x777855("*for groups only*");
  }
  if (_0x4cd111 || _0x5b946b) {
    const _0x114088 = await atbverifierEtatJid(_0x517d71);
    try {
      if (!_0xb8320e || !_0xb8320e[0x0] || _0xb8320e === " ") {
        _0x777855("antibot on to activate the anti-bot feature\nantibot off to deactivate the antibot feature\nantibot action/remove to directly remove the bot without notice\nantibot action/warn to give warnings\nantilink action/delete to remove the bot message without any sanctions\n\nPlease note that by default, the anti-bot feature is set to delete.");
        return;
      }
      ;
      if (_0xb8320e[0x0] === 'on') {
        if (_0x114088) {
          _0x777855("the antibot is already activated for this group");
        } else {
          await atbajouterOuMettreAJourJid(_0x517d71, 'oui');
          _0x777855("the antibot is successfully activated");
        }
      } else {
        if (_0xb8320e[0x0] === "off") {
          if (_0x114088) {
            await atbajouterOuMettreAJourJid(_0x517d71, "non");
            _0x777855("The antibot has been successfully deactivated");
          } else {
            _0x777855("antibot is not activated for this group");
          }
        } else {
          if (_0xb8320e.join('').split('/')[0x0] === "action") {
            let _0x38407d = _0xb8320e.join('').split('/')[0x1].toLowerCase();
            if (_0x38407d == "remove" || _0x38407d == 'warn' || _0x38407d == "delete") {
              await mettreAJourAction(_0x517d71, _0x38407d);
              _0x777855("The anti-bot action has been updated to " + _0xb8320e.join('').split('/')[0x1]);
            } else {
              _0x777855("The only actions available are warn, remove, and delete");
            }
          } else {
            _0x777855("antibot on to activate the anti-bot feature\nantibot off to deactivate the antibot feature\nantibot action/remove to directly remove the bot without notice\nantibot action/warn to give warnings\nantilink action/delete to remove the bot message without any sanctions\n\nPlease note that by default, the anti-bot feature is set to delete.");
          }
        }
      }
    } catch (_0x298e48) {
      _0x777855(_0x298e48);
    }
  } else {
    _0x777855("You are not entitled to this order");
  }
});
king({
  'nomCom': "group",
  'categorie': 'Group'
}, async (_0x374d2b, _0x3c1d29, _0x28b711) => {
  const {
    repondre: _0x531a46,
    verifGroupe: _0x4622a1,
    verifAdmin: _0x27bbb2,
    superUser: _0x987205,
    arg: _0x4de012
  } = _0x28b711;
  if (!_0x4622a1) {
    _0x531a46("order reserved for group only");
    return;
  }
  ;
  if (_0x987205 || _0x27bbb2) {
    if (!_0x4de012[0x0]) {
      _0x531a46("Instructions:\n\nType group open or close");
      return;
    }
    const _0x4c1942 = _0x4de012.join(" ");
    switch (_0x4c1942) {
      case "open":
        await _0x3c1d29.groupSettingUpdate(_0x374d2b, "not_announcement");
        _0x531a46("Group opened successfully.\nNow Participants can send messages.");
        break;
      case 'close':
        await _0x3c1d29.groupSettingUpdate(_0x374d2b, "announcement");
        _0x531a46("Group closed successfully");
        break;
      default:
        _0x531a46("Please don't invent an option");
    }
  } else {
    _0x531a46("This command is for admins only!");
    return;
  }
});
king({
  'nomCom': "gname",
  'categorie': 'Group'
}, async (_0x3d2546, _0x20c671, _0x11653a) => {
  const {
    arg: _0x2694d1,
    repondre: _0x3f57e2,
    verifAdmin: _0x5a0029
  } = _0x11653a;
  if (!_0x5a0029) {
    _0x3f57e2("order reserved for administrators of the group");
    return;
  }
  ;
  if (!_0x2694d1[0x0]) {
    _0x3f57e2("Please enter the group name");
    return;
  }
  ;
  const _0x11e6f9 = _0x2694d1.join(" ");
  await _0x20c671.groupUpdateSubject(_0x3d2546, _0x11e6f9);
  _0x3f57e2("group name refresh: *" + _0x11e6f9 + '*');
});
king({
  'nomCom': "gdesc",
  'categorie': "Group"
}, async (_0x3ace9e, _0x94d522, _0x3e7327) => {
  const {
    arg: _0x17e521,
    repondre: _0x332fa2,
    verifAdmin: _0xd5bbb8
  } = _0x3e7327;
  if (!_0xd5bbb8) {
    _0x332fa2("order reserved for administrators of the group");
    return;
  }
  ;
  if (!_0x17e521[0x0]) {
    _0x332fa2("Please enter the group description");
    return;
  }
  ;
  const _0x4fa7c9 = _0x17e521.join(" ");
  await _0x94d522.groupUpdateDescription(_0x3ace9e, _0x4fa7c9);
  _0x332fa2("group description update: *" + _0x4fa7c9 + '*');
});
king({
  'nomCom': "revoke",
  'categorie': 'Group'
}, async (_0x445935, _0x13176b, _0x113e93) => {
  const {
    arg: _0x201f3a,
    repondre: _0x323899,
    verifGroupe: _0x517bd9,
    verifAdmin: _0x41b45e
  } = _0x113e93;
  if (!_0x41b45e) {
    _0x323899("for admins.");
    return;
  }
  ;
  if (!_0x517bd9) {
    _0x323899("This command is only allowed in groups.");
  }
  ;
  await _0x13176b.groupRevokeInvite(_0x445935);
  _0x323899("group link revoked.");
});
king({
  'nomCom': "gpp",
  'categorie': "Group"
}, async (_0x4e321b, _0x1b77ee, _0x1ac863) => {
  const {
    repondre: _0x1f2b22,
    msgRepondu: _0x320e8f,
    verifAdmin: _0x5e2b08
  } = _0x1ac863;
  if (!_0x5e2b08) {
    _0x1f2b22("order reserved for administrators of the group");
    return;
  }
  ;
  if (_0x320e8f.imageMessage) {
    const _0x442d3d = await _0x1b77ee.downloadAndSaveMediaMessage(_0x320e8f.imageMessage);
    await _0x1b77ee.updateProfilePicture(_0x4e321b, {
      'url': _0x442d3d
    }).then(() => {
      _0x1b77ee.sendMessage(_0x4e321b, {
        'text': "Group pfp changed"
      });
      fs.unlinkSync(_0x442d3d);
    })['catch'](() => _0x1b77ee.sendMessage(_0x4e321b, {
      'text': err
    }));
  } else {
    _0x1f2b22("Please mention an image");
  }
});
king({
  'nomCom': "hidetag",
  'categorie': "Group",
  'reaction': '🎤'
}, async (_0x57f5c4, _0x5b75e7, _0xd13b78) => {
  const {
    repondre: _0x12b8cc,
    msgRepondu: _0x1c065a,
    verifGroupe: _0x3913a1,
    arg: _0x57f2f7,
    verifAdmin: _0x22ad86,
    superUser: _0x47e35d
  } = _0xd13b78;
  if (!_0x3913a1) {
    _0x12b8cc("This command is only allowed in groups.");
  }
  ;
  if (_0x22ad86 || _0x47e35d) {
    let _0x59a92f = await _0x5b75e7.groupMetadata(_0x57f5c4);
    let _0x46dcb1 = [];
    for (const _0x325308 of _0x59a92f.participants) {
      _0x46dcb1.push(_0x325308.id);
    }
    if (_0x1c065a) {
      console.log(_0x1c065a);
      let _0xf25404;
      if (_0x1c065a.imageMessage) {
        let _0x2b25cd = await _0x5b75e7.downloadAndSaveMediaMessage(_0x1c065a.imageMessage);
        _0xf25404 = {
          'image': {
            'url': _0x2b25cd
          },
          'caption': _0x1c065a.imageMessage.caption,
          'mentions': _0x46dcb1
        };
      } else {
        if (_0x1c065a.videoMessage) {
          let _0x3859a3 = await _0x5b75e7.downloadAndSaveMediaMessage(_0x1c065a.videoMessage);
          _0xf25404 = {
            'video': {
              'url': _0x3859a3
            },
            'caption': _0x1c065a.videoMessage.caption,
            'mentions': _0x46dcb1
          };
        } else {
          if (_0x1c065a.audioMessage) {
            let _0x1eb67f = await _0x5b75e7.downloadAndSaveMediaMessage(_0x1c065a.audioMessage);
            _0xf25404 = {
              'audio': {
                'url': _0x1eb67f
              },
              'mimetype': "audio/mp4",
              'mentions': _0x46dcb1
            };
          } else {
            if (_0x1c065a.stickerMessage) {
              let _0x3ef30a = await _0x5b75e7.downloadAndSaveMediaMessage(_0x1c065a.stickerMessage);
              let _0x377128 = new Sticker(_0x3ef30a, {
                'pack': "FLASH-MD-tag",
                'type': StickerTypes.CROPPED,
                'categories': ['🤩', '🎉'],
                'id': "12345",
                'quality': 0x46,
                'background': "transparent"
              });
              const _0x2c6d69 = await _0x377128.toBuffer();
              _0xf25404 = {
                'sticker': _0x2c6d69,
                'mentions': _0x46dcb1
              };
            } else {
              _0xf25404 = {
                'text': _0x1c065a.conversation,
                'mentions': _0x46dcb1
              };
            }
          }
        }
      }
      _0x5b75e7.sendMessage(_0x57f5c4, _0xf25404);
    } else {
      if (!_0x57f2f7 || !_0x57f2f7[0x0]) {
        _0x12b8cc("Enter the text to announce or mention the message to announce");
        ;
        return;
      }
      ;
      _0x5b75e7.sendMessage(_0x57f5c4, {
        'text': _0x57f2f7.join(" "),
        'mentions': _0x46dcb1
      });
    }
  } else {
    _0x12b8cc("Command reserved for administrators.");
  }
});
const cron = require("../data/cron");
king({
  'nomCom': "automute",
  'categorie': "Group"
}, async (_0x2aa950, _0x34767e, _0x38f4eb) => {
  const {
    arg: _0x5ed080,
    repondre: _0x2df094,
    verifAdmin: _0x2bba1b
  } = _0x38f4eb;
  if (!_0x2bba1b) {
    _0x2df094("You are not an administrator of the group");
    return;
  }
  let _0xa1106 = await cron.getCronById(_0x2aa950);
  if (!_0x5ed080 || _0x5ed080.length === 0x0) {
    let _0x396094;
    if (!_0xa1106 || !_0xa1106.mute_at) {
      _0x396094 = "No time set for automatic mute";
    } else {
      const [_0x1ada02, _0x165148] = _0xa1106.mute_at.split(':');
      _0x396094 = "The group will be muted at " + _0x1ada02 + ':' + _0x165148;
    }
    const _0x2088be = "*State:* " + _0x396094 + "\n\n" + "*Instructions:* To activate automatic mute, add the minute and hour after the command separated by ':'.\n" + "Example: automute 9:30\n" + "To delete the automatic mute, use the command *automute del*";
    _0x2df094(_0x2088be);
    return;
  } else {
    const _0x40848a = _0x5ed080.join(" ");
    if (_0x40848a.toLowerCase() === "del") {
      if (!_0xa1106) {
        _0x2df094("No cronometrage is active");
      } else {
        await cron.delCron(_0x2aa950);
        _0x2df094("The automatic mute has been removed; restart to apply changes");
        exec("pm2 restart all");
      }
    } else {
      if (_0x40848a.includes(':')) {
        const [_0x21e783, _0x4d0e0c] = _0x40848a.split(':');
        if (isNaN(_0x21e783) || isNaN(_0x4d0e0c) || _0x21e783 < 0x0 || _0x21e783 > 0x17 || _0x4d0e0c < 0x0 || _0x4d0e0c > 0x3b) {
          _0x2df094("Please enter a valid time with hour (0-23) and minute (0-59) separated by :");
          return;
        }
        await cron.addCron(_0x2aa950, "mute_at", _0x40848a);
        _0x2df094("Setting up automatic mute for " + _0x40848a + "; restart to apply changes");
        exec("pm2 restart all");
      } else {
        _0x2df094("Please enter a valid time with hour and minute separated by :");
      }
    }
  }
});
king({
  'nomCom': "autounmute",
  'categorie': 'Group'
}, async (_0x441a3b, _0xecd481, _0x2e1d0f) => {
  const {
    arg: _0x1912d8,
    repondre: _0x2f5562,
    verifAdmin: _0x17c251
  } = _0x2e1d0f;
  if (!_0x17c251) {
    _0x2f5562("You are not an administrator of the group");
    return;
  }
  group_cron = await cron.getCronById(_0x441a3b);
  if (!_0x1912d8 || _0x1912d8.length == 0x0) {
    let _0x4ff6ca;
    if (group_cron == null || group_cron.unmute_at == null) {
      _0x4ff6ca = "No time set for autounmute";
    } else {
      _0x4ff6ca = "The group will be un-muted at " + group_cron.unmute_at.split(':')[0x0] + "H " + group_cron.unmute_at.split(':')[0x1];
    }
    let _0x3d5299 = "* *State:* " + _0x4ff6ca + "\n      * *Instructions:* To activate autounmute, add the minute and hour after the command separated by ':'\n      Example autounmute 7:30\n      * To delete autounmute, use the command *autounmute del*";
    _0x2f5562(_0x3d5299);
    return;
  } else {
    let _0x3d9423 = _0x1912d8.join(" ");
    if (_0x3d9423.toLowerCase() === 'del') {
      if (group_cron == null) {
        _0x2f5562("No cronometrage has been activated");
      } else {
        await cron.delCron(_0x441a3b);
        _0x2f5562("The autounmute has been removed; restart to apply the changes").then(() => {
          exec("pm2 restart all");
        });
      }
    } else if (_0x3d9423.includes(':')) {
      await cron.addCron(_0x441a3b, 'unmute_at', _0x3d9423);
      _0x2f5562("Setting up autounmute for " + _0x3d9423 + "; restart to apply the changes").then(() => {
        exec("pm2 restart all");
      });
    } else {
      _0x2f5562("Please enter a valid time with hour and minute separated by :");
    }
  }
});
king({
  'nomCom': 'fkick',
  'categorie': "Group"
}, async (_0x445f82, _0x305bf3, _0x24ad5a) => {
  const {
    arg: _0x30b686,
    repondre: _0x8050e9,
    verifAdmin: _0x12d3ff,
    superUser: _0x7a6edd,
    verifZokouAdmin: _0x2623f6
  } = _0x24ad5a;
  if (_0x12d3ff || _0x7a6edd) {
    if (!_0x2623f6) {
      _0x8050e9("You need administrative rights to perform this command");
      return;
    }
    if (!_0x30b686 || _0x30b686.length == 0x0) {
      _0x8050e9("Please enter the country code whose members will be removed");
      return;
    }
    let _0x562979 = await _0x305bf3.groupMetadata(_0x445f82);
    let _0x4952cb = _0x562979.participants;
    for (let _0x5d78ca = 0x0; _0x5d78ca < _0x4952cb.length; _0x5d78ca++) {
      if (_0x4952cb[_0x5d78ca].id.startsWith(_0x30b686[0x0]) && _0x4952cb[_0x5d78ca].admin === null) {
        await _0x305bf3.groupParticipantsUpdate(_0x445f82, [_0x4952cb[_0x5d78ca].id], 'remove');
      }
    }
  } else {
    _0x8050e9("Sorry, you are not an administrator of the group");
  }
});
king({
  'nomCom': "nsfw",
  'categorie': "Group"
}, async (_0x2a3089, _0x1aabc8, _0x3fd4db) => {
  const {
    arg: _0x4546ee,
    repondre: _0x2e00dc,
    verifAdmin: _0x5b0626
  } = _0x3fd4db;
  if (!_0x5b0626) {
    _0x2e00dc("Sorry, you cannot enable NSFW content without being an administrator of the group");
    return;
  }
  let _0x3e239d = require("../data/hentai");
  let _0x4d153d = await _0x3e239d.checkFromHentaiList(_0x2a3089);
  if (_0x4546ee[0x0] == 'on') {
    if (_0x4d153d) {
      _0x2e00dc("NSFW content is already active for this group");
      return;
    }
    ;
    await _0x3e239d.addToHentaiList(_0x2a3089);
    _0x2e00dc("NSFW content is now active for this group");
  } else {
    if (_0x4546ee[0x0] == "off") {
      if (!_0x4d153d) {
        _0x2e00dc("NSFW content is already disabled for this group");
        return;
      }
      ;
      await _0x3e239d.removeFromHentaiList(_0x2a3089);
      _0x2e00dc("NSFW content is now disabled for this group");
    } else {
      _0x2e00dc("You must enter \"on\" or \"off\"");
    }
  }
});
king({
  'nomCom': "antiword",
  'categorie': 'Group',
  'reaction': '🔗'
}, async (_0x5104ef, _0x3c8300, _0x397210) => {
  var {
    repondre: _0x19ef73,
    arg: _0x28a039,
    verifGroupe: _0x1d39d7,
    superUser: _0x1f170e,
    verifAdmin: _0x50de30
  } = _0x397210;
  if (!_0x1d39d7) {
    return _0x19ef73("*This command is for groups only*");
  }
  if (_0x1f170e || _0x50de30) {
    const _0x25cfc6 = await verifierEtatJid(_0x5104ef);
    try {
      if (!_0x28a039 || !_0x28a039[0x0] || _0x28a039 === " ") {
        _0x19ef73("antiword on to activate the anti-word feature\nantiword off to deactivate the anti-word feature\nantiword action/remove to directly remove the sender without notice\nantiword action/warn to give warnings\nantiword action/delete to remove the word without any sanctions\n\nPlease note that by default, the anti-word feature is set to delete.");
        return;
      }
      ;
      if (_0x28a039[0x0] === 'on') {
        if (_0x25cfc6) {
          _0x19ef73("the antiword is already activated for this group");
        } else {
          await ajouterOuMettreAJourJid(_0x5104ef, 'oui');
          _0x19ef73("the antiword is activated successfully");
        }
      } else {
        if (_0x28a039[0x0] === "off") {
          if (_0x25cfc6) {
            await ajouterOuMettreAJourJid(_0x5104ef, "non");
            _0x19ef73("The antiword has been successfully deactivated");
          } else {
            _0x19ef73("antiword is not activated for this group");
          }
        } else {
          if (_0x28a039.join('').split('/')[0x0] === "action") {
            let _0x4876c6 = _0x28a039.join('').split('/')[0x1].toLowerCase();
            if (_0x4876c6 == 'remove' || _0x4876c6 == "warn" || _0x4876c6 == "delete") {
              await mettreAJourAction(_0x5104ef, _0x4876c6);
              _0x19ef73("The anti-word action has been updated to " + _0x28a039.join('').split('/')[0x1]);
            } else {
              _0x19ef73("The only actions available are warn, remove, and delete");
            }
          } else {
            _0x19ef73("antiword on to activate the anti-word feature\nantiword off to deactivate the anti-word feature\nantiword action/remove to directly remove the word sender without notice\nantiword action/warn to give warnings\nantiword action/delete to remove the word without any sanctions\n\nPlease note that by default, the anti-word feature is set to delete.");
          }
        }
      }
    } catch (_0x7c6aa8) {
      _0x19ef73(_0x7c6aa8);
    }
  } else {
    _0x19ef73("You are not entitled to this order");
  }
});
king({
  'nomCom': "antilink-all",
  'categorie': "Group",
  'reaction': '🔗'
}, async (_0x591524, _0x296e9d, _0x54a9cc) => {
  const {
    repondre: _0x410ce5,
    arg: _0x1a0b2f,
    verifGroupe: _0x525172,
    superUser: _0x5b424e,
    verifAdmin: _0x4f4431
  } = _0x54a9cc;
  if (!_0x525172) {
    return _0x410ce5("*This Command works in Groups Only*");
  }
  if (_0x5b424e || _0x4f4431) {
    const _0x21d1e5 = await verifierEtatJid(_0x591524);
    try {
      if (!_0x1a0b2f || !_0x1a0b2f[0x0].trim()) {
        _0x410ce5("Type `antilink-all on` to activate the antilink-all feature\nor `antilink-all off` to deactivate the antilink-all feature\nThen `antilink-all action/remove` to directly remove the link without notice\nor `antilink-all action/warn` to give warnings\nor `antilink-all action/delete` to remove the link without any sanctions\n\nPlease note that by default, the antilink-all feature is set to delete.");
        return;
      }
      const [_0x55564e, _0x3a4664] = _0x1a0b2f.join(" ").split('/');
      if (_0x55564e === 'on') {
        if (_0x21d1e5) {
          _0x410ce5("Antilink-all is already activated for this group.");
        } else {
          await ajouterOuMettreAJourJid(_0x591524, "oui");
          _0x410ce5("The antilink-all feature has been activated successfully.");
        }
      } else {
        if (_0x55564e === "off") {
          if (_0x21d1e5) {
            await ajouterOuMettreAJourJid(_0x591524, "non");
            _0x410ce5("The antilink-all feature has been successfully deactivated.");
          } else {
            _0x410ce5("Antilink-all is not activated for this group.");
          }
        } else {
          if (_0x55564e === "action") {
            const _0xd6b2fb = _0x3a4664.toLowerCase();
            if (["remove", "warn", "delete"].includes(_0xd6b2fb)) {
              await mettreAJourAction(_0x591524, _0xd6b2fb);
              _0x410ce5("The anti-link action has been updated to " + _0xd6b2fb + '.');
            } else {
              _0x410ce5("The only actions available are `warn`, `remove`, and `delete`.");
            }
          } else {
            _0x410ce5("Type `antilink-all on` to activate the antilink-all feature\nor `antilink-all off` to deactivate the antilink-all feature\nor `antilink-all action/remove` to directly remove the link without notice\nor `antilink-all action/warn` to give warnings\nor `antilink-all action/delete` to remove the link without any sanctions\n\nPlease note that by default, the antilink-all feature is set to delete.\n\n*KEEP USING FLASH-MD 🤍*");
          }
        }
      }
    } catch (_0x23cc6c) {
      _0x410ce5("Error: " + _0x23cc6c.message);
    }
  } else {
    _0x410ce5("You are not allowed to use this command.");
  }
});