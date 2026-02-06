import React from 'react';
import Navbar from '../Components/Navbar.js'
import Banner from '../Components/Banner.js'
import Profile from '../Components/Profile.js'
import Skills from '../Components/Skills.js'
import Projects from '../Components/Projects.js';
import Footer from '../Components/Footer.js';

function Home(){
    return(
        <div>
            <Navbar />
            <Banner/> 
            <Profile />
            <Skills />
            <Projects />
            <Footer />
        </div>
    )
}


export default Home;