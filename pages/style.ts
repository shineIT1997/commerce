import { makeStyles } from '@material-ui/core'

const useStyle = makeStyles(theme => ({
  banner: {
    maxWidth: 1440,
    margin: "auto",
    padding: "0 64px",

    [theme.breakpoints.down("md")]: {
      padding: '0px',
    },
  },

  manner: {
    background: '#ECE6DF',
    marginTop: theme.spacing(10),
    height: '740px',

    [theme.breakpoints.down("lg")]: {
      marginTop: theme.spacing(4),
    },

    [theme.breakpoints.down("md")]: {
      marginTop: theme.spacing(0),
    },
  },

  mannerContainer: {
    maxWidth: 1440,
    margin: "auto",
    padding: "40px 64px 0",

    [theme.breakpoints.down("md")]: {
      padding: '24px 0 0',
    },
  },

  mannerTitle: {
    margin: "auto",
    width: theme.spacing(32),
    height: theme.spacing(9),
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      width: theme.spacing(25),
      height: theme.spacing(8),
      marginBottom: theme.spacing(4),
    },
  }

}))

export default useStyle
