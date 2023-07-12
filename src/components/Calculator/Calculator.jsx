import { useState } from "react";
import { evaluate, round } from "mathjs";

// components
import Display from "../Display";
import Buttons from "../Buttons";

// styles
import styles from "./Calculator.module.scss";

export default function Calculator() {
  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState("");

  /**
   * Handle input
   *
   * @param {*} event
   * @returns
   */
  const handleInput = (event) => {
    if (answer === "Invalid Input!!") return;
    let val = event.target.innerText;

    if (val === "x2") val = "^2";
    else if (val === "x3") val = "^3";
    else if (val === "3√") val = "^(1÷3)";
    else if (val === "log") val = "log(";

    const str = input + val;
    if (str.length > 14) return;

    if (answer !== "") {
      setInput(answer + val);
      setAnswer("");
    } else setInput(str);
  };

  /**
   * Clear screen
   */
  const handleClearInput = () => {
    setInput("");
    setAnswer("");
  };

  /**
   * Check brackets are balanced or not
   *
   * @param {String[]} expr array of expressions
   */
  const checkBracketBalanced = (expr) => {
    const stack = [];
    for (let i = 0; i < expr.length; i++) {
      if (expr[i] === "(") {
        stack.push(expr[i]);
        continue;
      }

      if (expr[i] === ")") {
        if (stack.length === 0) return false;
        else stack.pop();
      }
    }
    return stack.length === 0;
  };

  /**
   * Remove last character
   */
  const handleBackspace = () => {
    if (answer !== "") {
      setInput(answer.toString().slice(0, -1));
      setAnswer("");
    } else setInput((prev) => prev.slice(0, -1));
  };

  /**
   * Change prefix of expression
   */
  const handleTogglePositiveNegative = () => {
    //need to change for answer
    if (answer === "Invalid Input!!") return;
    else if (answer !== "") {
      const ans = answer.toString();

      if (ans.charAt(0) === "-") {
        let plus = "+";
        setInput(plus.concat(ans.slice(1, ans.length)));
      } else if (ans.charAt(0) === "+") {
        let minus = "-";
        setInput(minus.concat(ans.slice(1, ans.length)));
      } else {
        let minus = "-";
        setInput(minus.concat(ans));
      }

      setAnswer("");
    } else {
      if (input.charAt(0) === "-") {
        let plus = "+";
        setInput((prev) => plus.concat(prev.slice(1, prev.length)));
      } else if (input.charAt(0) === "+") {
        let minus = "-";
        setInput((prev) => minus.concat(prev.slice(1, prev.length)));
      } else {
        let minus = "-";
        setInput((prev) => minus.concat(prev));
      }
    }
  };

  /**
   * Calculate final answer
   */
  const handleCalculate = () => {
    if (!input) return;

    let result = 0;
    let finalexpression = input;

    finalexpression = finalexpression.replaceAll("x", "*");
    finalexpression = finalexpression.replaceAll("÷", "/");

    try {
      if (!checkBracketBalanced(finalexpression)) {
        const errorMessage = { message: "Brackets are not balanced!" };
        throw errorMessage;
      }
      result = evaluate(finalexpression);
    } catch (error) {
      result =
        error.message === "Brackets are not balanced!"
          ? "Brackets are not balanced!"
          : "Invalid Input!!";
    }

    console.log(isNaN(result));

    isNaN(result) ? setAnswer(result) : setAnswer(round(result, 3));
  };

  return (
    <div className={styles["main"]}>
      <Display input={input} setInput={setInput} answer={answer} />
      <Buttons
        inputHandler={handleInput}
        clearInput={handleClearInput}
        backspace={handleBackspace}
        changePlusMinus={handleTogglePositiveNegative}
        calculateAns={handleCalculate}
      />
    </div>
  );
}
