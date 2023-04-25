import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Container } from '@mui/material';

// const style = {
// 	position: 'absolute' as 'absolute',
// 	top: '50%',
// 	bottom: '50%',
// 	right: '50%',
// 	left: '50%',
// 	transform: 'translate(-50%, -50%)',
// 	width: 400,
// 	bgcolor: 'background.paper',
// 	// border: '2px solid #000',
// 	borderRadius: '8px',
// 	boxShadow: 24,
// 	p: 4,
// };

const modales = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)'
}

export default function BasicModal({ handleOpen, handleClose, open, title }: any) {
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
								<h5 className="modal-title" id="exampleModalCenterTitle">{title}</h5>
								<button className="btn-close" type="button" onClick={handleClose} aria-label="Close"></button>
							</div>
							<div className="modal-body">...</div>
							<div className="modal-footer"><button className="btn btn-secondary" type="button" onClick={handleClose}>Close</button><button className="btn btn-primary" type="button">Save changes</button></div>
						</div>
					</div>
				</Container>
			</Modal>
		</div>
	);
}