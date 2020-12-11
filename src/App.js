import React, { useState } from "react";
import "./styles.css";
import emojiDictionary from "./data.js";

export default function App() {
  const [data, setData] = useState("");
  const [id, setId] = useState(null);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const emojiInputHandler = (event) => {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      setError(true);
    } else {
      setError(false);
      setData(userInput);
      setValue(meaning);
    }
  };

  const emojiSelectHandler = (d, i) => {
    setId(i);
    setData(d);
    setValue(emojiDictionary[d]);
  };

  return (
    <div className="App">
      <h1>What's this emoji for?</h1>

      {/* Input */}
      <input
        className="input"
        placeholder="🔎 Insert any Emoji and find what it is for ..."
        onChange={emojiInputHandler}
      />

      {/* Error handling  */}
      {error ? <p style={{ color: "red" }}>Sorry Emoji not found</p> : ""}

      {/* Output */}
      <div className="display">
        <p>
          {data !== "" ? (
            <p>{data + " is for  " + value}</p>
          ) : (
            "No Emoji Selected"
          )}
        </p>
      </div>
      <p>Or Select anyone from down below</p>

      {/* Emojies to choose from*/}
      <div className="emojis">
        {Object.keys(emojiDictionary).map((emoji, i) => {
          return (
            <span
              key={i}
              className={id === i ? "seclectedEmoji" : "emojiSelect"}
              onClick={() => emojiSelectHandler(emoji, i)}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
