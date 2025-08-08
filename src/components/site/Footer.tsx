import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border mt-16">
      <div className="container mx-auto py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <p>© {new Date().getFullYear()} Umang Gupta. All rights reserved.</p>
        <nav className="flex items-center gap-4">
          <a href="#" aria-label="GitHub" className="p-2 rounded-md hover:bg-accent transition-colors"><Github className="size-5"/></a>
          <a href="#" aria-label="LinkedIn" className="p-2 rounded-md hover:bg-accent transition-colors"><Linkedin className="size-5"/></a>
          <a href="mailto:umang@example.com" aria-label="Email" className="p-2 rounded-md hover:bg-accent transition-colors"><Mail className="size-5"/></a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
