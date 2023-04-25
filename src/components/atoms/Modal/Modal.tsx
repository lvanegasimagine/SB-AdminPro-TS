import React from 'react';
import './styles/Modal.css';
export interface ModalInterface {
	modalDepartamento: string;
}

const Modal: React.FC<ModalInterface> = ({ modalDepartamento }) => {
	return <div className="modal fade" id={modalDepartamento} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
		<div className="modal-dialog modal-dialog-centered" role="document">
			<div className="modal-content">
				<div className="modal-header">
					<h5 className="modal-title" id="exampleModalCenterTitle">Vertically Centered Modal</h5>
					<button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div className="modal-body">...</div>
				<div className="modal-footer"><button className="btn btn-secondary" type="button" data-bs-dismiss="modal">Close</button><button className="btn btn-primary" type="button">Save changes</button></div>
			</div>
		</div>
	</div>
};

export default Modal;
