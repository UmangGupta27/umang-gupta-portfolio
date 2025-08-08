import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import * as React from "react";

const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = React.useState<boolean>(() =>
    typeof window !== 'undefined' ? document.documentElement.classList.contains('dark') : true
  );

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  return (
    <Button variant="ghost" size="icon" aria-label="Toggle theme" onClick={toggle}>
      {isDark ? <Sun /> : <Moon />}
    </Button>
  );
};

export default ThemeToggle;
