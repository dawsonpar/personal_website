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
              primarily NextJS and MongoDB, but love building with whatever
              tools are right for the job.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I currently work for Advent Share Ministries as we're working to
              redesign their website. Additionally, I&apos;ve recently become
              interested in machine learning and am learning how to use tools
              like PyTorch and TensorFlow.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              Outside of work, I love to play volleyball and improve my
              videography. Any given Sunday you can catch me playing indoors or
              on the beach 🏐 Or you might see me filming something with my
              friends.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I&apos;m actively looking for new positions where I can
              collaborate through code and learn what I don't know. If you think
              you&apos;ve got an opening where I might fit, let&apos;s connect
              🔗
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
