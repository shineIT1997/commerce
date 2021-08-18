
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import commerce, { getAllPostsForHome } from '@lib/api/commerce'
import Slider from "react-slick";
import { Collaboration, Layout } from '@components/common'
import Vendor from '@components/ui/Vendor'
import Manner from '@components/ui/Manner'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
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
  InputLabel,
  Select,
} from '@material-ui/core';
import CarouselVendor from "@components/ui/CarouselVendor";
import slickStyle from "../assets/sliceStyle";

interface manner {
  _id: string,
  name: string,
  count: number,
  mannerId: string,
  imagePath: string,
  description: string
}

interface brand {
  _id: string,
  imagePath: string,
  name: string,
  supId: string,
}


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

  const homeData = await getAllPostsForHome()

  const { suppliers, categories, manners } = homeData.data

  return {
    props: {
      products,
      categories,
      manners,
      brands: suppliers,
      pages,
    },
    revalidate: 60,
  }
}

const bannerImage = '/assets/Banner.jpg'
const bannerMobile = '/assets/banner_mobile.png'
const mannerTitle = '/assets/manner_tilte.png'
const cateItem = '/assets/cate_image.png'
const smallCateImage = '/assets/7 1.png'
const hotVendor = "/assets/hot_vendor_desktop.png"
const newVendor = "/assets/new_vendor_desktop.png"

