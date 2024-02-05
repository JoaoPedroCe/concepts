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
        <Link href={getRoute("/Exercise1")}>
          Exercise1
          <br />
          https://react.dev/learn/lifecycle-of-reactive-effects#the-lifecycle-of-an-effect
        </Link>
      </li>
      <li>
        <Link href={getRoute("/Exercise2")}>
          Exercise2
          <br />
          https://react.dev/learn/lifecycle-of-reactive-effects#the-lifecycle-of-an-effect
        </Link>
      </li>
      <li>
        <Link href={getRoute("/Exercise3")}>
          Exercise3
          <br />
          https://react.dev/learn/lifecycle-of-reactive-effects#the-lifecycle-of-an-effect
        </Link>
      </li>
      <li>
        <Link href={getRoute("/Exercise4")}>
          Exercise3
          <br />
          https://react.dev/learn/lifecycle-of-reactive-effects#the-lifecycle-of-an-effect
        </Link>
      </li>
    </ul>
  );
}
