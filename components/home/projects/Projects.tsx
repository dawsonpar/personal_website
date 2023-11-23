import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Twither",
    imgSrc: "project-imgs/twither-img-lg.png",
    code: "https://github.com/dawsonpar/twither",
    projectLink: "https://twither.vercel.app/",
    tech: ["NextJS", "Mongo", "Prisma", "NextAuth", "Vercel"],
    description:
      "A responsive, fullstack Twitter clone that allows users to have the same experience sharing their thoughts as tweets.",
    modalContent: (
      <>
        <p>
          Twither is a fullstack application that supports a majority of the
          same features as Twitter.
        </p>
        <p>
          Using NextAuth, users can register for an account and login to use the
          app. Users can tweet, follow other users, like, comment, and upload
          images for their profiles.
        </p>
        <p>
          The layout of the app is responsive and shows the appropriate
          components depending on whether the user's device is on mobile or
          desktop.
        </p>
        <p>
          All data is updated in real time using Prisma and MongoDB and
          sensitive information such as passwords are hashed.
        </p>
        <p>
          Finally, the app is deployed on Vercel and any updated are done by
          pushing to the Github repository associated with the deployment.
        </p>
      </>
    ),
  },
  {
    title: "Rate My Dorm Meal",
    imgSrc: "project-imgs/rmdm-project.png",
    code: "https://github.com/dawsonpar/RateMyDormMeal",
    projectLink: "https://main--ratemydormmeal.netlify.app/",
    tech: ["Supabase", "React", "Vite", "Netlify"],
    description:
      "If Yelp and RateMyProfessor had a baby. Share your delicious dorm meals with the rest of the world.",
    modalContent: (
      <>
        <p>
          For the 2023 fall semester I joined the Intermediate Web Development
          class at CodePath and this was my final project, RateMyDormMeal.
        </p>
        <p>
          Users can make an account and create posts about their most recent
          meals. Posts are shared across the whole website and users can like
          and create comments under each post.
        </p>
        <p>
          The web app is responsive and rich with features such as user
          authentication and image uploading using Supabase's database and
          storage.
        </p>
        <p></p>
      </>
    ),
  },
  {
    title: "Digital Scavenger Hunt",
    imgSrc: "project-imgs/scavenger-img.png",
    code: "https://github.com/dawsonpar/dsh-vite-amplify",
    projectLink: "https://dsh-vite-amplify.vercel.app/",
    tech: ["React", "Vite", "MUI", "AWS Amplify"],
    description:
      "An app to host digital scavenger hunts. Originally designed to be used at Andrews University for social events.",
    modalContent: (
      <>
        <p>
          As the President of the Andrews Filipino International Association I
          wanted a new way to engage with members. So I built this digital
          scavenger hunt app as a fun way for them to win prizes and attend
          events.
        </p>
        <p>
          The idea is that, in conjunction with social events, users can enter
          secret keys and unlock special pages that contain valuable
          information.
        </p>
        <p>
          The tech stack is based on top of React using Vite and hosted on AWS
          Amplify so users have a smooth experience. However, a backup of this
          project is on Vercel because support on AWS continues to change.
        </p>
        <p>
          The app is fully responsive and uses several fundamentals of React
          such as useState, Props, and Component rendering.
        </p>
        <p></p>
      </>
    ),
  },
  {
    title: "Project Coming Soon",
    imgSrc: "project-imgs/project-coming-soon.png",
    code: "https://www.github.com",
    projectLink:
      "https://www.coursera.org/specializations/machine-learning-introduction",
    tech: ["Python", "PyTorch", "Tensor Flow"],
    description: "Working on a project that involves machine learning..",
    modalContent: (
      <>
        <p>
          As artificial intelligence becomes more popular I want to learn the
          mysteries behind the black box of machine learning.
        </p>
        <p>
          To learn more I'm taking this course on Coursera to learn more about
          how machine learning works. I will built a project that showcases what
          I've learned and hopefully I can share it here soon.
        </p>
      </>
    ),
  },
];
