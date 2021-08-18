import { Box, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import Collab from './Collab'
import Hidden from '@material-ui/core/Hidden';
import Slider from "react-slick";

interface CollaborationProps {

}

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

  center: {
    overflow: 'initial',

    '& .slick-slide': {
      boxSizing: 'border-box',
      padding: 0
    },

    '& .slick-arrow': {
      display: 'none !important'
    },

    '& .slick-list': {
      overflow: 'initial',
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
  row: {
    marginTop: "4px",
    [theme.breakpoints.down("md")]: {
      marginTop: 0,
    }
  }
}));

const schneiderElectric = "/assets/collabBrand/schaneider.png"
const vinmar = "/assets/collabBrand/vinmar.png"
const siemens = "/assets/collabBrand/siemens.png"
const legrand = "/assets/collabBrand/legrand.png"
const abbBrand = "/assets/collabBrand/abb.png"
const fedeBrand = "/assets/collabBrand/fede.png"
const utenGerman = "/assets/collabBrand/uten.png"
const simon = "/assets/collabBrand/simon.png"


const Collaboration: React.FC<CollaborationProps> = ({

}) => {

  const classes = useStyles();
  const slickClass = slickStyle();

  const settingsMobile = {
    className: `${slickClass.center} slider variable-width`,
    infinite: true,
    slidesToScroll: 2,
    variableWidth: true,
    initialSlide: 0,
    slidesToShow: 1,
    speed: 500,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };

  return (
    <Box className="flex flex-wrap" >
      <Hidden smDown>
        <Grid container>
          <Grid item container xs={12}>
            <Grid item container md={12} lg={6}>
              <Grid xs={3}>
                <Collab width="100%" src={schneiderElectric} title="Schneider Electric icon" />
              </Grid>
              <Grid xs={3}>
                <Collab width="100%" src={vinmar} title="Vinmar icon" />
              </Grid>
              <Grid xs={3}>
                <Collab width="100%" src={siemens} title="Siemens icon" />
              </Grid>
              <Grid xs={3}>
                <Collab width="100%" src={legrand} title="Legrand icon" />
              </Grid>
            </Grid>

            <Grid item container md={12} lg={6}>
              <Grid xs={3}>
                <Collab width="100%" src={abbBrand} title="ABB icon" />
              </Grid>
              <Grid xs={3}>
                <Collab width="100%" src={fedeBrand} title="FEDE Switch and Light icon" />
              </Grid>
              <Grid xs={3}>
                <Collab width="100%" src={utenGerman} title="Uten German quality icon" />
              </Grid>
              <Grid xs={3}>
                <Collab width="100%" src={simon} title="Simon Brand" />
              </Grid>
            </Grid>
          </Grid>

          <Grid item container xs={12}>
            <Grid item container md={12} lg={6}>
              <Grid xs={3}>
                <Collab width="100%" src={schneiderElectric} title="Schneider Electric icon" />
              </Grid>
              <Grid xs={3}>
                <Collab width="100%" src={vinmar} title="Vinmar icon" />
              </Grid>
              <Grid xs={3}>
                <Collab width="100%" src={siemens} title="Siemens icon" />
              </Grid>
              <Grid xs={3}>
                <Collab width="100%" src={legrand} title="Legrand icon" />
              </Grid>
            </Grid>

            <Grid item container md={12} lg={6}>
              <Grid xs={3}>
                <Collab width="100%" src={abbBrand} title="ABB icon" />
              </Grid>
              <Grid xs={3}>
                <Collab width="100%" src={fedeBrand} title="FEDE Switch and Light icon" />
              </Grid>
              <Grid xs={3}>
                <Collab width="100%" src={utenGerman} title="Uten German quality icon" />
              </Grid>
              <Grid xs={3}>
                <Collab width="100%" src={simon} title="Simon Brand" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>

      <Hidden mdUp>
        <Box className={slickClass.rootSliderMobile}>
          <Slider {...settingsMobile}>
            <Box>
              <Collab width={160} src={schneiderElectric} title="Schneider Electric icon" />
              <Collab width={160} src={schneiderElectric} title="Schneider Electric icon" />
            </Box>
            <Box>
              <Collab width={160} src={vinmar} title="Vinmar icon" />
              <Collab width={160} src={vinmar} title="Vinmar icon" />
            </Box>
            <Box>
              <Collab width={160} src={siemens} title="Siemens icon" />
              <Collab width={160} src={siemens} title="Siemens icon" />
            </Box>
            <Box>
              <Collab width={160} src={legrand} title="Legrand icon" />
              <Collab width={160} src={legrand} title="Legrand icon" />
            </Box>
            <Box>
              <Collab width={160} src={abbBrand} title="ABB icon" />
              <Collab width={160} src={abbBrand} title="ABB icon" />
            </Box>
            <Box>
              <Collab width={160} src={fedeBrand} title="FEDE Switch and Light icon" />
              <Collab width={160} src={fedeBrand} title="FEDE Switch and Light icon" />
            </Box>
            <Box>
              <Collab width={160} src={utenGerman} title="Uten German quality icon" />
              <Collab width={160} src={utenGerman} title="Uten German quality icon" />
            </Box>
            <Box>
              <Collab width={160} src={simon} title="Simon Brand" />
              <Collab width={160} src={simon} title="Simon Brand" />
            </Box>
          </Slider>
        </Box>
      </Hidden>
    </Box>
  )
}

export default Collaboration
