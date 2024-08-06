import styles from './login-component.module.css';

export default function Login(){

    return(
        <div className={styles.login_container}>
            <form>
                <textarea className={styles.login_form}
                maxLength={20}
                placeholder='Username'
                
                />
            </form>
            <form>
                <textarea className={styles.login_form}
                maxLength={20}
                placeholder='Password'
                
                />
            </form>
            <div>
            <button className={styles.login_button} type="submit">Login</button>
            <button className={styles.register_button} type="submit">Register</button>
            </div>
        </div>
    );
}