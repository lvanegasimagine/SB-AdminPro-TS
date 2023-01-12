import React from 'react';
import './styles/Loader.css';
export interface LoaderInterface { }

const Loader: React.FC<LoaderInterface> = () => {
	return <div className="loader">
		<div className="loader-inner">
			<div className="loader-line-wrap">
				<div className="loader-line"></div>
			</div>
			<div className="loader-line-wrap">
				<div className="loader-line"></div>
			</div>
			<div className="loader-line-wrap">
				<div className="loader-line"></div>
			</div>
			<div className="loader-line-wrap">
				<div className="loader-line"></div>
			</div>
			<div className="loader-line-wrap">
				<div className="loader-line"></div>
			</div>
		</div>
	</div>;
};

export default Loader;
