import styles from "./stats.module.scss";
import { AiFillCode, AiFillSmile } from "react-icons/ai";
import { Reveal } from "@/components/utils/Reveal";

export const Stats = () => {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>Use at work</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">TypeScript</span>
            <span className="chip">React</span>
            <span className="chip">NextJS</span>
            <span className="chip">NodeJS</span>
            <span className="chip">SCSS</span>
            <span className="chip">TailwindCSS</span>
            <span className="chip">Git</span>
            <span className="chip">GitHub Actions</span>
            <span className="chip">Teraform</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillSmile size="2.4rem" color="var(--brand)" />
            <span>Use for fun</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">TypeScript</span>
            <span className="chip">React</span>
            <span className="chip">NextJS</span>
            <span className="chip">NodeJS</span>
            <span className="chip">Vercel</span>
            <span className="chip">Prisma</span>
            <span className="chip">mySQL</span>
            <span className="chip">Bash</span>
            <span className="chip">Python</span>
            <span className="chip">TensorFlow</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
