import {
  AccessibilityIcon,
  BrushIcon,
  HtmlIcon,
  JavascriptIcon,
} from "./Icons";

export function QuizIcons({ quiz }: { quiz: string }) {
  switch (quiz) {
    case "HTML":
      return (
        <div className="md:p-2 p-1 bg-[#FFF1E9] rounded-lg">
          <HtmlIcon className="h-7 w-7 md:h-8 md:w-8 text-[#FF7E35]" />
        </div>
      );
    case "CSS":
      return (
        <div className="md:p-2 p-1 bg-[#E0FDEF] rounded-lg">
          <BrushIcon className="h-7 w-7 md:h-8 md:w-8 text-[#2FD887]" />
        </div>
      );
    case "JavaScript":
      return (
        <div className="md:p-2 p-1 bg-[#EBF0FF] rounded-lg">
          <JavascriptIcon className="h-7 w-7 md:h-8 md:w-8 text-[#306AFF]" />
        </div>
      );
    case "Accessibility":
      return (
        <div className="md:p-2 p-1 bg-[#F6E7FF] rounded-lg">
          <AccessibilityIcon className="h-7 w-7 md:h-8 md:w-8 text-[#A729F5]" />
        </div>
      );
    default:
      return <div></div>;
  }
}
