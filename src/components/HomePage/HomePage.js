import React from 'react';
import styles from './HomePage.module.css';
import { Helmet } from 'react-helmet';

export default function HomePage() {
  const openTelegramBot = () => {
    window.open('https://t.me/Macthaibot', '_blank');
  };

  return (
    <div className={styles.container}>
      <Helmet>
        <title>💡 Match Ai – Умный анализ футбольных матчей</title>
        <meta 
          name="description" 
          content="📊 Match Ai использует передовые технологии для анализа футбольных матчей. Получайте ценные инсайты и принимайте взвешенные решения."
        />
      </Helmet>
      
      <img
        src="https://i.ibb.co/zF0yKCq/image-Photoroom-1.png"
        alt="Logo"
        className={styles.logo}
      />

      <div className={styles.titleContainer}>
        <h1 className={styles.matchText}>MATCH</h1>
        <h1 className={styles.aiText}>AI</h1>
      </div>

      <div className={styles.gradientBorder}>
        <button 
          className={styles.startButton}
          onClick={openTelegramBot}
        >
          <span className={styles.startText}>НАЧАТЬ</span>
        </button>
      </div>
    </div>
  );
}