import { makeStyles } from '@material-ui/core'

const useStyle = makeStyles(theme => ({
  root: {
    alignItems: 'center',
    flexDirection: "column",
    display: 'flex',
    justifyContent: 'center',
  },

  blurBackGround: {

    width: "100%",
    height: "100%",
    position: 'absolute',
    top: 0,
    left: 0,
  },

  imageBox: {
    backdropFilter: 'blur(40px)',
    position: "relative",
    borderRadius: "50%",
    width: 108,
    height: 108,
    padding: theme.spacing(3),
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',

    '& img': {
      width: "100%",
      height: "100%",
      objectFit: 'contain'
    },


    [theme.breakpoints.down("md")]: {
      width: 72,
      height: 72,
      padding: theme.spacing(2),
    }
  },

  title: {
    marginTop: theme.spacing(2),
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "13px",
    lineHeight: "12px",
    textTransform: "uppercase",
    color: "#313131",

    [theme.breakpoints.down("md")]: {
      marginTop: theme.spacing(1.5),
      fontSize: "10px",
    }
  }
}))

export default useStyle
