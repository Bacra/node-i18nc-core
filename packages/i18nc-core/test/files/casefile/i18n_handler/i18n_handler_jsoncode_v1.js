module.exports = I18N;
function I18N(msg, tpldata, subkey)
{
	var self = I18N;
	var data = self.$ || (self.$ = {});
	var LAN = (function(){return global.__i18n_lan__})(data);
	if (!tpldata || !tpldata.join)
	{
		subkey = tpldata;
		tpldata = [];
	}

	if (LAN && LAN.split)
	{
		var lanArr, i, len, lanItem;
		if (self.L != LAN)
		{
			self.K = 'i18n_handler_example';
			self.V = 'cf';
			self.D = {
				"en-US": {
					"DEFAULTS": {
						"简体": "simplified",
						"空白": [],
						"无": "",
						"%s美好%s生活": "%sgood%s life",
						"%{中文}词典": "%{Chinese} dictionary"
					},
					"SUBKEYS": {
						"subkey": {
							"简体": "simplified subkey"
						}
					}
				},
				"zh-TW": {
					"DEFAULTS": {
						"简体": "簡體",
						"无": "無"
					}
				}
			};

			var __TRANSLATE_JSON__ = self.D;
			var lanKeys = LAN.split(',');
			lanArr = self.M = [];
			for(i = 0, len = lanKeys.length; i < len; i++)
			{
				lanItem = __TRANSLATE_JSON__[lanKeys[i]];
				if (lanItem) lanArr.push(lanItem);
			}
			self.L = LAN;
		}

		lanArr = self.M;
		var resultDefault, resultSubject, allsubkeys, alldefaults, subkeyJSON;
		for(i = 0, len = lanArr.length; i < len; i++)
		{
			lanItem = lanArr[i];
			if (subkey)
			{
				allsubkeys = lanItem.SUBKEYS;
				subkeyJSON = allsubkeys && allsubkeys[subkey];
				resultSubject = subkeyJSON && subkeyJSON[msg];
				if (resultSubject) break;
			}
			if (!resultDefault)
			{
				alldefaults = lanItem.DEFAULTS;
				resultDefault = alldefaults && alldefaults[msg];
			}
		}

		if (resultSubject) msg = resultSubject;
		else if (resultDefault) msg = resultDefault;
	}

	msg += '';
	if (!tpldata.length || msg.indexOf('%') == -1) return msg;

	var replace_index = 0;
	return msg.replace(/%s|%\{.+?\}/g, function(all)
	{
		var newVal = tpldata[replace_index++];
		return newVal === undefined ? all : newVal === null ? '' : newVal;
	});
}
