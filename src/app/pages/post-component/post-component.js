import styles from "./post-component.module.css";

export default function Post({posts}){
    const formatDate = (isoDate) => {
        const date = new Date(isoDate);
        const options = { 
            year: 'numeric', 
            month: '2-digit', 
            day: 'numeric', 
            hour: '2-digit', 
            minute: '2-digit' 
        };
        return date.toLocaleDateString('hu-HU', options);
    };

    return(
        <div className={styles.post_container}>
            {posts.length === 0 ? (
                <li>No posts available.</li>
            ) : (
                posts.map((post) => (
                    <div className={styles.post} key={post.id}>
                        <div className={styles.post_details}>
                            <h5>{post.username}</h5>
                            <small className={styles.date}>{formatDate(post.date)}</small>
                        </div>
                        <p>{post.message}</p>
                    </div>
                ))
            )}
    </div>   );
}