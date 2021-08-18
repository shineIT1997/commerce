import { makeStyles } from '@material-ui/core'

const slickStyle = makeStyles(theme => ({

  rootSliderMobile: {
    maxWidth: "1440px",
    width: '100%',
    margin: 'auto',
    padding: '0px',

    [theme.breakpoints.up("lg")]: {
      display: "none",
    },

    '& .slick-arrow': {
      display: 'none !important'
    },
  },

  rootSliderDesktop: {
    maxWidth: "1440px",
    width: '100%',
    margin: 'auto',
    marginTop: theme.spacing(5),
    padding: '0px 48px',

    [theme.breakpoints.down("md")]: {
      display: "none",
      padding: '0px 32px',
    },

    [theme.breakpoints.down("sm")]: {
      padding: '0px',
    }
  },

  center: {
    marginTop: 16,
    padding: theme.spacing(0, 2),

    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(0, 2),
      marginTop: 0,
      marginBottom: 16
    },

    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(0),
    },

    '& .slick-slide': {
      margin: theme.spacing(0, 1.5),

      [theme.breakpoints.down("md")]: {
        margin: theme.spacing(0, 0.5)
      },
    },

    '& .slick-arrow': {
      fontSize: 32,
      color: "#313131",


    },

    '& .slick-disabled': {
      opacity: '0.3',
    },

    '& .slick-list': {
      overflow: 'auto',
      padding: theme.spacing(0)
    },

    '& .slick-track': {
      display: "flex"
    },

    '& .slick-prev:before, .slick-next:before': {
      // overflow: 'initial',
      color: "#313131"
    },
  },

  project: {
    [theme.breakpoints.down("md")]: {
      display: "initial",
      padding: '0px 32px',
    },

    '& .slick-slide': {
      margin: theme.spacing(0, 1),
      [theme.breakpoints.down("md")]: {
        margin: theme.spacing(0, 0.5)
      },
    },
    '& .slick-list': {
      [theme.breakpoints.down("md")]: {
        padding: theme.spacing(0, 1)
      },
    },

    '& .slick-arrow': {
      [theme.breakpoints.down("md")]: {
        display: 'none !important'
      },
    },

  }

}))

export default slickStyle
