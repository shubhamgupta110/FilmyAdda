import "../CSS/Shows.css";
import Footer from "./Footer";

function Shows() {
  const shows = [
    {
      id: 1,
      title: "Avengers: Endgame",
      theatre: "PVR Cinemas - Nexus Mall",
      time: "6:30 PM",
      date: "Today"
    },
    {
      id: 2,
      title: "The Dark Knight",
      theatre: "INOX - City Center",
      time: "9:00 PM",
      date: "Today"
    },
    {
      id: 3,
      title: "Inception",
      theatre: "Cinepolis - Grand Mall",
      time: "3:15 PM",
      date: "Tomorrow"
    },
    {
      id: 4,
      title: "Interstellar",
      theatre: "PVR Cinemas - Nexus Mall",
      time: "12:00 PM",
      date: "Tomorrow"
    }
  ];

  return (
    <div className="page-wrapper">
      <div className="shows-container">
        <h1 className="shows-title">Now Showing</h1>
        <div className="shows-list">
          {shows.map((show) => (
            <div key={show.id} className="show-card">
              <div className="show-poster">
                {show.title}
              </div>
              <div className="show-info">
                <h2 className="show-title">{show.title}</h2>
                <p className="show-details">{show.date}</p>
                <p className="show-theatre">{show.theatre}</p>
                <span className="show-time">{show.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Shows;