import { useState, useEffect } from "react";
import "./KenKen.css";
import { generatePuzzle } from "./kenkenGenerator";

/* ---------------- CONFETTI ---------------- */
function Confetti() {
  useEffect(() => {
    const canvas = document.getElementById("confetti");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const pieces = Array.from({ length: 150 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      r: Math.random() * 6 + 4,
      d: Math.random() * 40 + 10,
      color: `hsl(${Math.random() * 360}, 80%, 60%)`
    }));

    let frame;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      pieces.forEach(p => {
        ctx.fillStyle = p.color;
        ctx.fillRect(p.x, p.y, p.r, p.r);
        p.y += Math.cos(p.d) + 2;
        p.x += Math.sin(p.d);

        if (p.y > canvas.height) p.y = -10;
      });

      frame = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(frame);
  }, []);

  return <canvas id="confetti" className="confetti" />;
}

/* ---------------- MAIN COMPONENT ---------------- */

export default function KenKen({ onSolved }) {
  const [puzzle, setPuzzle] = useState(null);
  const [grid, setGrid] = useState(Array(81).fill(""));
  const [notes, setNotes] = useState(Array(81).fill(null).map(() => new Set()));
  const [history, setHistory] = useState([]);
  const [noteMode, setNoteMode] = useState(false);
  const [showErrors, setShowErrors] = useState(false);
  const [selectedCell, setSelectedCell] = useState(null);
  const [solved, setSolved] = useState(false);

  useEffect(() => {
    const newPuzzle = generatePuzzle();
    setPuzzle(newPuzzle);
    setGrid(Array(81).fill(""));
    setNotes(Array(81).fill(null).map(() => new Set()));
  }, []);

  /* ---------------- INPUT ---------------- */

  const handleChange = (i, val) => {
    if (!/^[1-9]?$/.test(val)) return;

    setHistory(prev => [...prev, { grid: [...grid], notes: notes.map(n => new Set(n)) }]);

    if (noteMode && val !== "") {
      setNotes(prev => {
        const next = [...prev];
        const s = new Set(next[i]);
        s.has(val) ? s.delete(val) : s.add(val);
        next[i] = s;
        return next;
      });
    } else {
      setGrid(prev => {
        const next = [...prev];
        next[i] = val;
        return next;
      });

      setNotes(prev => {
        const next = [...prev];
        next[i] = new Set();
        return next;
      });
    }
  };

  useEffect(() => {
    const handler = (e) => {
      if (selectedCell === null) return;

      if (/^[1-9]$/.test(e.key)) handleChange(selectedCell, e.key);
      if (e.key === "Backspace" || e.key === "Delete")
        handleChange(selectedCell, "");
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [selectedCell, grid, notes]);

  /* ---------------- SOLVE CHECK ---------------- */

  const isSolved = () =>
    puzzle &&
    grid.every((val, i) => {
      const r = Math.floor(i / 9);
      const c = i % 9;
      return val && Number(val) === puzzle.solution[r][c];
    });

  useEffect(() => {
    if (isSolved()) setSolved(true);
  }, [grid]);

  /* ---------------- HELPERS ---------------- */

  const getCage = i => puzzle?.cages.find(c => c.cells.includes(i));

  const sameCage = (a, b) => {
    const ca = getCage(a);
    const cb = getCage(b);
    return ca && cb && ca === cb;
  };

  const isIncorrect = i => {
    if (!showErrors || !grid[i]) return false;
    const r = Math.floor(i / 9);
    const c = i % 9;
    return puzzle.solution[r][c] !== Number(grid[i]);
  };

  if (!puzzle) return null;

  /* ---------------- RENDER ---------------- */

  return (
    <div className="kenken-container">
      <div className="controls">
        <button onClick={() => setNoteMode(n => !n)}>
          ✏️ {noteMode ? "Notes ON" : "Notes OFF"}
        </button>

        <button onClick={() => setShowErrors(s => !s)}>
          {showErrors ? "Hide Errors" : "Show Errors"}
        </button>

        <button onClick={() => {
          const last = history.pop();
          if (last) {
            setGrid(last.grid);
            setNotes(last.notes);
            setHistory([...history]);
          }
        }}>
          Undo
        </button>

        <button onClick={() => {
          setGrid(Array(81).fill(""));
          setNotes(Array(81).fill(null).map(() => new Set()));
        }}>
          Reset
        </button>

        <button onClick={() => setGrid(puzzle.solution.flat().map(String))}>
          Reveal
        </button>
      </div>

      <div className="kenken-grid">
        {grid.map((value, i) => {
          const row = Math.floor(i / 9);
          const col = i % 9;
          const cage = getCage(i);
          const isTopLeft = cage && Math.min(...cage.cells) === i;

          const style = {
            borderTop: row === 0 || !sameCage(i, i - 9) ? "3px solid black" : "1px solid #bbb",
            borderLeft: col === 0 || !sameCage(i, i - 1) ? "3px solid black" : "1px solid #bbb",
            borderRight: col === 8 || !sameCage(i, i + 1) ? "3px solid black" : "1px solid #bbb",
            borderBottom: row === 8 || !sameCage(i, i + 9) ? "3px solid black" : "1px solid #bbb",
            color: isIncorrect(i) ? "#c0392b" : "black"
          };

          return (
            <div
              key={i}
              className={`kenken-cell ${selectedCell === i ? "selected" : ""}`}
              style={style}
              onClick={() => setSelectedCell(i)}
            >
              {isTopLeft && (
                <div className="cage-label">
                  {cage.value}{cage.op}
                </div>
              )}

              {value === "" ? (
                <div className="notes-grid">
                  {[1,2,3,4,5,6,7,8,9].map(n => (
                    <span
                      key={n}
                      className={notes[i].has(String(n)) ? "note on" : "note"}
                      onClick={() => handleChange(i, String(n))}
                    >
                      {n}
                    </span>
                  ))}
                </div>
              ) : (
                <span className="cell-value">{value}</span>
              )}
            </div>
          );
        })}
      </div>

      {solved && (
        <div
          className="solve-overlay"
          onClick={() => {
            setSolved(false);
            onSolved();
          }}
        >
          <Confetti />
          <div className="solve-message">
            🎉 You solved today’s puzzle!
            <div className="subtext">Click anywhere to continue</div>
          </div>
        </div>
      )}
    </div>
  );
}
