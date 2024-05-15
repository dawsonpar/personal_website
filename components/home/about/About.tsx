import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              Hey! I&apos;m Dawson, if you haven&apos;t already gathered that by
              now. I started my coding journey as a computer science student at
              Andrews University. I specialize in full stack development,
              primarily React, Next.JS, and AWS, but love building with whatever
              tools are right for the job.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I currently work as a software engineer intern at Warner Bros.
              Discovery. I&apos;m building an internal tool that is used to
              enable easier communication between different teams inside the
              organization.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              Outside of work, I love to play volleyball and film videos with my
              friends. These are my favorite passions that allow me to stay
              healthy and have a creative outlet 🎥
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              Currently I&apos;m focused on making the most out of my internship
              and learning as much as I can from everyone around me. If
              you&apos;d like to chat, exchange stories, or make a new friend,
              let&apos;s connect 🔗
            </p>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
