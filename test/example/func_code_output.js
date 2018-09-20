module.exports = function code()
{
	var result;       // 中文注释
	result = I18N('中文0');
	result += I18N('中文1')+1;

	var c5 = {
		'中文key in object': I18N('中文val in object'),
	};
	c5[I18N('中文key')] = I18N('中文val');
	result += c5[I18N('中文key')];

	function print(msg) {
		return I18N('print信息，') + msg;
	}

	// 中文注释
	result += print(I18N('argv中文'));     // 中文注释

	function switch_print(name)
	{
		switch(name)
		{
			case I18N('中文case'):
			result += name;
			break;
		}
	}

	switch_print(I18N('中文case'));

	if (I18N('中文if'))
	{
		result += true ? I18N('中午true') : I18N('中文false')
	}

	I18N('中文I18N');
	I18N('中文I18N subtype', 'subtype');

	// I18N
	function I18N(msg, tpldata, subtype)
	{
		var self = I18N,
			translateJSON,
			replace_index = 0,
			lanArr, lanKeys, i, lanItem, translateMsg, subtypeJSON,
			data = self.$ || (self.$ = {}),
			LAN = (function(cache)
			{
				if (!cache.global)
				{
					cache.global = (typeof window == 'object' && window)
						|| (typeof global == 'object' && global)
						|| {};
				}
			
				return cache.global.__i18n_lan__;
			})(data);
	
		if (!tpldata || !tpldata.join)
		{
			subtype = tpldata;
			tpldata = [];
		}
	
		if (LAN && LAN.split)
		{
			if (self.L != LAN)
			{
				self.K = '*';
				self.V = 'df';
				self.D = {
					'zh-TW': {
						'DEFAULTS': {
							// 'argv中文':
							// 'print信息，':
							// '中午true':
							// '中文0':
							// '中文1':
							// '中文I18N':
							// '中文case':
							// '中文false':
							// '中文if':
							// '中文val':
							// '中文val in object':
							// '简体':
							'中文key': '中文键'
						},
						'SUBTYPES': {
							'subtype': {
								// '中文I18N subtype':
								'I18N(中文)': '中文国际化'
							},
							'subtype2': {
								// 'I18N(中文)':
							}
						}
					}
				};
	
				translateJSON = self.D;
				lanKeys = LAN.split(',');
	
				lanArr = self.M = [];
				for(i = lanKeys.length; i--;)
				{
					lanItem = translateJSON[lanKeys[i]];
					if (lanItem) lanArr.push(lanItem);
				}
				self.L = LAN;
			}
	
			lanArr = self.M;
			for(i = lanArr.length; !translateMsg && i--;)
			{
				lanItem = lanArr[i];
				if (subtype)
				{
					subtypeJSON = lanItem.SUBTYPES;
					subtypeJSON = subtypeJSON && subtypeJSON[subtype];
					translateMsg = subtypeJSON && subtypeJSON[msg];
				}
				if (!translateMsg)
				{
					subtypeJSON = lanItem.DEFAULTS;
					translateMsg = subtypeJSON && subtypeJSON[msg];
				}
			}
	
			if (translateMsg) msg = translateMsg;
		}
	
		msg += '';
		if (!tpldata.length || msg.indexOf('%') == -1) return msg;
	
		return msg.replace(/%s|%\{.+?\}/g, function(all)
		{
			var newVal = tpldata[replace_index++];
			return newVal === undefined ? all : newVal === null ? '' : newVal;
		});
	}

	result += I18N('I18N(中文)', 'subtype');
	result += I18N('I18N(中文)', 'subtype2');
	result += I18N('简体');

	return result;
}
