import cn from 'classnames'
import type { SearchPropsType } from '@lib/search-props'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'

import { Layout } from '@components/common'
import { ProductCard } from '@components/product'
import type { Product } from '@commerce/types/product'
import { Container, Skeleton } from '@components/ui'

import useSearch from '@framework/product/use-search'

import getSlug from '@lib/get-slug'
import sliceStyle from '../assets/sliceStyle'

const SORT = Object.entries({
  'trending-desc': 'Trending',
  'latest-desc': 'Latest arrivals',
  'price-asc': 'Price: Low to high',
  'price-desc': 'Price: High to low',
})

import {
  filterQuery,
  getCategoryPath,
  getDesignerPath,
  useSearchMeta,
} from '@lib/search'
import { Box, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import type { GetStaticPropsContext } from 'next'
import { getAllBrand } from '@lib/api/commerce'
import CarouselVendor from './ui/CarouselVendor'

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
  const [activeFilter, setActiveFilter] = useState('')
  const [toggleFilter, setToggleFilter] = useState(false)
  const classes = useStyles()
  const slickClass = sliceStyle()

  const router = useRouter()
  const { asPath, locale } = router
  const { q, sort } = router.query
  // `q` can be included but because categories and designers can't be searched
  // in the same way of products, it's better to ignore the search input if one
  // of those is selected
  const query = filterQuery({ sort })

  const { pathname, category, brand } = useSearchMeta(asPath)
  // const activeBrand = brands.find(
  //   (b: any) => getSlug(b.node.path) === `brands/${brand}`
  // )?.node

  const { data } = useSearch({
    search: typeof q === 'string' ? q : '',
    // brandId: (activeBrand as any)?.entityId,
    sort: typeof sort === 'string' ? sort : '',
    locale,
  })

  const handleClick = (event: any, filter: string) => {
    if (filter !== activeFilter) {
      setToggleFilter(true)
    } else {
      setToggleFilter(!toggleFilter)
    }
    setActiveFilter(filter)
  }

  return <Box className={classes.root}>
    <Box className={slickClass.rootSliderMobile}>
      <CarouselVendor brands={brands} />
    </Box>
    <Grid container spacing={2}>
      <Grid item lg={3} md={4} xs={6}>
        <Box className={classes.box}>
          <img src="/assets/cate_image.png" alt="" />
        </Box>
        <Typography className={classes.title}>Lorem ipsum Lorem ipsumLorem </Typography>
      </Grid>
      <Grid item lg={3} md={4} xs={6}>
        <Box className={classes.box}>
          <img src="/assets/cate_image.png" alt="" />
        </Box>
        <Typography className={classes.title}>Lorem ipsum Lorem ipsumLorem </Typography>
      </Grid>
      <Grid item lg={3} md={4} xs={6}>
        <Box className={classes.box}>
          <img src="/assets/cate_image.png" alt="" />
        </Box>
        <Typography className={classes.title}>Lorem ipsum Lorem ipsumLorem </Typography>
      </Grid>
      <Grid item lg={3} md={4} xs={6}>
        <Box className={classes.box}>
          <img src="/assets/cate_image.png" alt="" />
        </Box>
        <Typography className={classes.title}>Lorem ipsum Lorem ipsumLorem </Typography>
      </Grid>
      <Grid item lg={3} md={4} xs={6}>
        <Box className={classes.box}>
          <img src="/assets/cate_image.png" alt="" />
        </Box>
        <Typography className={classes.title}>Lorem ipsum Lorem ipsumLorem </Typography>
      </Grid>
      <Grid item lg={3} md={4} xs={6}>
        <Box className={classes.box}>
          <img src="/assets/cate_image.png" alt="" />
        </Box>
        <Typography className={classes.title}>Lorem ipsum Lorem ipsumLorem </Typography>
      </Grid>
      <Grid item lg={3} md={4} xs={6}>
        <Box className={classes.box}>
          <img src="/assets/cate_image.png" alt="" />
        </Box>
        <Typography className={classes.title}>Lorem ipsum Lorem ipsumLorem </Typography>
      </Grid>
      <Grid item lg={3} md={4} xs={6}>
        <Box className={classes.box}>
          <img src="/assets/cate_image.png" alt="" />
        </Box>
        <Typography className={classes.title}>Lorem ipsum Lorem ipsumLorem </Typography>
      </Grid>
      <Grid item lg={3} md={4} xs={6}>
        <Box className={classes.box}>
          <img src="/assets/cate_image.png" alt="" />
        </Box>
        <Typography className={classes.title}>Lorem ipsum Lorem ipsumLorem </Typography>
      </Grid>
      <Grid item lg={3} md={4} xs={6}>
        <Box className={classes.box}>
          <img src="/assets/cate_image.png" alt="" />
        </Box>
        <Typography className={classes.title}>Lorem ipsum Lorem ipsumLorem </Typography>
      </Grid>
      <Grid item lg={3} md={4} xs={6}>
        <Box className={classes.box}>
          <img src="/assets/cate_image.png" alt="" />
        </Box>
        <Typography className={classes.title}>Lorem ipsum Lorem ipsumLorem </Typography>
      </Grid>
      <Grid item lg={3} md={4} xs={6}>
        <Box className={classes.box}>
          <img src="/assets/cate_image.png" alt="" />
        </Box>
        <Typography className={classes.title}>Lorem ipsum Lorem ipsumLorem </Typography>
      </Grid>
      <Grid item lg={3} md={4} xs={6}>
        <Box className={classes.box}>
          <img src="/assets/cate_image.png" alt="" />
        </Box>
        <Typography className={classes.title}>Lorem ipsum Lorem ipsumLorem </Typography>
      </Grid>
      <Grid item lg={3} md={4} xs={6}>
        <Box className={classes.box}>
          <img src="/assets/cate_image.png" alt="" />
        </Box>
        <Typography className={classes.title}>Lorem ipsum Lorem ipsumLorem </Typography>
      </Grid>
      <Grid item lg={3} md={4} xs={6}>
        <Box className={classes.box}>
          <img src="/assets/cate_image.png" alt="" />
        </Box>
        <Typography className={classes.title}>Lorem ipsum Lorem ipsumLorem </Typography>
      </Grid>
      <Grid item lg={3} md={4} xs={6}>
        <Box className={classes.box}>
          <img src="/assets/cate_image.png" alt="" />
        </Box>
        <Typography className={classes.title}>Lorem ipsum Lorem ipsumLorem </Typography>
      </Grid>
      <Grid item lg={3} md={4} xs={6}>
        <Box className={classes.box}>
          <img src="/assets/cate_image.png" alt="" />
        </Box>
        <Typography className={classes.title}>Lorem ipsum Lorem ipsumLorem </Typography>
      </Grid>
      <Grid item lg={3} md={4} xs={6}>
        <Box className={classes.box}>
          <img src="/assets/cate_image.png" alt="" />
        </Box>
        <Typography className={classes.title}>Lorem ipsum Lorem ipsumLorem </Typography>
      </Grid>
      <Grid item lg={3} md={4} xs={6}>
        <Box className={classes.box}>
          <img src="/assets/cate_image.png" alt="" />
        </Box>
        <Typography className={classes.title}>Lorem ipsum Lorem ipsumLorem </Typography>
      </Grid>
      <Grid item lg={3} md={4} xs={6}>
        <Box className={classes.box}>
          <img src="/assets/cate_image.png" alt="" />
        </Box>
        <Typography className={classes.title}>Lorem ipsum Lorem ipsumLorem </Typography>
      </Grid>
      <Grid item lg={3} md={4} xs={6}>
        <Box className={classes.box}>
          <img src="/assets/cate_image.png" alt="" />
        </Box>
        <Typography className={classes.title}>Lorem ipsum Lorem ipsumLorem </Typography>
      </Grid>
    </Grid>
  </Box>
}

Search.Layout = Layout
