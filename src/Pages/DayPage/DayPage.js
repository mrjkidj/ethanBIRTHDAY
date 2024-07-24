import React from 'react';
import Day from '../../Assets/Дэй.MP4';
import Day1 from '../../Assets/Day1.MP4';
import styles from './DayPage.module.css'; 
import DayAva from '../../Assets/DayAva.jpg'
// Импортируем CSS-модуль

const DayPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.text}>
                    <h1>Day</h1>
                    <p>Родной мой! С днём рождения тебя поздравляю.
                        Пусть жизнь тебе всегда радость преподносит, счастье, как звезда яркая, светит в пути. И пусть все грусти обходят стороной! Друзья пусть всегда окружают тебя, и шутки, как радуга, веселят душу твою, ехех. Пусть на лице твоем всегда светится улыбка!
                        И каждый новый день приносит только радость!

                        туған күніңмен 💙💚</p>
                </div>
                <div className={styles.image}>
                    <img src={DayAva} alt="Description" />
                </div>
            </div>
            <div className={styles.videos}>
                <video controls>
                    <source src={Day} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <video controls>
                    <source src={Day1} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
}

export default DayPage;

