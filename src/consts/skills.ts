type SkillCategory =
  | "frontend"
  | "backend"
  | "database"
  | "devops"
  | "tool"
  | "blockchain";

const skills: Record<SkillCategory, string[]> = {
  frontend: ["js", "ts", "vue", "nuxt", "tailwind", "bootstrap"],
  backend: ["node", "express", "nest"],
  database: ["postgresql", "mongo"],
  tool: ["git", "github"],
  devops: ["docker", "linux", "nginx", "git", "github", "cicd"],
  blockchain: ["cardano", "hydra"],
};

export default skills;
