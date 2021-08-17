import { Box, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';

interface CollaborationProps {

}

const slickStyle = makeStyles(theme => ({

  center: {
    marginTop: 16,
    overflow: 'initial',

    '& .slick-slide': {
      boxSizing: 'border-box',
      padding: '0 4px 0'
    },

    '& .slick-arrow': {
      display: 'none !important'
    },

    '& .slick-list': {
      overflow: 'initial',
      padding: theme.spacing(1, 0)
    },

    '& .slick-cloned': {
      display: 'none'
    }
  }
}))

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    flex: '1 0 auto',
    margin: theme.spacing(1),
  },
}));

const Collaboration: React.FC<CollaborationProps> = ({

}) => {

  const classes = useStyles();

  return (
    <Grid container >
      <Hidden smDown>
        <Paper className={classes.paper}>mdDown</Paper>
      </Hidden>
    </Grid>
  )
}

export default Collaboration
