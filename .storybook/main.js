module.exports = {
	stories: [
		'../src/**/*.stories.mdx',
		'../src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
	],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'storybook-addon-pseudo-states',
		'storybook-design-token',
		// { name: 'storybook-design-token', options: { preserveCSSVars: true } },
	],
};
