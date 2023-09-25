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
    title: "Andrews University",
    position: "Data Asset Manager",
    time: "September 2023 - Present",
    location: "Berrien Springs, Michigan",
    description:
      "Streamlining the conversion of raw photos to DNG from the communication department's Google drive. Currently working on automating the pushing of finished assets into our database and content management system.",
    tech: ["Python", "Bash", "Google APIs", "Adobe DNG"],
  },
  {
    title: "Advent Share Ministries",
    position: "Full Stack Developer",
    time: "June 2023 - September 2023",
    location: "Edinburg, Texas",
    description: `Built dynamic UI routes and components for reusability across the website's pages. Created and implemented SSG componenets that improved page rendering. Current DNS doesn't point to AWS hosting so here's the temporary link https://master.d3tgctb81d9jd4.amplifyapp.com`,
    tech: ["NextJS", "TypeScript", "Tailwind", "Git", "GitHub", "AWS Amplify"],
  },
];
