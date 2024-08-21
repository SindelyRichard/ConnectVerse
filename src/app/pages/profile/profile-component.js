import styles from "./profile-component.module.css";
import { logoutApi } from '@/app/services/apiService';

export default function Profile({onLogout,username}){
    const logout = async()=>{
        try{
        const result = await logoutApi();
        if(result.success){
            onLogout();
        }else{
            alert('Logout failed');
        }
    }catch(error){
        console.error('Logout error: ',error);
    }

    };
    return(
        <div className={styles.profile_picture_container}>
            
            <div className={styles.profile_picture_div}>
            <img
            src="default_profilepicture.jpg"
            alt="profile picture"
            className={styles.profile_picture}
            />
            </div>
            <div className={styles.profile_name}>
                {username}
            </div>
            
            <div className={styles.logout}>
                <button onClick={logout}>Log out</button>
            </div>
        </div>
    );
}