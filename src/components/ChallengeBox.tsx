import { useContext } from "react";
import styles from "../styles/components/ChallengeBox.module.css";
import { ChallengesContext } from "../contexts/ChallengesContext";
import { CountdownContext } from "../contexts/CountdownContext";

export function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(
    ChallengesContext
  );
  const { resetCountdown } = useContext(CountdownContext);

  function handleChallengeSucceeded() {
    completeChallenge();
    resetCountdown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }

  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Meditação {activeChallenge.amount} </header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="" />
            <strong>Nova Meditação</strong>
            <p>{activeChallenge.description}</p>
          </main>
          <footer>
            <button
              className={styles.challengeFailedButton}
              type="button"
              onClick={handleChallengeFailed}
            >
              Falhei
            </button>
            <button
              className={styles.challengeSucceededButton}
              type="button"
              onClick={handleChallengeSucceeded}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>
            Finalize o tempo de tédio <br /> para receber uma meditação
          </strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Para avançar de nível <br /> complete uma meditação
          </p>
        </div>
      )}
    </div>
  );
}
