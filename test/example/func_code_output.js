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

	if (!!I18N('中文if'))
	{
		result += true ? I18N('中午true') : I18N('中文false')
	}

	I18N('中文I18N');
	I18N('中文I18N subtype', 'subtype');

	// I18N
	function I18N(h,f,i){
		var a=I18N;var o=a.__GLOBAL__||(a.__GLOBAL__=typeof window == "object" ? window : typeof global == "object" && global)||{};var d=o.__i18n_lan__;if(!d)return h;if(!f||!f.join){i=f;f=[]}if(a.__TRANSLATE_LAN__!=d){a.__FILE_KEY__='*';a.__FUNCTION_VERSION__='5';a.__TRANSLATE_JSON__={
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
						'<e.g.> translate word': null
					}
				}
			}
		}
		;var n=a.__TRANSLATE_JSON__;var e=a.__TRANSLATE_ITEMS__=[];if(d.split){var j=d.split(',');for(var b=0,g=j.length;b<g;b++){var c=n[j[b]];if(c)e.push(c)}}a.__TRANSLATE_LAN__=d}var e=a.__TRANSLATE_ITEMS__;var k,l;for(var b=0,g=e.length;b<g;b++){var c=e[b];var m=i&&c.SUBTYPES&&c.SUBTYPES[i];l=m&&m[h];if(l)break;if(!k)k=c.DEFAULTS&&c.DEFAULTS[h]}var q=l||k||h;var p=0;return(''+q).replace(/(%s)|(%\{(.+?)\})/g,function(){var a=f[p++];return a===undefined||a===null?'':a})
	}

	result += I18N('I18N(中文)', 'subtype');
	result += I18N('I18N(中文)', 'subtype2');
	result += I18N('简体');

	return result;
}