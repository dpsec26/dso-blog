import styles from './hero.module.css';

export default function Hero() {
  return (
    <section id="about" className={styles.heroSection}>
      <div className={`container ${styles.heroContent}`}>
        <div className={styles.heroHeader}>
          <p className={styles.intro}>Hey there. 👋 I am</p>
          <h1>Daniel Pagel</h1>
          <h3>Software Developer</h3>
        </div>

        <p className={styles.description}>
          Publishing personal information on the internet can expose you to serious risks that are often difficult to reverse.
          Once information such as your home address, phone number, financial details, or private photos is shared online,
          it can be copied, stored, and redistributed without your control. This can lead to identity theft, financial fraud,
          harassment, stalking, or even physical danger. Additionally, digital content can remain accessible indefinitely,
          potentially affecting your reputation, relationships, and future opportunities such as employment or education.
          Protecting your personal information is therefore essential for maintaining your privacy, security, and long-term
          well-being in an increasingly connected world.
        </p>

        <button
          className={`portfolioButtonLight ${styles.heroButton}`}
          onClick={() =>
            document.getElementById('contact')?.scrollIntoView({
              behavior: 'smooth',
            })
          }
        >
          Contact me
        </button>
      </div>
    </section>
  );
}
