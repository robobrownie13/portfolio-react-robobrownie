import ProjectCard from "./ProjectCard";
import { useState } from "react";
import Oasis from "../assets/projectScreenshots/oasis-endangered-animals-blog.png";
import Recipe from "../assets/projectScreenshots/recipes-now.png";
import NoSQL from "../assets/projectScreenshots/noSQL-socia-media-api.png";
const Portfolio = () => {
  const [projects] = useState([
    {
      id: 1,
      title: "Oasis: Endangered Animals Blog",
      description: "",
      repositoryLink: "https://github.com/robobrownie13/animal-blog-group-4-p2",
      deploymentLink: "https://salty-badlands-43491.herokuapp.com/",
      imageUrl: Oasis,
    },
    {
      id: 2,
      title: "Recipes Now",
      description: "",
      repositoryLink: "https://github.com/AvenP/recipe-search-app",
      deploymentLink: "https://avenp.github.io/recipe-search-app/",
      imageUrl: Recipe,
    },
    {
      id: 3,
      title: "Social Media API: NoSQL",
      description: "",
      repositoryLink: "https://github.com/robobrownie13/robo-social-media-api",
      deploymentLink:
        "https://drive.google.com/file/d/1d6_sbEWwNXGXwFEHNTyQ0cXeb9EeDQp3/view?pli=1",
      imageUrl: NoSQL,
    },
  ]);
  const [activeCardId, setActiveCardId] = useState(null);

  const handleCardClick = (cardId) => {
    setActiveCardId(cardId);
  };

  return (
    <>
      <div className="button-container">
        {projects.map((project) => (
          <button
            key={project.id}
            onClick={() => handleCardClick(project.id)}
            className={activeCardId === project.id ? "active" : ""}
          >
            {project.title}
          </button>
        ))}
      </div>
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          active={project.id === activeCardId}
        />
      ))}
    </>
  );
};

export default Portfolio;
