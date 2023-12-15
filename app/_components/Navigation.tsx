"use client";
import { useSearchParams } from "next/navigation";
import { DayNightSwitch } from "./DayNightSwitch";
import { AccessibilityIcon } from "./Icons";
import { QuizIcons } from "./QuizIcons";

export function Navigation() {
  const searchParams = useSearchParams()!;

  const quiz = searchParams.get("quiz");

  let Quiz = () => (
    <div
      role="icon"
      className=" flex items-center md:text-2xl text-lg md:gap-6 gap-4 font-medium"
    >
      <QuizIcons quiz={quiz || ""} />
      {quiz}
    </div>
  );

  return (
    <div className="absolute flex justify-center w-full h-[15%] z-10">
      <div className="container flex items-center justify-between">
        <Quiz />
        <DayNightSwitch />
      </div>
    </div>
  );
}
