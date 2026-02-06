import React from "react";
import "./Projects.css";

function Projects() {
  const projectData = [
    {
      title: "Caffy - Brand Design",
      description:
        "Caffy is a minimalist paper coffee mug designed for modern coffee culture. Featuring a ribbed sleeve for improved grip and thermal comfort.",
  image: "/Assets/project1.jpg",
      alt: "Caffy Brand design",
      link: "https://www.behance.net/gallery/243255541/Cafy-Brand-design",
    },
    {
      title: "Broucher - Forward focused",
      description:
        "Forward Focused is a comprehensive branding and packaging project designed for a leading supplier of sustainable food and beverage packaging solutions.",
  image: "/Assets/project2.jpg",
      alt: "Broucher Design",
      link: "https://www.behance.net/gallery/243196935/Forward-Focused-LLC-Packaging-Visual-Identity",
    },
    {
      title: "Brand Design",
      description:
        "Brand identity design emphasizing structure, typography, and color harmony. Created to support consistent branding across multiple touchpoints.",
  image: "/Assets/project3.jpg",
      alt: "Brand design project",
      link: "https://www.behance.net/gallery/142860947/Brand-design",
    },
    {
      title: "Brand Design",
      description:
        "UI design for a street-food delivery app focused on simplicity and quick ordering. Built to deliver a smooth, intuitive experience for users on the go.",
  image: "/Assets/project4.jpg",
      alt: "Brand design project",
      link: "https://www.behance.net/gallery/242319205/Streefoo-UI-design-of-Street-food-delivery-app",
    },
    {
      title: "Illustrations Showcase",
      description:
        "A visual journey of expressive illustrations blending imagination with refined technique. Crafted to engage and inspire across diverse creative directions.",
  image: "/Assets/project5.jpg",
      alt: "Brand design project",
      link: "https://www.behance.net/gallery/118681791/Illustrations",
    },
    {
      title: "Steejo Brand Design",
      description:
        "A stylish mobile interface concept for Steejo that blends aesthetic appeal with functional clarity. Designed to enhance interaction flow and visual engagement.",
  image: "/Assets/project6.jpg",
      alt: "Brand design project",
      link: "https://www.behance.net/gallery/141543899/Steejo",
    },
    {
      title: "Lotus Catalogue Design",
      description:
        "A visually compelling catalogue design that highlights elegance and clarity. Created to showcase products through clean layouts and refined typography.",
  image: "/Assets/project7.jpg",
      alt: "Brand design project",
      link: "https://www.behance.net/gallery/142388035/Lotus_Catalogue",
    },
    {
      title: "Trifold Brochure Design",
      description:
        "A thoughtful trifold brochure design highlighting structured layout and clear communication. Crafted to present key information in an elegant, easy-to-read format.",
  image: "/Assets/project8.jpg",
      alt: "Brand design project",
      link: "https://www.behance.net/gallery/142001017/Trifold",
    },
     {
      title: "Text Animation Showcase",
      description:
        "A collection of dynamic text animation experiments focused on rhythm and motion. Designed to enhance engagement through fluid, expressive typography.",
  image: "/Assets/project9.jpg",
      alt: "Brand design project",
      link: "https://www.behance.net/gallery/141038745/Text_Animation",
    },
     {
      title: "Logo Motion Graphics",
      description:
        "A thoughtful trifold brochure design highlighting structured layout and clear communication. Crafted to present key information in an elegant, easy-to-read format.",
  image: "/Assets/project10.jpg",
      alt: "Brand design project",
      link: "https://www.behance.net/gallery/141036319/Logo-Motion-design",
    },
  ];



   const developmentProject = [
    {
      title: "PickNPay",
      description:
        "PickNPay is a food orderng app, where the associated can explore the foods from the office resturant and place a order and pay the payment while collecting the food from the resturant. ",
  image: "/Assets/projecta.jpg",
      alt: "Development project",
      link: "https://github.com/Stephenjone/PickNPay-frontend",
    },
  ]

  return (
    <section id="projects-section">
      <h2 className="projects-header"> Design Projects</h2>
      <div className="projects-container">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <h3 className="projects-title">{project.title}</h3>

            <p className="projects-description">{project.description}</p>

            <img
              src={project.image}
              alt={project.alt}
              className="project-img"
            />

            <button
              className="project-btn"
              onClick={() => window.open(project.link, "_blank")}
            >
              View Project →
            </button>
          </div>
          
        ))}
      </div><br></br><br></br><br></br><br></br><br></br><br></br>
      <h2 className="projects-header"> Development Projects</h2>
      <div className="projects-container">
        {developmentProject.map((project, index) => (
          <div className="project-card" key={index}>
            <h3 className="project-title">{project.title}</h3>

            <p className="devprojects-description">{project.description}</p>

            <img
              src={project.image}
              alt={project.alt}
              className="project-img"
            />
            <br></br>
            <button
              className="project-btn"
              onClick={() => window.open(project.link, "_blank")}
            >
              Git hub →
            </button>
          </div>
          
        ))}
      </div>
    </section>
  );
}

export default Projects;
