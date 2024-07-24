import React from 'react';
import styles from './JannPage.module.css';
import Jann from '../../Assets/Jann.MP4';
import JannAva from '../../Assets/JannAva.jpg'


const JannPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.text}>
                    <h1>Day</h1>
                    <p>Итан, с днем рождения❤️</p>
                </div>
                <div className={styles.image}>
                    <img src={JannAva} alt="Description" />
                </div>
            </div>
            <div className={styles.videos}>
                <video controls>
                    <source src={Jann} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
               
            </div>
        </div>
    );
}

export default JannPage
