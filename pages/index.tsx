import { useState, useEffect } from 'react'
import commerce from '@lib/api/commerce'
import Slider from "react-slick";
import { Layout } from '@components/common'
import { ProductCard } from '@components/product'
import { Marquee, Hero } from '@components/ui'
import Vendor from '@components/ui/Vendor'
import Manner from '@components/ui/Manner'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import Image, { ImageProps } from 'next/image'


import sliceStyle from '../assets/sliceStyle'
import useStyles from '../assets/style'

const settings = {
  className: "slider variable-width",
  dots: true,
  infinite: true,
  centerMode: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true
};



// import HomeAllProductsGrid from '@components/common/HomeAllProductsGrid'
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import {
  Box,
  Button,
  Grid,
  Typography,
  FormControl,
  InputLabel,
  Select,
} from '@material-ui/core';

export async function getStaticProps({
  preview,
  locale,
  locales,
}: GetStaticPropsContext) {
  const config = { locale, locales }
  const productsPromise = commerce.getAllProducts({
    variables: { first: 6 },
    config,
    preview,
    // Saleor provider only
    ...({ featured: true } as any),
  })
  const pagesPromise = commerce.getAllPages({ config, preview })
  const siteInfoPromise = commerce.getSiteInfo({ config, preview })
  const { products } = await productsPromise
  const { pages } = await pagesPromise
  const { categories, brands } = await siteInfoPromise

  return {
    props: {
      products,
      categories,
      brands,
      pages,
    },
    revalidate: 60,
  }
}

