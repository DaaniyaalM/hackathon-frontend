import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./FormField.scss";
const FormField = () => {
  const [formData, setFormData] = useState({
    selling: "",
    businessOperation: "", // This state can be removed if not needed for dropdown
    city: "",
    province: "",
    country: "",
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
    </form>
  );
};

export default FormField;
