import { FC } from 'react'

import Box from '@material-ui/core/Box'
import Link from 'next/link'
import Image, { ImageProps } from 'next/image'

import useStyle from './style'
import { Typography } from '@material-ui/core'

interface Props {
  title: string,
  bg: string,
  imageSrc: string,
  children?: any
}

const Vendor: FC<Props> = (props) => {
  const { title, imageSrc, bg } = props

  const classes = useStyle()

  return (
    <Box className={classes.root}>
      <Box style={{ backgroundColor: bg }} className={classes.imageBox}>
        {/* <Box className={classes.blurBackGround}></Box> */}
        <Link href="/">
          <a href="/">
            <img src={imageSrc}
              alt='Titus logo' />
          </a>
        </Link>
      </Box>

      <Typography className={classes.title}>{title}</Typography>
    </Box>
  )
}

export default Vendor
