import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import AOS from 'aos';
import './App.css';
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Education from './Components/Education'
import Experience from './Components/Experience';
import Services from './Components/Services';
import Projects from './Components/Projects';




export default class App extends Component {
     state ={
      showMenu:false,
      className:"",
      barStartClass:"",
      barEndClass:""
    }
  openMenu = (e) =>{
    this.setState(
      {showMenu:(!this.state.showMenu),
       className:"menu-toggler open",
       barStartClass:"bar half start open",
       barEndClass:"bar half end open"}
    )

  }
  // componentDidMount(){
  // }
 
  
  render() {
    AOS.init({
      easing:'ease',
      duration:1800
    })

    return (
      <div className="App">
      <Home 
        showMenu={this.state.showMenu}
        openMenu={this.openMenu}
        className={this.state.className}
        barStartClass={this.state.barStartClass}
        barEndClass={this.state.barEndClass}/>
     
      <About />
      <Education />
      
      <Experience />
      <Projects />
      <Services />
      
      <Contact />
      
      </div>
    )
  }
}



