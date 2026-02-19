import React from "react";
import "./Projects.css"; 
import './illustrations.css';

const images = [
  { src: "/Assets/illustrations/a.jpg", alt: "illustration images" },
  { src: "/Assets/illustrations/b.jpg", alt: "illustration images" },
  { src: "/Assets/illustrations/c.jpg", alt: "illustration images" },
  { src: "/Assets/illustrations/d.jpg", alt: "illustration images" },
  { src: "/Assets/illustrations/e.jpg", alt: "illustration images" },
  { src: "/Assets/illustrations/f.png", alt: "illustration images" },
  { src: "/Assets/illustrations/g.png", alt: "illustration images" },
  { src: "/Assets/illustrations/h.png", alt: "illustration images" },
  { src: "/Assets/illustrations/i.jpg", alt: "illustration images" },
  { src: "/Assets/illustrations/j.png", alt: "illustration images" },
  { src: "/Assets/illustrations/l.png", alt: "illustration images" },
  { src: "/Assets/illustrations/m.jpg", alt: "illustration images" },
  { src: "/Assets/illustrations/n.jpg", alt: "illustration images" },
];

function Illustrations() {
  return (
    <section className="illustrations">
      <div className="illustrations-hero">
        <img src="/Assets/Brand-Design/Brand-coverpage.jpg"/>
        <h2>Illustration</h2>
      </div>
      <div className="illustrations-gallery">
        <ul>
          {
            images.map((image, index) => (
              <li key={index}>
                <img src={image.src} allt={image.alt} />
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  );
}

export default Illustrations;
