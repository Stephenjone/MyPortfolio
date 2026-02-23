import React from "react";
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
  return (
    <section className="illustrations">
      <div className="illustrations-hero">
        <img src="/Assets/Brand-Design/Brand-coverpage.jpg" alt="" />
        <h2>Illustration</h2>
      </div>
      <div className="illustrations-gallery">
        <h2>Overview</h2>
        <p><span>Illustration Project -</span> 2D Illustration Visual Assets<br></br>
          <span>Company: </span> Schneider Electric Pvt Ltd<br></br>
          <span>Role: </span> Senior Graphic Designer<br></br>
          <span>Year: </span> 2018<br></br>
          <span>Software: </span> Adobe Illustrator, Adobe Photoshop</p>
        <p><span>Project Overview: </span>
          Developed a series of custom 2D vector illustrations for a digital marketing campaign aimed at simplifying product communication for a broad consumer audience. The objective was to visually represent electrical devices used across different residential categories — standard, mid-range, and luxury homes — in a clear and easily understandable format.<br></br><br></br>

          <span>Responsibilities: </span>

          ✔ Interpreted campaign brief and marketing objectives<br></br>

          ✔ Conducted visual research and developed initial concept sketches<br></br>

          ✔ Created scalable vector illustrations aligned with brand guidelines<br></br>

          ✔ Designed visual assets optimized for animation and video production<br></br>

          ✔ Prepared digital-ready files for motion graphics integration<br></br>

          ✔ Collaborated with the marketing and video production teams<br></br>

          ✔ Implemented revisions based on stakeholder feedback<br></br><br></br>

          <span>Outcome: </span>
          The illustrations were integrated into animated promotional videos to visually demonstrate electrical product usage across various home segments, enhancing audience understanding and campaign clarity.</p>
        <ul>
          {
            images.map((image, index) => (
              <li key={index}>
                <img src={image.src} alt={image.alt} />
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  );
}

export default Illustrations;
