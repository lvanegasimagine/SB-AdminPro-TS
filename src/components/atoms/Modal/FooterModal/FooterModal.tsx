import React from 'react';
import './FooterModal.css';

export type FooterModalProps = {
	handleClose: () => void;
}

const FooterModal: React.FC<FooterModalProps> = ({ handleClose }) => {
	return <>
		<hr />
		<div style={{ textAlign: 'right' }}>
			<button className="btn btn-secondary" type="button" onClick={handleClose} style={{ marginRight: '10px' }}>Cerrar</button>
			<button className="btn btn-primary" type="submit">Guardar</button>
		</div></>;
};

export default FooterModal;
