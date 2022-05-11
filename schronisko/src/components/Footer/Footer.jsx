import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import DonationImg from "./donationBox.jpeg";
import { Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import GitHubImg from "./GitHub-Mark-Light-32px.png";

export const Footer = () => {
  function Copyright() {
    return (
      <Typography color="#fff" variant="caption">
        {"Copyright © "}
        <Link color="inherit" href="https://infoshareacademy.com/">
          InfoShare Academy
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }
  return (
    <Box
      component="footer"
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        position: "fixed",
        bottom: 0,
        width: "100vw",
        boxShadow: "0px 0px 18px -15px rgba(89, 105, 101, 1)",
        marginTop: "30px",
        backgroundColor: "#82009f",
        color: "#fff",
      }}
    >
      <Container
        sx={{
          gridColumn: "1/1",
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gridTemplateRows: "repeat(3, 1fr)",
          alignItems: "center",
          marginTop: "10px",
        }}
      >
        {" "}
        <Typography
          variant="caption"
          xs={{
            gridColumnStart: "1",
            gridColumnEnd: "2",
            gridRow: "1/1",
          }}
        >
          Created by Avengersi:
        </Typography>
        <Link
          sx={{
            alignSelf: "end",
            justifySelf: "center",
            gridColumn: "1/1",
            gridRow: "2/2",
          }}
          color="inherit"
          underline="none"
          target="_blank"
          rel="noopener"
          href="https://github.com/GosiaZaremba/"
        >
          <Typography
            className="profileLink"
            variant="caption"
            component="p"
            gutterBottom
          >
            <GitHubIcon fontSize="small" /> Gosia
          </Typography>
        </Link>
        <Link
          sx={{
            alignSelf: "end",
            justifySelf: "start",
            gridColumn: "2/2",
            gridRow: "2/2",
          }}
          color="#fff"
          underline="none"
          target="_blank"
          rel="noopener"
          href="https://github.com/ppiechowski"
        >
          <Typography
            className="profileLink"
            variant="caption"
            component="p"
            gutterBottom
          >
            <GitHubIcon fontSize="small" /> Piotrek
          </Typography>
        </Link>
        <Link
          sx={{
            alignSelf: "start",
            justifySelf: "center",
            gridColumn: "1/1",
            gridRow: "3/3",
          }}
          color="#fff"
          underline="none"
          target="_blank"
          rel="noopener"
          href="https://github.com/MartaKatUrbaniak"
        >
          <Typography
            className="profileLink"
            variant="caption"
            component="p"
            gutterBottom
          >
            <GitHubIcon fontSize="small" /> Marta
          </Typography>
        </Link>
        <Link
          sx={{
            alignSelf: "start",
            justifySelf: "start",
            gridColumn: "2/2",
            gridRow: "3/3",
          }}
          color="#fff"
          underline="none"
          target="_blank"
          rel="noopener"
          href="https://github.com/AnnaPawlowskaa"
        >
          <Typography
            className="profileLink"
            variant="caption"
            component="p"
            gutterBottom
          >
            <GitHubIcon fontSize="small" /> Ania
          </Typography>
        </Link>
      </Container>
      <Container
        sx={{
          gridColumn: "2/2",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Copyright />
      </Container>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{ gridColumn: "3/3", alignSelf: "end" }}
      >
        <Typography variant="body2" color="#fff">
          Wpłać darowiznę{" "}
        </Typography>
        <Link
          href="https://www.paypal.com/donate/?hosted_button_id=P8GCJVPGGBQ4Y"
          target="_blank"
          rel="noopener"
        >
          <img
            style={{ borderRadius: "20px" }}
            width="70"
            height="70"
            src={DonationImg}
            alt="french bulldog carries donate box"
          />
        </Link>
      </Box>
    </Box>
  );
};

// export const Footer = () => {
//   return (
//     <footer>
//       <Box
//         px={{ xs: 1, sm: 3, md: 4 }}
//         py={{ xs: 1, sm: 3, md: 4 }}
//         bgcolor="text.primary"
//         color="primary.light"
//       >
//         <Container>
//           <Typography variant="body2" gutterBottom>
//             <Grid
//               container
//               spacing={8}
//               justifyContent="space-between"
//               alignItems="center"
//             >
//               <Grid item xs={12} sm={4}>
//                 <Box>Aplikacja stworzona przez Avengers Team</Box>
//                 <Box>
//                   <img
//                     src={GitHubImg}
//                     width="12"
//                     height="12"
//                     alt="github icon"
//                   ></img>
//                   <Link
//                     href="https://github.com/AnnaPawlowskaa"
//                     color="primary.contrastText"
//                     underline="hover"
//                   >
//                     Anna Pawłowska
//                   </Link>
//                 </Box>
//                 <Box>
//                   <img
//                     src={GitHubImg}
//                     width="12"
//                     height="12"
//                     alt="github icon"
//                   ></img>
//                   <Link
//                     href="https://github.com/ppiechowski"
//                     color="primary.contrastText"
//                     underline="hover"
//                   >
//                     Piotr Piechowski
//                   </Link>
//                 </Box>
//                 <Box>
//                   <img
//                     src={GitHubImg}
//                     width="12"
//                     height="12"
//                     alt="github icon"
//                   ></img>
//                   <Link
//                     href="https://github.com/MartaKatUrbaniak"
//                     color="primary.contrastText"
//                     underline="hover"
//                   >
//                     Marta Urbaniak
//                   </Link>
//                 </Box>
//                 <Box>
//                   <img
//                     src={GitHubImg}
//                     width="12"
//                     height="12"
//                     alt="github icon"
//                   ></img>
//                   <Link
//                     href="https://github.com/GosiaZaremba"
//                     color="primary.contrastText"
//                     underline="hover"
//                   >
//                     Gosia Zaremba
//                   </Link>
//                 </Box>
//               </Grid>
//               <Grid item justifySelf="end">
//                 <Box display="flex" flexDirection="column" alignItems="center">
//                   <Typography variant="body2">Wpłać darowiznę </Typography>
//                   <a
//                     href="https://www.paypal.com/donate/?hosted_button_id=P8GCJVPGGBQ4Y"
//                     color="primary.contrastText"
//                   >
//                     <img
//                       style={{ borderRadius: "20px" }}
//                       width="90"
//                       height="90"
//                       src={DonationImg}
//                       alt="french bulldog carries donate box"
//                     />
//                   </a>
//                 </Box>
//               </Grid>
//             </Grid>
//             <Box
//               color="primary.contrastText"
//               textAlign="center"
//               pt={{ xs: 1, sm: 0 }}
//               pb={{ xs: 1, sm: 0 }}
//             >
//               <Typography variant="caption" display="block" gutterBottom>
//                 ALL RIGHTS RESERVED &reg; {new Date().getFullYear()} InfoShare
//                 Academy
//               </Typography>
//             </Box>
//           </Typography>
//         </Container>
//       </Box>
//     </footer>
//   );
// };
