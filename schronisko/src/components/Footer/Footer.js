import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import DonationImg from "./donationBox.jpeg";
import GitHubImg from "./GitHub-Mark-Light-32px.png";
import { Typography } from "@mui/material";

export function Footer() {
  return (
    <footer>
      <Box
        px={{ xs: 1, sm: 3, md: 4 }}
        py={{ xs: 1, sm: 3, md: 4 }}
        bgcolor="text.primary"
        color="primary.light"
      >
        <Container>
          <Typography variant="body2" gutterBottom>
            <Grid
              container
              spacing={8}
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item xs={12} sm={4}>
                <Box>Aplikacja stworzona przez Avengers Team</Box>
                <Box>
                  <img
                    src={GitHubImg}
                    width="12"
                    height="12"
                    alt="github icon"
                  ></img>
                  <Link
                    href="https://github.com/AnnaPawlowskaa"
                    color="primary.contrastText"
                    underline="hover"
                  >
                    Anna Pawłowska
                  </Link>
                </Box>
                <Box>
                  <img
                    src={GitHubImg}
                    width="12"
                    height="12"
                    alt="github icon"
                  ></img>
                  <Link
                    href="https://github.com/ppiechowski"
                    color="primary.contrastText"
                    underline="hover"
                  >
                    Piotr Piechowski
                  </Link>
                </Box>
                <Box>
                  <img
                    src={GitHubImg}
                    width="12"
                    height="12"
                    alt="github icon"
                  ></img>
                  <Link
                    href="https://github.com/MartaKatUrbaniak"
                    color="primary.contrastText"
                    underline="hover"
                  >
                    Marta Urbaniak
                  </Link>
                </Box>
                <Box>
                  <img
                    src={GitHubImg}
                    width="12"
                    height="12"
                    alt="github icon"
                  ></img>
                  <Link
                    href="https://github.com/GosiaZaremba"
                    color="primary.contrastText"
                    underline="hover"
                  >
                    Gosia Zaremba
                  </Link>
                </Box>
              </Grid>
              <Grid item justifySelf="end">
                <Box display="flex" flexDirection="column" alignItems="center">
                  <Typography variant="body2">Wpłać darowiznę </Typography>
                  <a
                    href="https://www.paypal.com/donate/?hosted_button_id=P8GCJVPGGBQ4Y"
                    color="primary.contrastText"
                  >
                    <img
                      style={{ borderRadius: "20px" }}
                      width="90"
                      height="90"
                      src={DonationImg}
                      alt="french bulldog carries donate box"
                    />
                  </a>
                </Box>
              </Grid>
            </Grid>
            <Box
              color="primary.contrastText"
              textAlign="center"
              pt={{ xs: 1, sm: 0 }}
              pb={{ xs: 1, sm: 0 }}
            >
              <Typography variant="caption" display="block" gutterBottom>
                ALL RIGHTS RESERVED &reg; {new Date().getFullYear()} InfoShare
                Academy
              </Typography>
            </Box>
          </Typography>
        </Container>
      </Box>
    </footer>
  );
}
