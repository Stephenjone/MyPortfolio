import React from "react";
import "./UIDesign.css";

function UIDesign() {
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
      <div className="ui-hero">
        <img src="/Assets/Brand-Design/Brand-coverpage.jpg" alt="" />
        <h2>UI Design</h2>
      </div>
      <div className="coverpage">
        <div>
          <h2><span>Overview</span>This section showcases user interface (UI) design work completed as part of my role as a Graphic Designer. These projects demonstrate my ability to create visually engaging and user-focused digital interfaces that support clear communication and functional interaction. These UI design projects illustrate my experience in delivering structured digital solutions that balance visual appeal with usability and business goals.</h2>

          <h2><span>Key Responsibilities</span>
            ✔ Interpreted project briefs and functional requirements<br></br>
            ✔ Developed wireframes and visual layout concepts<br></br>
            ✔ Designed intuitive interface screens with consistent visual hierarchy<br></br>
            ✔ Applied typography, color theory, and iconography for usability<br></br>
            ✔ Created design assets for web and mobile platforms<br></br>
            ✔ Prepared design files for handoff to developers<br></br>
            ✔ Coordinated revisions based on stakeholder and user feedback</h2>

          <h2><span>Tools Used</span>Figma, Adobe XD, Adobe Illustrator, Adobe Photoshop</h2>

        </div>
        {UIProjects.map((project) => (
          <a
            key={project.id}
            href={project.link}
            className="ui-card"
            target="_blank" // This will open the library in a new tab
            rel="noreferrer"
          >
            <img src={project.img} alt={project.title}
            />
            <div className="overlay">
              <h3>{project.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default UIDesign;