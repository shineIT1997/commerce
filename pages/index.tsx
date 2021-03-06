import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import commerce, { getAllPostsForHome } from '@lib/api/commerce'
import Slider from 'react-slick'
import { Collaboration, Layout } from '@components/common'
import Vendor from '@components/ui/Vendor'
import Manner from '@components/ui/Manner'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import { useState, ChangeEvent } from 'react'
import Hidden from '@material-ui/core/Hidden'
import Link from 'next/link'

import Image, { ImageProps } from 'next/image'

import sliceStyle from '../assets/sliceStyle'
import useStyles from '../assets/style'

// import HomeAllProductsGrid from '@components/common/HomeAllProductsGrid'
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import {
  Box,
  Button,
  Grid,
  Typography,
  FormControl,
  Select,
} from '@material-ui/core'
import CarouselVendor from '@components/ui/CarouselVendor'

interface manner {
  _id: string
  name: string
  countProduct: number
  countSupplier: number
  mannerId: string
  imagePath: string
  description: string
}

interface brand {
  _id: string
  imagePath: string
  name: string
  supId: string
  cateId: Array<any>
}

export async function getStaticProps({}: GetStaticPropsContext) {
  const homeData = await getAllPostsForHome()
  const { suppliers, categories, manners } = homeData.data

  return {
    props: {
      categories,
      manners,
      brands: suppliers,
    },
    revalidate: 60,
  }
}

const bannerImage = '/assets/Banner.jpg'
const bannerMobile = '/assets/banner_mobile.png'
const mannerTitle = '/assets/manner_tilte.png'
const cateItem = '/assets/cate_image.png'
const smallCateImage = '/assets/7 1.png'
const hotVendor = '/assets/hot_vendor_desktop.png'
const newVendor = '/assets/new_vendor_desktop.png'

