import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";
import { Github, Linkedin, FileDown } from "lucide-react";

const nav = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <nav className="container mx-auto flex items-center justify-between py-4">
        <a href="#home" className="font-heading text-lg tracking-wide">UG</a>
        <ul className="hidden md:flex items-center gap-6 text-sm">
          {nav.map((n) => (
            <li key={n.href}>
              <a className="hover:text-primary transition-colors" href={n.href}>{n.label}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <a href="#" aria-label="GitHub" className="p-2 rounded-md hover:bg-accent transition-colors"><Github className="size-5"/></a>
          <a href="#" aria-label="LinkedIn" className="p-2 rounded-md hover:bg-accent transition-colors"><Linkedin className="size-5"/></a>
          <a href="/resume.pdf" className="hidden sm:block"><Button variant="hero" size="sm"><FileDown className="mr-2"/>Resume</Button></a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Header;
