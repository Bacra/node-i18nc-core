module.exports = function code()
			{
				println(I18N('简体'), I18N);
				function I18N()
				{
					var self = I18N;
					self.__FILE_KEY__ = "default_file_key";
					self.__FUNCTION_VERSION__ = "J";
					self.__TRANSLATE_JSON__ =
					{
						'$': ['zh-TW'],
						'*': { '简体': ['簡體'] }
					};
				}
			}