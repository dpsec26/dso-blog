import React, { useState } from "react";
import styles from './my-project-highlights.module.css';
import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from '@docusaurus/Link';

export default function ProjectsPage() {
  const projects = [
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

  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex];

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>My project highlights</h2>
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
          <div className={styles.projectCard}>
            <h3 className={styles.projectTitle}>{activeProject.title}</h3>
            <div className={styles.projectContent}>
              <div className={styles.projectLeft}>
                <div className={styles.miniSkills}>
                  {activeProject.skills.map((skill, i) => (
                    <div key={i} className={styles.miniSkillCard}>
                      <img src={useBaseUrl(skill.icon)} alt={skill.name} />
                      {skill.name}
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.projectRight}>
                <p>{activeProject.description}</p>

                <div className={styles.buttons}>
                  {activeProject.links?.docs && (
                    <Link to={activeProject.links.docs} className="portfolioButton">
                      Documentation
                    </Link>
                  )}
                  {activeProject.links?.github && (
                    <Link to={activeProject.links.github} className="portfolioButton">
                      GitHub
                    </Link>
                  )}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}