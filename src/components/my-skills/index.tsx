import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './my-skills.module.css';

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

export default function Skills() {
  return (
    <section id="skills" className={styles.skillsSection}>
      <div className="container">
        <h2>My skills</h2>

        <div className={styles.skillsGrid}>
        {skills.map((s, i) => (
          <div key={i} className={styles.skillCard}>
            
            <div className={styles.cardInner}>
              
              <div className={styles.cardFront}>
                <img src={useBaseUrl(s.icon)} alt={s.name} />
                <p>{s.name}</p>
              </div>

              <div className={styles.cardBack}>
                <ul>
                  {s.details.map((d, idx) => (
                    <li key={idx}>{d}</li>
                  ))}
                </ul>
              </div>

            </div>

          </div>
        ))}
        </div>
      </div>
    </section>
  );
}