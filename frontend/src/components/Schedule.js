// frontend/src/components/Schedule.js
import React, { useState } from "react";

function Schedule() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    birthDate: "",
    tattooSize: "",
    tattooStyle: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the form data to the backend
  };

  return (
    <div>
      <h1>Schedule your session</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:{" "}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:{" "}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Birth Date:{" "}
          <input
            type="date"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
          />
        </label>
        <label>
          Tattoo Size:
          <select
            name="tattooSize"
            value={formData.tattooSize}
            onChange={handleChange}
          >
            <option value="">Select size</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </label>
        <label>
          Tattoo Style:
          <select
            name="tattooStyle"
            value={formData.tattooStyle}
            onChange={handleChange}
          >
            <option value="">Select style</option>
            <option value="traditional">Traditional</option>
            <option value="realistic">Realistic</option>
            <option value="tribal">Tribal</option>
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Schedule;
