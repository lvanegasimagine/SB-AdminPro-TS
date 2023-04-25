import { Header } from '@/components/atoms';
import React from 'react';
import { Outlet } from 'react-router-dom';
import './styles/LayoutDepartamento.css';
export interface LayoutDepartamentoInterface {}

const LayoutDepartamento : React.FC<LayoutDepartamentoInterface> = () => {
	return <main>
		<Header icon="bi-building" title="Departamentos"/>
		<Outlet/>
	</main>;
};

export default LayoutDepartamento;
