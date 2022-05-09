import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";

function Copyright() {
  return (
    <Typography variant="caption">
      {"Copyright © "}
      <Link color="inherit" href="https://infoshareacademy.com/">
        InfoShare Academy
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        position: "sticky",
        bottom: 0,
        width: "100vw",
        background:
          "linear-gradient(49deg, rgba(92,219,194,1) 0%, rgba(17,143,118,0.2805497198879552) 50%, rgba(213,103,219,1) 100%)",
        boxShadow: "0px 0px 71px -12px rgba(89, 105, 101, 1)",
        marginTop: "30px",
      }}
    >
      <Container sx={{ gridColumnStart: "1", gridColumnEnd: "3" }}>
        <Typography variant="h6" component="h3">
          Azyl dla psów
        </Typography>
        <Typography variant="subtitle2" component="h4">
          ul. Pjeskowa 6, 80-180 Pieskowo
        </Typography>
        <Typography variant="subtitle2" component="p">
          Czynne: pon-pt 14-18, sob-nd: 10-18
        </Typography>
        <Typography variant="subtitle2" component="h4">
          Tel: 753-951-789
        </Typography>
      </Container>
      <Container
        sx={{
          gridColumnStart: "3",
          gridColumnEnd: "3",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Typography variant="body1">Created by "Avengersi"</Typography>
        <Copyright />
      </Container>
      <Container
        sx={{
          marginTop: "10px",
          gridColumnStart: "5",
          gridColumnEnd: "5",
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
        }}
      >
        <Link
          underline="none"
          target="_blank"
          rel="noopener"
          href="https://github.com/GosiaZaremba/"
        >
          <Typography
            className="profileLink"
            variant="subtitle1"
            component="p"
            gutterBottom
          >
            <GitHubIcon /> Gosia
          </Typography>
        </Link>

        <Link
          underline="none"
          target="_blank"
          rel="noopener"
          href="https://github.com/ppiechowski"
        >
          <Typography
            className="profileLink"
            variant="subtitle1"
            component="p"
            gutterBottom
          >
            <GitHubIcon /> Piotrek
          </Typography>
        </Link>

        <Link
          underline="none"
          target="_blank"
          rel="noopener"
          href="https://github.com/MartaKatUrbaniak"
        >
          <Typography
            className="profileLink"
            variant="subtitle1"
            component="p"
            gutterBottom
          >
            <GitHubIcon /> Marta
          </Typography>
        </Link>

        <Link
          underline="none"
          target="_blank"
          rel="noopener"
          href="https://github.com/AnnaPawlowskaa"
        >
          <Typography
            className="profileLink"
            variant="subtitle1"
            component="p"
            gutterBottom
          >
            <GitHubIcon /> Ania
          </Typography>
        </Link>
      </Container>
    </Box>
  );
};
