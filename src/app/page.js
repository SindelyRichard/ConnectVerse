'use client';

import styles from "./page.module.css";
import { useState, useEffect } from 'react';
import CreatePost from "./pages/create-post-component/create-post-component";
import Login from "./pages/login-component/login-component";
import Profile from "./pages/profile/profile-component";
import { checkSession,getPosts } from './services/apiService';
import Post from "./pages/post-component/post-component";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username,setUsername] = useState('');
  const [posts,setPosts] =  useState([]);
  const [currentPage,setCurrentPage] = useState(1);
  const [totalPages,setTotalPages] = useState(1);
  const postsPerPage = 30;

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


  const fetchPosts = async (page) => {
    try {
      const result = await getPosts(page,postsPerPage);
      setPosts(result.posts);
      const totalPosts = result.totalPosts;
      setTotalPages(Math.ceil(totalPosts/postsPerPage))
      if (page > totalPages) {
        setCurrentPage(totalPages);
        return;
    }
    setCurrentPage(page);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

   useEffect(() => {
    fetchPosts(currentPage);
   },[currentPage]);

   useEffect(() => {
    if (currentPage === 1) {
        fetchPosts(totalPages);
    }
}, [totalPages]);


const handleNewPost = () => {
fetchPosts(currentPage);
};

const goToPage = (pageNumber) => {
  setCurrentPage(pageNumber);
};

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
          <CreatePost username={username} onPostCreated={handleNewPost}/>
        </div>
      )}
      <div className={styles.main_postcontainer}>
        <Post posts={posts}/>
        <div className={styles.pagination}>
        {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={totalPages - index}
                            onClick={() => goToPage(totalPages - index)}
                            className={totalPages - index === currentPage ? styles.active : ''}
                        >
                            {totalPages - index}
                        </button>
                    ))}
                </div>
      </div>
    </main>
  );
}
