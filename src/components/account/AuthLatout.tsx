import { Outlet } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useState, useEffect } from 'react';
import PreloaderGIF from "@public/Preloader.gif"
import styles from "./account.module.scss"


export default function AuthLayout() {
    const [isLoading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])
    return <GoogleOAuthProvider clientId="google_client_id">
        {!isLoading ? <Outlet /> :
            <div className={`${styles.wrapper} ${styles["wrapper_sign-in"]}`}>
                <img src={PreloaderGIF} width={300} alt="Loading..." />
            </div>}
    </GoogleOAuthProvider>
}