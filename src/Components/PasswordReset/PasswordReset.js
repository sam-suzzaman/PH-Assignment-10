import React, { useState } from "react";

import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import firebaseAuth from "../../firebase.init";

const PasswordReset = () => {
    const [email, setEmail] = useState("");
    const [sendPasswordResetEmail, sending, error] =
        useSendPasswordResetEmail(firebaseAuth);

    const handlePasswordReset = async () => {
        await sendPasswordResetEmail(email);
        alert("Reset Email Sent");
        setEmail("");
    };

    return (
        <div className="form-container">
            <h3 className="form-title">Password Reset</h3>
            <form onSubmit={handlePasswordReset}>
                <div className="input-control">
                    <label htmlFor="email">enter Your email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                        id="email"
                    />
                </div>
                <input className="submit-btn" type="submit" value="submit" />
            </form>
        </div>
    );
};

export default PasswordReset;
