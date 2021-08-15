import { Box, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'

interface CollaborationProps {

}

const slickStyle = makeStyles(theme => ({

  center: {
    marginTop: 16,
    overflow: 'initial',

    '& .slick-slide': {
      boxSizing: 'border-box',
      padding: '0 4px 0'
    },

    '& .slick-arrow': {
      display: 'none !important'
    },

    '& .slick-list': {
      overflow: 'initial',
      padding: theme.spacing(1, 0)
    },

    '& .slick-cloned': {
      display: 'none'
    }
  }

}))

const Collaboration: React.FC<CollaborationProps> = ({

}) => {

  return (
    <Grid container >Test</Grid>
  )
}

export default Collaboration
