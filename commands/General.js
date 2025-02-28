const {
  king
} = require('../france/king');
const {
  getAllSudoNumbers,
  isSudoTableNotEmpty
} = require("../data/sudo");
const conf = require("../set");
king({
  'nomCom': 'helpers',
  'categorie': 'General',
  'reaction': "🤍 "
}, async (_0x3f177f, _0x5894ee, _0x1b4e0c) => {
  const {
    ms: _0x40f137,
    mybotpic: _0x300549
  } = _0x1b4e0c;
  const _0xbf2327 = [{
    'nom': "Belta from Kenya",
    'numero': "254114141192"
  }, {
    'nom': "Ben Jason From Nigeria",
    'numero': "2347039100348"
  }, {
    'nom': "Kebby From Tanzania",
    'numero': "255675514698"
  }, {
    'nom': "KingPin From Kenya",
    'numero': '254743437665'
  }, {
    'nom': 'Ken',
    'numero': "254734290140"
  }, {
    'nom': 'Wilbert',
    'numero': "+263787058139"
  }, {
    'nom': 'Precious',
    'numero': "+2349152597171"
  }, {
    'nom': "General",
    'numero': "+12137789539"
  }, {
    'nom': "King Ramah",
    'numero': "+256788028745"
  }, {
    'nom': "Dark Priest 🕴🏼🕴🏼",
    'numero': "+254741271937"
  }, {
    'nom': "Zark Bryan",
    'numero': "+256762086532"
  }, {
    'nom': 'Alexander',
    'numero': '+2349024553612'
  }, {
    'nom': 'Trippkid',
    'numero': "254701932620"
  }];
  let _0x5b800b = "👋 *Hello Thanks for CHOOSING FLASH-MD* \nThe following numbers are for ambassadors of *FLASH-MD*, \nLook for one in your country and ask for help! \n*KEEP USING FLASH-MD*💥 🤩:\n\n";
  for (const _0x4ee046 of _0xbf2327) {
    _0x5b800b += "----------------\n• " + _0x4ee046.nom + " : https://wa.me/" + _0x4ee046.numero + "\n";
  }
  var _0x8eb515 = _0x300549();
  if (_0x8eb515.match(/\.(mp4|gif)$/i)) {
    try {
      _0x5894ee.sendMessage(_0x3f177f, {
        'video': {
          'url': _0x8eb515
        },
        'caption': _0x5b800b
      }, {
        'quoted': _0x40f137
      });
    } catch (_0x46e0c5) {
      console.log("🥵🥵 Menu erreur " + _0x46e0c5);
      repondre("🥵🥵 Menu erreur " + _0x46e0c5);
    }
  } else {
    if (_0x8eb515.match(/\.(jpeg|png|jpg)$/i)) {
      try {
        _0x5894ee.sendMessage(_0x3f177f, {
          'image': {
            'url': _0x8eb515
          },
          'caption': _0x5b800b
        }, {
          'quoted': _0x40f137
        });
      } catch (_0x460b0a) {
        console.log("🥵🥵 Menu erreur " + _0x460b0a);
        repondre("🥵🥵 Menu erreur " + _0x460b0a);
      }
    } else {
      repondre(_0x8eb515);
      repondre("link error");
    }
  }
});
king({
  'nomCom': "test",
  'categorie': "General",
  'reaction': '😡'
}, async (_0x245f16, _0x4b8998, _0x58519b) => {
  const {
    ms: _0x1894e5,
    mybotpic: _0x286a47,
    auteurMessage: _0x30dbf5
  } = _0x58519b;
  const _0xe7cd09 = {
    'audio': {
      'url': './commands/test.mp3'
    },
    'mimetype': "audio/mp4",
    'ptt': true,
    'waveform': [0x64, 0x0, 0x64, 0x0, 0x64, 0x0, 0x64],
    'fileName': "what?",
    'contextInfo': {
      'mentionedJid': [_0x30dbf5],
      'externalAdReply': {
        'title': "FLASH-MD IS ACTIVE",
        'body': "Powered by France King",
        'thumbnailUrl': "https://telegra.ph/file/4143dfac775bff078cc5a.jpg",
        'sourceUrl': "https://chat.whatsapp.com/KX7EPsiJhMlLLHJrXa7n0F",
        'mediaType': 0x1,
        'renderLargerThumbnail': true
      }
    }
  };
  await _0x4b8998.sendMessage(_0x245f16, _0xe7cd09, {
    'quoted': _0x1894e5
  });
});
king({
  'nomCom': "owner",
  'categorie': 'General',
  'reaction': '💥'
}, async (_0x3d98cd, _0x447cd5, _0x5f02ac) => {
  const {
    ms: _0x3d5c3e,
    mybotpic: _0x1cb8c8
  } = _0x5f02ac;
  const _0x4652b1 = await isSudoTableNotEmpty();
  if (_0x4652b1) {
    let _0x16a89d = "*My Super-User*\n\n     *Owner Number*\n :\n- 🌟 @" + conf.OWNER_NUMBER + "\n\n------ *OTHER SUDOS* -----\n";
    let _0x3239fe = await getAllSudoNumbers();
    for (const _0x173c04 of _0x3239fe) {
      if (_0x173c04) {
        sudonumero = _0x173c04.replace(/[^0-9]/g, '');
        _0x16a89d += "- 💼 @" + sudonumero + "\n";
      } else {
        return;
      }
    }
    const _0x4d77e5 = conf.OWNER_NUMBER.replace(/[^0-9]/g) + '@s.whatsapp.net';
    const _0x29f80d = _0x3239fe.concat([_0x4d77e5]);
    console.log(_0x3239fe);
    console.log(_0x29f80d);
    _0x447cd5.sendMessage(_0x3d98cd, {
      'image': {
        'url': _0x1cb8c8()
      },
      'caption': _0x16a89d,
      'mentions': _0x29f80d
    });
  } else {
    const _0x384944 = "BEGIN:VCARD\nVERSION:3.0\nFN:" + conf.OWNER_NAME + "\n" + "ORG:undefined;\n" + 'TEL;type=CELL;type=VOICE;waid=' + conf.OWNER_NUMBER + ':+' + conf.OWNER_NUMBER + "\n" + "END:VCARD";
    _0x447cd5.sendMessage(_0x3d98cd, {
      'contacts': {
        'displayName': conf.OWNER_NAME,
        'contacts': [{
          'vcard': _0x384944
        }]
      }
    }, {
      'quoted': _0x3d5c3e
    });
  }
});
king({
  'nomCom': 'developer',
  'aliases': ["creator", 'dev', 'france'],
  'categorie': "General",
  'reaction': '🐐'
}, async (_0x1a3f10, _0xcd3d0d, _0x4d02f3) => {
  const {
    ms: _0x5cccb8,
    mybotpic: _0x40c304
  } = _0x4d02f3;
  const _0x4ddf31 = [{
    'nom': "France King",
    'numero': '254757835036'
  }, {
    'nom': "᚛FranceKing᚜",
    'numero': "254750948696"
  }];
  let _0x419b47 = "Hello 👋\n *Welcome to Flash-Md!*\n\n*✦━━◆CREATOR INFO◆━━✦*\n\n\n *◇NAME: _France King_*\n*◇AGE: 23*\n*◇LOCATION: _On Earth_*\n*◇BELIEVER: YES ✅*\n*◇FRIENDLY: YES ✅*\n*◇EGOISTIC: _YEEES ✅_*\n*◇FAV TEAM: _CHELSEA_*\n*◇INSTAGRAM: https://instagram.com/france.king1*\n*◇Twitter: https://twitter.com/france_king1*\n\n______________________________\n\n*💙KEEP USING FLASH-MD🤍*\n\n\n_The following are my contacts_:\n:";
  for (const _0x1709d2 of _0x4ddf31) {
    _0x419b47 += "----------------\n• " + _0x1709d2.nom + " : https://wa.me/" + _0x1709d2.numero + "\n";
  }
  const _0x52d748 = _0x40c304();
  if (_0x52d748.match(/\.(mp4|gif)$/i)) {
    try {
      _0xcd3d0d.sendMessage(_0x1a3f10, {
        'video': {
          'url': _0x52d748
        },
        'caption': _0x419b47
      }, {
        'quoted': _0x5cccb8
      });
    } catch (_0x225457) {
      console.log("🥵🥵 Menu error: " + _0x225457);
      repondre("🥵🥵 Menu error: " + _0x225457);
    }
  } else {
    if (_0x52d748.match(/\.(jpeg|png|jpg)$/i)) {
      try {
        _0xcd3d0d.sendMessage(_0x1a3f10, {
          'image': {
            'url': _0x52d748
          },
          'caption': _0x419b47
        }, {
          'quoted': _0x5cccb8
        });
      } catch (_0x41c079) {
        console.log("🥵🥵 Menu error: " + _0x41c079);
        repondre("🥵🥵 Menu error: " + _0x41c079);
      }
    } else {
      repondre(_0x52d748);
      repondre("link error");
    }
  }
});
king({
  'nomCom': "support",
  'categorie': 'General'
}, async (_0x3ba8e6, _0x3f1138, _0x1190a9) => {
  const {
    ms: _0x38d3a0,
    repondre: _0x5bd5da,
    auteurMessage: _0x1cfce2
  } = _0x1190a9;
  _0x5bd5da("look on pm sir ");
  await _0x3f1138.sendMessage(_0x1cfce2, {
    'text': 'https://wa.me/254757835036'
  }, {
    'quoted': _0x38d3a0
  });
});