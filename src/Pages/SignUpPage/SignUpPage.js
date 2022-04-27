import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    useCreateUserWithEmailAndPassword,
    useSendEmailVerification,
} from "react-firebase-hooks/auth";
import firebaseAuth from "./../../firebase.init";

const SignUpPage = () => {
    const [createUserWithEmailAndPassword, user, loading, error] =
        useCreateUserWithEmailAndPassword(firebaseAuth);
    const [sendEmailVerification, sending, error2] =
        useSendEmailVerification(firebaseAuth);

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [remember, setRemember] = useState(false);

    // error handle
    const [userNameError, setUserNameError] = useState(false);
    const [emailError, setemailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [passwordMatchError, setPasswordMatchError] = useState(false);

    const handleFormSubmit = (e) => {
        e.preventDefault();

        // checking inputs
        if (!/^[a-zA-Z0-9]+$/.test(userName)) {
            setUserNameError(true);
        } else if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email)) {
            setemailError(true);
        } else if (password.length < 6) {
            setPasswordError(true);
        } else if (password !== confirmPassword) {
            setPasswordMatchError(true);
        } else {
            createUserWithEmailAndPassword(email, password).then(() => {
                setUserName("");
                setEmail("");
                setPassword("");
                setConfirmPassword("");
                setRemember(false);
                // for errors
                setUserNameError(false);
                setemailError(false);
                setPasswordError(false);
                setPasswordMatchError(false);
                //email verification
                handleEmailVerification();
            });
        }
    };

    const handleEmailVerification = async () => {
        await sendEmailVerification();
        console.log("mail send");
    };

    return (
        <div className="form-container">
            <h4
                style={{
                    textAlign: "center",
                    fontSize: "0.8rem",
                    color: "red",
                    marginBottom: "1rem",
                }}
            >
                {error?.message || error2?.message}
            </h4>
            <h3 className="form-title">signup form</h3>
            <form onSubmit={handleFormSubmit}>
                <div className="input-control">
                    <label htmlFor="email">enter Your name:</label>
                    <input
                        required
                        type="text"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        name="email"
                        id=""
                    />
                    {userNameError && (
                        <p className="error">
                            Username only contains Uppercase,Lowercase,Numberr
                        </p>
                    )}
                </div>
                <div className="input-control">
                    <label htmlFor="email">enter Your email:</label>
                    <input
                        required
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                        id=""
                    />
                    {emailError && <p className="error">enter a valid email</p>}
                </div>
                <div className="input-control">
                    <label htmlFor="password">enter Your password:</label>
                    <input
                        required
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        name="password"
                        id=""
                    />
                    {passwordError && (
                        <p className="error">Password length be atleast 6</p>
                    )}
                </div>
                <div className="input-control">
                    <label htmlFor="password">enter confirm password:</label>
                    <input
                        required
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        name="password"
                        id=""
                    />
                    {passwordMatchError && (
                        <p className="error">Password not matched</p>
                    )}
                </div>
                {/* <div className="form-info-row">
                    <div className="check-box">
                        <input
                            type="checkbox"
                            checked={remember}
                            onChange={(e) => setRemember(e.target.checked)}
                            name="checkbox"
                            id="checkbox"
                        />
                        <label htmlFor="checkbox">remember me</label>
                    </div>
                    <p className="forget-password">forget password</p>
                </div> */}
                <input className="submit-btn" type="submit" value="sign up" />
                <p className="form-text">
                    already have an account? <Link to="/signIn">log in</Link>
                </p>
            </form>
            {/* <div className="form-footer">
                <div className="form-divider">
                    <div className="divider-left divider"></div>
                    <p className="divider-text">or</p>
                    <div className="divider-right divider"></div>
                </div>
                <div className="social-login-container">
                    <button>
                        <i className="fa-brands fa-google"></i>{" "}
                        <span className="btn-text">google</span>
                    </button>
                    <button>
                        <i className="fa-brands fa-github"></i>{" "}
                        <span className="btn-text">github</span>
                    </button>
                    <button>
                        <i className="fa-brands fa-facebook"></i>{" "}
                        <span className="btn-text">facebook</span>
                    </button>
                </div>
            </div> */}
        </div>
    );
};

export default SignUpPage;
