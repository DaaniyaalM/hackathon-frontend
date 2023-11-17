import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router
import './Formfield.scss';

const FormField = () => {
  const [formData, setFormData] = useState({
    // Business Information
    selling: '',
    businessOperation: '',

    // Geographic Information
    city: '',
    province: '',
    country: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform further actions with the form data here
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form">
        <h1 className="form__title">
          Don't worry,
          <br />
          we'll help you get started.
        </h1>
        <p className="form__subtitle">Creating a store for regulated items</p>
        <p className="form__text">
          Selling regulated items such as cosmetics and supplements can be
          really challenging. There are many steps you have to take to create a
          business, get approved and manufacture your product. We know it’s
          hard, that’s why we’ve done all the work for you.
          <br />
          <br />
          We know it’s hard, that’s why we’ve done all the work for you.
        </p>
      </div>

      <div className="box">
        <div className="box__1">
          <p className="form__subtitle">1. Fill out the questions below </p>
          <p className="form__text">
            Tell us about your business and where you’re operating from.
          </p>
        </div>
        <div className="box__2">
          <p className="form__subtitle">2. We’ll create a business roadmap</p>
          <p className="form__text">
            Shopify will create a step by step guide on how to set up your
            business.
          </p>
        </div>
      </div>

      <div className="formWrapper">
        <div className="border-control">
          <h1 className="formTitle">Business Information</h1>
        </div>
        <div className="form-input-wrapper">
          <label>
            <div className="form-input-columnizer">
              What are you selling:
              <input
                type="text"
                name="selling"
                value={formData.selling}
                onChange={handleInputChange}
              />
            </div>
          </label>

          <br />

          <label>
            <div className="form-input-columnizer">
              What kind of operation is your business:
              {/* Replace the input with a select dropdown */}
              <select
                name="businessOperation"
                value={formData.businessOperation}
                onChange={handleInputChange}
              >
                <option value="">Select...</option>
                <option value="distributor">Distributor</option>
                <option value="manufacturing">Manufacturing</option>
                {/* Add more options as needed */}
              </select>
            </div>
          </label>
        </div>
        <br />
        <div className="border-control">
          <h1 className="formTitle">Geographic Information</h1>
        </div>
        <div className="form-input-wrapper">
          <div className="form-input-row">
            <label>
              <div className="form-input-columnizer">
                Where is your business located?
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleInputChange}
                />
              </div>
            </label>

            <br />

            <label>
              <div className="form-input-columnizer">
                Province/State:
                <input
                  type="text"
                  name="province"
                  value={formData.province}
                  onChange={handleInputChange}
                />
              </div>
            </label>
          </div>
        </div>
        <br />
        <div className="form-input-wrapper">
          <label>
            <div className="form-input-columnizer">
              Country:
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
              />
            </div>
          </label>
        </div>
        <br />

        <Link to={'/Roadmap'}>
          <button type="submit">Create Roadmap</button>
        </Link>
      </div>
    </form>
  );
};

export default FormField;
