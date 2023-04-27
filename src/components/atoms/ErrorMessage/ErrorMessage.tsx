import React from 'react';
import './ErrorMessage.css';
import { Alert, AlertTitle } from '@mui/material';

export type ErrorMessageProps = {
}

const ErrorMessage: React.FC<ErrorMessageProps> = () => {
	return (
		<div className="container-fluid px-4">
			<Alert severity="error">
				<AlertTitle>Error Network</AlertTitle>
				Revisa tu conexion de internet — <strong>Recarga la pagina!</strong>
			</Alert>
		</div>
	)
};

export default ErrorMessage;
