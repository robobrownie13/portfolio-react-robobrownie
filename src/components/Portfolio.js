import ProjectCard from "./ProjectCard";
import { useState } from "react";
const Portfolio = () => {
  const [projects] = useState([
    {
      id: 1,
      title: "Oasis",
      description: "",
      repositoryLink: "",
      deploymentLink: "",
      imageUrl: "",
    },
    {
      id: 2,
      title: "Recipes Now",
      description: "",
      repositoryLink: "",
      deploymentLink: "",
      imageUrl: "",
    },
    {
      id: 3,
      title: "Quiz",
      description: "",
      repositoryLink: "",
      deploymentLink: "",
      imageUrl: "",
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
