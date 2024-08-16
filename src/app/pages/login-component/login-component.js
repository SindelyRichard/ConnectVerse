import { apiRequest } from '@/app/services/apiService';
import styles from './login-component.module.css';
import { useState } from 'react';

export default function Login(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

     const handleChange = (event) =>{
        const {name,value} = event.target;
        if(name === 'username') setUsername(value);
        if(name === 'password') setPassword(value);
     }

     const register = async (event) => {
        event.preventDefault();
        const usernameExist = await apiRequest('check_username',{username});
        if(usernameExist.exists){
            alert('Username already exists!');
        }else{
            const result = await apiRequest('register_user',{username,password});
            if(result.success){
                alert('Registration successful!');
                setUsername('');
                setPassword('');
            }else{
                alert('Registration failed!');
            }
        }
     }
    return(
        <div className={styles.login_container}>
            <form>
                <textarea className={styles.login_form}
                name='username'
                maxLength={20}
                placeholder='Username'
                value={username}
                onChange={handleChange}
                />
            </form>
            <form>
                <textarea className={styles.login_form}
                name='password'
                maxLength={20}
                placeholder='Password'
                value={password}
                onChange={handleChange}
                />
            </form>
            <div>
            <button className={styles.login_button} type="button">Login</button>
            <button className={styles.register_button} type="button" onClick={register}>Register</button>
            </div>
        </div>
    );
}