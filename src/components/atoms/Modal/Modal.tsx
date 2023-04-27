import React from 'react';
import Modal from '@mui/material/Modal';
import { Container } from '@mui/material';

interface IModalProps {
	handleClose: () => void;
	open: boolean;
	title?: string;
	body?: React.ReactElement;
	footer?: React.ReactElement;
	onSubmit?: () => void;
}

const modales = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)'
}

export default function BasicModal({ handleClose, open, title, body, footer, onSubmit }: IModalProps) {
	return (
		<div>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
				disableEnforceFocus
			>
				<Container sx={modales}>
					<div className="modal-dialog modal-dialog-centered modal-dialog-scrollable" data-bs-backdrop="static" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h1 className="modal-title" id="exampleModalCenterTitle">{title}</h1>
								<button className="btn-close" type="button" onClick={handleClose} aria-label="Close"></button>
							</div>
							<div className="modal-body">{body}</div>
						</div>
					</div>
				</Container>
			</Modal>
		</div>
	);
}