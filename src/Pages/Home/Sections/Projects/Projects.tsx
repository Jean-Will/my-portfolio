import { useMemo, useState } from "react";
import "./Projects.css";
import telhasCleanImage from '../../../../assets/Images/L800x800.jpg'; // Imagem do projeto Telhas Clean



type ProjectCategory = "Todos" | "Clientes" | "Estudos";

interface Project {
  id: number;
  title: string;
  description: string;
  category: Exclude<ProjectCategory, "Todos">;
  technologies: string[];
  year: string;
  status: "Completed" | "In development";
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Landing Page Empresarial",
    description:
      "An institutional website developed to showcase a company's services, unique features, and contact information.",
    category: "Clientes",
    technologies: ["React", "TypeScript", "DNS", "Hospedagem"," SEO","SSL"],
    year: "2026",
    status: "Completed",
    image: telhasCleanImage, // Usando a imagem importada
    liveUrl: "https://telhasclean.pt",
  } ,
 

];   

function Projects() {
  const [activeCategory, setActiveCategory] =
    useState<ProjectCategory>("Todos");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "Todos") {
      return projects;
    }

    return projects.filter(
      (project) => project.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <main className="projects-page">
      <section className="projects-hero">
        <div className="projects-hero__content">
          <span className="projects-eyebrow">My Portfolio</span>

          <h1>
            Projects I've developed 
            <span> throughout my learning journey.</span>
          </h1>

          <p>
            Check out some of the projects I've developed for clients, as well as
            experiments I've created during my learning journey.
          </p>

          <a className="projects-hero__button" href="#projects-list">
            View projects
            <span aria-hidden="true">↓</span>
          </a>
        </div>

        <div className="projects-hero__decoration">
          <div className="code-window">
            <div className="code-window__header">
              <span />
              <span />
              <span />
            </div>

            <div className="code-window__body">
              <code>
                <span className="code-purple">const</span>{" "}
                <span className="code-blue">developer</span> = {"{"}
                <br />
                &nbsp;&nbsp;name:{" "}
                <span className="code-green">"Jean Will"</span>,
                <br />
                &nbsp;&nbsp;focus:{" "}
                <span className="code-green">"Software Developer"</span>,
                <br />
                &nbsp;&nbsp;learning:{" "}
                <span className="code-green">true</span>
                <br />
                {"}"};
              </code>
            </div>
          </div>
        </div>
      </section>

      <section className="projects-section" id="projects-list">
        <div className="projects-section__header">
          <div>
            <span className="projects-eyebrow">Portfólio</span>
            <h2>Projetos </h2>
          </div>

          <p>
            Check out my client projects and what I've learned over the years.
          </p>
        </div>

        <div className="projects-filters" aria-label="Filtros de projetos">
          {(["Todos", "Clientes", "Estudos"] as ProjectCategory[]).map(
            (category) => (
              <button
                key={category}
                type="button"
                className={`filter-button ${
                  activeCategory === category ? "filter-button--active" : ""
                }`}
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
              >
                {category}
              </button>
            )
          )}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article className="project-card" key={project.id}>
              <div className="project-card__image-wrapper">
                <img
                  className="project-card__image"
                  src={project.image}
                  alt={`Imagem do projeto ${project.title}`}
                />

                <span className="project-card__category">
                  {project.category}
                </span>
              </div>

              <div className="project-card__content">
                <div className="project-card__meta">
                  <span>{project.year}</span>
                  <span
                    className={`project-status ${
                      project.status === "Completed"
                        ? "project-status--done"
                        : "project-status--progress"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-card__technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <div className="project-card__links">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View project
                      <span aria-hidden="true">↗</span>
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="project-card__github"
                    >
                      GitHub
                      <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="projects-empty">
            No projects found in this category.
          </div>
        )}
      </section>
    </main>
  );
}

export default Projects;