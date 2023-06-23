import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "Advent Share Ministries",
    position: "Full Stack Developer",
    time: "2023 - Present",
    location: "Remote",
    description:
      "I help redesign and build Adventshare.org. Created a more user friendly navigation decreasing the time to find project information and donation methods. Streamlined the addition and changing of content for editors using NextJS.",
    tech: ["NextJS", "TypeScript", "Tailwind", "Git", "GitHub", "Prisma"],
  },
];
