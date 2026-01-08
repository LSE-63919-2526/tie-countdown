import { useState } from "react";
import "./App.css";
import KenKen from "./KenKen";
import { tiePatterns } from "./tiePatterns";
import { dayMessages } from "./messages";

/* ---------------- HELPERS ---------------- */

function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/* ---------------- MAIN APP ---------------- */

function App() {
  const VISIBLE_TIES = 15;

  const [completed, setCompleted] = useState(0);
  const [phase, setPhase] = useState("idle"); // idle | puzzle | message

  // Shuffle all 93 ties ONCE
  const [remainingTies, setRemainingTies] = useState(() =>
    shuffleArray(tiePatterns)
  );

  // Always show the next 15 remaining ties
  const visibleTies = remainingTies.slice(0, VISIBLE_TIES);
  const tiesLeft = remainingTies.length;

  const messageData = dayMessages[tiesLeft];

  /* ---------- Actions ---------- */

  const solvePuzzle = () => {
    if (phase !== "idle") return;
    setPhase("puzzle");
  };

  const onPuzzleSolved = () => {
    if (dayMessages[tiesLeft]) {
      setPhase("message");
    } else {
      // No message for this day — consume one tie and move on
      setCompleted((c) => c + 1);
      setPhase("idle");
      setRemainingTies((prev) => prev.slice(1));
    }
  };

  const closeMessage = () => {
    setCompleted((c) => c + 1);
    setPhase("idle");
    setRemainingTies((prev) => prev.slice(1));
  };

  return (
    <div className="page">
      <div className="content">
        <h1 className="title">The Countdown</h1>
        <h2 className="counter">{tiesLeft} ties left</h2>

        <div className="banister">
          <div className="rail" />

          <div className="ties">
            {visibleTies.map((style) => (
              <div className="tie-wrapper" key={style.name}>
                <div className="tie">
                  <div
                    className="tie-fill"
                    style={{
                      background: style.background,
                      backgroundSize: style.backgroundSize || "cover",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          className="solve-btn"
          onClick={solvePuzzle}
          disabled={phase !== "idle" || tiesLeft === 0}
        >
          Solve Puzzle
        </button>
      </div>

      {/* Puzzle Overlay */}
      {phase === "puzzle" && (
        <div className="overlay">
          <div className="kenken-wrapper">
            <KenKen onSolved={onPuzzleSolved} />
          </div>
        </div>
      )}

      {/* Message Overlay */}
      {phase === "message" && messageData && (
        <div className="tie-message-overlay">
          <div className="tie-message">
            <p>{messageData.text}</p>

            {messageData.link && (
              <a
                href={messageData.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more
              </a>
            )}

            <button onClick={closeMessage}>Continue</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
