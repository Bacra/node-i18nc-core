module.exports = function code()
{
	var result;       // 中文注释
	result = I18NNew('中文0');
	result += I18NNew('中文1')+1;

	var c5 = {
		'中文key in object': I18NNew('中文val in object'),
	};
	c5[I18NNew('中文key')] = I18NNew('中文val');
	result += c5[I18NNew('中文key')];

	function print(msg) {
		return I18NNew('print信息，') + msg;
	}

	// 中文注释
	result += print(I18NNew('argv中文'));     // 中文注释

	function switch_print(name)
	{
		switch(name)
		{
			case I18NNew('中文case'):
			result += name;
			break;
		}
	}

	switch_print(I18NNew('中文case'));

	if (I18NNew('中文if'))
	{
		result += true ? I18NNew('中午true') : I18NNew('中文false')
	}

	I18NNew('中文I18N');
	I18NNew('中文I18N subtype', 'subtype');

	// I18N
	function I18NNew(g,f,i){
		/*eslint-disable*/
		var a=I18NNew;if(!a.data)a.data={};var d=(function(a){if(!a.global){a.global=typeof window=='object'&&window||typeof global=='object'&&global||{}}return a.global.__i18n_lan__})(a.data);if(!f||!f.join){i=f;f=[]}if(d){if(a.__TRANSLATE_LAN__!=d){a.__FILE_KEY__='*';a.__FUNCTION_VERSION__='9';a.__TRANSLATE_JSON__={
			'en-US': {
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
					// '中文key':
					// '中文val':
					// '中文val in object':
					// '简体':
					'<e.g.> translate word': null
				},
				'SUBTYPES': {
					'subtype': {
						// 'I18N(中文)':
						// '中文I18N subtype':
						'<e.g.> translate word': null
					},
					'subtype2': {
						// 'I18N(中文)':
						'<e.g.> translate word': null
					}
				}
			}
		};
		var o=a.__TRANSLATE_JSON__;var e=a.__TRANSLATE_ITEMS__=[];if(d.split){var j=d.split(',');for(var b=0,h=j.length;b<h;b++){var c=o[j[b]];if(c)e.push(c)}}a.__TRANSLATE_LAN__=d}var e=a.__TRANSLATE_ITEMS__;var k,l;for(var b=0,h=e.length;b<h;b++){var c=e[b];var m=i&&c.SUBTYPES&&c.SUBTYPES[i];l=m&&m[g];if(l)break;if(!k)k=c.DEFAULTS&&c.DEFAULTS[g]}var n=l||k;if(n)g=n}if(!f.length)return''+g;var p=0;return(''+g).replace(/(%s)|(%\{(.+?)\})/g,function(b){var a=f[p++];return a===undefined||a===null?b:a});
		/*eslint-enable*/
	}

	result += I18NNew('I18N(中文)', 'subtype');
	result += I18NNew('I18N(中文)', 'subtype2');
	result += I18NNew('简体');

	return result;
}