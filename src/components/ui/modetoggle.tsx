"use client"

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button onClick={toggleTheme} className="w-8 h-8">
            <Moon className="h-0 w-0 dark:h-full dark:w-full rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <Sun className="h-full w-full dark:h-0 dark:w-0 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <span className="sr-only">Toggle theme</span>
          </button>
        </TooltipTrigger>
        <TooltipContent>
          Toggle theme
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
