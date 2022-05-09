import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { Footer } from "./Footer";
import ImageListItem from "@mui/material/ImageListItem";

export function Footer() {
  return (
    <footer>
      <Box
        px={{ xs: 1, sm: 3, md: 4 }}
        py={{ xs: 1, sm: 3, md: 4 }}
        bgcolor="primary.dark"
        color="#f73378"
      >
        <Container>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box>Created by Avengers Team</Box>
              <Box borderBottom={1}>Find us on GitHub</Box>
              <Box>
                <Link
                  href="https://github.com/AnnaPawlowskaa"
                  color="primary.contrastText"
                  underline="hover"
                >
                  Anna Pawłowska
                </Link>
              </Box>
              <Box>
                <Link
                  href="https://github.com/ppiechowski"
                  color="primary.contrastText"
                  underline="hover"
                >
                  Piotr Piechowski
                </Link>
              </Box>
              <Box>
                <Link
                  href="https://github.com/MartaKatUrbaniak"
                  color="primary.contrastText"
                  underline="hover"
                >
                  Marta Urbaniak
                </Link>
              </Box>
              <Box>
                <Link
                  href="https://github.com/GosiaZaremba"
                  color="primary.contrastText"
                  underline="hover"
                >
                  Gosia Zaremba
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Donate us!</Box>
              <Box>
                <ImageListItem
                  key={donationBox.jpeg}
                  cols={item.cols || 1}
                  rows={item.rows || 1}
                ></ImageListItem>

                {/* <a href="https://www.paypal.com/donate/?hosted_button_id=P8GCJVPGGBQ4Y" color="primary.contrastText">
                 <img src={/Footer/donationBox.jpeg} alt={french bulldog carries donate box}/>
                </a> */}
              </Box>
            </Grid>
          </Grid>
          <Box
            color="primary.contrastText"
            textAlign="center"
            pt={{ xs: 1, sm: 0 }}
            pb={{ xs: 1, sm: 0 }}
          >
            ALL RIGHTS RESERVED &reg; {new Date().getFullYear()} InfoShare
            Academy
          </Box>
        </Container>
      </Box>
    </footer>
  );
}
