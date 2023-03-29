import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Schedule from "./components/Schedule";
import Admin from "./components/Admin";
import OwnerDashboard from "./components/OwnerDashboard";
import TattooArtistDashboard from "./components/TattooArtistDashboard";
import ClientDashboard from "./components/ClientDashboard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={Home} />
          <Route path="/schedule" element={Schedule} />
          <Route path="/admin" element={Admin} />
          <Route path="/owner-dashboard" element={OwnerDashboard} />
          <Route
            path="/tattoo-artist-dashboard"
            element={TattooArtistDashboard}
          />
          <Route path="/client-dashboard" element={ClientDashboard} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
