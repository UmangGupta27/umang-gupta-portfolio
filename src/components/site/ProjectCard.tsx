import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  img: string;
  tech: string[];
  github?: string;
}

const ProjectCard = ({ title, description, img, tech, github }: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden bg-card/60 border-border hover:shadow-glow transition-shadow">
      <img src={img} alt={`${title} preview`} className="w-full h-48 object-cover" loading="lazy" />
      <CardContent className="p-5 space-y-3">
        <h3 className="font-heading text-lg">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
        <div className="flex flex-wrap gap-2 pt-1">
          {tech.map(t => (
            <span key={t} className="text-xs px-2 py-1 rounded-full bg-secondary/60 border border-border">{t}</span>
          ))}
        </div>
        {github && (
          <div className="pt-2">
            <Button variant="ghost" asChild>
              <a href={github} target="_blank" rel="noreferrer"><Github className="mr-2"/>View on GitHub</a>
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
