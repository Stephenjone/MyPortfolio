import React from "react";
import { useNavigate } from "react-router-dom";
import "./Projects.css";
import './illustrations.css';

const images = [
  { src: "/Assets/illustrations/a.jpg", alt: "illustration images" },
  { src: "/Assets/illustrations/d.jpg", alt: "illustration images" },
  { src: "/Assets/illustrations/i.jpg", alt: "illustration images" },
  { src: "/Assets/illustrations/b.jpg", alt: "illustration images" },
  { src: "/Assets/illustrations/e.jpg", alt: "illustration images" },
  { src: "/Assets/illustrations/f.png", alt: "illustration images" },
  { src: "/Assets/illustrations/g.png", alt: "illustration images" },
  { src: "/Assets/illustrations/h.png", alt: "illustration images" },
  { src: "/Assets/illustrations/b.jpg", alt: "illustration images" },
  { src: "/Assets/illustrations/j.png", alt: "illustration images" },
  { src: "/Assets/illustrations/l.png", alt: "illustration images" },
  { src: "/Assets/illustrations/m.jpg", alt: "illustration images" },
  { src: "/Assets/illustrations/n.jpg", alt: "illustration images" },
];

function Illustrations() {
  const navigate = useNavigate();

  return (
    <section className="illustrations">
      {/* Back Button */}
      <button className="back-btn" onClick={() => navigate(-1)}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
        <span>Back</span>
      </button>

      <div className="illustrations-hero">
        <img src="/Assets/Brand-Design/Brand-coverpage.jpg" alt="Hero" />
        <h2>Illustration</h2>
      </div>

      <div className="illustrations-gallery">
        <div className="gallery-header">
          <h2>Overview</h2>
          <p>
            <span>Illustration Project -</span> 2D Illustration Visual Assets<br/>
            <span>Company: </span> Schneider Electric Pvt Ltd<br/>
            <span>Role: </span> Senior Graphic Designer<br/>
            <span>Year: </span> 2018<br/>
            <span>Software: </span> Adobe Illustrator, Adobe Photoshop
          </p>
          <p>
            <span>Project Overview: </span>
            Developed a series of custom 2D vector illustrations for a digital marketing campaign aimed at simplifying product communication for a broad consumer audience. The objective was to visually represent electrical devices used across different residential categories — standard, mid-range, and luxury homes — in a clear and easily understandable format.
          </p>
          <p>
            <span>Responsibilities: </span>
            <span className="bullet-container">
              ✔ Interpreted campaign brief and marketing objectives<br/>
              ✔ Conducted visual research and developed initial concept sketches<br/>
              ✔ Created scalable vector illustrations aligned with brand guidelines<br/>
              ✔ Designed visual assets optimized for animation and video production<br/>
              ✔ Prepared digital-ready files for motion graphics integration<br/>
              ✔ Collaborated with the marketing and video production teams<br/>
              ✔ Implemented revisions based on stakeholder feedback
            </span>
          </p>
          <p>
            <span>Outcome: </span>
            The illustrations were integrated into animated promotional videos to visually demonstrate electrical product usage across various home segments, enhancing audience understanding and campaign clarity.
          </p>
        </div>

        <ul className="masonry-grid">
          {images.map((image, index) => (
            <li key={index}>
              <img src={image.src} alt={image.alt} loading="lazy" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Illustrations;