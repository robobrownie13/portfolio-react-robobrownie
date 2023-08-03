import "../styles/ProjectCard.css";
const ProjectCard = ({ project, active }) => {
  const { title, description, repositoryLink, deploymentLink, imageUrl } =
    project;

  return (
    <div className={`project-card ${active ? "active" : "hidden"}`}>
      <img src={imageUrl} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={repositoryLink} target="_blank" rel="noopener noreferrer">
        View Repository
      </a>
      {deploymentLink && (
        <a href={deploymentLink} target="_blank" rel="noopener noreferrer">
          View Deployment
        </a>
      )}
    </div>
  );
};

export default ProjectCard;
