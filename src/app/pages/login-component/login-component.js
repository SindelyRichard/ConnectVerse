import { apiRequest } from '@/app/services/apiService';
import styles from './login-component.module.css';
import { useState } from 'react';


export default function Login({onLoginSuccess}){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const isValidUsername = (value) => {
        const usernamePattern = /^[A-Za-z_]+$/;
        return usernamePattern.test(value);
    };
    
    const containsNoSpaces = (value) => {
        return !/\s/.test(value);
    };

    const handleChange = (event) =>{
        const {name,value} = event.target;
        if(name === 'username'){
            if(isValidUsername(value) && containsNoSpaces(value)){
                setUsername(value);
            }
            else if(value === ''){
                setUsername('');
            }
            else{
                setUsername('');
                alert("Incorrect username");
            }
        }
        if(name === 'password'){
            if(containsNoSpaces(value)){
                setPassword(value);
            }
            else if(value === ''){
                setPassword('');
            }
            else{
                setPassword('');
                alert("Incorrect password!");
            }
        }
     };

     const login = async (event) => {
        event.preventDefault();
        const result = await apiRequest('login',{username,password});
        if(result.success){
            alert('Login successful!');
            if(onLoginSuccess) onLoginSuccess(username);
            

        }else{
            alert('Login failed');
        }
     };

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
     };
    return(
        <div className={styles.login_container}>
            <form>
                <input className={styles.login_form}
                name='username'
                maxLength={15}
                placeholder='Username'
                value={username}
                onChange={handleChange}
                />
            </form>
            <form>
                <input type="password"
                className={styles.login_form}
                name='password'
                maxLength={20}
                placeholder='Password'
                value={password}
                onChange={handleChange}
                />
            </form>
            <div>
            <button className={styles.login_button} type="button" onClick={login}>Login</button>
            <button className={styles.register_button} type="button" onClick={register}>Register</button>
            </div>
        </div>
    );
}