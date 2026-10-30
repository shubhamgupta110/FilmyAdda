
import { useEffect, useState } from "react";
import "../CSS/OTPVerify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const OTPVerify = () => {
    const [Timer, setTimer] = useState(10);
    const [verifystatus, setVerifyStatus] = useState(false);
    const [resendStatus, setResendStatus] = useState(true);
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const navigate = useNavigate();

    const updateOTP = (e, index) => {
        e.preventDefault();

        const digit = [...otp];

        if (!/^\d$/.test(e.target.value)) {
            return;
        }

        digit[index] = e.target.value;
        setOtp(digit);

        if (e.target.value !== "" && index < 5) {
            document.getElementById(`otp${index + 2}`).focus();
        }
    };

    const handleVerify = async () => {
        const x = otp.join("");

        if (x.length !== 6) {
            alert("Please enter 6 digit OTP");
            return;
        }

        try {
            const response = await axios.post(
                "http://localhost:1234/VerifyOTP",
                {
                    email: sessionStorage.getItem("email"),
                    otp: x
                }
            );

            console.log(response.data);
            alert(response.data.msg);

            if (response.status === 200) {
                navigate("/");
            }
        } catch (error) {
            alert(error.response?.data?.msg || "OTP verification failed");
        }
    };

    // Resend OTP
    const handleResend = async () => {
        try {
            const response = await axios.post(
                "http://localhost:1234/ResendOTP",
                {
                    email: sessionStorage.getItem("email")
                }
            );

            alert(response.data.msg);

            setOtp(["", "", "", "", "", ""]);
            setTimer(30);
            setVerifyStatus(false);
            setResendStatus(true);

            document.getElementById("otp1")?.focus();

        } catch (error) {
            alert(error.response?.data?.msg || "Failed to resend OTP");
        }
    };

    // Timer
    useEffect(() => {
        if (Timer === 0) {
            setVerifyStatus(true);
            setResendStatus(false);
            return;
        }

        const timerid = setInterval(() => {
            setTimer((value) => value - 1);
        }, 1000);

        return () => clearInterval(timerid);

    }, [Timer]);

    return (
        <div className="page-wrapper">
            <form onSubmit={(e) => e.preventDefault()}>

                <p>YOUR EMAIL ID</p>

                <label id="email">
                    {sessionStorage.getItem("email")}
                </label>

                <p>
                    <label>{Timer}</label>
                </p>

                {
                    otp.map((data, index) => (
                        <input
                            type="text"
                            inputMode="numeric"
                            maxLength="1"
                            key={index}
                            value={data}
                            id={`otp${index + 1}`}
                            onChange={(e) => updateOTP(e, index)}
                        />
                    ))
                }



    <button
        type="button"
        className="verify-btn"
        onClick={handleVerify}
        disabled={Timer === 0}
    >
        VERIFY OTP
    </button>


                     <button
        type="button"
        className="resend-btn"
        disabled={Timer > 0}
    >
        RESEND OTP
    </button>


            </form>
            <Footer />
        </div>
    );
};

export default OTPVerify;
