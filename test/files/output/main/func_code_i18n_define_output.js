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
				self.V = 'Df';
				self.D = {
					'en-US': {
						'DEFAULTS': {
							// 'out define 中文':
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



	var word = I18N('out define 中文');

	define(function()
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
					self.V = 'Df';
					self.D = {
						'en-US': {
							'DEFAULTS': {
								// '中文':
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



		word = I18N('中文');
	});

	define('define2', function()
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
					self.V = 'Df';
					self.D = {
						'en-US': {
							'DEFAULTS': {
								// 'define2 中文':
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



		word = I18N('define2 中文');
	});

	// define 的中文包含在subscope，本身不包含中文
	define('define3', function()
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
					self.V = 'Df';
					self.D = {
						'en-US': {
							'DEFAULTS': {
								// 'define3 中文':
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



		function somehadler()
		{
			word = I18N('define3 中文')
		}
	});

	define('define4', function()
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
					self.V = 'Df';
					self.D = {
						'en-US': {
							'DEFAULTS': {
								// 'define4 中文':
								// 'define5 中文':
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



		// define 嵌套
		word = I18N('define4 中文');

		define('define5', function()
		{
			word = I18N('define5 中文');
		});
	});


	// 预先定义了I18N函数
	function somehadler()
	{
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
					self.V = 'Df';
					self.D = {
						'en-US': {
							'DEFAULTS': {
								// 'define6 中文':
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

		define('define6', function()
		{
			word = I18N('define6 中文');
		});
	}
}
