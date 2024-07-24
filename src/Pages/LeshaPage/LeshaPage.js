import React from 'react';
import styles from './LeshaPage.module.css';
import Ly from '../../Assets/Lesha.MP4';
import LyAva from '../../Assets/LeshaAva.jpg'


const LeshaPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.text}>
                    <h1>Day</h1>
                    <p>Итан, с днем рождения❤️</p>
                </div>
                <div className={styles.image}>
                    <img src={LyAva} alt="Description" />
                </div>
            </div>
            <div className={styles.videos}>
                <video controls>
                    <source src={Ly} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
               
            </div>
        </div>
    );
}

export default LeshaPage
