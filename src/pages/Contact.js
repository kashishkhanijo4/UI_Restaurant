import React from 'react'
import Layout from '../components/layout/Layout'
import { Box, Table, TableContainer, Typography } from '@mui/material'

const Contact = () => {
  return (
    <Layout>
      <Box sx={{my:10, ml:10 ,"& h4":{fontWeight :"bold" ,mb:2} }}>
        <Typography  variant="h4">
        Contact My Restaurant
        </Typography>

        <p> For any inquiries or reservations, don't hesitate to contact our restaurant. Whether you're planning a special event, seeking dietary accommodations, or simply want to learn more about our menu offerings, our team is here to assist you. Reach out via phone during our operating hours or drop us an email anytime, and we'll respond promptly to address your needs. Your satisfaction is our priority, and we're committed to providing exceptional service tailored to your preferences. Experience culinary excellence and personalized attention when you connect with us. Let us elevate your dining experience and create unforgettable moments together at our restaurant.</p>
 
      </Box>


      <TableContainer component={Paper}>
     <Table aria-label='"contact table'>
      
     </Table>

      </TableContainer>
        
    </Layout>
  )
}

export default Contact