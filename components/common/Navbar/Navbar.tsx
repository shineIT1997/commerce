import { FC } from 'react'
import Link from 'next/link'
import NavbarRoot from './NavbarRoot'
import Image, { ImageProps } from 'next/image'
import { Logo, Container } from '@components/ui'
import { Searchbar, UserNav } from '@components/common'
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

  return <NavbarRoot>

    <Box className={classes.nav + " px-4 lg:px-16 xl:px32"}>
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

      <Hidden lgUp>
        <Box className="flex items-center lg:px-6">
          <HomeIcon className={classes.homeIcon} />

          <Link href="/profile">
            <Button className={classes.button + "  ml-4"}>
              Sản phẩm
            </Button>
          </Link>
        </Box>
      </Hidden>

      <Hidden mdDown>
        <Box className="flex items-center lg:px-6">
          <Link href="/profile">
            <Button className={classes.button}>
              Trang chủ
            </Button>
          </Link>
          <Link href="/profile">
            <Button className={classes.button + "  ml-4"}>
              Sản phẩm
            </Button>
          </Link>
        </Box>
      </Hidden>
    </Box>
  </NavbarRoot>
}
export default Navbar
