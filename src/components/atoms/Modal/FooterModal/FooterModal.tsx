import React from 'react';
import './FooterModal.css';

export type FooterModalProps = {
	handleClose: () => void;
	isSubmitting: boolean;
}

const FooterModal: React.FC<FooterModalProps> = ({ handleClose, isSubmitting }) => {
	return <>
		<hr />
		<div style={{ textAlign: 'right' }}>
			<button className="btn btn-secondary" type="button" onClick={handleClose} style={{ marginRight: '10px' }}>Cerrar</button>
			<button className="btn btn-primary" type="submit" disabled={isSubmitting}>Guardar</button>
		</div></>;
};

export default FooterModal;
