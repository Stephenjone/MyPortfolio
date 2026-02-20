import React from "react";
import "./Brouchers.css";
import { useNavigate } from "react-router-dom";

function Brouchers() {
  const navigate = useNavigate();

  const brandingProjects = [
    {
      id: 1,
      title: "Forward Focused Broucher",
      img: "/Assets/Broucher/ForwardFocused-coverpage.jpg",
      link: "/broucher/forwardfocused"
    },
  ];

  return (
    <section className="brouchers">
      <div className="brouchers-hero">
         <img src="/Assets/Brand-Design/Brand-coverpage.jpg" alt=""/>
         <h2>Brouchers & Catalogues</h2>
      </div>

      <div className="coverpage">
        {brandingProjects.map((project) => (
          <div
            key={project.id}
            className="branding-card"
            onClick={() => navigate(project.link)}
          >
            <img src={project.img} alt={project.title} />
            <div className="overlay">
              <h3>{project.title}</h3>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Brouchers;
