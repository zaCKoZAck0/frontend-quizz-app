import { Button } from "@/components/ui/button";
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

export function QuizHome() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );
  return (
    <div className="container z-10 flex lg:flex-row flex-col gap-16 lg:gap-0 justify-between lg:items-start items-center">
      <div className="flex flex-col lg:gap-12 gap-4 w-full">
        <h1 className="md:text-7xl text-4xl font-light">
          Welcome to the <br />
          <span className="font-medium">Frontend Quiz</span>
        </h1>
        <p className="md:text-xl italic text-sm text-[#626C7F] dark:text-[#ABC1E1]">
          Pick a subject to get started.
        </p>
      </div>
      <div className="flex flex-col md:gap-6 gap-3 w-full lg:max-w-xl">
        <Button
          variant="option"
          onClick={() => {
            // <pathname>?quiz=html
            router.push(pathname + "?" + createQueryString("quiz", "HTML"));
          }}
        >
          <QuizIcons quiz="HTML" />
          HTML
        </Button>
        <Button
          variant="option"
          onClick={() => {
            // <pathname>?quiz=css
            router.push(pathname + "?" + createQueryString("quiz", "CSS"));
          }}
        >
          <QuizIcons quiz="CSS" />
          CSS
        </Button>
        <Button
          variant="option"
          onClick={() => {
            // <pathname>?quiz=javascript
            router.push(
              pathname + "?" + createQueryString("quiz", "JavaScript")
            );
          }}
        >
          <QuizIcons quiz="JavaScript" />
          Javascript
        </Button>
        <Button
          variant="option"
          onClick={() => {
            // <pathname>?quiz=accessibility
            router.push(
              pathname + "?" + createQueryString("quiz", "Accessibility")
            );
          }}
        >
          <QuizIcons quiz="Accessibility" />
          Accessibility
        </Button>
      </div>
    </div>
  );
}
