import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './contact.module.css';

export default function Contact() {
  const mailIcon = useBaseUrl('/img/portfolio/icons/mail.svg');
  const githubIcon = useBaseUrl('/img/portfolio/github.png');
  const toTopIcon = useBaseUrl('/img/portfolio/icons/to-top.svg');

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={`container ${styles.contactGrid}`}>
        <h2>Contact me</h2>

        <p className={styles.contactText}>
          Feel free to reach out if you have an interesting opportunity or would like to collaborate.
          I'm particularly open to remote roles and projects that offer meaningful challenges and impact.
          You can contact me via email or explore my work on GitHub for a better sense of my experience and interests.
        </p>

        <div className={styles.contactOptions}>
          <p>
            <img src={mailIcon} alt="" aria-hidden="true" />
            <a href="mailto:dpsec26@guerrillamail.de" target="_blank" rel="noopener noreferrer">
              dpsec26@guerrillamail.de
            </a>
          </p>
        </div>
      </div>

      <button
        type="button"
        className={styles.topButton}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        <img src={toTopIcon} alt="" />
      </button>
    </section>
  );
}
