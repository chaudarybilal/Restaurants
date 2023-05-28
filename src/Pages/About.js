import React from "react";
import Layout from "../Components/Layout/Layout";
import { Box, Typography } from "@mui/material";
const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Resturant</Typography>
        <p>
          Welcome to our fast food restaurant, where flavor and convenience come
          together for a delightful dining experience. Indulge in our carefully
          curated menu, offering a wide array of mouthwatering options to
          satisfy every craving. From juicy burgers to crispy fries and
          refreshing salads, we have something to tantalize your taste buds. Our
          dedicated team is committed to serving you with efficiency and a
          friendly smile, ensuring a seamless visit every time. With our
          affordable prices, we believe that great food should be accessible to
          all without compromising on quality. Whether you're on the go or
          looking for a relaxed meal, our quick-service and welcoming atmosphere
          cater to your needs.
        </p>
        <br />
        <p>
          Join us for a satisfying dining experience that combines speed,
          affordability, and exceptional flavors. We can't wait to serve you and
          make our fast food restaurant your go-to destination for delicious
          meals.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
