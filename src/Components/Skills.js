import React from 'react';
import './Skills.css';

const Skills = () => {
    const skillSets = [
        {
            title: "Design",
            tools: ["Adobe Photoshop", "Adobe Illustrator", "Adobe Indesign", "UI/UX Layouts", "Typography", "Adobe Premier pro"]
        },
        {
            title: "Development",
            tools: ["HTML", "Responsive CSS", "React.js", "JavaScript (ES6+)", "Git / GitHub", "MongoDB"]
        }
    ];

    return (
        <section id="skills-container">
            <h2 className="skills-title">My Toolkit</h2>
            <div className="skills-grid">
                {skillSets.map((set, index) => (
                    <div key={index} className="skill-card">
                        <h3 className="skill-category">{set.title}</h3>
                        <ul className="skill-list">
                            {set.tools.map((tool, i) => (
                                <li key={i} className="skill-item">{tool}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;