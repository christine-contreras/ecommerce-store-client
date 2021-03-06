import React from 'react'
import { Grid, Typography, Box } from '@mui/material'
import defaultImage from '../../style/images/default.png'
import { useRecoilValue } from 'recoil'
import { selectedCategoryAtom } from '../../atoms/atoms'
const HeroCategory = () => {
  const category = useRecoilValue(selectedCategoryAtom)
  return (
    <Grid
      item
      container
      spacing={2}
      alignItems='center'
      justifyContent='center'
      className='hero-container'>
      {category && (
        <>
          <Grid
            item
            container
            xs={12}
            sm={6}
            lg={3}
            flexDirection='column'
            spacing={5}>
            <Grid item xs={12}>
              <Typography variant='h1' className='hero-title title-category'>
                {category?.name}
              </Typography>
            </Grid>

            <Grid item xs={12} lg={11}>
              <Typography>{category?.description}</Typography>
            </Grid>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            lg={4}
            sx={{ display: { xs: 'none', sm: 'flex' } }}
            textAlign='center'>
            <img
              className='img-responsive img-shadow'
              src={category?.image_url ? category?.image_url : defaultImage}
              role='presentation'
              style={{ maxWidth: 400, margin: 'auto' }}
            />
          </Grid>
        </>
      )}

      <Box
        className='background-box right'
        sx={{ backgroundColor: 'primary.main' }}
      />
    </Grid>
  )
}

export default HeroCategory
