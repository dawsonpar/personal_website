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
    time: "June 2023 - Present",
    location: "Remote",
    description:
      "Built dynamic UI routes and components for reusability across the website's pages. Created and implemented SSG componenets that improved page rendering by 70%. Migrated the hosting to AWS to handle scalability and view analytics.",
    tech: ["NextJS", "TypeScript", "Tailwind", "Git", "GitHub", "AWS Amplify"],
  },
];
