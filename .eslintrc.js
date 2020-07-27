module.exports = {
	root: true,
	extends: '@react-native-community',
	rules: {
		'react-native/no-inline-styles': 0,
		indent: [2, 'tab', {SwitchCase: 1, VariableDeclarator: 1}],
		'prettier/prettier': [
			'error',
			{
				useTabs: true,
				tabWidth: 4,
			},
		],
	},
};
