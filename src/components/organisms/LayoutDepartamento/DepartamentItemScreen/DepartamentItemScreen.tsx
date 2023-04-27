import React from 'react';
import './DepartamentItemScreen.css';
import { useMutation, useQueryClient } from 'react-query';
import LoadingButton from '@mui/lab/LoadingButton';
import Button from '@mui/material/Button';
import { deleteDepartamento } from '@/api/ResponseDepartamento';
import { Link, useNavigate } from 'react-router-dom';

export type DepartamentItemScreenProps = {
	_id: string,
	name: string,
	description: string,
	index: number
}

const DepartamentItemScreen: React.FC<DepartamentItemScreenProps> = ({ _id, name, description, index }) => {

	const queryClient = useQueryClient();
	const navigate = useNavigate();
	const { mutateAsync, isLoading } = useMutation(deleteDepartamento);
	const [loading, setLoading] = React.useState(true);

	const remove = async () => {
		await mutateAsync(_id);
		queryClient.invalidateQueries('departamento');
	}

	return (
		<tr>
			<td>{index + 1}</td>
			<td>{name}</td>
			<td>{description}</td>
			<td>
				{isLoading ? (<LoadingButton loading>
					Submit
				</LoadingButton>) :
					(<Button style={{ marginRight: '10px', padding: '10px' }} onClick={remove}>❌</Button>
					)}
				<Button onClick={() => navigate(`view/${_id}`)}>👁</Button>
			</td>
		</tr>
	)
};

export default DepartamentItemScreen;
