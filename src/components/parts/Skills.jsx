import {
  CypressIcon,
  ExpressJs,
  FigmaIcon,
  GitIcon,
  JavascriptIcon,
  MongoDb,
  NestJs,
  NextJs,
  NodeJs,
  PostgreSql,
  Sass,
  SocketIo,
  StorybookIcon,
  Tailwindcss,
  TypescriptIcon,
} from "../icons/Index";

import { SkillBox } from "../icons/Skillbox";
import { ReactIcon } from "../icons/skills/ReactIcon";

export const Skills = () => {
  return (
    <div className="w-full bg-[#F9FAFB] flex justify-center">
      <div className="container flex flex-col gap-y-12 h-full py-24">
        <div className="flex flex-col items-center gap-4">
          <p className="tag">Skills</p>

          <div className="max-w-[576px] h-[28px] flex">
            <p className="text-center font-inter text-xl not-italic font-normal">
              The skills, tools and technologies I am really good at:
            </p>
          </div>
        </div>
        <div className="max-w-[1100px] py-4 flex flex-wrap justify-between items-center gap-8">
          <SkillBox iconComponent={<JavascriptIcon />} text={"Javascript"} />

          <SkillBox iconComponent={<TypescriptIcon />} text={"Typescript"} />

          <SkillBox iconComponent={<ReactIcon />} text={"React"} />

          <SkillBox iconComponent={<NextJs />} text={"Next.js"} />
          <SkillBox iconComponent={<NodeJs />} text={"Node.js"} />
          <SkillBox iconComponent={<ExpressJs />} text={"Express.js"} />
          <SkillBox iconComponent={<NestJs />} text={"Nest.js"} />
          <SkillBox iconComponent={<SocketIo />} text={"Socket.io"} />

          <SkillBox iconComponent={<PostgreSql />} text={"PostgreSQL"} />
          <SkillBox iconComponent={<MongoDb />} text={"MongoDB"} />
          <SkillBox iconComponent={<Sass />} text={"Sass/scss"} />
          <SkillBox iconComponent={<Tailwindcss />} text={"Tailwindcss"} />
          <SkillBox iconComponent={<FigmaIcon />} text={"Figma"} />
          <SkillBox iconComponent={<CypressIcon />} text={"Cypress"} />
          <SkillBox iconComponent={<StorybookIcon />} text={"Storybook"} />
          <SkillBox iconComponent={<GitIcon />} text={"Git"} />
        </div>
      </div>
    </div>
  );
};

//Props
//Object destructure
