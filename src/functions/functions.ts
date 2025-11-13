export function checkWord(
  word: string | null,
  solution: string,
  done: boolean
): { letter: string; status: "green" | "yellow" | "empty" | "done" }[] {
  const result = Array.from({ length: 5 }, (_, i) => ({
    letter: word ? word[i] : "",
    status: "done" as "green" | "yellow" | "empty" | "done",
  }));
  if (!done) {
    return result.map((l) => ({ ...l, status: "empty" }));
  }

  // Track which letters in the solution have been used
  const solutionLetters = solution.split("");
  const used = Array(5).fill(false);

  // 1️⃣ First pass: mark greens
  for (let i = 0; i < 5; i++) {
    if (word && word[i] === solution[i]) {
      result[i].status = "green";
      used[i] = true;
    }
  }

  // 2️⃣ Second pass: mark yellows
  for (let i = 0; i < 5; i++) {
    if (result[i].status === "green") continue; // already matched

    const index = solutionLetters.findIndex(
      (c, j) => word && c === word[i] && !used[j]
    );

    if (index !== -1) {
      result[i].status = "yellow";
      used[index] = true;
    }
  }

  return result;
}
export const handleButtonClick = (key: string) => {
  const event = new KeyboardEvent("keydown", {
    key: key,
    code: key === "Backspace" ? "Backspace" : `Key${key}`,
    bubbles: true,
    cancelable: true,
  });

  window.dispatchEvent(event);
};
