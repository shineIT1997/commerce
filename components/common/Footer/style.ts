import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  rootFooter: {

  },

  social: {
    background: "#2D3843",
    height: 72,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },

  contact: {
    padding: theme.spacing(0, 8),
    background: "#212B35",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center"
  },

  companyName: {
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '18px',
    lineHeight: '21px',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#FFFFFF',
  },

  address: {
    marginTop: 8,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '24px',
    textAlign: 'center',
    color: '#D1D1D1',
  }
}
))

export default useStyles
