import useTypeHook from "./hooks/useTypeHook";
import "./styles.css";

export default function App() {
  // we imported these from custom hook (named useTypeHook here) that we created. We create custom hooks for resuabiilty purpose and to write logic seperately.
  const {
    textBoxRef,
    handleStart,
    text,
    setText,
    remainingTime,
    wordsCount,
    isBtnDabled,
    isTextBoxDisabled,
    randomTexts
  } = useTypeHook();

  console.log(randomTexts);

  return (
    <div className="App">
      <div className="main--body">
        <h1 style={{ marginTop: "2rem" }}>
          How fast can you type the below text?
        </h1>

        <p className="random--text">"{randomTexts}"</p>

        <textarea
          className="textarea"
          placeholder="Type here..."
          onChange={(event) => setText(event.target.value)}
          value={text}
          disabled={isTextBoxDisabled}
          ref={textBoxRef}
        />
      </div>

      <h3>Time remaining : {remainingTime}</h3>
      <button onClick={handleStart} disabled={isBtnDabled}>
        START
      </button>

      <h1>Words count : {wordsCount}</h1>
    </div>
  );
}
