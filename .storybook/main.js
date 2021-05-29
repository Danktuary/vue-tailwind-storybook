const path = require('path');

module.exports = {
	stories: [
		'../src/**/*.stories.mdx',
		'../src/**/*.stories.@(js|jsx|ts|tsx)',
	],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-postcss',
	],
	webpackFinal: async (config) => {
		config.module.rules.push({
			test: /\.css$/,
			use: [
				{
					loader: 'postcss-loader',
				},
			],
			include: path.resolve(__dirname, '../src'),
		});

		return config;
	},
};
