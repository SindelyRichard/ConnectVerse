'use client';

import styles from "./page.module.css";
import { useState, useEffect } from 'react';
import CreatePost from "./pages/create-post-component/create-post-component";
import Login from "./pages/login-component/login-component";

export default function Home() {

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
          <Login />
        </div>
      </div>
      <div className={styles.main_div}>
        <CreatePost />
      </div>
    </main>
  );
}
