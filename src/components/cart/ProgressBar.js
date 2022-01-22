import React from 'react'
import { Typography, Box } from '@mui/material'
import LinearProgress from '@mui/material/LinearProgress'

export default function LinearProgressWithLabel(props) {
  return (
    <Box className='flex'>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant='body2'>{`$0`}</Typography>
      </Box>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress
          variant='determinate'
          {...props}
          sx={{
            backgroundColor: 'rgb(78 78 78 / 20%)',
            '& .MuiLinearProgress-bar': {
              backgroundColor: 'primary.dark',
            },
          }}
        />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant='body2'>{`$100`}</Typography>
      </Box>
    </Box>
  )
}
