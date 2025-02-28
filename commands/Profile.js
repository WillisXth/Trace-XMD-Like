const JavaScriptObfuscator = require("javascript-obfuscator");
const pkg = require("@whiskeysockets/baileys");
const {
  generateWAMessageFromContent,
  proto
} = pkg;
const {
  king
} = require('../france/king');
const conf = require('../set');
king({
  'nomCom': "enc",
  'categorie': "General"
}, async (_0xa0022d, _0x1911bb, _0x315a5c) => {
  const {
    ms: _0x55e553,
    arg: _0x2c9d1f,
    repondre: _0x2cd6ce,
    prefixe: _0x7c489b,
    auteurMessage: _0x2eedc5,
    nomAuteurMessage: _0x3ebea6,
    msgRepondu: _0x4d204f,
    auteurMsgRepondu: _0x205640
  } = _0x315a5c;
  try {
    let _0x201dd7 = _0x2c9d1f.join(" ");
    if (!_0x201dd7) {
      await _0x2cd6ce("After the command, provide a valid JavaScript code for encryption");
      return;
    }
    const _0x8faffb = JavaScriptObfuscator.obfuscate(_0x201dd7, {
      'compact': true,
      'controlFlowFlattening': true,
      'controlFlowFlatteningThreshold': 0x1,
      'numbersToExpressions': true,
      'simplify': true,
      'stringArrayShuffle': true,
      'splitStrings': true,
      'stringArrayThreshold': 0x1
    });
    const _0x49f5fa = _0x8faffb.getObfuscatedCode();
    const _0x4092b6 = [{
      'name': 'cta_copy',
      'buttonParamsJson': JSON.stringify({
        'display_text': "📋 ᴄᴏᴘʏ ʏᴏᴜʀ ᴄᴏᴅᴇ",
        'id': "copy_code",
        'copy_code': _0x49f5fa
      })
    }, {
      'name': "cta_url",
      'buttonParamsJson': JSON.stringify({
        'display_text': "𝐉𝐎𝐈𝐍 𝐂𝐇𝐀𝐍𝐍𝐄𝐋",
        'url': "https://chat.whatsapp.com/KX7EPsiJhMlLLHJrXa7n0F"
      })
    }, {
      'name': 'quick_reply',
      'buttonParamsJson': JSON.stringify({
        'display_text': "𝐅𝐋𝐀𝐒𝐇 𝐌𝐄𝐍𝐔",
        'id': conf.PREFIX + 'menu'
      })
    }];
    const _0x1ad220 = generateWAMessageFromContent(_0xa0022d, {
      'viewOnceMessage': {
        'message': {
          'messageContextInfo': {
            'deviceListMetadata': {},
            'deviceListMetadataVersion': 0x2
          },
          'interactiveMessage': proto.Message.InteractiveMessage.create({
            'body': proto.Message.InteractiveMessage.Body.create({
              'text': _0x49f5fa
            }),
            'footer': proto.Message.InteractiveMessage.Footer.create({
              'text': "> *POWERED BY FLASH-MD*"
            }),
            'header': proto.Message.InteractiveMessage.Header.create({
              'title': '',
              'subtitle': '',
              'hasMediaAttachment': false
            }),
            'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
              'buttons': _0x4092b6
            })
          })
        }
      }
    }, {});
    await _0x1911bb.relayMessage(_0xa0022d, _0x1ad220.message, {
      'messageId': _0x1ad220.key.id
    });
    await _0x2cd6ce("Code Successfully Encrypted✅");
  } catch (_0x4c7b12) {
    console.error("Error:", _0x4c7b12);
    await _0x2cd6ce("Something is wrong, check if your code is logical and has the correct syntax");
  }
});
king({
  'nomCom': "whois",
  'categorie': 'User'
}, async (_0x462e8e, _0x8e752, _0x2c1dc8) => {
  const {
    ms: _0xb3fa82,
    arg: _0x5b9a39,
    repondre: _0x51c5ac,
    auteurMessage: _0x1c4839,
    nomAuteurMessage: _0x4bf63e,
    msgRepondu: _0x119435,
    auteurMsgRepondu: _0x2cdaa4
  } = _0x2c1dc8;
  let _0x487be6 = null;
  let _0xeb7d0 = null;
  let _0x250558;
  try {
    if (!_0x119435) {
      _0x487be6 = _0x1c4839;
      _0xeb7d0 = _0x4bf63e;
    } else {
      _0x487be6 = _0x2cdaa4;
      _0xeb7d0 = '@' + _0x2cdaa4.split('@')[0x0];
    }
    try {
      _0x250558 = await _0x8e752.profilePictureUrl(_0x487be6, "image");
    } catch {
      _0x250558 = "https://static.animecorner.me/2023/08/op2.jpg";
    }
    const _0x2c4f67 = await _0x8e752.fetchStatus(_0x487be6);
    const _0x2122ff = {
      'image': {
        'url': _0x250558
      },
      'caption': "*Name:* " + _0xeb7d0 + "\n*Status:*\n" + _0x2c4f67.status,
      'mentions': _0x119435 ? [_0x2cdaa4] : []
    };
    await _0x8e752.sendMessage(_0x462e8e, _0x2122ff, {
      'quoted': _0xb3fa82
    });
  } catch (_0x158ea9) {
    console.error('Error:', _0x158ea9);
    await _0x51c5ac("An error occurred while fetching user information.");
  }
});
king({
  'nomCom': 'getpp',
  'categorie': "User"
}, async (_0x566bee, _0x1b6b3c, _0x1cc432) => {
  const {
    ms: _0x31223d,
    arg: _0x155080,
    repondre: _0x55c492,
    auteurMessage: _0x424bce,
    nomAuteurMessage: _0x12d47d,
    msgRepondu: _0x5d1976,
    auteurMsgRepondu: _0xc1828e
  } = _0x1cc432;
  let _0x1fac3e = null;
  let _0x25f83d;
  try {
    if (!_0x5d1976) {
      _0x1fac3e = _0x424bce;
    } else {
      _0x1fac3e = _0xc1828e;
    }
    try {
      _0x25f83d = await _0x1b6b3c.profilePictureUrl(_0x1fac3e, "image");
    } catch {
      _0x25f83d = "https://static.animecorner.me/2023/08/op2.jpg";
    }
    const _0x4ac5ea = {
      'image': {
        'url': _0x25f83d
      },
      'caption': "Here is the Profile picture",
      'mentions': _0x5d1976 ? [_0xc1828e] : []
    };
    await _0x1b6b3c.sendMessage(_0x566bee, _0x4ac5ea, {
      'quoted': _0x31223d
    });
  } catch (_0x13a30b) {
    console.error("Error:", _0x13a30b);
    await _0x55c492("An error occurred while fetching the profile picture.");
  }
});