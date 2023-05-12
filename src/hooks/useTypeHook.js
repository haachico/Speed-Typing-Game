import { useState, useEffect, useRef } from "react";
import { paragraphs } from "../paragraphs";

const useTypeHook = () => {
  const [text, setText] = useState("");
  const [remainingTime, setRemainingTime] = useState(30);
  const [shouldRun, setShouldRun] = useState(false);
  const [wordsCount, setWordsCount] = useState(0);
  const [isBtnDabled, setIsBtnDisabeled] = useState(false);
  const [isTextBoxDisabled, setIsTextBoxDisabled] = useState(true);
  const [randomTexts, setRandomTexts] = useState(
    "Text will appear here like this. Click on the start button. ALL THE BEST!"
  );
  const textBoxRef = useRef(null);

  const generateRandomParas = () => {
    const randomNum = Math.floor(Math.random() * 5 + 1);

    const randomText = paragraphs[randomNum];
    setRandomTexts(randomText);
  };

  console.log(randomTexts, "RANDOM TEXTS");

  const wordsLength = (text) => {
    const wordsArray = text
      .trim()
      .split(" ")
      .filter((word) => word !== "").length;
    return wordsArray;
  };

  const handleStart = () => {
    console.log(wordsLength(text));
    setShouldRun(true);
    setRemainingTime(30);
    setText("");
    setWordsCount(0);
    setIsBtnDisabeled(true);
    setIsTextBoxDisabled(false);
    textBoxRef.current.disabled = false;
    textBoxRef.current.focus();
    generateRandomParas(paragraphs);
  };

  const endGame = () => {
    setShouldRun(false);
    setWordsCount(wordsLength(text));
    setIsBtnDisabeled(false);
    setIsTextBoxDisabled(true);
  };
  console.log(shouldRun);

  console.log(shouldRun);
  useEffect(() => {
    if (shouldRun && remainingTime > 0) {
      setTimeout(() => {
        setRemainingTime((prev) => prev - 1);
      }, 1000);
    } else {
      endGame();
    }
  }, [remainingTime, shouldRun]);

  return {
    textBoxRef,
    handleStart,
    text,
    shouldRun,
    remainingTime,
    wordsCount,
    isBtnDabled,
    isTextBoxDisabled,
    setText,
    randomTexts
  };
};

export default useTypeHook;
