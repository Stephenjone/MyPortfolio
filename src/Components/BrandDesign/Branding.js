import React from "react";
import "./Branding.css";

function Branding() {
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
      <div className="branding-hero">
        <img src="/Assets/Brand-Design/Brand-coverpage.jpg" alt=""/>
        <h2>Branding</h2>
      </div>
      <div className="coverpage">
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
    </section>
  );
}

export default Branding;