import { Link } from "react-router-dom";

const OwnerDashboard = () => {
  return (
    <div className="container">
      <h1>Owner Dashboard</h1>
      <div className="row">
        <div className="col-sm-6">
          <h2>Tattoo Artists</h2>
          <Link to="/add-tattoo-artist" className="btn btn-primary mb-3">
            Add New Tattoo Artist
          </Link>
          <ul className="list-group">{/* list all tattoo artists */}</ul>
        </div>
      </div>
    </div>
  );
};

export default OwnerDashboard;
