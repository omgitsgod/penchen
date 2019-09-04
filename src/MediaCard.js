import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Icon from '@mdi/react'
import { mdiGithubCircle } from '@mdi/js'

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
          <Typography variant="body2" color="textSecondary" component="p">
            {props.text}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <a href="www.github.com">
      <Icon path={mdiGithubCircle}
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
