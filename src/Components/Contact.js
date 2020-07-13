import React from 'react'
import styled from 'styled-components'
import { ContactImg } from '../data'

export default function Contact() {
   
    
    return (
   
      <div className="contact">
       <h3 className="text-center text-uppercase mt-5">contact me</h3>
       <h7 className="text-center" style={{fontFamily:"Pacifico, cursive",fontSize:"1rem",letterSpacing:"0.1rem"}}>Getting In Touch Is Easy!!!</h7>
          
       <ContactWrapper>
        <div data-aos="fade-up"data-aos-delay="300">
            
            
            <section>
                <div className="container">
                <div className="contactInfo py-3">
                    <h3 style={{width:"105%",color:"white",fontFamily:"Sacramento, cursive",letterSpacing:"0.02rem"}}>Contact Info</h3>
                    <ul className="info">
                        <li>
                        {/* <i class="fas fa-map-marker-alt"> */}
                            <span><img src={ContactImg[0].loacation} alt="loc" style={{height:"80px",padding:"10px"}}/></span>
                            <span style={{marginTop:"10px"}}>1755, Henri-Bourassa East, H2C1J6</span>
                        </li>
                        <li>
                            <span><img src={ContactImg[0].gmail} alt="gmail" style={{height:"30px",width: "40%",marginLeft:"15px"}}/></span>
                            <span>kaurrajveer25@gmail.com</span>
                        </li>
                        <li>
                            <span><img src={ContactImg[0].phone} alt="phone"style={{height:"59px",padding:"17px"}}/></span>
                            <span style={{marginTop:"10px",marginLeft:"17px"}}>(514)-659-5225</span>
                        </li>
                    </ul>
                    <ul className="social">
                        <li><i className="fab fa-facebook-f"></i></li>
                        <li><i class="fab fa-instagram"></i></li>
                        <li><i class="fab fa-linkedin-in"></i></li>
                        <li><i class="fab fa-twitter"></i></li>
                    </ul>
                    
                </div>
               
                <div className="contactForm">
                    <h3 style={{fontFamily:"Sacramento, cursive",letterSpacing:"0.02rem"}}>Send a Message</h3>
                    <div className="formBox">
                        <div className="inputBox w50">
                            <input type="text" name="" required/>
                            <span>First Name</span>
                        </div>
                        <div className="inputBox w50">
                            <input type="text" name="" required/>
                            <span>Last Name</span>
                        </div>
                        <div className="inputBox w50">
                            <input type="text" name="" required/>
                            <span>Email Address</span>
                        </div>
                        <div className="inputBox w50">
                            <input type="text" name="" required/>
                            <span>Mobile Number</span>
                        </div>
                        <div className="inputBox w50">
                            <textarea type="text" name="" required style={{minHeight:"100px"}}/>
                            <span>Write your message here....</span>
                        </div>
                        <div className="mx-auto inputBox w100">
                            <input type="submit" value="Send" style={{fontFamily:"Sacramento, cursive"}}/>   
                        </div>
                        
                    </div>
                </div>
            </div>


            </section>
          </div>
        </ContactWrapper>
        </div>
    )
}
const ContactWrapper = styled.div`
//   section{
//       position:relative;
//       background:black !important;
//   }
//   section::before{
//     position:absolute;
//     content:'';
//     width:50%;
//     height:100%;
//     background: #e22947 !important;
//     top:0px;
//     left:0px;
//   }
  section .container{
      position:relative;
      display:flex;
      min-height: 500px;
      width:40%;
      z-index:800;
     
  }
  section .container .contactInfo{
      top:20%;
      position:absolute;
      height:calc(100%-150px);
      width:80%;
      margin-left:-50%;
      //opacity:0.9;
      background: #000428;  /* fallback for old browsers */
      background: -webkit-linear-gradient(to bottom, #004e92, #000428);  /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(to bottom, #004e92, #000428); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      


      //color:white;
      display:flex;
      flex-direction:column;
      justify-content:space-between;
      padding:40px;
      z-index:1;
  }
  section .container .contactInfo .info{
      //margin:2px 0;
      position:relative;
      list-style:none;
      padding:0px;
    //   font-family:"Cormorant Upright, serif";
      font-size:15px;
      font-weight:400;
  }
  section .container .contactInfo .info li{
      cursor:pointer;
      position:relative;
      margin:10px 0;
      display:flex;
      align-items:flex-start;
      filter:invert(1);
      opacity:0.5;
  }
  section .container .contactInfo .info li:hover{
      opacity:1;
  }
  section .container .contactInfo .social{
      display:flex;
      position:relative;
  }
  section .container .contactInfo .social li{
      list-style:none;
      margin-left:-20px;
      margin-right:30%;

  }
  section .container .contactInfo .social li i{
      filter:invert(1);
      opacity:0.5;
      font-size:20px;
  }
  section .container .contactInfo .social li i:hover{
      opacity:1;
  }
  section .container .contactForm{
      position:absolute;
      background:white !important;
      padding:70px 50px;
      width:140%;
     //opacity:0.7;
      margin-left:5%;
      margin-top:10%;
      padding-left:40%;
      height:95%;
      box-shadow: 0 50px 50px rgba(0,0,0,0.5);
  }
  section .container .contactForm .formBox{
      position:relative;
      display:flex;
      justify-content:space-between;
      flex-wrap:wrap;
      padding-top:30px;
  }
  section .container .contactForm .formBox .inputBox{
      position:relative;
      margin:0 0 35px 0;
  }
  section .container .contactForm .formBox .inputBox.w50{
      width:47%;
  }
  section .container .contactForm .formBox .inputBox.w100{
      width:100%;
  }
  section .container .contactForm .formBox .inputBox input,textarea{
      width:100%;
      padding:5px 0;
      resize:none;
      border:none;
      border-bottom:1px solid #777;
      outline:none;
  }
  section .container .contactForm .formBox .inputBox span{
      left:0;
      position:absolute;
      padding:5px 0;
      pointer-events:none;
      transition:0.3s;
  }
  section .container .contactForm .formBox .inputBox input:focus ~ span,
  section .container .contactForm .formBox .inputBox textarea:focus ~ span{
      transform : translateY(-20px);
      color: #e22947;
      font-size:12px;
      font-weight:500;
      letter-spacing:0.01rem;
      
  }
  section .container .contactForm .formBox .inputBox input[type="submit"]{
      position:relative;
      background:#000428;
      color:white;
      border:none;
      cursor:pointer;
      max-width:20%;
      padding:10px;
  }
  section .container .contactForm .formBox .inputBox input[type="submit"]:hover{
      background: #e22947;
  }

`;
