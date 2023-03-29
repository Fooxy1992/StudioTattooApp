import axios from "axios";
import { useState, useEffect } from "react";

const TattooArtistDashboard = () => {
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

  return (
    <div className="container">
      <h1>Tattoo Artist Dashboard</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Client Name</th>
            <th scope="col">Tattoo Style</th>
            <th scope="col">Tattoo Size</th>
            <th scope="col">Appointment Date</th>
            <th scope="col">Appointment Time</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment.id}>
              <th scope="row">{appointment.id}</th>
              <td>{appointment.clientName}</td>
              <td>{appointment.tattooStyle}</td>
              <td>{appointment.tattooSize}</td>
              <td>{new Date(appointment.date).toLocaleDateString()}</td>
              <td>{appointment.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TattooArtistDashboard;
