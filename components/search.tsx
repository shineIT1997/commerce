import type { SearchPropsType } from '@lib/search-props'
import Link from 'next/link'
import { useState,useEffect } from 'react'
import { useRouter } from 'next/router'
import { Layout } from '@components/common'
import sliceStyle from '../assets/sliceStyle'
import { Box, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import CarouselVendor from './ui/CarouselVendor'
import axios from 'axios'
import type { Product } from '@commerce/types/product'
import { GetStaticPropsContext } from 'next'

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


export async function getStaticProps(context: GetStaticPropsContext) {

  console.log(context);
  

}


export default function Search({ brands }: SearchPropsType) {
  const [products, setProducts] = useState([])

  const classes = useStyles()
  const slickClass = sliceStyle()

  const router = useRouter()
  const { asPath } = router

  useEffect(() => {
    handleGetProducts()
  }, [asPath])

  const handleGetProducts = async () => {
    try {
      console.log("api", `${process.env.NEXT_PUBLIC_API_URL}/api${asPath}`);
      
      const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api${asPath}`)
      
      setProducts(data?.docs || [])
      
    } catch (error) {
      
    }
  }



  return <Box className={classes.root}>
    <Box className={slickClass.rootSliderMobile}>
      <CarouselVendor brands={brands} />
    </Box>
    <Grid container spacing={2}>
      {products.map((product: Product) => <Grid key={product._id} item lg={3} md={4} xs={6}>
        <Link href={`/product/${product?.slug}`}>
          <a href={`/product/${product?.slug}`}>
            <Box className={classes.box}>
              <img src={process.env.NEXT_PUBLIC_API_URL + product?.imagePath[0]} alt={product.title} />
            </Box>
          </a>
        </Link>
        <Typography className={classes.title}>{product.title} </Typography>
      </Grid>)}

    </Grid>
  </Box>
}

Search.Layout = Layout
