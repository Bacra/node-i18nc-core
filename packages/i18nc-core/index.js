'use strict';

const debug = require('debug')('i18nc-core');
const options = require('i18nc-options');

exports = module.exports = require('./lib/main').main;
exports.version = require('./package.json').version;
exports.defaults = options.defaults;

// 已经采用标准版的json格式去处理翻译数据
// 所以不用再输出parse的接口
// exports.parse = require('i18nc-ast').util.parse;

require('./lib/emitter').proxy(exports);

exports.plugins = {};
exports.registerPlugin = function(name, handler) {
	const defaults = options.defaults;
	handler(exports, defaults.pluginSettings, defaults.pluginEnabled);
	exports.plugins[name] = handler;
	debug('register plugin:%s', name);
};
