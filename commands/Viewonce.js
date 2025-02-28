const {
  king
} = require("../france/king");
king({
  'nomCom': 'vv',
  'categorie': "General",
  'reaction': '✊'
}, async (_0x4d1691, _0xa9f47f, _0x2c96d8) => {
  const {
    ms: _0xb07492,
    msgRepondu: _0x60b7a0,
    repondre: _0x23bd61
  } = _0x2c96d8;
  if (!_0x60b7a0) {
    return _0x23bd61("*Mention a view once media, such as a video, image or a voice note* .");
  }
  console.log(_0x60b7a0);
  if (_0x60b7a0.viewOnceMessageV2 || _0x60b7a0.viewOnceMessageV2Extension) {
    let _0x148c17 = _0x60b7a0.viewOnceMessageV2Extension ?? _0x60b7a0.viewOnceMessageV2;
    if (_0x148c17.message.imageMessage) {
      var _0x746a78 = await _0xa9f47f.downloadAndSaveMediaMessage(_0x60b7a0.viewOnceMessageV2.message.imageMessage);
      var _0x2891de = _0x60b7a0.viewOnceMessageV2.message.imageMessage.caption;
      await _0xa9f47f.sendMessage(_0x4d1691, {
        'image': {
          'url': _0x746a78
        },
        'caption': _0x2891de
      }, {
        'quoted': _0xb07492
      });
    } else {
      if (_0x148c17.message.videoMessage) {
        var _0x424b79 = await _0xa9f47f.downloadAndSaveMediaMessage(_0x60b7a0.viewOnceMessageV2.message.videoMessage);
        var _0x2891de = _0x60b7a0.viewOnceMessageV2.message.videoMessage.caption;
        await _0xa9f47f.sendMessage(_0x4d1691, {
          'video': {
            'url': _0x424b79
          },
          'caption': _0x2891de
        }, {
          'quoted': _0xb07492
        });
      } else {
        if (_0x148c17.message.audioMessage) {
          var _0x571562 = await _0xa9f47f.downloadAndSaveMediaMessage(_0x148c17.message.audioMessage);
          await _0xa9f47f.sendMessage(_0x4d1691, {
            'audio': {
              'url': _0x571562
            },
            'mymetype': "audio/mp4"
          }, {
            'quoted': _0xb07492,
            'ptt': false
          });
        }
      }
    }
  } else {
    return _0x23bd61("That is not a view once media.");
  }
});