module.exports = I18N;
function I18N(h,f,i){
	var a=I18N;var o=a.__GLOBAL__||(a.__GLOBAL__=typeof window == "object" ? window : typeof global == "object" && global)||{};var d=o.__i18n_lan__;if(!d)return h;if(!f||!f.join){i=f;f=[]}if(a.__TRANSLATE_LAN__!=d){a.__TRANSLATE_LAN__=d;a.__FILE_KEY__='i18n_handler_example';a.__FUNCTION_VERSION__='5';a.__TRANSLATE_JSON__={
		'en-US': {
			'DEFAULTS': {
				// "中文 allfile subtype1":
				// "中文 thisfile subtype2":
				'中文0': 'indb <thisfile> db0',
				'中文1': 'in_file custom1',
				'中文2': 'in_file zh2_db',
				// "中文5_empty":
				'中文6_empty': 'in_file 4',
				'中文db *': 'indb *'
			}
		},
		'zh-TW': {
			'DEFAULTS': {
				// "中文1":
				// "中文2":
				// "中文5_empty":
				// "中文6_empty":
				// "中文db *":
				'中文0': '中文0 in tw'
			}
		}
	}
	;var n=a.__TRANSLATE_JSON__;var e=a.__TRANSLATE_LAN_JSON__=[];if(d&&d.split){var j=d.split(',');for(var b=0,g=j.length;b<g;b++){var c=n[j[b]];if(c)e.push(c)}}}var e=a.__TRANSLATE_LAN_JSON__,k,l;for(var b=0,g=e.length;b<g;b++){var c=e[b];var m=i&&c.SUBTYPES&&c.SUBTYPES[i];l=m&&m[h];if(l)break;if(!k)k=c.DEFAULTS&&c.DEFAULTS[h]}var q=l||k||h;var p=0;return(''+q).replace(/(%s)|(%\{(.+?)\})/g,function(){var a=f[p++];return a===undefined||a===null?'':a})
}
var codeJSON = {
	"DEFAULTS": [
		I18N('中文0'),
		I18N('中文1'),
		I18N('中文2'),
		I18N('中文5_empty'),
		I18N('中文6_empty'),
		I18N('中文db *')
	],
	"SUBTYPES": {
		"subtype": [
			I18N('中文0'),
			I18N('中文1'),
			I18N('中文2'),
			I18N('中文 allfile subtype1'),
			I18N('中文 thisfile subtype2')
		]
	}
}