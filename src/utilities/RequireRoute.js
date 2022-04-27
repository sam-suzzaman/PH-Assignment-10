import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import firebaseAuth from "./../firebase.init";

function RequireAuth({ children }) {
    let location = useLocation();
    const [userInfo, setUserInfo] = useState({});
    const [user] = useAuthState(firebaseAuth);

    useEffect(() => {
        setUserInfo(user);
    }, [user]);

    if (!userInfo) {
        return <Navigate to="/signIn" state={{ from: location }} replace />;
    }

    return children;
}

export default RequireAuth;
