import React from "react";
import { useNavigate } from "react-router-dom";
import "./UIDesign.css";

function UIDesign() {
  const navigate = useNavigate();

  const UIProjects = [
    {
      id: 1,
      title: "Streefoo",
      img: "/Assets/UI-Design/Streefo.jpg",
      link: "https://www.behance.net/gallery/242319205/Streefoo-UI-design-of-Street-food-delivery-app"
    },
    {
      id: 2,
      title: "Frutella",
      img: "/Assets/UI-Design/Frutella.jpg",
      link: "https://www.behance.net/gallery/244143577/Frutella-End-to-End-Grocery-Mobile-App-UXUI-Design"
    },
    {
      id: 3,
      title: "Book Bazar",
      img: "/Assets/UI-Design/BookBazar.jpg",
      link: "https://www.behance.net/gallery/244364173/BookBazar-A-Digital-Marketplace-for-Modern-Readers"
    }
  ];

  return (
    <section className="ui">
      {/* Back Button - Responsive */}
      <button className="back-btn" onClick={() => navigate(-1)}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
        <span>Back</span>
      </button>

      <div className="ui-hero">
        <img src="/Assets/Brand-Design/Brand-coverpage.jpg" alt="UI Design Banner" />
        <h2>UI Design</h2>
      </div>

      <div className="coverpage">
        <div className="info-content">
          <h2>
            <span>Overview</span>
            This section showcases user interface (UI) design work completed as part of my role as a Graphic Designer. These projects demonstrate my ability to create visually engaging and user-focused digital interfaces that support clear communication and functional interaction.
          </h2>

          <h2>
            <span>Key Responsibilities</span>
            <div className="bullet-list">
              ✔ Interpreted project briefs and functional requirements<br/>
              ✔ Developed wireframes and visual layout concepts<br/>
              ✔ Designed intuitive interface screens with consistent visual hierarchy<br/>
              ✔ Applied typography, color theory, and iconography for usability<br/>
              ✔ Created design assets for web and mobile platforms<br/>
              ✔ Prepared design files for handoff to developers<br/>
              ✔ Coordinated revisions based on stakeholder and user feedback
            </div>
          </h2>

          <h2>
            <span>Tools Used</span>
            Figma, Adobe XD, Adobe Illustrator, Adobe Photoshop
          </h2>
        </div>

        <div className="project-grid">
          {UIProjects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              className="ui-card"
              target="_blank"
              rel="noreferrer"
            >
              <img src={project.img} alt={project.title} />
              <div className="overlay">
                <h3>{project.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default UIDesign;