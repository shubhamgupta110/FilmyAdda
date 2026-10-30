import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../CSS/Signup.css";
import Footer from "./Footer";

function Signup() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");

    const navigate = useNavigate();

    const registerUser = async (e) => {
        e.preventDefault();

        // Check password match
        if (password !== confirmpassword) {
            alert("Password and Confirm Password do not match!");
            return;
        }

        try {
            const response = await fetch("http://localhost:1234/Register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            });

            const data = await response.json();

            if (response.status === 200) {
                alert("Successfully Registered!");

                sessionStorage.setItem("email", email);
                navigate("/OTPVerify");
            }
            else {
                alert(data.msg || "Unable to register. Try again.");
            }

        } catch (error) {
            console.error("Registration Error:", error);
            alert("Server connection failed. Please try again.");
        }
    };

    // Clear Form
    const clearForm = (e) => {
        e.preventDefault();

        setEmail("");
        setPassword("");
        setConfirmpassword("");
    };

    return (
        <div className="page-wrapper">
            <div className="signup-page">

                <div className="signup-heading">
                    <h1>Create an Account</h1>
                    <p>Please fill in the details to register.</p>
                </div>

                <form onSubmit={registerUser} onReset={clearForm}>

                    <div className="signup-form-title">
                        CREATE ACCOUNT
                    </div>

                    <label htmlFor="email">Email Address:</label>

                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        value={email}
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label htmlFor="password">Password:</label>

                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Create a password"
                        value={password}
                        required
                        minLength={8}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <label htmlFor="confirmPassword">Confirm Password:</label>

                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="Confirm your password"
                        value={confirmpassword}
                        required
                        minLength={8}
                        onChange={(e) => setConfirmpassword(e.target.value)}
                    />

                    <div className="signup-buttons">

                        <button type="submit">
                            Register
                        </button>

                        <button type="reset">
                            Clear Form
                        </button>

                    </div>

                    <hr />

                    <p className="signup-footer">
                        Already have an account?
                        <Link to="/Signin"> Sign In</Link>
                    </p>

                </form>

            </div>
            <Footer />
        </div>
    );
}

export default Signup;