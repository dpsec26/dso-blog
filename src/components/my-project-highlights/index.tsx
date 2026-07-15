import React, { useState } from "react";
import styles from './my-project-highlights.module.css';
import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from '@docusaurus/Link';

type Project = {
  id: string;
  title: string;
  description: string;
  skills: { name: string; icon: string }[];
  links: { docs: string; github: string };
  image?: string;
};

const projects: Project[] = [
  {
    id: "baby-tools",
    title: "Baby Tools World",
    description:
      "E-Commerce website for baby products with a focus on security and scalability. Developed using HTML, Python, and Docker.",
    skills: [
      { name: "HTML", icon: "/img/portfolio/html5.png" },
      { name: "Python", icon: "/img/portfolio/python.png" },
      { name: "PostgreSQL", icon: "/img/portfolio/postgresql.png" },
    ],
    links: { docs: "/docs/projects/baby-tools-world", github: "https://github.com/dpsec26/baby-tools-world" },
  },
  {
    id: "minecraft",
    title: "Minecraft Server",
    description:
      "Custom server setup with automation, containerization, and infrastructure scripting. Developed using Docker and YAML for configuration management.",
    skills: [
      { name: "YAML", icon: "/img/portfolio/yaml.png" },
      { name: "Shell scripting", icon: "/img/portfolio/shellscripting.png" },
      { name: "Docker", icon: "/img/portfolio/docker.png" },
    ],
    links: { docs: "/docs/projects/minecraft-server", github: "https://github.com/dpsec26/mc-server" },
  },
  {
    id: "trucksigns",
    title: "Truck Signs API",
    description:
      "REST API for logistics signage management with authentication and structured data handling.",
    skills: [
      { name: "Python", icon: "/img/portfolio/python.png" },
      { name: "PostgreSQL", icon: "/img/portfolio/postgresql.png" },
      { name: "Docker", icon: "/img/portfolio/docker.png" },
    ],
    links: { docs: "/docs/projects/truck-signs-api", github: "https://github.com/dpsec26/truck_signs_api" },
  },
  {
    id: "juice-shop",
    title: "Juice Shop Master",
    description:
      "Security-focused project using OWASP Juice Shop. Explored vulnerabilities and mitigation strategies.",
    skills: [
      { name: "HTML", icon: "/img/portfolio/html5.png" },
      { name: "Python", icon: "/img/portfolio/python.png" },
      { name: "IT-Security", icon: "/img/portfolio/security.png" },
    ],
    links: { docs: "/docs/projects/Juice%20Shop%20Master", github: "" },
  },
];

function SkillIcon({ icon, name }: { icon: string; name: string }) {
  const src = useBaseUrl(icon);
  return <img src={src} alt={name} />;
}

function ProjectImage({ image, title }: { image: string; title: string }) {
  const src = useBaseUrl(image);
  return <img className={styles.projectImage} src={src} alt={title} />;
}

function DesktopProjectCard({ project }: { project: Project }) {
  return (
    <div className={styles.projectCard}>
      <h3 className={styles.projectTitle}>{project.title}</h3>
      <div className={styles.projectContent}>
        <div className={styles.projectLeft}>
          <div className={styles.miniSkills}>
            {project.skills.map((skill) => (
              <div key={skill.name} className={styles.miniSkillCard}>
                <SkillIcon icon={skill.icon} name={skill.name} />
                {skill.name}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.projectRight}>
          <p>{project.description}</p>

          <div className={styles.buttons}>
            {project.links?.docs && (
              <Link to={project.links.docs} className="portfolioButton">
                Documentation
              </Link>
            )}
            {project.links?.github && (
              <Link to={project.links.github} className="portfolioButton">
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
        {index + 1}.{project.title}
      </h3>

      <div className={styles.mobileMiniSkills}>
        {project.skills.map((skill) => (
          <div key={skill.name} className={styles.miniSkillCard}>
            <SkillIcon icon={skill.icon} name={skill.name} />
            {skill.name}
          </div>
        ))}
      </div>

      {project.image && (
        <ProjectImage image={project.image} title={project.title} />
      )}

      <p className={styles.mobileDescription}>{project.description}</p>

      <div className={styles.mobileButtons}>
        {project.links?.docs && (
          <Link to={project.links.docs} className="portfolioButton">
            Documentation
          </Link>
        )}
        {project.links?.github && (
          <Link to={project.links.github} className="portfolioButton">
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
                  className={index === activeIndex ? styles.active : ""}
                  onClick={() => setActiveIndex(index)}
                >
                  {index + 1}. {project.title}
                </li>
              ))}
            </ul>

            <div className={styles.viewAllProjects}>
              <Link to="/docs/projects/overview" className="portfolioButton">
                View all projects
              </Link>
            </div>
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
            <Link to="/docs/projects/overview" className="portfolioButton">
              View all projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
