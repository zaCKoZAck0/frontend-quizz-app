import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Toggle } from "@/components/ui/toggle";
import { RightIcon, WrongIcon } from "./Icons";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Questions } from "../data";
import { Result } from "./Result";
import { cva } from "class-variance-authority";

const optionVariants = cva(
  "md:p-2 group-hover:bg-[#F6E7FF] group-hover:text-primary transition-colors p-1 px-3 md:px-4 bg-[#F4F6FA] text-[#626C7F] rounded-lg",
  {
    variants: {
      state: {
        default:
          "group-data-[state=on]:bg-primary group-data-[state=on]:text-primary-foreground",
        correct:
          "group-data-[state=on]:text-white group-data-[state=on]:bg-[#26D782]",
        wrong:
          "group-data-[state=on]:text-white group-data-[state=on]:bg-[#EE5454]",
      },
    },
    defaultVariants: {
      state: "default",
    },
  }
);

export function Quiz({ quiz }: { quiz: string }) {
  const [state, setState] = useState({
    questions: Questions.quizzes.find((quizzes) => quizzes.title === quiz)
      ?.questions!,
    currentIndex: 0,
    selectedOption: -1,
    evaluate: false,
    invalidInput: false,
    correctOptions: 0,
  });

  function getOptionState(option: string) {
    if (state.evaluate) {
      return state.questions[state.currentIndex].answer === option
        ? "correct"
        : state.selectedOption === -1
        ? "default"
        : "wrong";
    }
  }

  function optionSelect(idx: number, current: boolean) {
    setState((prev) => ({
      ...prev,
      invalidInput: false,
    }));
    if (!state.evaluate) {
      if (state.selectedOption === idx && !current) {
        setState((prev) => ({ ...prev, selectedOption: -1 }));
      } else {
        setState((prev) => ({ ...prev, selectedOption: idx }));
      }
    }
  }

  function reset() {
    setState((prev) => ({
      ...prev,
      selectedOption: -1,
      invalidInput: false,
      evaluate: false,
    }));
  }

  function action() {
    if (state.evaluate) {
      reset();
      setState((prev) => ({ ...prev, currentIndex: prev.currentIndex + 1 }));
    } else {
      if (state.selectedOption === -1) {
        return setState((prev) => ({
          ...prev,
          invalidInput: true,
        }));
      }
      setState((prev) => ({
        ...prev,
        evaluate: true,
        correctOptions:
          prev.correctOptions +
          Number(
            state.questions[state.currentIndex].answer ===
              state.questions[state.currentIndex].options[state.selectedOption]
          ),
      }));
    }
  }

  if (state.currentIndex === state.questions.length) {
    return <Result total={state.currentIndex} result={state.correctOptions} />;
  }

  return (
    <div className="z-10 transition-transform duration-500 container flex flex-col mt-[15vh] md:mt-0">
      <div className="flex lg:flex-row flex-col gap-16 lg:gap-0 justify-between lg:items-start items-center">
        <div className="flex flex-col lg:gap-12 gap-4 w-full lg:max-w-xl">
          <p className="md:text-xl italic text-sm text-[#626C7F] dark:text-[#ABC1E1]">
            {`Question ${state.currentIndex + 1} of ${state.questions.length}`}
          </p>
          <h2 className="text-4xl font-medium">
            {state.questions[state.currentIndex].question}
          </h2>
          <Progress
            className="mt-4"
            value={((state.currentIndex + 1) * 100) / state.questions.length}
          />
        </div>
        <div className="flex flex-col md:gap-6 gap-3 w-full lg:max-w-xl">
          {state.questions[state.currentIndex].options.map((option, idx) => {
            return (
              <Toggle
                key={idx}
                pressed={state.selectedOption === idx}
                onPressedChange={(e) => optionSelect(idx, e.valueOf())}
                variant="option"
                effect={getOptionState(option)}
              >
                <div
                  className={optionVariants({ state: getOptionState(option) })}
                >
                  {String.fromCharCode(65 + idx)}
                </div>
                <p className="w-[70%] text-left flex flex-grow-0 flex-wrap whitespace-pre-line">
                  {option}
                </p>
                <RightIcon
                  className={cn(
                    "ml-auto hidden",
                    getOptionState(option) === "correct" && "block"
                  )}
                />
                <WrongIcon
                  className={cn(
                    "ml-auto hidden",
                    getOptionState(option) === "wrong" &&
                      state.selectedOption === idx &&
                      "block"
                  )}
                />
              </Toggle>
            );
          })}
        </div>
      </div>
      <div className="flex items-start justify-end w-full py-8">
        <Button className="w-full lg:max-w-xl" onClick={action}>
          {state.evaluate ? "Next Question" : "Submit Answer"}
        </Button>
      </div>
      {state.invalidInput && (
        <div className="flex fade-in items-start justify-end w-full">
          <div className="w-full gap-2 dark:text-[#F4F6FA] text-[#EE5454] md:text-2xl text-lg lg:max-w-xl flex justify-center items-center">
            <WrongIcon />
            Please select an answer
          </div>
        </div>
      )}
    </div>
  );
}
