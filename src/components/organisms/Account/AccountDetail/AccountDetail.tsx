import React from "react";
import FormikControl from "@/formik/FormikControl";
import * as Yup from 'yup';
import "./styles/AccountDetail.css";
import { IUserUpdateAccount } from "@/interface";


export interface AccountDetailInterface {}

const AccountDetail: React.FC<AccountDetailInterface> = () => {

  const initialValues: IUserUpdateAccount = {
	firstName: '',
	lastName: '',
	organization: '',
	location: '',
	phoneNumber: '',
	birthday: '',
	identityCard: ''
  }

  const validationSchema = Yup.object().shape({
	firstName: Yup.string().required().min(6).max(20).required('First Name is Required'),
	lastName: Yup.string().required().min(6).max(20).required('Last Name is Required'),
	organization: Yup.string().required().max(20).required('Organization is Required'),
	location: Yup.string().required().max(150).nullable(),
	phoneNumber: Yup.string().required().max(10).trim().nullable(),
	birthday: Yup.date().nullable().min(new Date(1900, 0, 1)),

  })

  return (
    <div className="card mb-4">
      <div className="card-header">Account Details</div>
      <div className="card-body">
        <form>
          {/* <div className="mb-3">
            <label className="small mb-1" htmlFor="inputUsername">
              Username (how your name will appear to other users on the site)
            </label>
            <input
              className="form-control"
              id="inputUsername"
              type="text"
              placeholder="Enter your username"
              value="username"
            />
          </div> */}
          <div className="row gx-3 mb-3">
            <div className="col-md-6">
              <label className="small mb-1" htmlFor="inputFirstName">
                First name
              </label>
              <input
                className="form-control"
                id="inputFirstName"
                type="text"
                placeholder="Enter your first name"
                value="Valerie"
              />
            </div>
            <div className="col-md-6">
              <label className="small mb-1" htmlFor="inputLastName">
                Last name
              </label>
              <input
                className="form-control"
                id="inputLastName"
                type="text"
                placeholder="Enter your last name"
                value="Luna"
              />
            </div>
          </div>
          <div className="row gx-3 mb-3">
            <div className="col-md-6">
              <label className="small mb-1" htmlFor="inputOrgName">
                Organization name
              </label>
              <input
                className="form-control"
                id="inputOrgName"
                type="text"
                placeholder="Enter your organization name"
                value="Start Bootstrap"
              />
            </div>
            <div className="col-md-6">
              <label className="small mb-1" htmlFor="inputLocation">
                Location
              </label>
              <input
                className="form-control"
                id="inputLocation"
                type="text"
                placeholder="Enter your location"
                value="San Francisco, CA"
              />
            </div>
          </div>
          <div className="mb-3">
            <label className="small mb-1" htmlFor="inputEmailAddress" >
              Email address
            </label>
            <input
              className="form-control"
              id="inputEmailAddress"
              type="email"
              placeholder="Enter your email address"
              value="name@example.com"
			  disabled
            />
          </div>
          <div className="row gx-3 mb-3">
            <div className="col-md-6">
              <label className="small mb-1" htmlFor="inputPhone">
                Phone number
              </label>
              <input
                className="form-control"
                id="inputPhone"
                type="tel"
                placeholder="Enter your phone number"
                value="555-123-4567"
              />
            </div>
            <div className="col-md-6">
              <label className="small mb-1" htmlFor="inputBirthday">
                Birthday
              </label>
              <input
                className="form-control"
                id="inputBirthday"
                type="text"
                name="birthday"
                placeholder="Enter your birthday"
                value="06/10/1988"
              />
            </div>
          </div>
          <button className="btn btn-primary" type="button">
            Save changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default AccountDetail;
