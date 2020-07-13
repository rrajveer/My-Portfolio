import React from 'react'
import Typical from 'react-typical'
import { Spring } from 'react-spring/renderprops';

export default function Home({showMenu,openMenu,className,barStartClass,barEndClass}) {
    return (
        console.log(showMenu),
        
        <div className="header">
            
            <div className={(showMenu)?className:"menu-toggler"} onClick={openMenu}>
                
                <div className={(showMenu)?barStartClass:"bar half start"}></div>
                <div className="bar"></div>
                <div className={(showMenu)?barEndClass:"bar half end"}></div>

            </div>
           { (showMenu) ?
                
            <nav className="top-nav">
                <ul className="nav-list">
                    <li>
                        <a href="#contact" className="nav-link" style={{fontFamily:"Pacifico, cursive !important"}}>Home</a>
                    </li>
                    <li>
                        <a href="#contact" className="nav-link">AboutMe</a>
                    </li>
                    <li>
                        <a href="#contact" className="nav-link">Education</a>
                    </li>
                    <li>
                        <a href="#contact" className="nav-link">Experience</a>
                    </li>
                    <li>
                        <a href="#contact" className="nav-link">projects</a>
                    </li>
                    <li>
                        <a href="#contact" className="nav-link">ContactME</a>
                    </li>
                </ul>

            </nav>
            : ""
          } 
          
                   <div className="title text-capitalize">
                      <h1>rajveer kour</h1>
                      <h6 style={{ fontFamily:"Alegreya Sans SC, sans-serif",fontSize:"1.2rem"}}>
                      <Typical 
                      loop={Infinity}
                      wrapper='b'
                      steps={[
                          'UI Designer',
                          2000,
                          'Web Developer',
                          2000,
                          'UX Designer',
                          2000

                      ]}/>
                      </h6>
                   </div>

                </div>
       
    
        
        
    )
}