export default function Home({
  brands,
  manners,
  ...props
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [selectedBrand, setSelectedBrand] = useState(brands[0]?.supId || '')
  const [more, setMore] = useState<boolean>(false)
  const slickClass = sliceStyle()
  const classes = useStyles()
  const activeBrand: brand =
    selectedBrand === 'All'
      ? {
          cateId: brands
            .reduce(
              (res: Array<any>, brand: brand) => [...res, ...brand.cateId],
              []
            )
            .reduce(
              (res: Array<object>, cate: any) =>
                res.some((el: any) => cate?._id === el?._id)
                  ? res
                  : [...res, cate],
              []
            ),
        }
      : brands.find((brand: brand) => brand.supId === selectedBrand)

  const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL

  const settingsDesktop = {
    className: `${slickClass.center} slider variable-width`,
    infinite: false,
    slidesToScroll: 1,
    variableWidth: true,
    initialSlide: 0,
    slidesToShow: 1,
    speed: 500,
    nextArrow: <NavigateNextIcon />,
    prevArrow: <NavigateBeforeIcon />,
  }

  const settingProject = {
    className: `${slickClass.center} slider variable-width`,
    infinite: true,
  }

  const handleOnChangeSelect = (
    event: ChangeEvent<{
      name?: string | undefined
      value: unknown
    }>
  ) => {
    if (!event.target.value) return
    setMore(false)
    setSelectedBrand(event.target.value || '')
  }

  function getColor() {
    return (
      'hsl(' +
      360 * Math.random() +
      ',' +
      (10 + 20 * Math.random()) +
      '%,' +
      (78 + 10 * Math.random()) +
      '%)'
    )
  }

  return (
    <>
      <Box className={slickClass.rootSliderMobile}>
        <CarouselVendor brands={brands} />
      </Box>

      <Hidden xsDown>
        <Box className={classes.banner}>
          <Image
            quality="85"
            src={bannerImage}
            alt="Wall"
            layout="responsive"
            width={1440}
            height={520}
          />
        </Box>
      </Hidden>

      <Hidden smUp>
        <Box className={classes.banner}>
          <Image
            src={bannerMobile}
            alt="Wall"
            layout="responsive"
            width={90}
            height={100}
          />
        </Box>
      </Hidden>

      <Box className={slickClass.rootSliderDesktop}>
        <Slider {...settingsDesktop}>
          <Box>
            <Link href={`/search?isHot`}>
              <a href={`/search?isHot`}>
                <img src={hotVendor} alt="Titus logo" />
              </a>
            </Link>
            <Typography className={classes.vendorTitle}>Shop</Typography>
          </Box>

          <Box>
            <Link href={`/search`}>
              <a href={`/search`}>
                <img src={newVendor} alt="Titus logo" />
              </a>
            </Link>
            <Typography className={classes.vendorTitle}>Shop</Typography>
          </Box>

          {brands.map((brand: brand) => {
            return (
              <Vendor
                brandCode={brand._id}
                bg={getColor()}
                key={brand._id}
                title={brand.name}
                imageSrc={NEXT_PUBLIC_API_URL + brand?.imagePath}
              />
            )
          })}
        </Slider>
      </Box>

      <Box className={classes.manner}>
        <Box className={classes.mannerContainer}>
          <Box>
            <img
              className={classes.mannerTitle}
              src={mannerTitle}
              alt="Phong C??ch"
            />
          </Box>

          <Grid item xs={12}>
            <Grid container justifyContent="center" spacing={3}>
              {manners.map((manner: manner) => (
                <Grid
                  className={classes.oddItem + ' flex justify-center'}
                  key={manner._id}
                  item
                  xs={6}
                  lg={3}
                >
                  <Manner
                    mannerId={manner._id}
                    description={manner.description}
                    alt={manner.name}
                    countProduct={manner.countProduct}
                    countSupplier={manner.countSupplier}
                    src={NEXT_PUBLIC_API_URL + manner?.imagePath}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box className={classes.category}>
        <Box display="flex" className="justify-between" mb={6}>
          <Box display="flex" className="items-center">
            <Typography className={classes.cateTitle}>Category</Typography>

            <FormControl variant="outlined" className={classes.formControl}>
              <Select value={selectedBrand} onChange={handleOnChangeSelect}>
                <option className="cursor-pointer" key="All" value="All">
                  All
                </option>
                {brands?.length &&
                  brands.map((brand: brand) => (
                    <option
                      className="cursor-pointer"
                      key={brand.supId}
                      value={brand.supId}
                    >
                      {brand.name}
                    </option>
                  ))}
              </Select>
            </FormControl>
          </Box>
          <Button
            disabled={more}
            onClick={() => setMore(true)}
            variant="outlined"
            className={classes.btnMore}
          >
            Xem th??m
          </Button>
        </Box>

        <Grid item xs={12}>
          <Box>
            <Grid container spacing={3}>
              {activeBrand &&
                activeBrand.cateId.slice(0, 3).map((cate: any, idx: number) => (
                  <Grid key={cate?._id} item xs={12} md={4}>
                    <Link
                      href={`/search?supplierID=${activeBrand?._id}&cateId=${cate?._id}`}
                    >
                      <a
                        href={`/search?supplierID=${activeBrand?._id}&cateId=${cate?._id}`}
                      >
                        <Box
                          style={{ background: getColor() }}
                          className={classes.cateItem}
                        >
                          <Box>
                            <Typography className={classes.cateName}>
                              {cate?.name}
                            </Typography>
                            <Typography variant="body2">
                              {cate?.countProduct || 0} s???n ph???m
                            </Typography>
                          </Box>

                          <Box>
                            <img
                              className={classes.cateImage}
                              src={NEXT_PUBLIC_API_URL + cate?.imagePath}
                              alt="Phong C??ch"
                            />
                          </Box>
                        </Box>
                      </a>
                    </Link>
                  </Grid>
                ))}

              {activeBrand &&
                (!more
                  ? activeBrand.cateId.slice(3, 7).length === 4 &&
                    activeBrand.cateId
                      .slice(3, 7)
                      .map((cate: any, idx: number) => (
                        <Grid key={cate?._id} item xs={12} md={6} lg={3}>
                          <Link
                            href={`/search?supplierID=${activeBrand?._id}&cateId=${cate?._id}`}
                          >
                            <a
                              href={`/search?supplierID=${activeBrand?._id}&cateId=${cate?._id}`}
                            >
                              <Box
                                style={{ background: getColor() }}
                                className={classes.smallCateItem}
                              >
                                <Box>
                                  <Typography className={classes.cateName}>
                                    {cate?.name}
                                  </Typography>
                                  <Typography variant="body2">
                                    {cate?.countProduct || 0} s???n ph???m
                                  </Typography>
                                </Box>

                                <Box>
                                  <img
                                    className={classes.cateSmallImage}
                                    src={NEXT_PUBLIC_API_URL + cate?.imagePath}
                                    alt="Phong C??ch"
                                  />
                                </Box>
                              </Box>
                            </a>
                          </Link>
                        </Grid>
                      ))
                  : activeBrand.cateId
                      .slice(3)
                      .map((cate: any, idx: number) => (
                        <Grid key={cate?._id} item xs={12} md={6} lg={3}>
                          <Link
                            href={`/search?supplierID=${activeBrand?._id}&cateId=${cate?._id}`}
                          >
                            <a
                              href={`/search?supplierID=${activeBrand?._id}&cateId=${cate?._id}`}
                            >
                              <Box
                                style={{ background: getColor() }}
                                className={classes.smallCateItem}
                              >
                                <Box>
                                  <Typography className={classes.cateName}>
                                    {cate?.name}
                                  </Typography>
                                  <Typography variant="body2">
                                    {cate?.countProduct || 0} s???n ph???m
                                  </Typography>
                                </Box>

                                <Box>
                                  <img
                                    className={classes.cateSmallImage}
                                    src={NEXT_PUBLIC_API_URL + cate?.imagePath}
                                    alt="Phong C??ch"
                                  />
                                </Box>
                              </Box>
                            </a>
                          </Link>
                        </Grid>
                      )))}
            </Grid>
          </Box>
        </Grid>
      </Box>

      <Box className={classes.collab}>
        <Box className={classes.collabContainer}>
          <Typography className={classes.collabtilte}>
            ?????i t??c c???a ch??ng t??i
          </Typography>

          <Box className={classes.collabBox}>
            <Collaboration />
          </Box>
        </Box>
      </Box>

      <Box className={classes.projectBox}>
        <Typography className={classes.proTitle}>
          T???i sao ch???n TiTus?
        </Typography>

        <Grid container spacing={4}>
          <Grid className={classes.whyChoiceItem} item xs={12} md={4}>
            <img src="/assets/diamiond.png" alt="Dimo" />
            <Typography className={classes.whyChoiceTitle}>??a d???ng</Typography>
            <Typography className={classes.whyChoiceTitle}>
              m???u thi???t k???
            </Typography>
            <Typography className={classes.whyChoiceContent}>
              V???i h??n +100,000 m???u thi???t k??? ri??ng bi???t. Titus t??? tin b???n lu??n
              t??m ???????c m???u thi???t k??? ph?? h???p cho kh??ng gian ??ang h?????ng ?????n
            </Typography>
          </Grid>
          <Grid className={classes.whyChoiceItem} item xs={12} md={4}>
            <img src="/assets/dinomo.png" alt="Dimo" />
            <Typography className={classes.whyChoiceTitle}>
              T???i ??u h??a
            </Typography>
            <Typography className={classes.whyChoiceTitle}>
              ng??n s??ch
            </Typography>
            <Typography className={classes.whyChoiceContent}>
              Titus lu??n s???n s??ng t?? v???n v?? d??? to??n h???p l?? chi ph?? c??ng nh???ng
              ph????ng ??n t???t nh???t v??? ng??n s??ch cho kh??ch h??ng
            </Typography>
          </Grid>
          <Grid className={classes.whyChoiceItem} item xs={12} md={4}>
            <img src="/assets/pen.png" alt="Dimo" />
            <Typography className={classes.whyChoiceTitle}>B???o h??nh</Typography>
            <Typography className={classes.whyChoiceTitle}>
              b???o tr?? d??i h???n
            </Typography>
            <Typography className={classes.whyChoiceContent}>
              S???n ph???m t???t lu??n ??i c??ng ch???t l?????ng d???ch v??? l?? ti??u ch?? h??ng ?????u
              c???a Titus, ?????i v???i m???i chi ti???t s???n m?? Titus b??n ra.
            </Typography>
          </Grid>
        </Grid>

        <Typography className={classes.proTitle + ' ' + classes.projectTitle}>
          D??? ??n ???? tri???n khai
        </Typography>
      </Box>

      <Box className={slickClass.rootSliderDesktop + ' ' + slickClass.project}>
        <Slider {...settingsDesktop} {...settingProject}>
          <Box position="relative">
            <img
              className={classes.project}
              src="/assets/can_ho.png"
              alt="can ho"
            />
            <Box className={classes.projectContent} position="absolute">
              <Typography className={classes.projectHeader}>C??n h???</Typography>
              <Typography
                style={{ fontSize: 12 }}
                className={classes.projectHeader}
              >
                xem th??m
              </Typography>
            </Box>
          </Box>
          <Box position="relative">
            <img
              className={classes.project}
              src="/assets/nha_pho.png"
              alt="nha pho"
            />
            <Box className={classes.projectContent} position="absolute">
              <Typography className={classes.projectHeader}>Nh?? ph???</Typography>
              <Typography
                style={{ fontSize: 12 }}
                className={classes.projectHeader}
              >
                xem th??m
              </Typography>
            </Box>
          </Box>
          <Box position="relative">
            <img
              className={classes.project}
              src="/assets/biet_thu.png"
              alt="biet thu"
            />
            <Box className={classes.projectContent} position="absolute">
              <Typography className={classes.projectHeader}>
                Bi???t th???
              </Typography>
              <Typography
                style={{ fontSize: 12 }}
                className={classes.projectHeader}
              >
                xem th??m
              </Typography>
            </Box>
          </Box>
          <Box position="relative">
            <img
              className={classes.project}
              src="/assets/can_ho.png"
              alt="can ho"
            />
            <Box className={classes.projectContent} position="absolute">
              <Typography className={classes.projectHeader}>
                Homestay
              </Typography>
              <Typography
                style={{ fontSize: 12 }}
                className={classes.projectHeader}
              >
                xem th??m
              </Typography>
            </Box>
          </Box>
          <Box position="relative">
            <img
              className={classes.project}
              src="/assets/can_ho.png"
              alt="can ho"
            />
            <Box className={classes.projectContent} position="absolute">
              <Typography className={classes.projectHeader}>
                Homestay
              </Typography>
              <Typography
                style={{ fontSize: 12 }}
                className={classes.projectHeader}
              >
                xem th??m
              </Typography>
            </Box>
          </Box>
        </Slider>
      </Box>

      <Box className={classes.news}>
        <Box className={classes.newsContainer}>
          <Typography className={classes.newsTitle}>Tin t???c</Typography>

          <Hidden smDown>
            <Grid className={classes.newList} container spacing={2}>
              <Grid className={classes.hotNewDesktop} item xs={12}>
                <Box className={classes.hotNewBox}>
                  <Typography className={classes.hotNewTitle}>
                    A New Work of Art by Nathalie Du Pasquier on the Vitra
                    Campus Pasquier on the Vitra Campus
                  </Typography>
                  <Typography className={classes.hotNewDescription}>
                    The French artis has designed Torre Numero Due, the almost
                    three-metre-high sculpture built with the Mutina bricks
                  </Typography>
                </Box>

                <img src="/assets/new_1.png" alt="" />
              </Grid>
            </Grid>

            <Grid container spacing={3}>
              <Grid item md={6} lg={4}>
                <Box className={classes.newItem}>
                  <img src="/assets/new_banner_desktop.png" alt="new banner" />
                  <Box className={classes.newContentBox}>
                    <Typography className={classes.hotNewTitle}>
                      Florim Presents the New Match-Up Ceramic Tile Collection
                    </Typography>
                    <Typography className={classes.hotNewDescription}>
                      A balanced mix and match of styles and colours with
                      concrete effect and marble chip effect surfaces
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item md={6} lg={4}>
                <Box className={classes.newItem}>
                  <img src="/assets/new_banner_desktop.png" alt="new banner" />
                  <Box className={classes.newContentBox}>
                    <Typography className={classes.hotNewTitle}>
                      Florim Presents the New Match-Up Ceramic Tile Collection
                    </Typography>
                    <Typography className={classes.hotNewDescription}>
                      A balanced mix and match of styles and colours with
                      concrete effect and marble chip effect surfaces
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item md={6} lg={4}>
                <Box className={classes.newItem}>
                  <img src="/assets/new_banner_desktop.png" alt="new banner" />
                  <Box className={classes.newContentBox}>
                    <Typography className={classes.hotNewTitle}>
                      Florim Presents the New Match-Up Ceramic Tile Collection
                    </Typography>
                    <Typography className={classes.hotNewDescription}>
                      A balanced mix and match of styles and colours with
                      concrete effect and marble chip effect surfaces
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item md={6} lg={4}>
                <Box className={classes.newItem}>
                  <img src="/assets/new_banner_desktop.png" alt="new banner" />
                  <Box className={classes.newContentBox}>
                    <Typography className={classes.hotNewTitle}>
                      Florim Presents the New Match-Up Ceramic Tile Collection
                    </Typography>
                    <Typography className={classes.hotNewDescription}>
                      A balanced mix and match of styles and colours with
                      concrete effect and marble chip effect surfaces
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item md={6} lg={4}>
                <Box className={classes.newItem}>
                  <img src="/assets/new_banner_desktop.png" alt="new banner" />
                  <Box className={classes.newContentBox}>
                    <Typography className={classes.hotNewTitle}>
                      Florim Presents the New Match-Up Ceramic Tile Collection
                    </Typography>
                    <Typography className={classes.hotNewDescription}>
                      A balanced mix and match of styles and colours with
                      concrete effect and marble chip effect surfaces
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item md={6} lg={4}>
                <Box className={classes.newItem}>
                  <img src="/assets/new_banner_desktop.png" alt="new banner" />
                  <Box className={classes.newContentBox}>
                    <Typography className={classes.hotNewTitle}>
                      Florim Presents the New Match-Up Ceramic Tile Collection
                    </Typography>
                    <Typography className={classes.hotNewDescription}>
                      A balanced mix and match of styles and colours with
                      concrete effect and marble chip effect surfaces
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Hidden>

          <Hidden mdUp>
            <Grid className={classes.newList} container>
              <Grid className={classes.hotNew} item xs={12}>
                <Typography className={classes.hotNewTitle}>
                  A New Work of Art by Nathalie Du Pasquier on the Vitra Campus
                  Pasquier on the Vitra Campus
                </Typography>
                <Typography className={classes.hotNewDescription}>
                  The French artis has designed Torre Numero Due, the almost
                  three-metre-high sculpture built with the Mutina bricks
                </Typography>
                <img src="/assets/new_1.png" alt="" />
              </Grid>

              <Grid className={classes.newItem} item xs={12}>
                <img src="/assets/new_banner.png" alt="new banner" />
                <Typography className={classes.newItemDescription}>
                  The French artis has designed Torre Numero Due, the almost
                  three-metre-high sculpture built with the Mutina bricks
                </Typography>
              </Grid>
              <Grid className={classes.newItem} item xs={12}>
                <img src="/assets/new_banner.png" alt="new banner" />
                <Typography className={classes.newItemDescription}>
                  The French artis has designed Torre Numero Due, the almost
                  three-metre-high sculpture built with the Mutina bricks
                </Typography>
              </Grid>
              <Grid className={classes.newItem} item xs={12}>
                <img src="/assets/new_banner.png" alt="new banner" />
                <Typography className={classes.newItemDescription}>
                  The French artis has designed Torre Numero Due, the almost
                  three-metre-high sculpture built with the Mutina bricks
                </Typography>
              </Grid>
              <Grid className={classes.newItem} item xs={12}>
                <img src="/assets/new_banner.png" alt="new banner" />
                <Typography className={classes.newItemDescription}>
                  The French artis has designed Torre Numero Due, the almost
                  three-metre-high sculpture built with the Mutina bricks
                </Typography>
              </Grid>
              <Grid className={classes.newItem} item xs={12}>
                <img src="/assets/new_banner.png" alt="new banner" />
                <Typography className={classes.newItemDescription}>
                  The French artis has designed Torre Numero Due, the almost
                  three-metre-high sculpture built with the Mutina bricks
                </Typography>
              </Grid>
              <Grid className={classes.newItem} item xs={12}>
                <img src="/assets/new_banner.png" alt="new banner" />
                <Typography className={classes.newItemDescription}>
                  The French artis has designed Torre Numero Due, the almost
                  three-metre-high sculpture built with the Mutina bricks
                </Typography>
              </Grid>
            </Grid>
          </Hidden>
        </Box>
      </Box>
    </>
  )
}

Home.Layout = Layout
