"use client";
import Link from "next/link";
import { USE_EFFECT_ROUTE } from "../page";

export function getRoute(route: string) {
  return USE_EFFECT_ROUTE + route;
}

export default function UseEffectExercises() {
  return (
    <ul>
      <li>
        <Link href={getRoute("/Exercise1")}>Exercise1</Link>
      </li>
    </ul>
  );
}
