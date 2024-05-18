import React from 'react'
import Layout from '../components/layout/Layout'
import { Box, Card, CardActionArea, CardMedia } from '@mui/material'
import {MenuList} from '../data/data'

const Menu = () => {
  return (
    <Layout>
   <Box>
     {
      MenuList.map(menu => (
        <Card>
          <CardActionArea>
            <CardMedia sx={{minHeight:'400px'}}
            component={'img'} src={menu.image} alt={menu.name}>

            </CardMedia>
          </CardActionArea>

        </Card>
      )) 
     }
   </Box>
</Layout>
  )
}

export default Menu;