import React, { useEffect, useRef, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './my-skills.module.css';

const SKILLS_PER_SLIDE = 3;

const skills = [
  { name: 'CSS', 
    icon: '/img/portfolio/css.png',
    details: ['Responsive layouts (Flexbox, Grid)', 'Animations and transitions', 'Modern UI styling and theming', 'Cross-browser compatibility']
  },
  { name: 'Docker', 
    icon: '/img/portfolio/docker.png', 
    details: ['Containerization of applications', 'Docker Compose for multi-service setups', 'Image creation and optimization', 'Development and deployment workflows'] 
  },
  { name: 'Docusaurus', 
    icon: '/img/portfolio/docusaurus.png', 
    details: ['Static site generation', 'Documentation structure and versioning', 'Custom theming and components', 'Blog and content management'] 
  },
  { name: 'CI/CD with GitHub Actions', 
    icon: '/img/portfolio/githubactions.png', 
    details: ['Automated build and test pipelines', 'Deployment workflows', 'YAML-based pipeline configuration', 'Integration with repositories and environments'] 
  },
  { name: 'Go', 
    icon: '/img/portfolio/go.png', 
    details: ['Backend service development', 'REST API design', 'Concurrency with goroutines', 'CLI tool development'] 
  },
  { name: 'HTML', 
    icon: '/img/portfolio/html5.png', 
    details: ['Semantic markup', 'Accessible web structure', 'Forms and validation', 'SEO-friendly layouts'] 
  },
  { name: 'MySQL', 
    icon: '/img/portfolio/mysql.png', 
    details: ['Database design and normalization', 'Query optimization', 'Indexing and performance tuning', 'Data modeling'] 
  },
  { name: 'PostgreSQL', 
    icon: '/img/portfolio/postgresql.png', 
    details: ['Advanced SQL queries', 'JSON and complex data types', 'Performance tuning and indexing', 'Data modeling'] 
  },
  { name: 'Python', 
    icon: '/img/portfolio/python.png', 
    details: ['Scripting and automation', 'Backend development', 'Data processing', 'Data analysis'] 
  },
  { name: 'IT-Security', 
    icon: '/img/portfolio/security.png', 
    details: ['Secure coding practices', 'Authentication and authorization', 'Basic network security concepts', 'Vulnerability awareness'] 
  },
  { name: 'Shell Scripting', 
    icon: '/img/portfolio/shellscripting.png', 
    details: ['Automation of system tasks', 'Bash scripting', 'File and process management', 'DevOps support scripts'] 
  },
  { name: 'YAML', 
    icon: '/img/portfolio/yaml.png', 
    details: ['Configuration management', 'CI/CD pipeline definitions', 'Infrastructure configuration', 'Workflow automation'] 
  },
];

function chunk<T>(items: T[], size: number): T[][] {
  return Array.from({ length: Math.ceil(items.length / size) }, (_, index) =>
    items.slice(index * size, index * size + size),
  );
}

function SkillIcon({ icon, name }: { icon: string; name: string }) {
  const src = useBaseUrl(icon);
  return <img src={src} alt={name} />;
}

const skillSlides = chunk(skills, SKILLS_PER_SLIDE);

export default function Skills() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) {
      return undefined;
    }

    const handleScroll = () => {
      const slides = Array.from(track.children) as HTMLElement[];
      if (slides.length === 0) {
        return;
      }

      const trackCenter = track.scrollLeft + track.clientWidth / 2;
      const nextIndex = slides.reduce((closestIndex, slide, index) => {
        const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
        const closestCenter =
          slides[closestIndex].offsetLeft + slides[closestIndex].offsetWidth / 2;
        return Math.abs(slideCenter - trackCenter) < Math.abs(closestCenter - trackCenter)
          ? index
          : closestIndex;
      }, 0);

      setActiveSlide(nextIndex);
    };

    handleScroll();
    track.addEventListener('scroll', handleScroll, { passive: true });
    return () => track.removeEventListener('scroll', handleScroll);
  }, []);

  const goToSlide = (index: number) => {
    const track = trackRef.current;
    const slide = track?.children[index] as HTMLElement | undefined;
    if (!track || !slide) {
      return;
    }

    track.scrollTo({ left: slide.offsetLeft, behavior: 'smooth' });
    setActiveSlide(index);
  };

  return (
    <section id="skills" className={styles.skillsSection}>
      <div className="container">
        <h2>My skills</h2>

        <div className={styles.skillsGrid}>
          {skills.map((skill, index) => (
            <div key={skill.name} className={styles.skillCard}>
              <div className={styles.cardInner}>
                <div className={styles.cardFront}>
                  <SkillIcon icon={skill.icon} name={skill.name} />
                  <p>{skill.name}</p>
                </div>

                <div className={styles.cardBack}>
                  <ul>
                    {skill.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.mobileSkills}>
          <div ref={trackRef} className={styles.mobileTrack}>
            {skillSlides.map((slide, slideIndex) => (
              <article key={slideIndex} className={styles.mobileSlide}>
                {slide.map((skill) => (
                  <div key={skill.name} className={styles.mobileSkillRow}>
                    <div className={styles.mobileSkillMeta}>
                      <SkillIcon icon={skill.icon} name={skill.name} />
                      <p>{skill.name}</p>
                    </div>

                    <ul className={styles.mobileSkillDetails}>
                      {skill.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </article>
            ))}
          </div>

          <div className={styles.pagination} role="tablist" aria-label="Skill slides">
            {skillSlides.map((_, index) => (
              <button
                key={index}
                type="button"
                role="tab"
                aria-label={`Show skills slide ${index + 1}`}
                aria-selected={index === activeSlide}
                className={`${styles.paginationDot} ${index === activeSlide ? styles.paginationDotActive : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
