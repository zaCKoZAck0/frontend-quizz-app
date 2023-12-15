import { Switch } from "@/components/ui/switch";
import { SunIcon, MoonIcon } from "./Icons";
import { useTheme } from "next-themes";

export function DayNightSwitch() {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    // if the theme is not light, then set it to dark
    if (theme === "light") {
      setTheme("dark");
      // otherwise, it should be light
    } else {
      setTheme("light");
    }
  };
  return (
    <div className="flex gap-4 items-center">
      <SunIcon />
      <Switch onCheckedChange={toggleTheme} checked={theme === "dark"} />
      <MoonIcon />
    </div>
  );
}
