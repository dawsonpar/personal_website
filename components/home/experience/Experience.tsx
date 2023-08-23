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
    location: "Remote, Texas",
    description: `Built dynamic UI routes and components for reusability across the website's pages. Created and implemented SSG componenets that improved page rendering. Migrated the hosting to AWS to handle scalability and view analytics. Current DNS doesn't point to AWS hosting so here's the temporary link https://master.d3tgctb81d9jd4.amplifyapp.com`,
    tech: ["NextJS", "TypeScript", "Tailwind", "Git", "GitHub", "AWS Amplify"],
  },
];
