import styles from './contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className="container contactGrid">
        
        <div>
          <h2>Contact me</h2>
        </div>


        <div className={styles.contactGrid}>
          <p>
            Feel free to reach out if you have an interesting opportunity or would like to collaborate. 
            I'm particularly open to remote roles and projects that offer meaningful challenges and impact. 
            You can contact me via email or explore my work on GitHub for a better sense of my experience and interests.
          </p>
          
          <div className={styles.contactOptions}>
            <p>
              <img src="/dso-blog/img/portfolio/email.png" alt="Email" />
              <a href="mailto:dpsec26@guerrillamail.de" target="_blank" rel="noopener noreferrer">dpsec26@guerrillamail.de</a>
            </p>
            <p>
              <img src="/dso-blog/img/portfolio/github.png" alt="GitHub" />
              <a href="https://github.com/dpsec26" target="_blank" rel="noopener noreferrer">dpsec26</a>
            </p>
          </div>

        </div>
      </div>

      <div
        className={styles.topButton}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <img src="/dso-blog/img/portfolio/back-to-top.png" alt="Back to Top" />
      </div>
    </section>
  );
}