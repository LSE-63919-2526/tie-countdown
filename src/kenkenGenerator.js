// src/kenkenGenerator.js

// --- Generate a valid 9x9 Latin square ---
function generateSolution(size = 9) {
  const base = [...Array(size).keys()].map(i => i + 1);

  const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

  const rows = shuffle([...Array(size).keys()]);
  const cols = shuffle([...Array(size).keys()]);
  const nums = shuffle(base);

  return rows.map(r =>
    cols.map(c => nums[(c + r) % size])
  );
}

// --- Get neighbors of a cell ---
function getNeighbors(i, size = 9) {
  const row = Math.floor(i / size);
  const col = i % size;
  const neighbors = [];

  if (row > 0) neighbors.push(i - size);
  if (row < size - 1) neighbors.push(i + size);
  if (col > 0) neighbors.push(i - 1);
  if (col < size - 1) neighbors.push(i + 1);

  return neighbors;
}

// --- Create random cages ---
function generateCages(solution) {
  const size = 9;
  const used = new Set();
  const cages = [];

  for (let i = 0; i < size * size; i++) {
    if (used.has(i)) continue;

    const cage = [i];
    used.add(i);

    const maxSize = Math.random() < 0.6 ? 2 : 3;

    while (cage.length < maxSize) {
      const options = getNeighbors(cage[cage.length - 1])
        .filter(n => !used.has(n));

      if (!options.length) break;

      const next = options[Math.floor(Math.random() * options.length)];
      cage.push(next);
      used.add(next);
    }

    cages.push(cage);
  }

  return cages;
}

// --- Assign operation + value ---
function getOpAndValue(cells, solution) {
  const values = cells.map(i => {
    const r = Math.floor(i / 9);
    const c = i % 9;
    return solution[r][c];
  });

  if (cells.length === 1) {
    return { op: "", value: values[0] };
  }

  if (cells.length === 2) {
    const [a, b] = values;
    if (a % b === 0) return { op: "÷", value: a / b };
    if (b % a === 0) return { op: "÷", value: b / a };
    return { op: "-", value: Math.abs(a - b) };
  }

  return {
    op: "+",
    value: values.reduce((a, b) => a + b, 0)
  };
}

// --- Public function ---
export function generatePuzzle() {
  const solution = generateSolution();
  const cagesRaw = generateCages(solution);

  const cages = cagesRaw.map(cells => {
    const { op, value } = getOpAndValue(cells, solution);
    return { cells, op, value };
  });

  return { solution, cages };
}
