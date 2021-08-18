import { Box, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import Image, { ImageProps } from 'next/image'

interface CollabProps {
  src: string,
  title: string,
  width?: string | number,
  p?: string | number,
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    flex: '1 0 auto',
    margin: theme.spacing(1),
  },
}));

const Collab: React.FC<CollabProps> = ({
  src,
  title,
  width,
  p
}) => {

  const classes = useStyles();

  return (
    <Box p={p || 0.25} className="flex m-auto relative" width={width} height={160}>
      <Box className="flex flex-1 justify-center items-center bg-white p-4">
        <Image
          quality="85"
          src={src}
          alt={title}
          layout="intrinsic"
          width={111}
          height={32}
        />
      </Box>
    </Box>
  )
}

export default Collab
