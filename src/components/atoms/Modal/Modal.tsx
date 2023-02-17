import React from 'react';
import './styles/Modal.css';
export interface ModalInterface {}

const Modal : React.FC<ModalInterface> = () => {
	return <div className='modal'>Modal</div >;
};

export default Modal;
