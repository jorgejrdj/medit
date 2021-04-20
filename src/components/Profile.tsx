import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/Profile.module.css";

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/jorgejrdj.png" alt="birobirobiro" />
      <div>
        <strong>
          Meditações para <br /> Jorge de Souza
        </strong>

        <p>
          <img src="icons/level.svg" alt="Level" />
          Dia {level}
        </p>
      </div>
    </div>
  );
}
