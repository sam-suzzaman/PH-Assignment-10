import React, { useState } from "react";
import "./CheckOutPage.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CheckOutPage = () => {
    const [userName, setUserName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [termsStatus, setTermsStatus] = useState(false);

    const handleCheckOutForm = (e) => {
        e.preventDefault();
        toast("Thank your for submitting information");
        setUserName("");
        setAddress("");
        setEmail("");
        setPhoneNumber("");
        setTermsStatus(false);
    };
    return (
        <div className="form-container">
            <h3 className="form-title">welcome to checkout page</h3>
            <form onSubmit={handleCheckOutForm}>
                <div className="input-control">
                    <label htmlFor="name">enter Your name:</label>
                    <input
                        type="text"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        required
                        name="name"
                        id="name"
                    />
                </div>
                <div className="input-control">
                    <label htmlFor="address">enter Your address:</label>
                    <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                        name="address"
                        id="address"
                    />
                </div>
                <div className="input-control">
                    <label htmlFor="email">enter Your email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        name="email"
                        id="email"
                    />
                </div>
                <div className="input-control">
                    <label htmlFor="number">enter Your phone number:</label>
                    <input
                        type="text"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        name="number"
                        id="number"
                    />
                </div>
                <div className="form-info-row">
                    <div className="check-box">
                        <input
                            type="checkbox"
                            name="checkbox"
                            value={termsStatus}
                            onChange={(e) => setTermsStatus(e.target.checked)}
                            checked={termsStatus}
                            required
                            id="checkbox"
                        />
                        <label htmlFor="checkbox">
                            accept all terms and conditions
                        </label>
                    </div>
                </div>
                <input
                    disabled={termsStatus ? false : true}
                    className="submit-btn"
                    type="submit"
                    value="submit"
                />
            </form>
            <ToastContainer />
        </div>
    );
};

export default CheckOutPage;