const logoImage = '/assets/mobile/logo.png'
const bannerImage = '/assets/Banner.jpg'
const mannerTitle = '/assets/manner_tilte.png'
const cateItem = '/assets/cate_image.png'
const smallCateImage = '/assets/7 1.png'

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {

  const slickClass = sliceStyle()
  const classes = useStyles()

  const settingsDesktop = {
    className: `${slickClass.center} slider variable-width`,
    infinite: true,
    slidesToScroll: 5,
    variableWidth: true,
    initialSlide: 0,
    slidesToShow: 1,
    speed: 500,
    nextArrow: <NavigateNextIcon />,
    prevArrow: <NavigateBeforeIcon />
  };

  const settingsMobile = {
    className: `${slickClass.center} slider variable-width`,
    infinite: true,
    slidesToScroll: 2,
    variableWidth: true,
    initialSlide: 0,
    slidesToShow: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };

  function getColor() {
    return "hsl(" + 360 * Math.random() + ',' +
      (25 + 70 * Math.random()) + '%,' +
      (85 + 10 * Math.random()) + '%)'
  }

  return (
    <>
      <Box className={slickClass.rootSliderMobile}>

        <Slider {...settingsMobile}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12, 13, 14, 15].map(el => {
            return <Vendor bg={`#${Math.floor(Math.random() * 16777215).toString(16)}`} key={el} title="Test" imageSrc={logoImage} />
          })}
        </Slider>
      </Box>

      <Box className={classes.banner}>
        <Image
          quality="85"
          src={bannerImage}
          alt='Wall'
          layout="responsive"
          width={1440}
          height={520}
        />
      </Box>

      <Box className={slickClass.rootSliderDesktop}>
        <Slider {...settingsDesktop}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12, 13, 14, 15].map(el => {
            return <Vendor bg={getColor()} key={el} title="Test" imageSrc={logoImage} />

          })}
        </Slider>
      </Box>

      <Box className={classes.manner}>
        <Box className={classes.mannerContainer}>
          <Box>
            <img
              className={classes.mannerTitle}
              src={mannerTitle}
              alt='Phong Cách' />
          </Box>

          <Grid item xs={12}>
            <Grid container justifyContent="center" spacing={3}>
              {[0, 1, 2, 3].map((value) => (
                <Grid className={classes.oddItem + " flex justify-center"} key={value} item xs={6} lg={3}>
                  <Manner />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box className={classes.category}>
        <Box display="flex" className="justify-between" mb={6}>
          <Box display="flex" className="items-center">
            <Typography className={classes.cateTitle}>
              Category
            </Typography>

            <FormControl variant="outlined" className={classes.formControl}>
              <Select
                native
              // value={state.age}
              // onChange={handleChange}

              >
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </Select>
            </FormControl>
          </Box>

          <Button variant="outlined" className={classes.btnMore}>Xem thêm</Button>
        </Box>

        <Grid item xs={12}>
          <Box>
            <Grid container justifyContent="space-between" spacing={3}>
              <Grid item xs={12} md={4}>
                <Box style={{ background: '#E9D2CE' }} className={classes.cateItem}>
                  <Box>
                    <Typography className={classes.cateName}>
                      DELTA line
                    </Typography>
                    <Typography variant="body2">
                      4000 sản phẩm
                    </Typography>
                  </Box>

                  <Box>
                    <img
                      className={classes.cateImage}
                      src={cateItem}
                      alt='Phong Cách' />
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box style={{ background: '#DFE9EF' }} className={classes.cateItem}>
                  <Box>
                    <Typography className={classes.cateName}>
                      DELTA line
                    </Typography>
                    <Typography variant="body2">
                      4000 sản phẩm
                    </Typography>
                  </Box>

                  <Box>
                    <img
                      className={classes.cateImage}
                      src={cateItem}
                      alt='Phong Cách' />
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box style={{ background: '#FCF1D5' }} className={classes.cateItem}>
                  <Box>
                    <Typography className={classes.cateName}>
                      DELTA line
                    </Typography>
                    <Typography variant="body2">
                      4000 sản phẩm
                    </Typography>
                  </Box>

                  <Box>
                    <img
                      className={classes.cateImage}
                      src={cateItem}
                      alt='Phong Cách' />
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} md={6} lg={3}>
                <Box style={{ background: '#EDEAE4' }} className={classes.smallCateItem}>
                  <Box>
                    <Typography className={classes.cateName}>
                      DELTA line
                    </Typography>
                    <Typography variant="body2">
                      4000 sản phẩm
                    </Typography>
                  </Box>

                  <Box>
                    <img
                      className={classes.cateSmallImage}
                      src={cateItem}
                      alt='Phong Cách' />
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <Box style={{ background: '#E9D2CE' }} className={classes.smallCateItem}>
                  <Box>
                    <Typography className={classes.cateName}>
                      DELTA line
                    </Typography>
                    <Typography variant="body2">
                      4000 sản phẩm
                    </Typography>
                  </Box>

                  <Box>
                    <img
                      className={classes.cateSmallImage}
                      src={cateItem}
                      alt='Phong Cách' />
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <Box style={{ background: '#DCCDC6' }} className={classes.smallCateItem}>
                  <Box>
                    <Typography className={classes.cateName}>
                      DELTA line
                    </Typography>
                    <Typography variant="body2">
                      4000 sản phẩm
                    </Typography>
                  </Box>

                  <Box>
                    <img
                      className={classes.cateSmallImage}
                      src={cateItem}
                      alt='Phong Cách' />
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <Box style={{ background: '#D1DCC4' }} className={classes.smallCateItem}>
                  <Box>
                    <Typography className={classes.cateName}>
                      DELTA line
                    </Typography>
                    <Typography variant="body2">
                      4000 sản phẩm
                    </Typography>
                  </Box>

                  <Box>
                    <img
                      className={classes.cateSmallImage}
                      src={smallCateImage}
                      alt='Phong Cách' />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>

      </Box>


      {
        products.slice(0, 3).map((product: any, i: number) => (
          <ProductCard
            key={product.id}
            product={product}
            imgProps={{
              width: i === 0 ? 1080 : 540,
              height: i === 0 ? 1080 : 540,
            }}
          />
        ))
      }
      <Marquee>
        {products.slice(3).map((product: any, i: number) => (
          <ProductCard key={product.id} product={product} variant="slim" />
        ))}
      </Marquee>
      {/* <HomeAllProductsGrid
        newestProducts={products}
        categories={categories}
        brands={brands}
      /> */}
    </>
  )
}

Home.Layout = Layout
