import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface SkillBadgeProps {
  name: string;
  level: number; // 0-100
}

const SkillBadge = ({ name, level }: SkillBadgeProps) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="px-4 py-2 rounded-full bg-secondary/60 hover:bg-secondary transition-colors border border-border cursor-default">
          <span className="text-sm">{name}</span>
        </div>
      </TooltipTrigger>
      <TooltipContent>
        <p className="text-xs">Proficiency: {level}%</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default SkillBadge;