export default function Home({
  brands, manners
}: InferGetStaticPropsType<typeof getStaticProps>) {

  const slickClass = sliceStyle()
  const classes = useStyles()

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
    prevArrow: <NavigateBeforeIcon />
  };

  const settingProject = {
    className: `${slickClass.center} slider variable-width`,
    infinite: true,
  }



  function getColor() {
    return "hsl(" + 360 * Math.random() + ',' +
      (10 + 20 * Math.random()) + '%,' +
      (78 + 10 * Math.random()) + '%)'
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
            alt='Wall'
            layout="responsive"
            width={1440}
            height={520}
          />
        </Box>
      </Hidden>

      <Hidden smUp>
        <Box className={classes.banner}>
          <Image
            quality="85"
            src={bannerMobile}
            alt='Wall'
            layout="responsive"
            width={375}
            height={480}
          />
        </Box>
      </Hidden>

      <Box className={slickClass.rootSliderDesktop}>
        <Slider {...settingsDesktop}>
          <Box>
            <Link href={`/search`}>
              <a href={`/search`}>
                <img src={hotVendor}
                  alt='Titus logo' />
              </a>
            </Link>
            <Typography className={classes.vendorTitle}>Shop</Typography>
          </Box>

          <Box>
            <Link href={`/search`}>
              <a href={`/search`}>
                <img src={newVendor}
                  alt='Titus logo' />
              </a>
            </Link>
            <Typography className={classes.vendorTitle}>Shop</Typography>
          </Box>

          {brands.map((brand: brand) => {
            return <Vendor
              brandCode={brand.supId}
              bg={getColor()} key={brand._id}
              title={brand.name}
              imageSrc={NEXT_PUBLIC_API_URL + brand?.imagePath} />
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
              {manners.map((manner: manner) =>
                <Grid className={classes.oddItem + " flex justify-center"} key={manner._id} item xs={6} lg={3}>
                  <Manner
                    mannerId={manner._id}
                    description={manner.description}
                    alt={manner.name}
                    count={manner.count}
                    src={NEXT_PUBLIC_API_URL + manner?.imagePath} />
                </Grid>
              )}
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
              <Select native>
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </Select>
            </FormControl>
          </Box>
          <Button variant="outlined" className={classes.btnMore}>
            <Link href={`/search`}>
              <a href={`/search`}>
                Xem thêm
              </a>
            </Link>
          </Button>
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

      <Box className={classes.collab}>
        <Box className={classes.collabContainer}>
          <Typography className={classes.collabtilte}>
            Đối tác của chúng tôi
          </Typography>

          <Box className={classes.collabBox}>
            <Collaboration />
          </Box>

        </Box>
      </Box>

      <Box className={classes.projectBox}>
        <Typography className={classes.proTitle}>
          Tại sao chọn TiTus?
        </Typography>

        <Grid container spacing={4}>
          <Grid className={classes.whyChoiceItem} item xs={12} md={4}>
            <img src="/assets/diamiond.png" alt="Dimo" />
            <Typography className={classes.whyChoiceTitle}>
              Đa dạng
            </Typography>
            <Typography className={classes.whyChoiceTitle}>
              mẫu thiết kế
            </Typography>
            <Typography className={classes.whyChoiceContent}>
              Với hơn +100,000 mẫu thiết kế riêng biệt. Titus tự tin bạn luôn tìm được mẫu thiết kế phù hợp cho không gian đang hướng đến
            </Typography>
          </Grid>
          <Grid className={classes.whyChoiceItem} item xs={12} md={4}>
            <img src="/assets/dinomo.png" alt="Dimo" />
            <Typography className={classes.whyChoiceTitle}>
              Tối ưu hóa
            </Typography>
            <Typography className={classes.whyChoiceTitle}>
              ngân sách
            </Typography>
            <Typography className={classes.whyChoiceContent}>
              Titus luôn sẵn sàng tư vấn và dự toán hợp lý chi phí cùng những phương án tốt nhất về ngân sách cho khách hàng
            </Typography>
          </Grid>
          <Grid className={classes.whyChoiceItem} item xs={12} md={4}>
            <img src="/assets/pen.png" alt="Dimo" />
            <Typography className={classes.whyChoiceTitle}>
              Bảo hành
            </Typography>
            <Typography className={classes.whyChoiceTitle}>
              bảo trì dài hạn
            </Typography>
            <Typography className={classes.whyChoiceContent}>
              Sản phẩm tốt luôn đi cùng chất lượng dịch vụ là tiêu chí hàng đầu của Titus, đối với mỗi chi tiết sản mà Titus bán ra.
            </Typography>
          </Grid>
        </Grid>

        <Typography className={classes.proTitle + " " + classes.projectTitle}>
          Dự án đã triển khai
        </Typography>
      </Box>

      <Box className={slickClass.rootSliderDesktop + " " + slickClass.project}>
        <Slider {...settingsDesktop} {...settingProject}>
          <Box position="relative">
            <img className={classes.project} src="/assets/can_ho.png" alt="can ho" />
            <Box className={classes.projectContent} position="absolute">
              <Typography className={classes.projectHeader}>
                Căn hộ
              </Typography>
              <Typography style={{ fontSize: 12 }} className={classes.projectHeader}>
                xem thêm
              </Typography>
            </Box>
          </Box>
          <Box position="relative">
            <img className={classes.project} src="/assets/nha_pho.png" alt="nha pho" />
            <Box className={classes.projectContent} position="absolute">
              <Typography className={classes.projectHeader}>
                Nhà phố
              </Typography>
              <Typography style={{ fontSize: 12 }} className={classes.projectHeader}>
                xem thêm
              </Typography>
            </Box>
          </Box>
          <Box position="relative">
            <img className={classes.project} src="/assets/biet_thu.png" alt="biet thu" />
            <Box className={classes.projectContent} position="absolute">
              <Typography className={classes.projectHeader}>
                Biệt thự
              </Typography>
              <Typography style={{ fontSize: 12 }} className={classes.projectHeader}>
                xem thêm
              </Typography>
            </Box>
          </Box>
          <Box position="relative">
            <img className={classes.project} src="/assets/can_ho.png" alt="can ho" />
            <Box className={classes.projectContent} position="absolute">
              <Typography className={classes.projectHeader}>
                Homestay
              </Typography>
              <Typography style={{ fontSize: 12 }} className={classes.projectHeader}>
                xem thêm
              </Typography>
            </Box>
          </Box>
          <Box position="relative">
            <img className={classes.project} src="/assets/can_ho.png" alt="can ho" />
            <Box className={classes.projectContent} position="absolute">
              <Typography className={classes.projectHeader}>
                Homestay
              </Typography>
              <Typography style={{ fontSize: 12 }} className={classes.projectHeader}>
                xem thêm
              </Typography>
            </Box>
          </Box>
        </Slider>
      </Box>

      <Box className={classes.news}>
        <Box className={classes.newsContainer}>
          <Typography className={classes.newsTitle}>
            Tin tức
          </Typography>

          <Hidden smDown>
            <Grid className={classes.newList} container spacing={2}>
              <Grid className={classes.hotNewDesktop} item xs={12}>
                <Box className={classes.hotNewBox}>
                  <Typography className={classes.hotNewTitle}>
                    A New Work of Art by Nathalie Du Pasquier on the Vitra Campus Pasquier on the Vitra Campus
                  </Typography>
                  <Typography className={classes.hotNewDescription}>
                    The French artis has designed Torre Numero Due, the almost three-metre-high sculpture built with the Mutina bricks
                  </Typography>
                </Box>

                <img src="/assets/new_1.png" alt="" />
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item md={6} lg={4}>
                <Box className={classes.newItem}>
                  <img src="/assets/new_banner_desktop.png" alt="new banner" />
                  <Box className={classes.newContentBox}>
                    <Typography className={classes.hotNewTitle}>
                      Florim Presents the New Match-Up Ceramic Tile Collection
                    </Typography>
                    <Typography className={classes.hotNewDescription}>
                      A balanced mix and match of styles and colours with concrete effect and marble chip effect surfaces
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
                      A balanced mix and match of styles and colours with concrete effect and marble chip effect surfaces
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
                      A balanced mix and match of styles and colours with concrete effect and marble chip effect surfaces
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
                      A balanced mix and match of styles and colours with concrete effect and marble chip effect surfaces
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
                      A balanced mix and match of styles and colours with concrete effect and marble chip effect surfaces
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
                      A balanced mix and match of styles and colours with concrete effect and marble chip effect surfaces
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
                  A New Work of Art by Nathalie Du Pasquier on the Vitra Campus Pasquier on the Vitra Campus
                </Typography>
                <Typography className={classes.hotNewDescription}>
                  The French artis has designed Torre Numero Due, the almost three-metre-high sculpture built with the Mutina bricks
                </Typography>
                <img src="/assets/new_1.png" alt="" />
              </Grid>

              <Grid className={classes.newItem} item xs={12}>
                <img src="/assets/new_banner.png" alt="new banner" />
                <Typography className={classes.newItemDescription}>
                  The French artis has designed Torre Numero Due, the almost three-metre-high sculpture built with the Mutina bricks
                </Typography>
              </Grid>
              <Grid className={classes.newItem} item xs={12}>
                <img src="/assets/new_banner.png" alt="new banner" />
                <Typography className={classes.newItemDescription}>
                  The French artis has designed Torre Numero Due, the almost three-metre-high sculpture built with the Mutina bricks
                </Typography>
              </Grid>
              <Grid className={classes.newItem} item xs={12}>
                <img src="/assets/new_banner.png" alt="new banner" />
                <Typography className={classes.newItemDescription}>
                  The French artis has designed Torre Numero Due, the almost three-metre-high sculpture built with the Mutina bricks
                </Typography>
              </Grid>
              <Grid className={classes.newItem} item xs={12}>
                <img src="/assets/new_banner.png" alt="new banner" />
                <Typography className={classes.newItemDescription}>
                  The French artis has designed Torre Numero Due, the almost three-metre-high sculpture built with the Mutina bricks
                </Typography>
              </Grid>
              <Grid className={classes.newItem} item xs={12}>
                <img src="/assets/new_banner.png" alt="new banner" />
                <Typography className={classes.newItemDescription}>
                  The French artis has designed Torre Numero Due, the almost three-metre-high sculpture built with the Mutina bricks
                </Typography>
              </Grid>
              <Grid className={classes.newItem} item xs={12}>
                <img src="/assets/new_banner.png" alt="new banner" />
                <Typography className={classes.newItemDescription}>
                  The French artis has designed Torre Numero Due, the almost three-metre-high sculpture built with the Mutina bricks
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
