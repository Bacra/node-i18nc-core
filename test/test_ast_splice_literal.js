var _					= require('lodash');
var debug				= require('debug')('i18nc:test_ast_splice_literal');
var expect				= require('expect.js');
var escodegen			= require('escodegen');
var i18nc				= require('../');
var optionsUtils		= require('../lib/options');
var spliceLiteralUtils	= require('../lib/ast_splice_literal');


describe('#spliceLiteralAst', function()
{
	var options = optionsUtils.extend();

	function _item2val(arr)
	{
		return arr.map(function(item)
			{
				if (Array.isArray(item))
				{
					return _item2val(item);
				}
				else if (item.type == 'other')
				{
					var callee = item.ast.callee;
					if (callee)
					{
						return '[callee]'+callee.name;
					}
					else
					{
						return '[ast:'+item.ast.type+']';
					}
				}
				else
				{
					return item.value;
				}
			});
	}

	function _str2code(str)
	{
		return str.replace(/\b(\d*[a-z]\d*)+\b/g, function(val)
			{
				return '"'+val+'"';
			});
	}

	/**
	 * @param  {String} codeStr 表达式code
	 * 								code字符串使用小写的字母表示
	 * 								变量或则函数，使用大写的字幕表示
	 * 
	 * @param  {Object} eqlInfo 期望的结果值
	 * 								combo 合并后的数组
	 * 								comboCode 通过combo合成的ast生成的code（表达式，同上）
	 * @param  {String} mode    spliceLiteralMode值
	 */
	function _realCheck(codeStr, eqlInfo, mode)
	{
		mode = mode || 'LITERAL';
		var code = _str2code(codeStr);
		debug('new code:%s', code);

		var data = i18nc.parse(code).body[0].expression;
		var options = optionsUtils.extend({spliceLiteralMode: mode});


		it('#plusBinaryExpressionAst2arrWidthClear', function()
		{
			var arr = spliceLiteralUtils._plusBinaryExpressionAst2arrWidthClear(data, options);
			expect(_item2val(arr)).to.eql(eqlInfo.combo);
		});

		it('#spliceLiteralAst', function()
		{
			var newAst = spliceLiteralUtils.spliceLiteralAst(data, options);

			var escodegenOptions = {format:{quotes: 'double'}};
			var newCode = escodegen.generate(newAst, escodegenOptions).replace(/\s/g, '');
			expect(newCode).to.be(_str2code(eqlInfo.comboCode));
		});
	}

	function _checkOne(codeStr)
	{
		var args = arguments;
		describe('#expr:'+codeStr, function()
		{
			_realCheck.apply(this, args);
		});
	}


	function _checkAll(codeStr, eqlObj)
	{
		describe('#expr:'+codeStr, function()
		{
			_.each(eqlObj, function(eqlInfo, mode)
			{
				describe('#mode:'+mode, function()
				{
					_realCheck(codeStr, eqlInfo, mode);
				});
			});
		});
	}


	describe('#base', function()
	{
		_checkOne('a+b+c',
			{
				combo		: ['abc'],
				comboCode	: 'abc'
			});
		_checkOne('a+(b+c)',
			{
				combo: ['abc'],
				comboCode: 'abc'
			});
		_checkOne('1+2+a+b',
			{
				combo: [1, 2, 'ab'],
				comboCode: '1+2+ab'
			});
	});


	describe('#var', function()
	{
		_checkOne('1+2+Var1+a+b',
			{
				combo: [1, 2, '[ast:Identifier]', 'ab'],
				comboCode: '1+2+Var1+ab'
			});
		_checkOne('1+Var1+2+a+b',
			{
				combo: [1, '[ast:Identifier]', 2, 'ab'],
				comboCode: '1+Var1+2+ab'
			});
	});


	describe('#run handler', function()
	{
		_checkOne('1+Run(2)+3+a',
			{
				combo: [1, '[callee]Run', 3, 'a'],
				comboCode: '1+Run(2)+3+a'
			});
	});


	describe('#priority', function()
	{
		_checkOne('1+a+b+(2+c+d)',
			{
				combo: ['1ab2cd'],
				comboCode: '1ab2cd'
			});
		_checkOne('1+(2+a+b)',
			{
				combo: ['12ab'],
				comboCode: '12ab'
			});
		_checkOne('1+2+a+b+(3+4+c+d)',
			{
				combo: [1, 2, 'ab', [3, 4, 'cd']],
				comboCode: '1+2+ab+(3+4+cd)'
			});
		_checkOne('1+2+(3+a+b)',
			{
				combo: [1, 2, '3ab'],
				comboCode: '1+2+3ab'
			});
	});

	describe('#other operator', function()
	{
		_checkOne('1*a+b+(2+c+d)',
			{
				combo: ['[ast:BinaryExpression]', 'b2cd'],
				comboCode: '1*a+b2cd'
			});
		_checkOne('1*2+a+(3+b+c)',
			{
				combo: ['[ast:BinaryExpression]', 'a3bc'],
				comboCode: '1*2+a3bc'
			});
		_checkOne('1*2+3+(4+a+b)',
			{
				combo: ['[ast:BinaryExpression]', 3, '4ab'],
				comboCode: '1*2+3+4ab'
			});
		_checkOne('1*2+3+4+a',
			{
				combo: ['[ast:BinaryExpression]', 3, 4, 'a'],
				comboCode: '1*2+3+4+a'
			});
		_checkOne('1+2*3+4+a',
			{
				combo: [1, '[ast:BinaryExpression]', 4, 'a'],
				comboCode: '1+2*3+4+a'
			});
	});


	describe('#I18N', function()
	{
		_checkAll('1+2+a+I18N(3)',
			{
				LITERAL:
				{
					combo: [1, 2, 'a', '[callee]I18N'],
					comboCode: '1+2+a+I18N(3)'
				},
				I18N:
				{
					combo: [1, 2, 'a3'],
					comboCode: '1+2+a3'
				},
				ALL_I18N:
				{
					combo: [1, 2, 'a3'],
					comboCode: '1+2+a3'
				}
			});

		_checkAll('1+2+a+I18N(b)',
			{
				LITERAL:
				{
					combo: [1, 2, 'a', '[callee]I18N'],
					comboCode: '1+2+a+I18N(b)'
				},
				I18N:
				{
					combo: [1, 2, 'ab'],
					comboCode: '1+2+ab'
				},
				ALL_I18N:
				{
					combo: [1, 2, 'ab'],
					comboCode: '1+2+ab'
				}
			});

		_checkAll('1+I18N(2)+3+a',
			{
				LITERAL:
				{
					combo: [1, '[callee]I18N', 3, 'a'],
					comboCode: '1+I18N(2)+3+a'
				},
				I18N:
				{
					combo: ['123a'],
					comboCode: '123a'
				},
				ALL_I18N:
				{
					combo: ['123a'],
					comboCode: '123a'
				}
			});

		_checkAll('1+2+a+I18N(Var1)',
			{
				LITERAL:
				{
					combo: [1, 2, 'a', '[callee]I18N'],
					comboCode: '1+2+a+I18N(Var1)'
				},
				I18N:
				{
					combo: [1, 2, 'a', '[callee]I18N'],
					comboCode: '1+2+a+I18N(Var1)'
				},
				ALL_I18N:
				{
					combo: [1, 2, 'a', '[callee]I18N'],
					comboCode: '1+2+a+I18N(Var1)'
				}
			});

		_checkAll('1+2+a+I18N(b,subtype)',
			{
				LITERAL:
				{
					combo: [1, 2, 'a', '[callee]I18N'],
					comboCode: '1+2+a+I18N(b,subtype)'
				},
				I18N:
				{
					combo: [1, 2, 'a', '[callee]I18N'],
					comboCode: '1+2+a+I18N(b,subtype)'
				},
				ALL_I18N:
				{
					combo: [1, 2, 'ab'],
					comboCode: '1+2+ab'
				}
			});
	});

});
