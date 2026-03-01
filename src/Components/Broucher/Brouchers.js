import React from "react";
import "./Brouchers.css";
import { useNavigate } from "react-router-dom";

function Brouchers() {
  const navigate = useNavigate();

  const brandingProjects = [
    {
      id: 1,
      title: "Forward Focused Brochure",
      img: "/Assets/Broucher/ForwardFocused-coverpage.jpg",
      link: "/broucher/forwardfocused"
    },
  ];

  return (
    <section className="brouchers">
      {/* Back Button */}
      <button className="back-btn" onClick={() => navigate(-1)}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
        <span>Back</span>
      </button>

      {/* HERO */}
      <div className="brouchers-hero">
        <img src="/Assets/Brand-Design/Brand-coverpage.jpg" alt="Brochures Banner" />
        <h2>Brochures & Catalogues</h2>
      </div>

      {/* MAIN CONTENT */}
      <div className="coverpage">
        {/* LEFT COLUMN */}
        <div className="left-column">
          <h2>
            <span>Overview</span>
            This section showcases brochure design work completed as part of my professional role as a Graphic Designer. 
            Each project demonstrates my ability to translate information and client requirements into clear, effective visual communication.
            <br /><br />
            These brochure projects illustrate practical experience in designing structured print and digital collateral 
            for business communication, aligning design decisions with user needs and commercial outcomes.
          </h2>

          <h2 className="responsibilities">
            <span>Key Responsibilities</span>
            <div className="bullet-list">
              ✔ Interpreted client briefs and communication objectives<br />
              ✔ Developed layout concepts and information hierarchy<br />
              ✔ Created visual assets, icons, and imagery<br />
              ✔ Applied typography and color theory for readability<br />
              ✔ Prepared print-ready files and digital versions<br />
              ✔ Coordinated revisions based on stakeholder feedback<br />
              ✔ Ensured consistency with brand guidelines
            </div>
          </h2>
        </div>

        {/* RIGHT COLUMN */}
        <div className="right-column">
          <div className="tools-used">
            <h2>
              <span>Tools Used</span>
              Adobe InDesign, Adobe Illustrator, Adobe Photoshop
            </h2>
          </div>

          <div className="projects-grid-vertical">
            {brandingProjects.map((project) => (
              <div
                key={project.id}
                className="brouchers-card"
                onClick={() => navigate(project.link)}
              >
                <img src={project.img} alt={project.title} />
                <div className="overlay">
                  <h3>{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Brouchers;