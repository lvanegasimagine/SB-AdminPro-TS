import React from 'react';
import './styles/LayoutPublic.css';
export interface LayoutPublicInterface { }

const LayoutPublic = (): JSX.Element => {
	return (
		<>
			<main>
				<header className="py-10 mb-4 bg-gradient-primary-to-secondary">
					<div className="container-xl px-4">
						<div className="text-center">
							<h1 className="text-white">Welcome to SB Admin Pro TYPESCRIPT</h1>
							<p className="lead mb-0 text-white-50">
								A professionally designed admin panel template built with
								Bootstrap 5
							</p>
						</div>
					</div>
				</header>
				<div className="container-xl px-4">
					<h2 className="mt-5 mb-0">Dashboards</h2>
					<p>Three dashboard examples to get you started!</p>
					<hr className="mt-0 mb-4" />
					<div className="row">
						<div className="col-md-6 col-xl-4 mb-4 mb-xl-0">
							<a
								className="d-block lift rounded overflow-hidden mb-2"
								href="dashboard-1.html"
							>
								<img
									className="img-fluid"
									src="https://assets.startbootstrap.com/img/screenshots-product-pages/sb-admin-pro/dashboards/default.png"
									alt="..."
								/>
							</a>
							<div className="text-center small">Default Dashboard</div>
						</div>
						<div className="col-md-6 col-xl-4 mb-4 mb-xl-0">
							<a
								className="d-block lift rounded overflow-hidden mb-2"
								href="dashboard-3.html"
							>
								<img
									className="img-fluid"
									src="https://assets.startbootstrap.com/img/screenshots-product-pages/sb-admin-pro/dashboards/affiliate.png"
									alt="..."
								/>
							</a>
							<div className="text-center small">Affiliate Dashboard</div>
						</div>
						<div className="col-md-6 col-xl-4">
							<a
								className="d-block lift rounded overflow-hidden mb-2"
								href="dashboard-2.html"
							>
								<img
									className="img-fluid"
									src="https://assets.startbootstrap.com/img/screenshots-product-pages/sb-admin-pro/dashboards/multipurpose.png"
									alt="..."
								/>
							</a>
							<div className="text-center small">Multipurpose Dashboard</div>
						</div>
					</div>
					<h2 className="mt-5 mb-0">App Pages</h2>
					<p>App pages to cover common use pages to help build your app!</p>
					<hr className="mt-0 mb-4" />
					<div className="row">
						<div className="col-sm-6 col-md-4 col-xl-3 mb-4">
							<a
								className="d-block lift rounded overflow-hidden mb-2"
								href="account-billing.html"
							>
								<img
									className="img-fluid"
									src="https://assets.startbootstrap.com/img/screenshots-product-pages/sb-admin-pro/pages/account-billing.png"
									alt="..."
								/>
							</a>
							<div className="text-center small">Account - Billing</div>
						</div>
						<div className="col-sm-6 col-md-4 col-xl-3 mb-4">
							<a
								className="d-block lift rounded overflow-hidden mb-2"
								href="account-notifications.html"
							>
								<img
									className="img-fluid"
									src="https://assets.startbootstrap.com/img/screenshots-product-pages/sb-admin-pro/pages/account-notifications.png"
									alt="..."
								/>
							</a>
							<div className="text-center small">Account - Notifications</div>
						</div>
						<div className="col-sm-6 col-md-4 col-xl-3 mb-4">
							<a
								className="d-block lift rounded overflow-hidden mb-2"
								href="account-profile.html"
							>
								<img
									className="img-fluid"
									src="https://assets.startbootstrap.com/img/screenshots-product-pages/sb-admin-pro/pages/account-profile.png"
									alt="..."
								/>
							</a>
							<div className="text-center small">Account - Profile</div>
						</div>
						<div className="col-sm-6 col-md-4 col-xl-3 mb-4">
							<a
								className="d-block lift rounded overflow-hidden mb-2"
								href="account-security.html"
							>
								<img
									className="img-fluid"
									src="https://assets.startbootstrap.com/img/screenshots-product-pages/sb-admin-pro/pages/account-security.png"
									alt="..."
								/>
							</a>
							<div className="text-center small">Account - Security</div>
						</div>
						<div className="col-sm-6 col-md-4 col-xl-3 mb-4">
							<a
								className="d-block lift rounded overflow-hidden mb-2"
								href="auth-login-basic.html"
							>
								<img
									className="img-fluid"
									src="https://assets.startbootstrap.com/img/screenshots-product-pages/sb-admin-pro/pages/auth-login-basic.png"
									alt="..."
								/>
							</a>
							<div className="text-center small">Auth - Login</div>
						</div>
						<div className="col-sm-6 col-md-4 col-xl-3 mb-4">
							<a
								className="d-block lift rounded overflow-hidden mb-2"
								href="auth-login-social.html"
							>
								<img
									className="img-fluid"
									src="https://assets.startbootstrap.com/img/screenshots-product-pages/sb-admin-pro/pages/auth-login-social.png"
									alt="..."
								/>
							</a>
							<div className="text-center small">Auth - Login (Social)</div>
						</div>
						<div className="col-sm-6 col-md-4 col-xl-3 mb-4">
							<a
								className="d-block lift rounded overflow-hidden mb-2"
								href="multi-tenant-select.html"
							>
								<img
									className="img-fluid"
									src="https://assets.startbootstrap.com/img/screenshots-product-pages/sb-admin-pro/pages/auth-mutli-tenant.png"
									alt="..."
								/>
							</a>
							<div className="text-center small">Auth - Multi Tenant</div>
						</div>
						<div className="col-sm-6 col-md-4 col-xl-3 mb-4">
							<a
								className="d-block lift rounded overflow-hidden mb-2"
								href="auth-password-basic.html"
							>
								<img
									className="img-fluid"
									src="https://assets.startbootstrap.com/img/screenshots-product-pages/sb-admin-pro/pages/auth-password-basic.png"
									alt="..."
								/>
							</a>
							<div className="text-center small">Auth - Password</div>
						</div>
						<div className="col-sm-6 col-md-4 col-xl-3 mb-4">
							<a
								className="d-block lift rounded overflow-hidden mb-2"
								href="auth-password-social.html"
							>
								<img
									className="img-fluid"
									src="https://assets.startbootstrap.com/img/screenshots-product-pages/sb-admin-pro/pages/auth-password-social.png"
									alt="..."
								/>
							</a>
							<div className="text-center small">Auth - Password (Social)</div>
						</div>
						<div className="col-sm-6 col-md-4 col-xl-3 mb-4">
							<a
								className="d-block lift rounded overflow-hidden mb-2"
								href="auth-register-basic.html"
							>
								<img
									className="img-fluid"
									src="https://assets.startbootstrap.com/img/screenshots-product-pages/sb-admin-pro/pages/auth-register-basic.png"
									alt="..."
								/>
							</a>
							<div className="text-center small">Auth - Register</div>
						</div>
						<div className="col-sm-6 col-md-4 col-xl-3 mb-4">
							<a
								className="d-block lift rounded overflow-hidden mb-2"
								href="auth-register-social.html"
							>
								<img
									className="img-fluid"
									src="https://assets.startbootstrap.com/img/screenshots-product-pages/sb-admin-pro/pages/auth-register-social.png"
									alt="..."
								/>
							</a>
							<div className="text-center small">Auth - Register (Social)</div>
						</div>
						<div className="col-sm-6 col-md-4 col-xl-3 mb-4">
							<a
								className="d-block lift rounded overflow-hidden mb-2"
								href="invoice.html"
							>
								<img
									className="img-fluid"
									src="https://assets.startbootstrap.com/img/screenshots-product-pages/sb-admin-pro/pages/invoice.png"
									alt="..."
								/>
							</a>
							<div className="text-center small">Invoice</div>
						</div>
						<div className="col-sm-6 col-md-4 col-xl-3 mb-4">
							<a
								className="d-block lift rounded overflow-hidden mb-2"
								href="knowledge-base-article.html"
							>
								<img
									className="img-fluid"
									src="https://assets.startbootstrap.com/img/screenshots-product-pages/sb-admin-pro/pages/knowledgebase-article.png"
									alt="..."
								/>
							</a>
							<div className="text-center small">Knowledgebase - Article</div>
						</div>
						<div className="col-sm-6 col-md-4 col-xl-3 mb-4">
							<a
								className="d-block lift rounded overflow-hidden mb-2"
								href="knowledge-base-category.html"
							>
								<img
									className="img-fluid"
									src="https://assets.startbootstrap.com/img/screenshots-product-pages/sb-admin-pro/pages/knowledgebase-category.png"
									alt="..."
								/>
							</a>
							<div className="text-center small">Knowledgebase - Category</div>
						</div>
						<div className="col-sm-6 col-md-4 col-xl-3 mb-4">
							<a
								className="d-block lift rounded overflow-hidden mb-2"
								href="knowledge-base-home-1.html"
							>
								<img
									className="img-fluid"
									src="https://assets.startbootstrap.com/img/screenshots-product-pages/sb-admin-pro/pages/knowledgebase-home-1.png"
									alt="..."
								/>
							</a>
							<div className="text-center small">Knowledgebase - Home 1</div>
						</div>
						<div className="col-sm-6 col-md-4 col-xl-3 mb-4">
							<a
								className="d-block lift rounded overflow-hidden mb-2"
								href="knowledge-base-home-2.html"
							>
								<img
									className="img-fluid"
									src="https://assets.startbootstrap.com/img/screenshots-product-pages/sb-admin-pro/pages/knowledgebase-home-2.png"
									alt="..."
								/>
							</a>
							<div className="text-center small">Knowledgebase - Home 2</div>
						</div>
						<div className="col-sm-6 col-md-4 col-xl-3 mb-4">
							<a
								className="d-block lift rounded overflow-hidden mb-2"
								href="pricing.html"
							>
								<img
									className="img-fluid"
									src="https://assets.startbootstrap.com/img/screenshots-product-pages/sb-admin-pro/pages/pricing.png"
									alt="..."
								/>
							</a>
							<div className="text-center small">Pricing</div>
						</div>
						<div className="col-sm-6 col-md-4 col-xl-3 mb-4">
							<a
								className="d-block lift rounded overflow-hidden mb-2"
								href="wizard.html"
							>
								<img
									className="img-fluid"
									src="https://assets.startbootstrap.com/img/screenshots-product-pages/sb-admin-pro/pages/wizard.png"
									alt="..."
								/>
							</a>
							<div className="text-center small">Wizard</div>
						</div>
					</div>
					<h2 className="mt-5 mb-0">Starter Layouts</h2>
					<p>Layouts for creating new pages within your project!</p>
					<hr className="mt-0 mb-4" />
					<div className="row">
						<div className="col-sm-6 col-md-4 mb-4">
							<div className="small mb-1">Navigation</div>
							<div className="list-group mb-4">
								<a
									className="list-group-item list-group-item-action p-3"
									href="layout-static.html"
								>
									<div className="d-flex align-items-center justify-content-between">
										Static Sidenav
										<i className="text-muted" data-feather="arrow-right"></i>
									</div>
								</a>
								<a
									className="list-group-item list-group-item-action p-3"
									href="layout-dark.html"
								>
									<div className="d-flex align-items-center justify-content-between">
										Dark Sidenav
										<i className="text-muted" data-feather="arrow-right"></i>
									</div>
								</a>
								<a
									className="list-group-item list-group-item-action p-3"
									href="layout-rtl.html"
								>
									<div className="d-flex align-items-center justify-content-between">
										RTL Layout
										<i className="text-muted" data-feather="arrow-right"></i>
									</div>
								</a>
							</div>
							<div className="small mb-1">Container Options</div>
							<div className="list-group">
								<a
									className="list-group-item list-group-item-action p-3"
									href="layout-boxed.html"
								>
									<div className="d-flex align-items-center justify-content-between">
										Boxed Layouts
										<i className="text-muted" data-feather="arrow-right"></i>
									</div>
								</a>
								<a
									className="list-group-item list-group-item-action p-3"
									href="layout-fluid.html"
								>
									<div className="d-flex align-items-center justify-content-between">
										Fluid Layout
										<i className="text-muted" data-feather="arrow-right"></i>
									</div>
								</a>
							</div>
						</div>
						<div className="col-sm-6 col-md-4 mb-4">
							<div className="small mb-1">Page Headers</div>
							<div className="list-group">
								<a
									className="list-group-item list-group-item-action p-3"
									href="header-simplified.html"
								>
									<div className="d-flex align-items-center justify-content-between">
										Simplified
										<i className="text-muted" data-feather="arrow-right"></i>
									</div>
								</a>
								<a
									className="list-group-item list-group-item-action p-3"
									href="header-compact.html"
								>
									<div className="d-flex align-items-center justify-content-between">
										Compact
										<i className="text-muted" data-feather="arrow-right"></i>
									</div>
								</a>
								<a
									className="list-group-item list-group-item-action p-3"
									href="header-overlap.html"
								>
									<div className="d-flex align-items-center justify-content-between">
										Content Overlap
										<i className="text-muted" data-feather="arrow-right"></i>
									</div>
								</a>
								<a
									className="list-group-item list-group-item-action p-3"
									href="header-breadcrumbs.html"
								>
									<div className="d-flex align-items-center justify-content-between">
										Breadcrumbs
										<i className="text-muted" data-feather="arrow-right"></i>
									</div>
								</a>
								<a
									className="list-group-item list-group-item-action p-3"
									href="header-light.html"
								>
									<div className="d-flex align-items-center justify-content-between">
										Light
										<i className="text-muted" data-feather="arrow-right"></i>
									</div>
								</a>
							</div>
						</div>
						<div className="col-sm-6 col-md-4 mb-4">
							<div className="small mb-1">Starter Layouts</div>
							<div className="list-group mb-4">
								<a
									className="list-group-item list-group-item-action p-3"
									href="starter-default.html"
								>
									<div className="d-flex align-items-center justify-content-between">
										Default
										<i className="text-muted" data-feather="arrow-right"></i>
									</div>
								</a>
								<a
									className="list-group-item list-group-item-action p-3"
									href="starter-minimal.html"
								>
									<div className="d-flex align-items-center justify-content-between">
										Minimal
										<i className="text-muted" data-feather="arrow-right"></i>
									</div>
								</a>
							</div>
						</div>
					</div>
				</div>
			</main>
			<footer className="footer-admin mt-auto footer-light">
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
		</>
	)
};

export default LayoutPublic;
