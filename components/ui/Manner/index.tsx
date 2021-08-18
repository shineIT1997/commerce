import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link'

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    boxShadow: 'none',
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

interface MannerProps {
  alt: string,
  src: string,
  mannerId: string,
  count: number,
  description: string
}

const bannerImage = '/assets/Banner.jpg'

const Manner: FC<MannerProps> = ({ count, mannerId, alt, src, description }) => {

  const classes = useStyles()


  return <Card className={classes.root}>
    <Link href={`/search?manner=${mannerId}`}>
      <a href={`/search?manner=${mannerId}`}>
        <CardActionArea>
          <Typography className={classes.title} gutterBottom variant="h5" component="h2">
            {alt}
          </Typography>

          <CardMedia
            className={classes.media}
            image={src}
            title={alt}
          />
          <CardContent>
            <Typography variant="subtitle1" color="textSecondary" component="p">
              {count} sản phẩm
            </Typography>
          </CardContent>
        </CardActionArea>
      </a>
    </Link >
  </Card >
}

export default Manner
