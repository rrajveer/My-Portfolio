import React from 'react'

export default function Services() {
    return (
        <div>
              <h3 className="Services text-center text-uppercase mt-5"style={{margin:"0px",padding:"0px"}}>Services</h3>
              <h6 className="text-center text-capitalize mt-3" style={{fontFamily:"Pacifico, cursive",fontSize:"1rem",letterSpacing:"0.1rem"}}>what i can do for you</h6>
              
            <div className="mySkills">
                <div className="skill" data-aos="fade-in" data-aos-delay="300">
                    <div className="icon-container">
                        <i className="fas fa-layer-group"/>
                    </div>
                    <h1>Web Design</h1>
                    <p style={{fontFamily:"Fondamento, cursive"}}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry's standard dummy
                    </p>
                </div>
                <div className="skill" data-aos="fade-in" data-aos-delay="600">
                    <div className="icon-container">
                        <i className="fas fa-code"/>
                    </div>
                    <h1>Web Developmet</h1>
                    <p style={{fontFamily: "Fondamento, cursive"}}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy
                    </p>
                </div>
                <div className="skill" data-aos="fade-in" data-aos-delay="900">
                    <div className="icon-container">
                      <i className="far fa-lightbulb"/>
                    </div>
                    <h1>Innovative Ideas</h1>
                    <p style={{fontFamily:"Fondamento, cursive"}}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy
                    </p>
                </div>
            </div>
        </div>
    )
}

