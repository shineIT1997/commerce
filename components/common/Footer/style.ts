import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({

  social: {
    background: "#2D3843",
    height: 72,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },

  contact: {
    background: "#212B35",
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
    marginBottom: 32,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '24px',
    textAlign: 'center',
    color: '#D1D1D1',
  },

  box: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(0, 8),
  },

  line: {
    background: "#344250",
    width: "100%"
  },

  coppyRight: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '12px',
    lineHeight: '20px',
    textAlign: 'center',
    color: '#9C9C9C',
    marginBottom: 32,
    marginTop: 24
  }
}
))

export default useStyles
