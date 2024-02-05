"use client";

import ExerciseTitle from "@/components/Title/ExerciseTitle";
import { useEffect, useState } from "react";

const description =
  "In this example, the pink dot should move when the checkbox is on, and should stop moving when the checkbox is off. The logic for this has already been implemented: the handleMove event handler checks the canMove state variable.However, for some reason, the canMove state variable inside handleMove appears to be “stale”: it’s always true, even after you tick off the checkbox. How is this possible? Find the mistake in the code and fix it.";
const title = "Challenge 3 of 5: Investigate a stale value bug ";

export default function Exercise3() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [canMove, setCanMove] = useState(true);

  function handleMove(e: any) {
    if (canMove) {
      setPosition({ x: e.clientX, y: e.clientY });
    }
  }

  useEffect(() => {
    console.log("estou no effect");
    window.addEventListener("pointermove", handleMove);
    return () => {
      window.removeEventListener("pointermove", handleMove);
    };
  }); //Aqui é removido o array de dependencias porém isso gera um problema, o effect será executado infinitamente enquanto o valor for true

  return (
    <>
      <ExerciseTitle description={description} title={title} />
      <label>
        <input
          type="checkbox"
          checked={canMove}
          onChange={(e) => setCanMove(e.target.checked)}
        />
        The dot is allowed to move
      </label>
      <hr />
      <div
        style={{
          position: "absolute",
          backgroundColor: "pink",
          borderRadius: "50%",
          opacity: 0.6,
          transform: `translate(${position.x}px, ${position.y}px)`,
          pointerEvents: "none",
          left: -20,
          top: -20,
          width: 40,
          height: 40,
        }}
      />
    </>
  );
}
