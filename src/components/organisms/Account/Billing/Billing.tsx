import React from "react";
import "./styles/Billing.css";
export interface BillingInterface {}

const Billing: React.FC<BillingInterface> = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-4 mb-4">
          <div className="card h-100 border-start-lg border-start-primary">
            <div className="card-body">
              <div className="small text-muted">Current monthly bill</div>
              <div className="h3">$20.00</div>
              <a className="text-arrow-icon small" href="#!">
                Switch to yearly billing
                <i data-feather="arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 mb-4">
          <div className="card h-100 border-start-lg border-start-secondary">
            <div className="card-body">
              <div className="small text-muted">Next payment due</div>
              <div className="h3">July 15</div>
              <a className="text-arrow-icon small text-secondary" href="#!">
                View payment history
                <i data-feather="arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 mb-4">
          <div className="card h-100 border-start-lg border-start-success">
            <div className="card-body">
              <div className="small text-muted">Current plan</div>
              <div className="h3 d-flex align-items-center">Freelancer</div>
              <a className="text-arrow-icon small text-success" href="#!">
                Upgrade plan
                <i data-feather="arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="card card-header-actions mb-4">
        <div className="card-header">
          Payment Methods
          <button className="btn btn-sm btn-primary" type="button">
            Add Payment Method
          </button>
        </div>
        <div className="card-body px-0">
          <div className="d-flex align-items-center justify-content-between px-4">
            <div className="d-flex align-items-center">
              <i
                className="bi bi-credit-card-fill"
                style={{ fontSize: "1rem", marginRight: "0.2rem" }}
              />
              <div className="ms-4">
                <div className="small">Visa ending in 1234</div>
                <div className="text-xs text-muted">Expires 04/2024</div>
              </div>
            </div>
            <div className="ms-4 small">
              <div className="badge bg-light text-dark me-3">Default</div>
              <a href="#!">Edit</a>
            </div>
          </div>
          <hr />
          <div className="d-flex align-items-center justify-content-between px-4">
            <div className="d-flex align-items-center">
              <i
                className="bi bi-credit-card-fill"
                style={{ fontSize: "1rem", marginRight: "0.2rem" }}
              />
              <div className="ms-4">
                <div className="small">Mastercard ending in 5678</div>
                <div className="text-xs text-muted">Expires 05/2022</div>
              </div>
            </div>
            <div className="ms-4 small">
              <a className="text-muted me-3" href="#!">
                Make Default
              </a>
              <a href="#!">Edit</a>
            </div>
          </div>
          <hr />
          <div className="d-flex align-items-center justify-content-between px-4">
            <div className="d-flex align-items-center">
              <i
                className="bi bi-credit-card-fill"
                style={{ fontSize: "1rem", marginRight: "0.2rem" }}
              />
              <div className="ms-4">
                <div className="small">American Express ending in 9012</div>
                <div className="text-xs text-muted">Expires 01/2026</div>
              </div>
            </div>
            <div className="ms-4 small">
              <a className="text-muted me-3" href="#!">
                Make Default
              </a>
              <a href="#!">Edit</a>
            </div>
          </div>
        </div>
      </div>
      <div className="card mb-4">
        <div className="card-header">Billing History</div>
        <div className="card-body p-0">
          <div className="table-responsive table-billing-history">
            <table className="table mb-0">
              <thead>
                <tr>
                  <th className="border-gray-200" scope="col">
                    Transaction ID
                  </th>
                  <th className="border-gray-200" scope="col">
                    Date
                  </th>
                  <th className="border-gray-200" scope="col">
                    Amount
                  </th>
                  <th className="border-gray-200" scope="col">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#39201</td>
                  <td>06/15/2021</td>
                  <td>$29.99</td>
                  <td>
                    <span className="badge bg-light text-dark">Pending</span>
                  </td>
                </tr>
                <tr>
                  <td>#38594</td>
                  <td>05/15/2021</td>
                  <td>$29.99</td>
                  <td>
                    <span className="badge bg-success">Paid</span>
                  </td>
                </tr>
                <tr>
                  <td>#38223</td>
                  <td>04/15/2021</td>
                  <td>$29.99</td>
                  <td>
                    <span className="badge bg-success">Paid</span>
                  </td>
                </tr>
                <tr>
                  <td>#38125</td>
                  <td>03/15/2021</td>
                  <td>$29.99</td>
                  <td>
                    <span className="badge bg-success">Paid</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Billing;
