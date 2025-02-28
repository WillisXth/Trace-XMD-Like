'use strict';

Object.defineProperty(exports, "__esModule", {
  'value': true
});
exports.reagir = undefined;
async function reagir(_0x1ce24f, _0x100565, _0x89dc09, _0x567598) {
  await _0x100565.sendMessage(_0x1ce24f, {
    'react': {
      'text': _0x567598,
      'key': _0x89dc09.key
    }
  });
}
exports.reagir = reagir;