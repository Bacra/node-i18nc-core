module.exports = function code()
{


	/* eslint-disable */
	function I18N(msg, tpldata, subtype)
	{
		var self = I18N,
			translateJSON,
			replace_index = 0,
			lanArr, lanKeys, i, lanItem, translateMsg, subtypeJSON,
			data = self.$ || (self.$ = {}),
			LAN = (function(cache)
			{
				var g = cache.g || (cache.g = window.settings);
				return g._lan_;
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
				self.V = 'Df';
				self.D = {
					'en-US': {
						'DEFAULTS': {
							// '中文':
							// '中文2':
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
	/* eslint-enable */



	var word = I18N('中文');
	consol.log(word, I18N('中文2'));
}
