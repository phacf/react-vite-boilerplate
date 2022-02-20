import { Story, Meta } from '@storybook/react/types-7-0';
import Button from '.';

export default {
	title: 'Button',
	component: Button
} as Meta;

export const Basic = () => <Button />;

export const Default: Story = (
	args: JSX.IntrinsicAttributes & {
		title?: string | undefined;
		description?: string | undefined;
	}
) => <Button {...args} />;
Default.args = {
	title: 'Default Title',
	description: 'Default Description'
};
