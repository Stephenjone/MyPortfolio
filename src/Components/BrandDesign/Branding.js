import React from "react";
import { useNavigate } from "react-router-dom";
import "./Branding.css";

function Branding() {
  const navigate = useNavigate();

  const brandingProjects = [
    {
      id: 1,
      title: "Jones Foods",
      img: "/Assets/Brand-Design/Jones-foods-coverpage.jpg",
      link: "https://www.behance.net/gallery/142860947/Brand-design"
    },
    {
      id: 2,
      title: "Caffy",
      img: "/Assets/Brand-Design/caffy-coverpage.jpg",
      link: "https://www.behance.net/gallery/243255541/Cafy-Brand-design"
    },
    {
      id: 3,
      title: "Amaze",
      img: "/Assets/Brand-Design/Amaze.jpg",
      link: "https://www.behance.net/gallery/244082243/Amaze-Perfume-Brand-Identity-Product-Design"
    }
  ];

  return (
    <section className="branding">
      {/* Back Button for Mobile/Tablet */}
      <button className="back-btn" onClick={() => navigate(-1)}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
        <span>Back</span>
      </button>

      <div className="branding-hero">
        <img src="/Assets/Brand-Design/Brand-coverpage.jpg" alt="Branding Hero" />
        <h2 className="brandinghero-heading">Branding</h2>
      </div>

      <div className="coverpage">
        <div className="branding-info">
          <h2><span>Overview</span>This section presents branding projects completed as part of my professional role as a Graphic Designer. The work demonstrates my ability to develop and implement visual identity systems aligned with client and business objectives. These projects reflect my experience in delivering structured branding solutions within commercial environments, ensuring consistency, functionality, and alignment with business strategy.</h2>
          
          <h2><span>Scope of Work</span>
            <div className="bullet-list">
              ✔ Interpreted client briefs and defined brand requirements<br/>
              ✔ Conducted research on target audience and competitors<br/>
              ✔ Developed logo concepts and visual identity systems<br/>
              ✔ Created typography, color palettes, and brand assets<br/>
              ✔ Prepared artwork for print and digital production<br/>
              ✔ Applied branding across marketing collateral and digital platforms<br/>
              ✔ Coordinated revisions based on stakeholder feedback
            </div>
          </h2>

          <h2><span>Tools Used</span>Adobe Illustrator and Adobe Photoshop</h2>
        </div>

        <div className="branding-grid">
          {brandingProjects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              className="branding-card"
              target={project.link.startsWith("http") ? "_blank" : "_self"}
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

export default Branding;