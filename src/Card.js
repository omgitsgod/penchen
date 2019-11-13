import React from 'react';
import './css/Card.css'
import Icon from '@mdi/react'
import { mdiGithubCircle, mdiWeb } from '@mdi/js'

function Card(props) {
  return (
    <div class='container'>
  <div class='card'>
    <img src={props.img} alt='Project' class='card_image' />
    <div class='card_text'>
      <h2 class='title'>{props.name}</h2>
      <div class='summary'>
        {props.text}
      </div>
    </div>
    <hr />
    <div class='card_footer'>
      <a href={props.git} target='blank'>
      <Icon path={mdiGithubCircle}
        size={1.75}

        color='white'
        />
      </a>
      <a href={props.link} target='blank'>
      <Icon path={mdiWeb}
        size={1.75}

        color='white'
        />
      </a>
      <div class="tags">
        {props.tech}
      </div>
    </div>
  </div>
</div>
  );
}

export default Card;
