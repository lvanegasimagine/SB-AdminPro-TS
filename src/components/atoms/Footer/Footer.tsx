import React from 'react';
export interface FooterInterface { }

const Footer: React.FC<FooterInterface> = () => {
	return <div id="layoutAuthentication_footer">
		<footer className="footer-admin mt-auto footer-dark">
			<div className="container-xl px-4">
				<div className="row">
					<div className="col-md-6 small">
						Copyright &copy; Your Website 2021
					</div>
					<div className="col-md-6 text-md-end small">
						<a href="#!">Privacy Policy</a>
						&middot;
						<a href="#!">Terms &amp; Conditions</a>
					</div>
				</div>
			</div>
		</footer>
	</div>
};

export default Footer;
