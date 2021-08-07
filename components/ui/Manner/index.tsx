import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { theme } from 'tailwind.config';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },

  title: {
    textAlign: "center",
    margin: theme.spacing(5, 0, 3),

    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(3, 0, 2)
    }
  }
}));

const bannerImage = '/assets/Banner.jpg'

const Manner: FC = ({ }) => {

  const classes = useStyles()

  return <Card className={classes.root}>
    <CardActionArea>
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">
        Lizard
      </Typography>

      <CardMedia
        className={classes.media}
        image={bannerImage}
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Lizard
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
          across all continents except Antarctica
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
}

export default Manner
