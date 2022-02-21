import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import Button from '.';

export default {
	title: 'Button',
	component: Button
} as ComponentMeta<typeof Button>;

export const Primary: ComponentStory<typeof Button> = () => <Button />;
