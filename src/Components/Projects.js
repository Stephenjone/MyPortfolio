import React from "react";
import "./Projects.css";
import { useNavigate } from "react-router-dom";

function Projects() {
  const navigate = useNavigate();

  const projectList = [
    { title: "Illustrations", path: "/Illustrations", className: "illustration-section", titleClass: "illustrations-title" },
    { title: "Branding", path: "/Branding", className: "branding-section", titleClass: "illustrations-title" },
    { title: "Brouchers & Catalogues", path: "/Brouchers", className: "brouchers-section", titleClass: "brouchers-title" },
    { title: "UI Design", path: "/UIDesign", className: "ui-section", titleClass: "ui-title" }
  ];

  return (
    <div id="projects">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-section">
        {projectList.map((project, index) => (
          <div
            key={index}
            className={project.className}
            onClick={() => navigate(project.path)}
          >
            <h2 className={project.titleClass}>{project.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
