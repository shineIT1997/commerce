import { Margin } from './../framework/saleor/schema.d';
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
    marginTop: theme.spacing(6),

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
      padding: '24px 12px 56px',
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

      [theme.breakpoints.down("sm")]: {
        padding: `4px 8px 4px 4px !important`
      },
    },

    "&:nth-child(odd)": {
      [theme.breakpoints.down("sm")]: {
        padding: `4px 4px 4px 8px !important`
      },
    },


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
    minWidth: 100,
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

    [theme.breakpoints.down("md")]: {
      marginRight: theme.spacing(2),
    }
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
  },

  collab: {
    background: '#ECE6DF',
    overflow: "hidden"
  },

  collabContainer: {
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

  collabtilte: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '25px',
    lineHeight: '40px',
  },

  collabBox: {
    marginTop: theme.spacing(5),

    [theme.breakpoints.down("md")]: {
      marginTop: theme.spacing(4),
    },
  },

  vendorTitle: {
    marginTop: theme.spacing(2),
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "13px",
    lineHeight: "12px",
    textTransform: "uppercase",
    color: "#313131",
    textAlign: "center",

    [theme.breakpoints.down("md")]: {
      marginTop: theme.spacing(1.5),
      fontSize: "10px",
    }
  },

  projectBox: {
    margin: "auto",
    maxWidth: 1440,
    padding: theme.spacing(7, 8, 0),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(7, 2, 0),
    },

    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(7, 1, 0),
    },
  },

  proTitle: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '25px',
    lineHeight: '29px',
    color: '#313131',
  },

  whyChoiceItem: {
    marginTop: theme.spacing(3),
    '& img': {
      margin: 'auto',
    }
  },

  whyChoiceTitle: {
    fontWeight: 500,
    fontSize: '17px',
    lineHeight: '30px',
    color: '#313131',
  },

  whyChoiceContent: {
    marginTop: theme.spacing(2),
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '20px',
    color: '#313131',
  },

  projectTitle: {
    marginTop: theme.spacing(11),

    [theme.breakpoints.down("md")]: {
      marginTop: theme.spacing(4),
    },
  },

  project: {
    borderRadius: theme.spacing(1),

    [theme.breakpoints.down("md")]: {
      width: 135,
      height: 190
    },
  },

  projectContent: {
    position: "absolute",
    bottom: 24,
    left: 24,

    [theme.breakpoints.down("md")]: {
      bottom: 12,
      left: 12,
    },
  },

  projectHeader: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '20px',
    lineHeight: '30px',
    color: '#FFFFFF',
  },

  news: {
    background: '#ECE6DF',
  },

  newsContainer: {
    maxWidth: 1440,
    margin: "auto",
    padding: theme.spacing(7, 8),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(7, 2),
    },

    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(7, 1),
    },
  },

  newsTitle: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '25px',
    lineHeight: '40px',
    color: '#313131',
  },

  newList: {
    [theme.breakpoints.down("md")]: {
      width: "calc(100% + 16px)",
      marginLeft: -8,
    },

  },

  hotNew: {
    position: "relative",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1),
    background: "#ffff",
    "& img": {
      objectFit: "none",
      height: 440,
    }
  },

  hotNewDesktop: {
    position: "relative",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1),
  },

  hotNewTitle: {
    padding: theme.spacing(3, 3, 1),
    fontStyle: 'normal',
    fontWeight: 300,
    fontSize: '24px',
    lineHeight: '32px',
    color: '#313131',
  },

  hotNewDescription: {
    padding: theme.spacing(0, 3, 3),
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '20px',
    color: '#777777',
  },

  newItem: {
    position: "relative",
    padding: theme.spacing(0, 0, 13),
    background: "#ffff",
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(1),
      padding: theme.spacing(1.2),
      display: "flex",

      "& img": {
        maxWidth: 120,
        objectFit: "contain"
      }
    }
  },

  newItemDescription: {
    marginLeft: theme.spacing(1),
    fontStyle: 'normal',
    fontWeight: 300,
    fontSize: '17px',
    lineHeight: '25px',
    color: '#313131',
  },

  hotNewBox: {
    left: 42,
    bottom: 24,
    width: 600,
    background: "#ffff",
    position: "absolute"
  },

  newContentBox: {
    background: "#ffff",
    margin: theme.spacing(0, 3),
    position: "absolute",
    bottom: theme.spacing(7.5),
    transform: 'translate(0, 25%)',
  }

}))

export default useStyle
