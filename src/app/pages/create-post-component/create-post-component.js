import { apiRequest } from '@/app/services/apiService';
import styles from './create-post-component.module.css';
import { useState } from 'react';

export default function CreatePost({username}) {
    const [text, setText] = useState('');
    const handleChange = (event) => {
        setText(event.target.value);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        const dateNow = new Date();
        dateNow.setHours(dateNow.getHours()+2);
        const date = dateNow.toISOString();
        const result = await apiRequest('create_post',{text,date,username});
        setText('');
    }
    return(
        <div className={styles.formWrapper}>
            <form className={styles.formContainer} onSubmit={handleSubmit}>
             <textarea className={styles.text_form}
             maxLength={200}
             placeholder='Type something...'
             onChange={handleChange}
             value={text}
             />
             <div className={styles.button_box}>
                <button className={styles.post_button} type="submit">Post</button>
             </div>
            </form>
            </div>
    );
}