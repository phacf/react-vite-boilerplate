import { render, screen } from '@testing-library/react';
import React from 'react';

import Button from '.';

describe('<Button/>', () => {
	it('Should render properly', () => {
        
		render(<Button />);
		const text = screen.getByText('Button')
		expect(text).toBeInTheDocument;
	});
});