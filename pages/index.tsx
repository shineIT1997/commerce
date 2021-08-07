import { useState, useEffect } from 'react'
import commerce from '@lib/api/commerce'
import Slider from "react-slick";
import { Layout } from '@components/common'
import { ProductCard } from '@components/product'
import { Grid, Marquee, Hero } from '@components/ui'
import Vendor from '@components/ui/Vendor'
import Manner from '@components/ui/Manner'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Image, { ImageProps } from 'next/image'


import sliceStyle from './sliceStyle'
import useStyles from './style'


// import HomeAllProductsGrid from '@components/common/HomeAllProductsGrid'
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { Box, Typography } from '@material-ui/core';

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

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {

  const slickClass = sliceStyle()
  const classes = useStyles()

  const settingsDesktop = {
    className: `${slickClass.center} slider variable-width`,
    infinite: false,
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

          <Box className="flex flex-wrap">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12, 13, 14, 15].map(el => {
              return <Box mx={1} my={1} key={el}>
                <Manner />
              </Box>
            })}
          </Box>
        </Box>
      </Box>
      <Hero
        headline=" Dessert dragée halvah croissant."
        description="Cupcake ipsum dolor sit amet lemon drops pastry cotton candy. Sweet carrot cake macaroon bonbon croissant fruitcake jujubes macaroon oat cake. Soufflé bonbon caramels jelly beans. Tiramisu sweet roll cheesecake pie carrot cake. "
      />

      <Grid layout="B" variant="filled">
        {products.slice(0, 3).map((product: any, i: number) => (
          <ProductCard
            key={product.id}
            product={product}
            imgProps={{
              width: i === 0 ? 1080 : 540,
              height: i === 0 ? 1080 : 540,
            }}
          />
        ))}
      </Grid>
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
