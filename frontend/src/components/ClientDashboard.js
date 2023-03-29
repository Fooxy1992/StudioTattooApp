import axios from 'axios';
import { useState, useEffect } from 'react';


const ClientDashboard = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/appointments')
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
      <h1>My Appointments</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Tattoo Artist</th>
            <th scope="col">Tattoo Style</th>
            <th scope="col">Tattoo Size</th>
            <th scope="col">Appointment Date</th>
            <th scope="col">Appointment Time</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment.id}>
              <th scope="row">{appointment.id}</th>
              <td>{appointment.tattooArtist}</td>
              <td>{appointment.tattooStyle}</td>
              <td>{appointment.tattooSize}</td>
              <td>{new Date(appointment.date).toLocaleDateString()}</td>
              <td>{appointment.time}</td>
              <td>
                {appointment.status === 'Pending' && (
                  <button
                    className="btn btn-danger"
                    onClick={() => handleCancel(appointment.id)}
                  >
                    Cancel
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClientDashboard;
