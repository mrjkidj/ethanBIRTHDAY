import React from 'react';
import styles from './KertPage.module.css';
import Kert from '../../Assets/Керт.MP4';
import KertAva from '../../Assets/KertAva.jpg'


const KertPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.text}>
                    <h1>Day</h1>
                    <p>Итан, с днем рождения❤️</p>
                </div>
                <div className={styles.image}>
                    <img src={KertAva} alt="Description" />
                </div>
            </div>
            <div className={styles.videos}>
                <video controls>
                    <source src={Kert} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
               
            </div>
        </div>
    );
}

export default KertPage
