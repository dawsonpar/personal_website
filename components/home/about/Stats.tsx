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
            <span className="chip">JavaScript</span>
            <span className="chip">TypeScript</span>
            <span className="chip">React</span>
            <span className="chip">NextJS</span>
            <span className="chip">NodeJS</span>
            <span className="chip">SCSS</span>
            <span className="chip">TailwindCSS</span>
            <span className="chip">HTML</span>
            <span className="chip">CSS</span>
            <span className="chip">Python</span>
            <span className="chip">SQL</span>
            <span className="chip">MongoDB</span>
            <span className="chip">AWS Amplify</span>
            <span className="chip">AWS Route 53</span>
            <span className="chip">Git</span>
            <span className="chip">GitHub</span>
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
            <span className="chip">Vercel</span>
            <span className="chip">Prisma</span>
            <span className="chip">mySQL</span>
            <span className="chip">Raspberry Pi</span>
            <span className="chip">Bash</span>
            <span className="chip">PyTorch</span>
            <span className="chip">TensorFlow</span>
            <span className="chip">Unreal Engine</span>
            <span className="chip">Java</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
