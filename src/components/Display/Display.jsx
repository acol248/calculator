import { useContext } from "react";

// components
import Icon from "../Icon";

// hooks
import { ThemeContext } from "../ThemeWrapper/ThemeWrapper";

// styles
import styles from "./Display.module.scss";

export default function Display({ input, setInput, answer }) {
  const { themeState, toggleTheme } = useContext(ThemeContext);

  const onChangeTagInput = (e) => {
    const re = /^[!%(-+\x2D-9^glox\xF7\u221A]+$/;

    if (e.target.value === "" || re.test(e.target.value)) {
      setInput(e.target.value);
    }
  };

  return (
    <div className={styles["display"]}>
      <button
        className={styles["display__theme-toggle"]}
        onClick={() => toggleTheme()}
      >
        <Icon type={themeState} />
      </button>

      {answer === null || answer === "" ? (
        <>
          <input
            type="text"
            name="input"
            className={styles["display__input"]}
            value={input}
            placeholder="0"
            maxLength={12}
            onChange={onChangeTagInput}
            autoComplete="off"
          />
        </>
      ) : (
        <>
          <input
            type="text"
            name="input"
            className={styles["display__value"]}
            value={input}
            placeholder="0"
            maxLength={12}
            disabled
          />
          <input
            type="text"
            name="value"
            className={styles["display__input"]}
            value={answer}
            disabled
          />
        </>
      )}
    </div>
  );
}
