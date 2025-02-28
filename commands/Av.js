const {
  king
} = require('../france/king');
king({
  'nomCom': 'vv2',
  'categorie': 'General',
  'reaction': '🤩'
}, async (_0x2e407f, _0x3a4243, _0x3e5a07) => {
  const {
    ms: _0x33f9de,
    msg: _0x11e954,
    auteurMessage: _0x1d0534,
    msgRepondu: _0x1d8c70,
    repondre: _0x3ca93e
  } = _0x3e5a07;
  if (!_0x1d8c70) {
    return _0x3ca93e("*Mentionne a view once media*.");
  }
  if (_0x1d8c70.viewOnceMessageV2) {
    if (_0x1d8c70.viewOnceMessageV2.message.imageMessage) {
      var _0x4d40e2 = await _0x3a4243.downloadAndSaveMediaMessage(_0x1d8c70.viewOnceMessageV2.message.imageMessage);
      var _0x504fd8 = _0x1d8c70.viewOnceMessageV2.message.imageMessage.caption;
      await _0x3a4243.sendMessage(_0x1d0534, {
        'image': {
          'url': _0x4d40e2
        },
        'caption': _0x504fd8
      }, {
        'quoted': _0x33f9de
      });
    } else {
      if (_0x1d8c70.viewOnceMessageV2.message.videoMessage) {
        var _0x145364 = await _0x3a4243.downloadAndSaveMediaMessage(_0x1d8c70.viewOnceMessageV2.message.videoMessage);
        var _0x504fd8 = _0x1d8c70.viewOnceMessageV2.message.videoMessage.caption;
        await _0x3a4243.sendMessage(_0x1d0534, {
          'video': {
            'url': _0x145364
          },
          'caption': _0x504fd8
        }, {
          'quoted': _0x33f9de
        });
      } else {
        if (_0x1d8c70.viewOnceMessageV2.message.audioMessage) {
          var _0x2808c2 = await _0x3a4243.downloadAndSaveMediaMessage(_0x1d8c70.viewOnceMessageV2.message.audioMessage);
          var _0x504fd8 = _0x1d8c70.viewOnceMessageV2.message.audioMessage.caption;
          await _0x3a4243.sendMessage(_0x1d0534, {
            'audio': {
              'url': _0x2808c2
            },
            'caption': _0x504fd8
          }, {
            'quoted': _0x33f9de
          });
        } else {
          return _0x3ca93e("Unsupported media type in view once message.");
        }
      }
    }
  } else {
    return _0x3ca93e("This message is not on view once.");
  }
});