import React from "react";
import './ProjectLayout.css';

import "bootstrap/dist/css/bootstrap.min.css";



import Header from './ProjectPageHeader';
import Project from './Project/ProjectMain';
import Run from './Run/RunMain';
import Team from './Team/TeamMain';
import Profile from './Profile';


const ProjectPage = () => {
    return(
      <div className = "projectMainLayout">
          <Header></Header>
          <Profile></Profile>
         
          <Project></Project>
           <Team></Team> 
          <Run></Run>
      </div>
    )
  };
  
  export default ProjectPage;
  