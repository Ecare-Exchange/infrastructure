import React from 'react';
import { Link } from 'react-router-dom';


// Most likely have to individually style via dApp

function Home() {

  return (
    
    <div> 
      
      <div id="above">
      
        <img class="icon" src="/icons&images/Icon.png"/>
      
        <h1 id="title">ecare</h1>
        
        <div id="name">
          <p id="names">ethereum</p> 
          <p id="names">combinatorial</p> 
          <p id="names">auction</p> 
          <p id="names">rate</p> 
          <p id="names">exchange</p>
        </div>
        
          {/* Change below link after test */}
        <a href="/prototype" id="prototype">
          Prototype
        </a>
        
        <br></br>
        
          {/* Change below link after test */}
        <a href="/guide" id="guide">
          Guide
        </a>
      
      </div>
      
      {/* <div id="about"> 
        
          <p id="about-desc">Created to house an ecosystem 
          to lift storytellers out of poverty.</p>
          
      </div>	  */}
        
      <div id="ecosystem">
      
        {/* Change below link after test   */}
        <a href="https://arells.com"
          id="eco-link">		      
          <img id="letter-logo" src="/icons&images/Arells-Logo.png"></img>	      
        </a>		 
    
    
      </div>
      
            
      <div id="infrastructure">

        {/* Change below link after test  */}
        <Link to="/roadmap" id="roadmap">Roadmap
        </Link>
        
        <br></br>
              
        <a href="https://github.com/orgs/Ecare-Exchange"
          target="_blank"
          id="contact">
          <img id="github" src="/icons&images/GithubBright.png"></img>
        </a>  	
          
      </div>
    </div>
    
  )
  
}

export default Home