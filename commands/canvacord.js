const {
  king
} = require("../france/king");
const canvacord = require("canvacord");
const {
  uploadImageToImgur
} = require("../france/imgur");
function createCanvacordCommand(_0x3782d6, _0x5ab8fb) {
  king({
    'nomCom': _0x3782d6,
    'categorie': "Image-Edit",
    'reaction': '🎉'
  }, async (_0x25bdb5, _0xc90848, _0x13cb45) => {
    const {
      ms: _0x188515,
      msgRepondu: _0x1540ee,
      auteurMsgRepondu: _0xf1d023
    } = _0x13cb45;
    try {
      let _0x2a163e;
      if (_0x1540ee) {
        if (_0x1540ee.imageMessage) {
          const _0x4c064b = await _0xc90848.downloadAndSaveMediaMessage(_0x1540ee.imageMessage);
          _0x2a163e = await uploadImageToImgur(_0x4c064b, "b40a1820d63cd4e");
        } else {
          _0x2a163e = await _0xc90848.profilePictureUrl(_0xf1d023, "image");
        }
      } else {
        _0x2a163e = 'https://i.pinimg.com/564x/84/09/12/840912dd744e6662ab211b8070b5d84c.jpg';
      }
      const _0x386ce2 = await _0x5ab8fb(_0x2a163e);
      await _0xc90848.sendMessage(_0x25bdb5, {
        'image': _0x386ce2
      }, {
        'quoted': _0x188515
      });
    } catch (_0x3c057f) {
      console.error("Error when ordering \"" + _0x3782d6 + "\":", _0x3c057f);
    }
  });
}
createCanvacordCommand('shit', canvacord.Canvacord.shit);
createCanvacordCommand("wasted", canvacord.Canvacord.wasted);
createCanvacordCommand("wanted", canvacord.Canvacord.wanted);
createCanvacordCommand("trigger", canvacord.Canvacord.trigger);
createCanvacordCommand('trash', canvacord.Canvacord.trash);
createCanvacordCommand('rip', canvacord.Canvacord.rip);
createCanvacordCommand("sepia", canvacord.Canvacord.sepia);
createCanvacordCommand("rainbow", canvacord.Canvacord.rainbow);
createCanvacordCommand("hitler", canvacord.Canvacord.hitler);
createCanvacordCommand('invert', canvacord.Canvacord.invert);
createCanvacordCommand('jail', canvacord.Canvacord.jail);
createCanvacordCommand("affect", canvacord.Canvacord.affect);
createCanvacordCommand('beautiful', canvacord.Canvacord.beautiful);
createCanvacordCommand('blur', canvacord.Canvacord.blur);
createCanvacordCommand("circle", canvacord.Canvacord.circle);
createCanvacordCommand("facepalm", canvacord.Canvacord.facepalm);
createCanvacordCommand("greyscale", canvacord.Canvacord.greyscale);
createCanvacordCommand("joke", canvacord.Canvacord.jokeOverHead);