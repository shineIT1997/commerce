import React, { FC } from 'react';
import Slider from "react-slick";
import sliceStyle from '../../../assets/sliceStyle'
import Vendor from '../Vendor';
import Box from '@material-ui/core/Box'
import Link from 'next/link'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'

const useStyle = makeStyles(theme => ({
  root: {
    alignItems: 'center',
    flexDirection: "column",
    display: 'flex !important',
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

interface brand {
  _id: string,
  imagePath: string,
  name: string,
  supId: string,
}

interface CarouselVendorProps {
  brands: Array<brand>,
}

const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL

const hotVendor = "/assets/hot_vendor.png"
const newVendor = "/assets/new_vendor.png"

const CarouselVendor: FC<CarouselVendorProps> = ({ brands }) => {
  const classes = useStyle()
  const slickClass = sliceStyle()

  const settingsMobile = {
    className: `${slickClass.center} slider variable-width`,
    infinite: false,
    slidesToScroll: 2,
    variableWidth: true,
    initialSlide: 0,
    slidesToShow: 1,
    speed: 500,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };

  function getColor() {
    return "hsl(" + 360 * Math.random() + ',' +
      (10 + 20 * Math.random()) + '%,' +
      (78 + 10 * Math.random()) + '%)'
  }

  return <Slider {...settingsMobile}>
    <Box className={classes.root}>
      <Link href={`/search`}>
        <a href={`/search`}>
          <img src={hotVendor}
            alt='Titus logo' />
        </a>
      </Link>
      <Typography className={classes.title}>Shop</Typography>
    </Box>

    <Box className={classes.root}>
      <Link href={`/search`}>
        <a href={`/search`}>
          <img src={newVendor}
            alt='Titus logo' />
        </a>
      </Link>
      <Typography className={classes.title}>Shop</Typography>
    </Box>

    {brands.map((brand: brand) => {
      return <Vendor
        bg={getColor()} key={brand._id}
        title={brand.name}
        brandCode={brand._id}
        imageSrc={NEXT_PUBLIC_API_URL + brand?.imagePath} />
    })}
  </Slider>
}

export default CarouselVendor
