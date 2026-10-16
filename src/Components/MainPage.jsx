import Movies from "./Movies.jsx";
import Theatres from "./Theatres.jsx";
import Offers from "./Offers.jsx";
function MainPage({currentPage}) {
  return (
    // <main className="main">
    //   <section className="construction" aria-labelledby="uc-title">
    //     <div className="tape" aria-hidden="true" />

    //     <div className="uc-inner">
    //       <svg
    //         className="uc-icon"
    //         viewBox="0 0 64 64"
    //         width="72"
    //         height="72"
    //         aria-hidden="true"
    //       >
    //         <rect x="8" y="22" width="48" height="34" rx="4" fill="#FFF3E0" />
    //         <rect x="8" y="10" width="48" height="12" rx="3" fill="#FF9800" />
    //         <polygon points="16,10 26,10 20,22 10,22" fill="#1A1A2E" />
    //         <polygon points="34,10 44,10 38,22 28,22" fill="#1A1A2E" />
    //         <polygon points="52,10 58,10 56,22 46,22" fill="#1A1A2E" />
    //         <polygon points="27,32 27,48 41,40" fill="#E91E63" />
    //       </svg>
            <>
          {currentPage === "default" && (<h1>Movies Page</h1>)}
          {currentPage === "Movies" && (<Movies/>)}
          {currentPage === "Theatres" && (<Theatres/>)}
          {currentPage === "Offers" && (<Offers/>)}
          {currentPage === "My Bookings" && (<h1>My Bookings Page Under Construction</h1>)}
          {currentPage === "Sign In" && (<h1>Sign In Page Under Construction</h1>)}
          {currentPage === "Contact" && (<h1>Contact Page Under Construction</h1>)}
          {currentPage === "About" && (<h1>About Page Under Construction</h1>)}
          </>
            );
}
          export default MainPage;
