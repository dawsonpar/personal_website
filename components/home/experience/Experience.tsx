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
    title: "Warner Bros. Discovery",
    position: "Software Engineer Intern",
    time: "June 2024 - August 2024",
    location: "Bellevue, Washington",
    description: "More information coming soon.",
    tech: ["Typescript", "React", "NodeJS", "Github Actions"],
  },
  {
    title: "Andrews University",
    position: "Data Asset Manager",
    time: "September 2023 - May 2024",
    location: "Berrien Springs, Michigan",
    description:
      "Automated the conversion of raw photos to DNG from the communication department's Google drive. Assisted in development of an internal tool used for managing camera equipment and returning metrics on when taken or returned.",
    tech: ["Python", "Bash", "Google APIs", "Adobe DNG"],
  },
  {
    title: "Advent Share Ministries",
    position: "Full Stack Developer",
    time: "June 2023 - September 2023",
    location: "Edinburg, Texas",
    description: `Built dynamic UI routes and components for reusability across the website's pages. Created and implemented SSG componenets that improved page rendering.`,
    tech: ["NextJS", "TypeScript", "Tailwind", "Git", "GitHub", "AWS Amplify"],
  },
];
