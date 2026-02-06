import React from 'react';
import Navbar from '../Components/Navbar.js'
import Banner from '../Components/Banner.js'
import Profile from '../Components/Profile.js'
import Skills from '../Components/Skills.js'
import Projects from '../Components/Projects.js';

function Home(){
    return(
        <div>
            <Navbar />
            <Banner/> 
            <Profile />
            <Skills />
            <Projects />
        </div>
    )
}


export default Home;