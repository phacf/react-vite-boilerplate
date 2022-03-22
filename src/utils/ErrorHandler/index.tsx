import React from 'react';

export class ErrorBoundary extends React.Component {
	state: {
		hasError: boolean;
	};

	constructor(props: any) {
		super(props);
		this.state = {
			hasError: false
		};
	}

	static getDerivedStateFromError(error?: any) { // eslint-disable-line
		// Atualiza o state para que a próxima renderização mostre a UI alternativa.
		return { hasError: true };
	}

	componentDidCatch(error: any, errorInfo: React.ErrorInfo) {
		// Você também pode registrar o erro em um serviço de relatórios de erro
		console.error(error, errorInfo);
	}

	render() {
		if (this.state.hasError) {
			// Você pode renderizar qualquer UI alternativa
			return <h1>Algo deu errado.</h1>;
		}

		return this.props.children;
	}
}
