import { Button } from "@mui/material";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <h2>Nie bądź obojętny...{"\n"}Zaadoptuj Mnie! 🐶</h2>
        <h4>
          Poznaj nasze wszystkie Zwierzaki! Dzięki formularzowi kontaktowemu
          dowiesz się wiecej o każdym z nich.
        </h4>
        <h4>
          Nasza praca polega na leczeniu zwierząt, które często są w bardzo złym
          stanie fizycznym i psychicznym.
        </h4>
        <div className={styles.bar}>
          <h3>Znajdź. Pokochaj. Zaadoptuj.</h3>
          <button className={styles.button}>Zobacz zwierzaki</button>
        </div>
      </div>
      <div className={styles.images}>
        <div className={styles.left}>
          <div
            className={`${styles.size} + ${styles.frameTopRoundedLeft}`}
          ></div>
          <div className={`${styles.size} + ${styles.imageOne}`}></div>
          <div
            className={`${styles.size} + ${styles.frameBottomRoundedLeft}`}
          ></div>
          <div className={`${styles.size} + ${styles.imageTwo}`}></div>
        </div>

        <div className={styles.right}>
          <div
            className={`${styles.size} + ${styles.frameTopRoundedRight}`}
          ></div>
          <div className={`${styles.size} + ${styles.imageThree}`}></div>
          <div
            className={`${styles.size} + ${styles.frameBottomRoundedRight}`}
          ></div>
          <div className={`${styles.size} + ${styles.imageFour}`}></div>
        </div>
      </div>
      <div className="navigation"></div>
    </div>
  );
};

export default HomePage;
