import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    clientName: '',
    clientEmail: '',
    clientBirthdate: '',
    tattooArtistId: '',
    tattooStyle: '',
    tattooSize: '',
    appointmentDate: '',
  });

  const history = useHistory();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/appointments', formData)
      .then(() => {
        history.push('/client-dashboard');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="clientName" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="clientName"
          name="clientName"
          value={formData.clientName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="clientEmail" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="clientEmail"
          name="clientEmail"
          value={formData.clientEmail}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="clientBirthdate" className="form-label">
          Date of birth
        </label>
        <input
          type="date"
          className="form-control"
          id="clientBirthdate"
          name="clientBirthdate"
          value={formData.clientBirthdate}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tattooArtistId" className="form-label">
          Tattoo artist
        </label>
        <select
          className="form-select"
          id="tattooArtistId"
          name="tattooArtistId"
          value={formData.tattooArtistId}
          onChange={handleChange}
          required
        >
          <option value="">Select a tattoo artist</option>
          <option value="1">John Doe</option>
          <option value="2">Jane Smith</option>
          <option value="3">Bob Johnson</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="tattooStyle" className="form-label">
          Tattoo style
        </label>
        <input
          type="text"
          className="form-control"
          id="tattooStyle"
          name="tattooStyle"
          value={formData.tattooStyle}
          onChange={handleChange}
          required
        />
  </div>
  <div className="mb-3">
    <label htmlFor="appointmentDate" className="form-label">
      Appointment date
    </label>
    <input
      type="datetime-local"
      className="form-control"
      id="appointmentDate"
      name="appointmentDate"
      value={formData.appointmentDate}
      onChange={handleChange}
      required
    />
  </div>
  <button type="submit" className="btn btn-primary">
    Submit
  </button>
</form>
);
};

export default AppointmentForm;