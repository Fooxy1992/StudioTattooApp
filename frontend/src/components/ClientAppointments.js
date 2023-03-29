import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ClientAppointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/appointments")
      .then((response) => {
        setAppointments(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleCancel = (id) => {
    axios
      .delete(`http://localhost:5000/appointments/${id}`)
      .then(() => {
        setAppointments((prevAppointments) =>
          prevAppointments.filter((appointment) => appointment.id !== id)
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <h1>Appointments</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Tattoo artist</th>
            <th scope="col">Tattoo style</th>
            <th scope="col">Tattoo size</th>
            <th scope="col">Appointment date</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment.id}>
              <th scope="row">{appointment.id}</th>
              <td>{appointment.tattooArtistName}</td>
              <td>{appointment.tattooStyle}</td>
              <td>{appointment.tattooSize}</td>
              <td>{new Date(appointment.appointmentDate).toLocaleString()}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleCancel(appointment.id)}
                >
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/schedule" className="btn btn-primary">
        Schedule an appointment
      </Link>
    </div>
  );
};

export default ClientAppointments;
