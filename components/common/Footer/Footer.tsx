import { FC } from 'react'
import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import type { Page } from '@commerce/types/page'
import getSlug from '@lib/get-slug'
import { Github, Vercel } from '@components/icons'
import { Logo, Container } from '@components/ui'
import { I18nWidget } from '@components/common'
import Image from 'next/image'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import useStyles from './style'

import s from './Footer.module.css'

const fbIcon = '/assets/mobile/facebook.png'
const insIcon = '/assets/mobile/instagram.png'
const pinterestIcon = '/assets/mobile/pinterest.png'
const titusLogo = '/assets/mobile/titus_white.png'

interface Props {
  className?: string
  children?: any
  pages?: Page[]
}

const links = [
  {
    name: 'Home',
    url: '/',
  },
]

const Footer: FC<Props> = ({ className, pages }) => {
  const classes = useStyles()
  const { sitePages } = usePages(pages)
  const rootClassName = cn(s.root, className)

  return (
    <footer className={rootClassName}>
      <Box className={classes.social}>
        <Box className="mx-6 flex items-center cursor-pointer">
          <Image
            quality="85"
            src={fbIcon}
            alt='facebook logo'
            height={32}
            width={32}
            layout="fixed"
          />
        </Box>

        <Box className="mx-6 flex items-center cursor-pointer">
          <Image
            quality="85"
            src={insIcon}
            alt='instagram logo'
            height={32}
            width={32}
            layout="fixed"
          />
        </Box>

        <Box className="mx-6 flex items-center cursor-pointer">
          <Image
            quality="85"
            src={pinterestIcon}
            alt='pinterest logo'
            height={32}
            width={32}
            layout="fixed"
          />
        </Box>
      </Box>

      <Box className={classes.contact} >
        <Box className={classes.box} mb={0}>
          <Box display="flex" alignItems="center" mt={8} mb={3}>
            <Image
              quality="85"
              src={titusLogo}
              alt='Titus logo'
              height={40}
              width={88}
              layout="fixed"
            />
          </Box>

          <Typography className={classes.companyName} variant="h6">Công ty tnhh titus</Typography>
          <Typography className={classes.address} variant="h6">241 Đại lộ Nguyễn Văn Linh,
            phường Tân Hưng Quận 7,
            TP. Hồ Chí Minh
            +84 574 875 84
          </Typography>
        </Box>


        <Divider className={classes.line} light />
        <Box className={classes.box}>
          <Typography className={classes.coppyRight} variant="h6">© 2021 titus.vn – © All reproduction rights reserved
          </Typography>
        </Box>
      </Box>
    </footer >
  )
}

function usePages(pages?: Page[]) {
  const { locale } = useRouter()
  const sitePages: Page[] = []

  if (pages) {
    pages.forEach((page) => {
      const slug = page.url && getSlug(page.url)
      if (!slug) return
      if (locale && !slug.startsWith(`${locale}/`)) return
      sitePages.push(page)
    })
  }

  return {
    sitePages: sitePages.sort(bySortOrder),
  }
}

// Sort pages by the sort order assigned in the BC dashboard
function bySortOrder(a: Page, b: Page) {
  return (a.sort_order ?? 0) - (b.sort_order ?? 0)
}

export default Footer
