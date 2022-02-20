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
				templateFile: 'plop-templates/component.js.hbs'
			}
		]
	});
};
