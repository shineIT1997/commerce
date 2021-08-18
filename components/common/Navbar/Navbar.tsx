import { FC } from 'react'
import Link from 'next/link'
import NavbarRoot from './NavbarRoot'
import Image, { ImageProps } from 'next/image'
import { useRouter } from 'next/router'
import HomeIcon from '@material-ui/icons/Home';
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import useStyles from './style'

interface Link {
  href: string
  label: string
}
interface NavbarProps {
  links?: Link[],
}

const logoImage = '/assets/mobile/logo.png'

const Navbar: FC<NavbarProps> = ({ links }) => {
  const classes = useStyles()
  const router = useRouter()

  const isHome = router.pathname === "/"
  const isSearch = router.pathname === "/search"

  return <NavbarRoot>
    <Box className={classes.nav}>
      <Link href="/">
        <a href="/">
          <Image
            quality="85"
            src={logoImage}
            alt='Titus logo'
            height={40}
            width={88}
            layout="fixed"
          />
        </a>
      </Link>

      <Hidden smUp>
        <Box className="flex items-center lg:px-6">
          <Link href="/">
            <HomeIcon style={isHome ? { color: "#F8B864" } : {}} className={classes.homeIcon} />
          </Link>

          <Link href="/search">
            <Button style={isSearch ? { background: "#F8B864" } : {}} className={classes.button + "  ml-4"}>
              Sản phẩm
            </Button>
          </Link>
        </Box>
      </Hidden>

      <Hidden xsDown>
        <Box className="flex items-center lg:px-6">
          <Link href="/">
            <Button style={isHome ? { background: "#F8B864" } : {}} className={classes.button}>
              Trang chủ
            </Button>
          </Link>
          <Link href="/search">
            <Button style={isSearch ? { background: "#F8B864" } : {}} className={classes.button + "  ml-4"}>
              Sản phẩm
            </Button>
          </Link>
        </Box>
      </Hidden>
    </Box>
  </NavbarRoot>
}
export default Navbar
