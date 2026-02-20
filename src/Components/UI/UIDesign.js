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
         <img src="/Assets/Brand-Design/Brand-coverpage.jpg" alt=""/>
        <h2>UI Design</h2>
      </div>
      <div className="coverpage">
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