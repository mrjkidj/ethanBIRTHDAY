import React from 'react';
import styles from './KardiPage.module.css';
import Ly from '../../Assets/Лу.MP4';
import LyAva from '../../Assets/LyAva.jpg'


const KardiPage = () => {
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

export default KardiPage
