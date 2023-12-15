"use client";
import { useSearchParams } from "next/navigation";

import { QuizHome } from "./QuizHome";
import React from "react";
import { Quiz } from "./Quiz";
import { Result } from "./Result";

export function HomePage() {
  const searchParams = useSearchParams()!;

  const quiz = searchParams.get("quiz");

  if (!quiz) {
    return <QuizHome />;
  }

  if (["HTML", "CSS", "JavaScript", "Accessibility"].includes(quiz)) {
    return <Quiz quiz={quiz} />;
  }
}
