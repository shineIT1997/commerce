import type { SearchPropsType } from '@lib/search-props'
import GridOffIcon from '@material-ui/icons/GridOff';
import Link from 'next/link'
import { useState,useEffect } from 'react'
import { useRouter } from 'next/router'
import { Layout } from '@components/common'
import sliceStyle from '../assets/sliceStyle'
import { Box, Grid, Typography } from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import CarouselVendor from './ui/CarouselVendor'
import axios from 'axios'
import type { Product } from '@commerce/types/product'

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 1440,
    margin: "auto",
    padding: theme.spacing(4, 8),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(3, 2),
    },

    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2, 1),
    },
  },

  box: {
    background: '#F7F8FA',
    borderRadius: '24px',
    padding: theme.spacing(5),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(4),
    },

    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(3),
    },

    '& img': {
      height: 130,
      width: 130,
      [theme.breakpoints.down("sm")]: {
        height: 72,
        width: 72,
      }
    }
  },

  media: {
    height: 140,
  },

  title: {
    margin: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(1),
    },
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(0.5),
    }
  }
}));


export default function Search({ brands }: SearchPropsType) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)


  const classes = useStyles()
  const slickClass = sliceStyle()

  const router = useRouter()
  const { asPath } = router

  useEffect(() => {
    handleGetProducts()
  }, [asPath])

  const handleGetProducts = async () => {
    try {
      if(!loading) setLoading(true);
      const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api${asPath}`, {
        headers: {
        "Access-Control-Allow-Origin": "*"
      }})
      
      setProducts(data?.docs || [])
      
    } finally {
      setLoading(false)
    }
  }

  return <Box className={classes.root}>
    <Box className={slickClass.rootSliderMobile}>
      <CarouselVendor brands={brands} />
    </Box>
    <Grid container spacing={2}>
      {loading ? <div className="mx-auto">
        <CircularProgress/>
      </div>  :products.length ?
        products.map((product: Product) => <Grid key={product._id} item lg={3} md={4} xs={6}>
        <Link href={`/product/${product?.slug}`}>
          <a href={`/product/${product?.slug}`}>
            <Box className={classes.box}>
              <img src={process.env.NEXT_PUBLIC_API_URL + product?.imagePath[0]} alt={product.title} />
            </Box>
          </a>
        </Link>
        <Typography className={classes.title}>{product.title} </Typography>
        </Grid>) :
        <div className="group flex flex-col mx-auto">
          <div className="flex-1 px-12 py-24 flex flex-col justify-center items-center ">
            <GridOffIcon fontSize="large" />
            <p className="text-accent-6 px-10 text-center pt-2">
              Kh??ng c?? s???n ph???m trong danh s??ch
            </p>
          </div>
        </div>}

    </Grid>
  </Box>
}

Search.Layout = Layout
