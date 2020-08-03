import React from 'react';

function Portfolio(props) {
  const { data } = props;
  const projects = data.projects.map((project) => (
    <div key={project.title} className='columns portfolio-item'>
      <div className='item-wrap'>
        <a href={project.url} title={project.title} target='blank'>
          <img alt={project.title} src={'images/portfolio/' + project.image} />
          <div className='overlay'>
            <div className='portfolio-item-meta'>
              <h5>{project.title}</h5>
              <p>{project.category}</p>
            </div>
          </div>
          <div className='link-icon'>
            <a href={project.url} target='blank'><i className='fa fa-link'></i></a>
            <a href="google.com" title="Front-End"><i className='fa fa-github'> Front-End</i></a>
          </div>
        </a>
      </div>
    </div>
  ));

  return (
    <section id='portfolio'>
      <div className='row'>
        <div className='twelve columns collapsed'>
          <h1>Check Out Some of My Projects.</h1>
          <div
            id='portfolio-wrapper'
            className='bgrid-quarters s-bgrid-thirds cf'
          >
            {projects}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
