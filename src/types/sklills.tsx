const skillLabels = {
  AndroidStudio: "Android Studio",
  Figma: "Figma",
  Git: "Git",
  GitHub: "GitHub",
  Java: "Java",
  NextJs: "Next.js",
  React: "React",
  Tailwind: "Tailwind CSS",
  TypeScript: "TypeScript",
  Vite: "Vite",
  ReactNative: "React Native",
  Kotlin: "Kotlin",
  FireBase: "Firebase",
  PhotoShop: "Photoshop",
  Dart: "Dart",
} as const;

export type SkillName = keyof typeof skillLabels;

const frontendSkills = new Set<SkillName>([
  "NextJs",
  "React",
  "Tailwind",
  "TypeScript",
  "Vite",
  "ReactNative",
  "Java",
  "Kotlin",
]);

const backendSkills = new Set<SkillName>(["FireBase"]);

function getSkillBadgeClass(name: SkillName) {
  if (frontendSkills.has(name)) {
    return "border-green-400/40 bg-green-500/15 text-green-200";
  }

  if (backendSkills.has(name)) {
    return "border-red-400/40 bg-red-500/15 text-red-200";
  }

  return "border-white/25 bg-white/10 text-[#D8D8D8]";
}

interface SkillsProps {
  names?: SkillName[];
}

function Skills({ names = [] }: SkillsProps) {
  return (
    <div className="flex gap-4 flex-wrap justify-center mt-[37px]">
      {names.map((name) => (
        <span
          key={name}
          className={`inline-flex min-h-[38px] items-center justify-center border px-[16px] py-[8px] text-[15px] font-medium ${getSkillBadgeClass(name)}`}
        >
          {skillLabels[name]}
        </span>
      ))}
    </div>
  );
}

export default Skills;
