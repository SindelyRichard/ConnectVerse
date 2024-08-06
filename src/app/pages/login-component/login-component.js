import styles from './login-component.module.css';

export default function Login(){

    return(
        <div className={styles.login_container}>
            <form>
                <textarea 
                maxLength={20}
                placeholder='Username'
                
                />
            </form>
            <form>
                <textarea 
                maxLength={20}
                placeholder='Password'
                
                />
            </form>
            <div>
            <button type="submit">Login</button>
            <button type="submit">Register</button>
            </div>
        </div>
    );
}