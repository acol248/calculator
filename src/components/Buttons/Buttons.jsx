// styles
import styles from "./Buttons.module.scss";

const Buttons = ({
  inputHandler,
  clearInput,
  backspace,
  changePlusMinus,
  calculateAns,
}) => {
  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("equalbtn").click();
    }
  });

  return (
    <div className={styles["show-btn"]}>
      <button
        className={`${styles["show-btn__btn"]} ${styles["show-btn__exp"]}`}
        onClick={changePlusMinus}
      >
        ±
      </button>
      <button
        className={`${styles["show-btn__btn"]} ${styles["show-btn__clr"]}`}
        onClick={clearInput}
      >
        AC
      </button>
      <button
        className={`${styles["show-btn__btn"]} ${styles["show-btn__clr"]}`}
        onClick={backspace}
      >
        ⌫
      </button>
      <button
        className={`${styles["show-btn__btn"]} ${styles["show-btn__exp"]}`}
        onClick={inputHandler}
      >
        ÷
      </button>
      <button className={styles["show-btn__btn"]} onClick={inputHandler}>
        7
      </button>
      <button className={styles["show-btn__btn"]} onClick={inputHandler}>
        8
      </button>
      <button className={styles["show-btn__btn"]} onClick={inputHandler}>
        9
      </button>
      <button
        className={`${styles["show-btn__btn"]} ${styles["show-btn__exp"]}`}
        onClick={inputHandler}
      >
        x
      </button>
      <button className={styles["show-btn__btn"]} onClick={inputHandler}>
        4
      </button>
      <button className={styles["show-btn__btn"]} onClick={inputHandler}>
        5
      </button>
      <button className={styles["show-btn__btn"]} onClick={inputHandler}>
        6
      </button>
      <button
        className={`${styles["show-btn__btn"]} ${styles["show-btn__exp"]}`}
        onClick={inputHandler}
      >
        -
      </button>
      <button className={styles["show-btn__btn"]} onClick={inputHandler}>
        1
      </button>
      <button className={styles["show-btn__btn"]} onClick={inputHandler}>
        2
      </button>
      <button className={styles["show-btn__btn"]} onClick={inputHandler}>
        3
      </button>
      <button
        className={`${styles["show-btn__btn"]} ${styles["show-btn__exp"]}`}
        onClick={inputHandler}
      >
        +
      </button>
      <button className={styles["show-btn__btn"]} onClick={inputHandler}>
        0
      </button>
      <button
        className={`${styles["show-btn__btn"]} ${styles["show-btn__exp"]}`}
        onClick={inputHandler}
      >
        .
      </button>
      <button
        className={`${styles["show-btn__btn"]} ${styles["show-btn__exp"]} ${styles["show-btn__equal"]}`}
        id="equalbtn"
        onClick={calculateAns}
      >
        =
      </button>
    </div>
  );
};

export default Buttons;
