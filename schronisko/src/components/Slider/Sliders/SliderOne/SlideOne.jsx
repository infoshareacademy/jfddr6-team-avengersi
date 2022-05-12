import styles from "./SlideOne.module.css";

const SlideOne = () => {
  return (
    <div className={styles.main}>
      <article className={styles.content}>
        <h2>Nie bądź obojętny... Zaadoptuj Mnie! 🐶</h2>
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
      </article>
      <div className={styles.images}>
        <aside className={styles.left}>
          <div
            className={`${styles.size} + ${styles.frameTopRoundedLeft}`}
          ></div>
          <figure className={`${styles.size} + ${styles.imageOne}`}></figure>
          <div
            className={`${styles.size} + ${styles.frameBottomRoundedLeft}`}
          ></div>
          <figure className={`${styles.size} + ${styles.imageTwo}`}></figure>
        </aside>

        <aside className={styles.right}>
          <div
            className={`${styles.size} + ${styles.frameTopRoundedRight}`}
          ></div>
          <figure className={`${styles.size} + ${styles.imageThree}`}></figure>
          <div
            className={`${styles.size} + ${styles.frameBottomRoundedRight}`}
          ></div>
          <figure className={`${styles.size} + ${styles.imageFour}`}></figure>
        </aside>
      </div>
      <div className="navigation"></div>
    </div>
  );
};

export default SlideOne;
