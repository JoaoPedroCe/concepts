"use client";

import Link from "next/link";

const USE_EFFECT_ROUTE = "/useEffectExercises";

export default function App() {
  return (
    <ul>
      <li>
        <Link href={USE_EFFECT_ROUTE}>useEffect Exercises</Link>
      </li>
    </ul>
  );
}
