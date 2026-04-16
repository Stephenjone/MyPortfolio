import React from "react";
import { useNavigate } from "react-router-dom";
import "./Marketing.css";

const bannerImages = [
    {/*{ src: "/Assets/Marketing/1.jpg", alt: "Easter Outfits Banner" },
    { src: "/Assets/Marketing/2.jpg", alt: "70% Off Clearance" },
    { src: "/Assets/Marketing/3.jpg", alt: "Jewelry Event Sale" },
    { src: "/Assets/Marketing/4.jpg", alt: "Flash Sale Banner" },
    { src: "/Assets/Marketing/5.jpg", alt: "Flash Sale Banner" },
    { src: "/Assets/Marketing/6.jpg", alt: "Flash Sale Banner" },
     */}
];


const tileImages = [
    { src: "/Assets/Marketing/11.jpg", alt: "Marketing tile" },
    { src: "/Assets/Marketing/22.jpg", alt: "Marketing tile" },
    { src: "/Assets/Marketing/33.jpg", alt: "Marketing tile" },
];

function Marketing() {
    const navigate = useNavigate();

    return (
        <section className="Marketing">
            {/* Back Button */}
            <button className="back-btn" onClick={() => navigate(-1)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
                <span>Back</span>
            </button>

            <div className="Marketing-hero">
                <img src="/Assets/Brand-Design/Brand-coverpage.jpg" alt="Hero Cover" />
                <h2>Marketing Design</h2>
            </div>

            <div className="Marketing-gallery">
                {/* --- BANNERS SECTION --- */}
               {/*  <div className="layout-label">
                    <span>Banners</span>
                </div>
                
                <header className="overview-section">
                    <h2>Overview</h2>
                    <p>
                        <span>Goal: </span> Design and develop high-conversion digital hero banners for seasonal e-commerce events.<br />
                        <span>Purpose: </span> To promote brands, sales, offers and discounts.<br />
                        <span>Company: </span> JCPenney Pvt Ltd<br />
                        <span>Software: </span> Adobe Illustrator, Adobe Photoshop
                    </p>
                    <p><span>Project Overview: </span> Developed high-conversion digital assets including full-width web banners. The objective was to maintain brand consistency while driving engagement across multiple retail segments.</p>
                </header>

                <div className="banner-stack">
                    {bannerImages.map((image, index) => (
                        <div className="banner-card" key={`banner-${index}`}>
                            <img src={image.src} alt={image.alt} loading="lazy" />
                        </div>
                    ))}
                </div>
                */}

                {/* --- MARKETING TILES SECTION --- */}
                <div className="layout-label">
                    <span>Marketing Tiles</span>
                </div>

                <header className="overview-section">
                    <h2>Overview</h2>
                    <p>
                        <span>Goal: </span> Design vertical promotional tiles for PLP Gallery Pages.<br />
                        <span>Standard: </span> 320 * 600px | Helvetica<br />
                        <span>Role: </span> Senior Graphic Designer<br />
                        <span>Software: </span> Adobe Illustrator, Adobe Photoshop
                    </p>
                    <p><span>Project Overview: </span> Focused on clear messaging, strong visual hierarchy, and brand consistency to drive shopper engagement and conversions.</p>
                </header>

                <div className="tile-grid">
                    {tileImages.map((image, index) => (
                        <div className="tile-card" key={`tile-${index}`}>
                            <img src={image.src} alt={image.alt} loading="lazy" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Marketing;