import React from 'react';
import '../css/Portfolio.css'

function Portfolio(props) {
  const { data } = props;
  const projects = data.projects.map((project) => (
    <div className='project' key={project.title}>
      <a href={project.url} title={project.title} target='blank'>
        <img alt={project.title} src={'images/portfolio/' + project.image} />
        <div className='project-over'>
        <div className='over-text'>{project.title}</div>
        </div>
      </a>
    </div>
  ));

  return (
    <section id='portfolio'>
      <div className='row'>
        <div className='twelve columns collapsed'>
          <h1>Check Out Some of My Projects.</h1>
          <div className='portfolio-container' >{projects}</div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
