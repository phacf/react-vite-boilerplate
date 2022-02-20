import { render, screen } from '@testing-library/react';
import React from 'react';

import Main from '.';

describe('<Main/>', () => {
	it('Should render properly', () => {
        
		render(<Main />);
		const text = screen.getByText('component')
		expect(text).toBeInTheDocument;
	});
});
