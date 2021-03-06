import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Icon from '@mdi/react'
import { mdiGithubCircle, mdiWeb } from '@mdi/js'

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <a href={props.link} target="blank">
          <CardMedia
            className={classes.media}
            image={props.img}
            title="Contemplative Reptile"
          />
        </a>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            {props.text}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Divider />
      <CardActions>
      <a href={props.git}>
      <Icon path={mdiGithubCircle}
        size={2}

        color="white"
        />
      </a>
      <a href={props.link} target="blank">
      <Icon path={mdiWeb}
        size={2}

        color="white"
        />
      </a>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
