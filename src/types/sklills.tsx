import androidStudioLogo from "../assets/logos/AndroidStudio.png";
import figmaLogo from "../assets/logos/Figma.svg";
import gitLogo from "../assets/logos/git.svg";
import githubLogo from "../assets/logos/GitHub.svg";
import javaLogo from "../assets/logos/Java.svg";
import nextJsLogo from "../assets/logos/NextJs.png";
import reactLogo from "../assets/logos/react.svg";
import tailwindLogo from "../assets/logos/Tailwind.png";
import typeScriptLogo from "../assets/logos/TypeScript.png";
import viteLogo from "../assets/logos/Vite.png";
import reactNativeLogo from "../assets/logos/react_native.png";
import kotlinLogo from "../assets/logos/Kotlin.png";
import fireBaseLogo from "../assets/logos/FireBase.png";
import photoShopLogo from "../assets/logos/PhotoShop.png";

const skillLogos = {
  AndroidStudio: androidStudioLogo,
  Figma: figmaLogo,
  Git: gitLogo,
  GitHub: githubLogo,
  Java: javaLogo,
  NextJs: nextJsLogo,
  React: reactLogo,
  Tailwind: tailwindLogo,
  TypeScript: typeScriptLogo,
  Vite: viteLogo,
  ReactNative: reactNativeLogo,
  Kotlin: kotlinLogo,
FireBase: fireBaseLogo,
PhotoShop: photoShopLogo
};

export type SkillName = keyof typeof skillLogos;

interface SkillsProps {
  names?: SkillName[];
}

function Skills({ names = [] }: SkillsProps) {
  return (
    <div className="flex gap-4 flex-wrap justify-center mt-[37px]">
      {names.map((name) => (
        <img
          key={name}
          src={skillLogos[name]}
          alt={name}
          title={name}
          className="w-[40px] h-[40px] object-contain"
        />
      ))}
    </div>
  );
}

export default Skills;
