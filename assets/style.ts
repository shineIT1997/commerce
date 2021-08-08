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
    boxSizing: "border-box",
    padding: "40px 64px 128px",

    [theme.breakpoints.down("md")]: {
      padding: '24px 16px 56px',
    },

    [theme.breakpoints.down("sm")]: {
      padding: '24px 8px 56px',
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
  },

  oddItem: {
    "&:nth-child(even)": {
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(-5),
    }
  },

  category: {
    maxWidth: 1440,
    margin: "auto",
    boxSizing: "border-box",
    padding: theme.spacing(7, 8, 9),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(7, 2, 5),
    },

    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(7, 1, 5),
    },
  },

  formControl: {
    minWidth: 120,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '13px',
    lineHeight: '13px',
    textTransform: 'uppercase',
    color: '#313131',

    "& .MuiSelect-outlined": {
      padding: theme.spacing(1, 1.5)
    }
  },

  cateTitle: {
    marginRight: theme.spacing(3),
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '25px',
    lineHeight: '24px',
    color: '#313131',
  },

  btnMore: {
    textTransform: 'uppercase',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '13px',
    lineHeight: '13px',
    color: '#313131',
  },

  cateItem: {
    height: "100%",
    padding: theme.spacing(4, 4, 7),
    display: "flex",
    justifyContent: "space-between"
  },

  cateName: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '22px',
    lineHeight: '36px',
    color: '#313131',
  },

  cateImage: {
    maxWidth: 124,
    objectFit: 'contain',
  },

  smallCateItem: {
    height: "100%",
    padding: theme.spacing(4, 4, 3),
    display: "flex",
    justifyContent: "space-between",

    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(4, 4, 7),
    },
  },

  cateSmallImage: {
    maxWidth: 80,
    objectFit: 'contain',

    [theme.breakpoints.down("sm")]: {
      maxWidth: 124,
    },
  }

}))

export default useStyle
