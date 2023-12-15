import { Button, buttonVariants } from "@/components/ui/button";
import {
  AccessibilityIcon,
  BrushIcon,
  HtmlIcon,
  JavascriptIcon,
} from "./Icons";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { QuizIcons } from "./QuizIcons";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Result({ result, total }: { result: number; total: number }) {
  const searchParams = useSearchParams()!;

  const quiz = searchParams.get("quiz");

  let Quiz = () => (
    <div className="flex items-center md:text-2xl text-lg md:gap-6 gap-4 font-medium">
      <QuizIcons quiz={quiz || ""} />
      {quiz}
    </div>
  );
  return (
    <div className="z-10 container flex flex-col mt-[15vh] md:mt-0">
      <div className="flex lg:flex-row flex-col md:gap-16 gap-10 lg:gap-0 justify-between lg:items-start items-center">
        <div className="flex flex-col lg:gap-12 gap-4 w-full">
          <h1 className="md:text-7xl text-4xl font-light">
            Quiz completed <br />
            <span className="font-medium">You scored...</span>
          </h1>
        </div>
        <div className="flex flex-col items-center md:gap-10 gap-4 md:p-12 p-8 dark:bg-[#3B4D66] bg-white rounded-3xl w-full lg:max-w-xl">
          <div className="flex items-center md:text-2xl text-lg md:gap-6 gap-4 font-medium">
            <Quiz />
          </div>
          <div className="flex flex-col items-center gap-4">
            <p className="md:text-[9rem] md:leading-[7rem] text-[88px] leading-[1] p-0 m-0">
              {result}
            </p>
            <p className="md:text-2xl text-sm text-[#626C7F] dark:text-[#ABC1E1]">
              {`out of ${total}`}
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-start justify-end w-full py-3 md:py-8">
        <Link className={cn(buttonVariants(), "w-full lg:max-w-xl")} href="/">
          Play Again
        </Link>
      </div>
    </div>
  );
}
