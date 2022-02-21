import styled, { css } from 'styled-components';

export const Button = styled.div<{ example?: string }>`
	${({ example = 'black' }) => css`
		border: 1px solid ${example};
		padding: 5px 10px;
		width: fit-content;
	`}
`;
