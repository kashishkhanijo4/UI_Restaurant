import React from 'react'
import Layout from '../components/layout/Layout';
import { Box, Typography } from '@mui/material';

const About = () => {
  return (

<Layout>

<Box
sx={{
  my:15,
  textAlign:"center",p: 2,
  "& h4":
  {fontWeight:'bold',my:2,fontSize:'1.3rem'},
    "& p":
    {textAlign:"justify",
  },

  // media-query

  "@media (max-width:600px)" :
  {
    mt:0 ,
    fontSize:"1.5rem",

  }
}}
>
  <Typography>
    Welcome To My Restaurant
  </Typography>

  <p>
  I always enjoy eating at a restaurant, probably because it means I do not have to cook! My mother always told me that it is much more healthier for me to have a meal at home. I actually like cooking, but sometimes it wastes a lot of time, because of my busy study. When the wonderful time comes to go , my first favorite place is the Teriyaki Restaurant. It is undeniable that Teriyaki is the best restaurant. I am so happy to introduce it. It is located in the campus near my class, I visit this restaurant 5 to 6 times per week. The first time when I visited, I instantly felt the great welcome and smelled the delicious food.
  </p>
<br/>
<p>
It has beautiful decor and looks very fashionable. It has a whole wall made by glass so that sunlight could stream in the room. In addition, sofas replaced chairs so that we can sit very comfortable. To our satisfaction, they have a lot kinds of food supplied to us. Everyone can find the favorite food here. It also provides good services and waiters are kind hearted, they always keep smiling and ask me whether everything is ok when I am eating. Each time when I go to this restaurant, I would like to take pictures of the food, It looks silly, but I just love how the food looks like. As an added bonus, it provides carryout service,and the order always arrive in a short time.

</p>
</Box>
</Layout>
   
  )
}

export default About;