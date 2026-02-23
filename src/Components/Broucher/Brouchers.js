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

      {/* HERO */}
      <div className="brouchers-hero">
        <img src="/Assets/Brand-Design/Brand-coverpage.jpg" alt="" />
        <h2>Brouchers & Catalogues</h2>
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

          <h2>
            <span>Key Responsibilities</span>
            ✔ Interpreted client briefs and identified communication objectives<br />
            ✔ Developed layout concepts and information hierarchy<br />
            ✔ Created visual assets, icons, and imagery to support messaging<br />
            ✔ Applied typography and color theory to enhance readability<br />
            ✔ Prepared print-ready files and digital versions<br />
            ✔ Coordinated revisions based on stakeholder feedback<br />
            ✔ Ensured consistency with brand guidelines and campaign goals
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

    </section>
  );
}

export default Brouchers;