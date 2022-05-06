import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

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
        py: 2,
        px: 1,
        mt: 2,
        backgroundColor: "#118F76",
        display: "flex",
      }}
    >
      <Container maxWidth="100vw">
        <Typography></Typography>
        <Copyright />
      </Container>
    </Box>
  );
};
