import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FormField = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    // Business Information
    selling: '',
    businessOperation: '',

    // Geographic Information
    city: '',
    province: '',
    country: '',
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform further actions with the form data here
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Business Information Section */}
      <h1>Business Information</h1>

      <label>
        What are you selling:
        <input
          type="text"
          name="selling"
          value={formData.selling}
          onChange={handleInputChange}
        />
      </label>

      <br />

      <label>
        What kind of operation is your business:
        <input
          type="text"
          name="businessOperation"
          value={formData.businessOperation}
          onChange={handleInputChange}
        />
      </label>

      <br />

      {/* Geographic Information Section */}
      <h1>Geographic Information</h1>

      <label>
        Where is your business located?
        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleInputChange}
        />
      </label>

      <br />

      <label>
        Province/State:
        <input
          type="text"
          name="province"
          value={formData.province}
          onChange={handleInputChange}
        />
      </label>

      <br />

      <label>
        Country:
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleInputChange}
        />
      </label>

      <br />

      <Link to={'/Roadmap'}>
        <button type="submit">Create Roadmap</button>
      </Link>
    </form>
  );
};

export default FormField;
