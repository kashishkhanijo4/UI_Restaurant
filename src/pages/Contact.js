import React from 'react'
import Layout from '../components/layout/Layout'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const Contact = () => {
  return (
    <Layout>
      <Box sx={{my:10, ml:10 ,"& h4":{fontWeight :"bold" ,mb:2} }}>
        <Typography  variant="h4">
        Contact My Restaurant
        </Typography>

        <p> For any inquiries or reservations, don't hesitate to contact our restaurant. Whether you're planning a special event, seeking dietary accommodations, or simply want to learn more about our menu offerings, our team is here to assist you. Reach out via phone during our operating hours or drop us an email anytime, and we'll respond promptly to address your needs. Your satisfaction is our priority, and we're committed to providing exceptional service tailored to your preferences. Experience culinary excellence and personalized attention when you connect with us. Let us elevate your dining experience and create unforgettable moments together at our restaurant.

        </p>
 
      </Box>

<Box sx={{m:3, width:"600px"}}
      <TableContainer component={Paper}>
     <Table aria-label='"contact table'>

      <TableHead>
      <TableRow>
        <TableCell sx={{bgcolor:"black", color:"white",}}align='center'>Contact Details</TableCell>
      </TableRow>

      </TableHead>
 <TableBody>
  <TableRow>
    <TableCell> 
      <SupportAgentIcon  sx={{color:" red" , pt: 1}}/>
      1234667677 (tollfree) 
      </TableCell>
      </TableRow>
     <TableRow>
     <TableCell> 
      <EmailIcon  sx={{color:"skyblue" , pt: 1}}/>
      help@myrest.com
      </TableCell>
     </TableRow>

     <TableRow>
     <TableCell> 
      < PhoneIcon  sx={{color:"green" , pt: 1}}/>
      call :+91-9876987623
      </TableCell>
     </TableRow>

 </TableBody>

      
     </Table>

      </TableContainer>
        
    </Layout>
  )
}

export default Contact