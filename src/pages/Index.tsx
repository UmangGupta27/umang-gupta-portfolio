import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import SkillBadge from "@/components/site/SkillBadge";
import ProjectCard from "@/components/site/ProjectCard";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin } from "lucide-react";

import lunar from "@/assets/projects/lunar.jpg";
import parkinsons from "@/assets/projects/parkinsons.jpg";
import crop from "@/assets/projects/crop.jpg";
import compilers from "@/assets/projects/compilers.jpg";

const Index = () => {
  const { toast } = useToast();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({ title: "Thanks!", description: "Your message has been sent." });
    (e.currentTarget as HTMLFormElement).reset();
  };

  const skills = [
    { name: "Python", level: 90 },
    { name: "C++", level: 80 },
    { name: "TensorFlow", level: 85 },
    { name: "PyTorch", level: 80 },
    { name: "MERN", level: 80 },
    { name: "PHP", level: 70 },
    { name: "Docker", level: 65 },
    { name: "SQL", level: 75 },
  ];

  return (
    <div>
      <Header />
      <main id="home" className="container mx-auto">
        {/* Hero */}
        <section className="pt-16 md:pt-24 pb-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-heading leading-tight">
                Umang Gupta
                <span className="block heading-gradient">AI/ML Enthusiast & Full-Stack Developer</span>
              </h1>
              <p className="text-muted-foreground max-w-xl">
                Building intelligent solutions with AI, Deep Learning & Modern Web Technologies
              </p>
              <div className="flex gap-3">
                <Button variant="hero" size="xl" asChild>
                  <a href="#projects">View Projects</a>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <a href="/resume.pdf" download>Download Resume</a>
                </Button>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="relative size-48 md:size-64 rounded-full bg-secondary border border-border flex items-center justify-center glow-ring-strong">
                <div className="size-40 md:size-52 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <span className="text-3xl md:text-4xl font-heading">UG</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-16">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <article>
              <h2 className="text-3xl font-heading mb-4">About</h2>
              <p className="text-muted-foreground mb-4">
                B.Tech in Computer Science Engineering at Graphic Era (Deemed to be University), graduating 2026. Passionate about AI, Machine Learning, and building scalable web applications.
              </p>
              <ul className="space-y-2 text-sm">
                <li>• Research Internship: Multimodal Parkinson’s Detection project</li>
                <li>• Hackathons & achievements: Smart India Hackathon finalist (team projects below)</li>
              </ul>
            </article>
            <aside className="space-y-4">
              <div className="p-4 rounded-lg border border-border bg-card/50">
                <h3 className="font-heading mb-2">Education</h3>
                <ol className="relative border-s border-border ps-4 space-y-4">
                  <li>
                    <div className="absolute -start-1.5 mt-1.5 size-3 rounded-full bg-primary" />
                    <p className="text-sm">X (CBSE)</p>
                  </li>
                  <li>
                    <div className="absolute -start-1.5 mt-1.5 size-3 rounded-full bg-primary" />
                    <p className="text-sm">XII (CBSE)</p>
                  </li>
                  <li>
                    <div className="absolute -start-1.5 mt-1.5 size-3 rounded-full bg-primary" />
                    <p className="text-sm">B.Tech CSE — Graphic Era (Deemed to be University), 2022–2026</p>
                  </li>
                </ol>
              </div>
            </aside>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-16">
          <h2 className="text-3xl font-heading mb-6">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((s) => (
              <SkillBadge key={s.name} name={s.name} level={s.level} />
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-16">
          <h2 className="text-3xl font-heading mb-6">Services</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-border bg-card/60 hover:shadow-glow transition-shadow">
              <h3 className="font-heading text-xl mb-2">Full-Stack Development</h3>
              <p className="text-muted-foreground text-sm">MERN, REST APIs, authentication, deployments and performance-focused builds.</p>
            </div>
            <div className="p-6 rounded-xl border border-border bg-card/60 hover:shadow-glow transition-shadow">
              <h3 className="font-heading text-xl mb-2">UI Design</h3>
              <p className="text-muted-foreground text-sm">Designing clean and modern interfaces with Figma & Canva.</p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-16">
          <h2 className="text-3xl font-heading mb-6">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
              title="Lunar Crater Image Enhancement"
              description="Smart India Hackathon entry enhancing lunar crater imagery using AI-based denoising and contrast techniques."
              img={lunar}
              tech={["Python", "OpenCV", "Deep Learning"]}
              github="#"
            />
            <ProjectCard
              title="Parkinson’s Disease Detection"
              description="Deep Learning model leveraging multimodal data for early Parkinson’s detection."
              img={parkinsons}
              tech={["TensorFlow", "CNN", "Signal Processing"]}
              github="#"
            />
            <ProjectCard
              title="Crop Recommendation System"
              description="AI system recommending optimal crops based on soil and climate data."
              img={crop}
              tech={["MERN", "ML", "Data Viz"]}
              github="#"
            />
            <ProjectCard
              title="Compiler & OS Tools"
              description="CPU Scheduling Visualizer and SyCompiler Pro for educational OS & Compiler concepts."
              img={compilers}
              tech={["C++", "React", "Algorithms"]}
              github="#"
            />
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-16">
          <h2 className="text-3xl font-heading mb-6">Contact</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <form onSubmit={onSubmit} className="space-y-4">
              <Input placeholder="Your name" required />
              <Input type="email" placeholder="Email" required />
              <Textarea placeholder="Message" required className="min-h-32" />
              <Button variant="hero" size="lg" type="submit">Send message</Button>
            </form>
            <div className="space-y-3 text-sm">
              <a href="tel:+910000000000" className="flex items-center gap-3 hover:text-primary"><Phone/> +91 00000 00000</a>
              <a href="mailto:umang@example.com" className="flex items-center gap-3 hover:text-primary"><Mail/> umang@example.com</a>
              <a href="#" className="flex items-center gap-3 hover:text-primary"><Linkedin/> LinkedIn</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
