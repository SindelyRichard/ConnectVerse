'use client';

import styles from "./page.module.css";
import { useState, useEffect } from 'react';
import CreatePost from "./pages/create-post-component/create-post-component";
import Login from "./pages/login-component/login-component";
import Profile from "./pages/profile/profile-component";
import { checkSession } from './services/apiService';
import Post from "./pages/post-component/post-component";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username,setUsername] = useState('');

  useEffect(() => {
    const verifySession = async () => {
        try {
            const result = await checkSession();
            setIsLoggedIn(result.loggedIn);
            setUsername(result.username);
        } catch (error) {
            console.error('Error checking session:', error);
        }
    };

    verifySession();
}, []);

const handleLoginSuccess = (username) => {
  setUsername(username);
  setIsLoggedIn(true);
};

const handleLogout = () =>{
  setIsLoggedIn(false);
  setUsername('');
};

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.logo_box}>
          <img
            src="/logo.jpg"
            alt="ConnectVerse logo"
            className={styles.logo_image}
          />
        </div>
        <div className={styles.login}>
          {isLoggedIn ? <Profile onLogout={handleLogout} username={username}/> : <Login onLoginSuccess={handleLoginSuccess} />}
        </div>
      </div>
      {isLoggedIn && (
        <div className={styles.main_div}>
          <CreatePost username={username}/>
        </div>
      )}
      <div className={styles.main_postcontainer}>
        <Post/>
      </div>
    </main>
  );
}
