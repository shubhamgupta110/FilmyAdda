import "../CSS/Theatres.css";
import Footer from "./Footer";

function Theatres() {
  const theatres = [
    {
      id: 1,
      name: "PVR Cinemas - Nexus Mall",
      location: "Nexus Mall, Andheri West",
      screens: "6 Screens",
      features: "Dolby Atmos, IMAX"
    },
    {
      id: 2,
      name: "INOX - City Center",
      location: "City Center Mall, Dadar",
      screens: "4 Screens",
      features: "4DX, Recliner Seats"
    },
    {
      id: 3,
      name: "Cinepolis - Grand Mall",
      location: "Grand Mall, Borivali",
      screens: "5 Screens",
      features: "Dolby 7.1, Luxury Seating"
    },
    {
      id: 4,
      name: "PVR Icon - Oberoi Mall",
      location: "Oberoi Mall, Goregaon",
      screens: "8 Screens",
      features: "IMAX, Dolby Vision"
    }
  ];

  return (
    <div className="page-wrapper">
      <div className="theatres-container">
        <h1 className="theatres-title">Our Theatres</h1>
        <div className="theatres-list">
          {theatres.map((theatre) => (
            <div key={theatre.id} className="theatre-card">
              <div className="theatre-image">
                {theatre.name}
              </div>
              <div className="theatre-info">
                <h2 className="theatre-name">{theatre.name}</h2>
                <p className="theatre-details">{theatre.screens}</p>
                <p className="theatre-location">{theatre.location}</p>
                <span className="theatre-features">{theatre.features}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Theatres;