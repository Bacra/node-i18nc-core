I18NC-CORE
==========

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][npm-url]
[![NPM License][license-image]][npm-url]
[![License Status][license-status-image]][license-status-url]


# Install

```
npm install i18nc-core --save
```

# Usage

```javascript
var i18nc = require('i18nc-core');
// options: https://bacra.github.io/i18nc-core/?p=options
var ret = i18nc(code, options);

ret.code    // output code
ret.dirtyWords
ret.codeTranslateWords
ret.funcTranslateWords
ret.usedTranslateWords
ret.I18NArgsTranslateWords
ret.subScopeDatas
```

# Example

### Input Code

```javascript
var word = "中文1";
define(function()
{
  var word = "中文2";
  var word = I18N('中文', 'sub type');
});

var word = '简体';
var word = I18N('%s中文%s课堂', ['<span>', '</span>']);
function I18N(){}
```

### Output Code

```javascript
var word = I18N('中文1');
define(function()
{
  var word = I18N('中文2');
  var word = I18N('中文', 'sub type');
});

var word = I18N('简体');
var word = I18N('%s中文%s课堂', ['<span>', '</span>']);
function I18N(h,f,i){
  var a=I18N;
  ...
  // a.__FILE_KEY__='*';a.__FUNCTION_VERSION__='5';a.__TRANSLATE_JSON__={};
  a.K='*';a.V='5';a.D={};
  ...
  var q=l||k||h;var p=0;
  return(''+q).replace(/%s|%\{.+?\}/g,function(){var a=f[p++];return a===undefined||a===null?'':a;});
}
```

# Upgrade

[Wiki](https://bacra.github.io/i18nc-core/?p=upgrade)



[npm-image]: https://img.shields.io/npm/v/i18nc-core.svg
[downloads-image]: https://img.shields.io/npm/dm/i18nc-core.svg
[npm-url]: https://www.npmjs.org/package/i18nc-core
[license-image]: https://img.shields.io/npm/l/i18nc-core.svg
[license-status-url]: https://app.fossa.io/projects/git%2Bgithub.com%2FBacra%2Fi18nc-core?ref=badge_shield
[license-status-image]: https://app.fossa.io/api/projects/git%2Bgithub.com%2FBacra%2Fi18nc-core.svg?type=shield
