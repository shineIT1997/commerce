import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  nav: {
    height: 64,
    maxWidth: 1440,
    margin: "auto",
    position: "relative",
    justifyContent: "space-between",
    alignItems: "center",
    display: "flex",
  },

  button: {
    width: 'fit-content',
    height: 32,
    marginLeft: 8,
    borderRadius: 16,
    padding: theme.spacing(0.5, 1.5),
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '19px',
    textAlign: 'center',
    color: '#313131',
    "&:hover": {
      background: "#F8B864"
    }
  },

  homeIcon: {
    color: "#646464",
    "&:hover": {
      color: "#F8B864"
    }
  }
}
))

export default useStyles
