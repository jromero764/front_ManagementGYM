import React from "react";
import GoogleLogin from "react-google-login";
import { Link } from "react-router-dom";
export const LoginOAuth = () => {
    const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
    console.log(googleClientId)
    return (
        <Link to='dashboard'>
            <GoogleLogin
                clientId="960710479294-vn4an88b2puhbpbjcpg6g273c9l1amu4.apps.googleusercontent.com"
                onSuccess={credentialsResponse => {
                    console.log('credenciales: ', credentialsResponse)
                }}
                onError={() => {
                    console.log('hubo un error')
                }}
            />
        </Link>
    )
}