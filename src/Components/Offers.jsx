import "../CSS/Offers.css";
import Footer from "./Footer";

function Offers() {
  const offers = [
    {
      id: 1,
      title: "50% Off on First Booking",
      description: "Get 50% discount on your first movie ticket booking",
      validity: "Valid till Dec 31, 2026",
      badge: "NEW"
    },
    {
      id: 2,
      title: "Weekend Special",
      description: "Book 2 tickets and get 1 free on weekends",
      validity: "Valid on Sat & Sun",
      badge: "HOT"
    },
    {
      id: 3,
      title: "Student Discount",
      description: "Show your student ID and get 20% off on all bookings",
      validity: "Always valid",
      badge: "STUDENT"
    },
    {
      id: 4,
      title: "Family Pack",
      description: "Book 4+ tickets and get complimentary popcorn",
      validity: "Valid all days",
      badge: "FAMILY"
    }
  ];

  return (
    <div className="page-wrapper">
      <div className="offers-container">
        <h1 className="offers-title">Special Offers</h1>
        <div className="offers-list">
          {offers.map((offer) => (
            <div key={offer.id} className="offer-card">
              <div className="offer-badge">{offer.badge}</div>
              <div className="offer-info">
                <h2 className="offer-title">{offer.title}</h2>
                <p className="offer-description">{offer.description}</p>
                <p className="offer-validity">{offer.validity}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Offers;