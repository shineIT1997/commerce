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
  brandCode: string,
  children?: any,
}

const Vendor: FC<Props> = (props) => {
  const { title, imageSrc, bg, brandCode } = props

  const classes = useStyle()

  return (
    <Box className={classes.root}>
      <Link href={`/search?brand=${brandCode}`}>
        <a href={`/search?brand=${brandCode}`}>
          <Box style={{ backgroundColor: bg }} className={classes.imageBox}>
            <Image
              quality="85"
              src={imageSrc}
              alt='Wall'
              width={120}
              height={120}
            />
            {/* <img src={imageSrc}
              alt='Titus logo' /> */}
          </Box>
        </a>
      </Link>
      <Typography className={classes.title}>{title}</Typography>
    </Box>
  )
}

export default Vendor
