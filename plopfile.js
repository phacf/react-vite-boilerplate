module.exports = function (plop) {
	plop.setGenerator('component', {
		description: 'React initial Component',
		prompts: [
			{
				type: 'input',
				name: 'component_name',
				message: 'Components name please.'
			}
		],
		actions: [
			{
				type: 'add',
				path: 'src/components/{{component_name}}/index.tsx',
				templateFile: 'plop-templates/components/component.js.hbs'
			},
			{
				type: 'add',
				path: 'src/components/{{component_name}}/style.ts',
				templateFile: 'plop-templates/components/style.js.hbs'
			},
			{
				type: 'add',
				path: 'src/components/{{component_name}}/test.tsx',
				templateFile: 'plop-templates/components/test.js.hbs'
			},
			{
				type: 'add',
				path: 'src/components/{{component_name}}/stories.tsx',
				templateFile: 'plop-templates/components/story.js.hbs'
			}
		]
	});
};
