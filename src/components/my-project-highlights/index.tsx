import React, { useState } from 'react';
import styles from './my-project-highlights.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';

type Project = {
  id: string;
  listTitle: string;
  title: string;
  description: string;
  skills: { name: string; icon: string }[];
  links: { docs: string; github: string };
  image: string;
};

const projects: Project[] = [
  {
    id: 'baby-tools',
    listTitle: 'Baby Tools',
    title: 'Project Baby Tools',
    description:
      'E-Commerce website for baby products with a focus on security and scalability. Developed using HTML, Python, and Docker.',
    skills: [
      { name: 'HTML', icon: '/img/portfolio/cards/html.svg' },
      { name: 'Python', icon: '/img/portfolio/cards/python.svg' },
      { name: 'Docker', icon: '/img/portfolio/cards/docker.svg' },
    ],
    image: '/img/portfolio/projects/babytools.svg',
    links: {
      docs: '/docs/projects/baby-tools-world',
      github: 'https://github.com/dpsec26/baby-tools-world',
    },
  },
  {
    id: 'trucksigns',
    listTitle: 'Truck Signs API',
    title: 'Project Truck Signs API',
    description:
      'REST API for logistics signage management with authentication and structured data handling.',
    skills: [
      { name: 'Python', icon: '/img/portfolio/cards/python.svg' },
      { name: 'Docker', icon: '/img/portfolio/cards/docker.svg' },
      { name: 'YAML', icon: '/img/portfolio/cards/yaml.svg' },
    ],
    image: '/img/portfolio/projects/trucksigns.svg',
    links: {
      docs: '/docs/projects/truck-signs-api',
      github: 'https://github.com/dpsec26/truck_signs_api',
    },
  },
  {
    id: 'juice-shop',
    listTitle: 'Juice Shop Meister',
    title: 'Project Juice Shop Meister',
    description:
      'Security-focused project using OWASP Juice Shop. Explored vulnerabilities and mitigation strategies.',
    skills: [
      { name: 'HTML', icon: '/img/portfolio/cards/html.svg' },
      { name: 'Python', icon: '/img/portfolio/cards/python.svg' },
      { name: 'IT-Security', icon: '/img/portfolio/cards/security.svg' },
    ],
    image: '/img/portfolio/projects/juiceshop.svg',
    links: {
      docs: '/docs/projects/Juice%20Shop%20Master',
      github: '',
    },
  },
  {
    id: 'minecraft',
    listTitle: 'Minecraft',
    title: 'Project Minecraft',
    description:
      'Custom server setup with automation, containerization, and infrastructure scripting. Developed using Docker and YAML for configuration management.',
    skills: [
      { name: 'YAML', icon: '/img/portfolio/cards/yaml.svg' },
      { name: 'Shell scripting', icon: '/img/portfolio/cards/shell-scripting.svg' },
      { name: 'Docker', icon: '/img/portfolio/cards/docker.svg' },
    ],
    image: '/img/portfolio/projects/minecraft.svg',
    links: {
      docs: '/docs/projects/minecraft-server',
      github: 'https://github.com/dpsec26/mc-server',
    },
  },
  {
    id: 'wordpress',
    listTitle: 'WordPress hosten',
    title: 'Project WordPress',
    description:
      'Containerized WordPress and MariaDB setup with environment-based configuration for a self-hosted blog.',
    skills: [
      { name: 'Docker', icon: '/img/portfolio/cards/docker.svg' },
      { name: 'YAML', icon: '/img/portfolio/cards/yaml.svg' },
      { name: 'Shell scripting', icon: '/img/portfolio/cards/shell-scripting.svg' },
    ],
    image: '/img/portfolio/projects/wordpress.svg',
    links: {
      docs: '/docs/projects/wordpress',
      github: 'https://github.com/dpsec26/wordpress',
    },
  },
];

function SkillBadge({ icon, name }: { icon: string; name: string }) {
  const src = useBaseUrl(icon);
  return <img className={styles.skillBadge} src={src} alt={name} />;
}

function ProjectImage({ image, title }: { image: string; title: string }) {
  const src = useBaseUrl(image);
  return <img className={styles.projectImage} src={src} alt={title} />;
}

function SeeMoreLink() {
  const arrowSrc = useBaseUrl('/img/portfolio/icons/arrow-right.svg');

  return (
    <Link to="/docs/projects/overview" className={styles.seeMore}>
      <img src={arrowSrc} alt="" aria-hidden="true" />
      see more projects
    </Link>
  );
}

function DesktopProjectCard({ project }: { project: Project }) {
  return (
    <div className={styles.projectCard}>
      <div className={styles.projectHeader}>
        <h3 className={styles.projectTitle}>{project.title}</h3>
        <div className={styles.miniSkills}>
          {project.skills.map((skill) => (
            <SkillBadge key={skill.name} icon={skill.icon} name={skill.name} />
          ))}
        </div>
      </div>

      <div className={styles.projectBody}>
        <ProjectImage image={project.image} title={project.title} />

        <div className={styles.projectDetails}>
          <p>{project.description}</p>

          <div className={styles.buttons}>
            {project.links?.docs && (
              <Link to={project.links.docs} className="portfolioButton">
                Documentation
              </Link>
            )}
            {project.links?.github && (
              <Link to={project.links.github} className="portfolioButtonOutline">
                GitHub
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className={styles.mobileProjectCard}>
      <h3 className={styles.mobileProjectTitle}>
        {index + 1}. {project.listTitle}
      </h3>

      <div className={styles.mobileMiniSkills}>
        {project.skills.map((skill) => (
          <SkillBadge key={skill.name} icon={skill.icon} name={skill.name} />
        ))}
      </div>

      <ProjectImage image={project.image} title={project.title} />

      <p className={styles.mobileDescription}>{project.description}</p>

      <div className={styles.mobileButtons}>
        {project.links?.docs && (
          <Link to={project.links.docs} className="portfolioButton">
            Documentation
          </Link>
        )}
        {project.links?.github && (
          <Link to={project.links.github} className="portfolioButtonOutline">
            GitHub
          </Link>
        )}
      </div>
    </article>
  );
}

export default function ProjectsPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex];

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>My project highlights</h2>

        <div className={styles.desktopLayout}>
          <div className={styles.sidebar}>
            <ul>
              {projects.map((project, index) => (
                <li
                  key={project.id}
                  className={index === activeIndex ? styles.active : undefined}
                  onClick={() => setActiveIndex(index)}
                >
                  {index + 1}. {project.listTitle}
                </li>
              ))}
            </ul>

            <SeeMoreLink />
          </div>

          <div className={styles.content}>
            <DesktopProjectCard project={activeProject} />
          </div>
        </div>

        <div className={styles.mobileLayout}>
          {projects.map((project, index) => (
            <MobileProjectCard key={project.id} project={project} index={index} />
          ))}

          <div className={styles.viewAllProjectsMobile}>
            <SeeMoreLink />
          </div>
        </div>
      </div>
    </section>
  );
}
