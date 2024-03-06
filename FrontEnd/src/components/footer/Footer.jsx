import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
    component="footer"
    sx={{
      backgroundColor: '#1070ff', // Light Blue
      p: 6,
    }}
  >

      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h3" color="text.primary" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
            This sales site was created by Yitzchak, Ron, Nitzan and Mr. David in order to answer the shopping problems that exist in our country and reduce costs
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h3" color="text.primary" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="praimary">
              123 Main Street, Tel-Aviv, ISRAEL
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: Meyer2615@gmail.com
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Phone: +1 234 567 8901
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Follow Us
            </Typography>
            <Link href="https://www.facebook.com/" color="inherit">
              <Facebook />
              


            </Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit">
              <Twitter />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://your-website.com/">
              Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}