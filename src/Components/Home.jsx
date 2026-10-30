import "../CSS/Home.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function Home(){
    return (
        <div className="home-wrapper">
            <div className="home-container">
                <h1 className="home-title">Welcome to FilmyAdda</h1>
                <p className="home-subtitle">Your one-stop destination for movie tickets and entertainment</p>
                <div className="home-cta">
                    <Link to="/Movies" className="btn-primary">Browse Movies</Link>
                    <Link to="/Theatres" className="btn-secondary">Find Theatres</Link>
                </div>
            </div>
            <Footer />
        </div>
    )
};
export default Home;