import React from 'react'
import { ProjectImg } from '../data'
import styled from 'styled-components'
export default function Projects() {
    return (
        <ProjectWrapper className="container">
            <h4 className="text-center text-uppercase mt-5">projects</h4>
            <div className="project-item" >
                <div className="project-img" data-aos="flip-left">
                    <img src={ProjectImg[0].onlineShopping} alt="prjctImg" style={{height:"160px", width:"auto"}}/>
                </div>
                <div className="project-desc" data-aos="fade-in" data-aos-delay="600">
                    <h6 className="mx-auto" style={{borderBottom:"1px solid #eee",width:"60%"}}>Online Shopping<span style={{fontFamily:"Alegreya Sans SC, sans-serif",marginLeft:"5px"}}>(React)</span></h6>
                    <p style={{fontFamily:"Fondamento, cursive"}}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry's standard dummy
                    </p>
                    <a className="mx-auto gitBtn" href="https://github.com/rrajveer/Online-Shopping-Website">
                    <i class="fab fa-github" style={{marginRight:"5px",marginTop:"2px"}}/>
                        View on github</a>
                </div>
            </div>

            <div className="project-item" style={{flexDirection:"row-reverse"}}>
                <div className="project-img" data-aos="flip-right" >
                    <img src={ProjectImg[0].cookBook} alt="prjctImg" style={{height:"200px", width:"auto"}}/>
                </div>
                <div className="project-desc-diff" style={{marginRight:"5rem"}} data-aos="fade-in" data-aos-delay="600">
                    <h6 className="mx-auto" style={{borderBottom:"1px solid #eee",width:"35%",
                        fontFamily:"Pacifico, cursive",textAlign:"center",fontSize:"1.2rem",color: "white", opacity:"0.8"}}>Cook Book<span style={{fontFamily:"Alegreya Sans SC, sans-serif",marginLeft:"5px"}}>(PHP)</span></h6>
                    <p style={{fontFamily:"Fondamento, cursive"}}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry's standard dummy
                    </p>
                    <a className="mx-auto gitBtn" href="https://github.com/rrajveer/Cook-Book">
                    <i class="fab fa-github" style={{marginRight:"5px",marginTop:"2px"}}/>
                        View on github</a>
                </div>
            </div>
            <div className="project-item">
                <div className="project-img" data-aos="flip-left">
                    <img src={ProjectImg[0].beachResort} alt="prjctImg" style={{height:"160px", width:"auto"}}/>
                </div>
                <div className="project-desc" data-aos="fade-in" data-aos-delay="600">
                    <h6 className="mx-auto" style={{borderBottom:"1px solid #eee",width:"60%"}}>Beach Resort<span style={{fontFamily:"Alegreya Sans SC, sans-serif",marginLeft:"5px"}}>(React)</span></h6>
                
                    <p style={{fontFamily:"Fondamento, cursive"}}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry's standard dummy
                    </p>
                    <button className="mx-auto gitBtn">
                    <i class="fab fa-github"style={{marginRight:"5px",marginTop:"2px"}}/>
                        View on github</button>
                </div>
            </div>
            
        </ProjectWrapper>
    )
}
const ProjectWrapper = styled.div`


h4::before,
h4::after{
      content: '';
      position: absolute;
      /* bottom: -.5rem; */
      bottom: -66.5rem;
      left: 50%;
      transform: translateX(-50%);
      background-color:white;
}

h4::before{
  width:18rem;
  height: 3px;
  border-radius: 0.8rem;
}
h4::after{
  width: 1.2rem;
  height: 1.3rem;
  border-radius: 100%;
  /* bottom: -1rem; */
  bottom: -67rem;
}

`;