// import * as React from "react";
// import { styled } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
// import IconNameBreed from "../IconNameBreed/IconNameBreed.jsx";
// import BoxNumber from "../Box/Box";
// import { GetDogPhoto } from "../DogProfile/GetDogPhoto";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: "#C97D8F",
//   fontFamily: "Roboto, Helvetica, Arial,sans-serif",
// }));

// export default function SingleDogView() {
//   return (
//     <Box
//       sx={{
//         width: 0.8,
//         backgroundColor: "#fff",
//       }}
//     >
//       <Box
//         sx={{
//           display: "grid",
//           gridAutoFlow: "row",
//           gridTemplateColumns: "repeat(13, 1fr)",
//           gridTemplateRows: "repeat(4, 1fr)",
//           padding: "5px",
//           gap: 1,
//         }}
//       >
//         <Item
//           sx={{
//             gridColumn: "1/4",
//             gridRow: "1 /5",
//             padding: "0",
//           }}
//           elevation={0}
//         >
//           <GetDogPhoto />
//         </Item>

//         <Item sx={{ gridColumn: "4/6", gridRow: "1/3" }} elevation={0}>
//           <IconNameBreed />
//         </Item>

// <Item sx={{ gridColumn: "4/6", gridRow: "3/5" }} elevation={0}>
//   <BoxNumber />
// </Item>

// <Item sx={{ gridColumn: "6/8", gridRow: "2/4" }} elevation={0}>
//   food
// </Item>

//         <Item sx={{ gridColumn: "8/10", gridRow: "2/4" }} elevation={0}>
//           walk
//         </Item>

//         <Item sx={{ gridColumn: "10/12", gridRow: "2/4" }} elevation={0}>
//           pills
//         </Item>

//         <Item sx={{ gridColumn: "12/14", gridRow: "2/4" }} elevation={0}>
//           cleaning
//         </Item>
//       </Box>
//     </Box>
//   );
// }

import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import IconNameBreed from "../IconNameBreed/IconNameBreed.jsx";
import BoxNumber from "../Box/Box";
import { GetDogPhoto } from "../DogProfile/GetDogPhoto";
import Container from "@mui/material/Container";
import LabelFeeding from "../Label/LabelFeeding";
import LabelWalk from "../Label/LabelWalk";
import LabelPills from "../Label/LabelPills";
import LabelCleaning from "../Label/LabelCleaning";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#f6f7fa",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "#82009f",
  fontFamily: "Roboto, Helvetica, Arial,sans-serif",
}));

const SingleDogView = () => {
  return (
    <Container
      sx={{
        width: "100vw",
        backgroundColor: "#f6f7fa",
        borderBottom: "solid #82009f 2px",
        marginTop: "10px",
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0} columns={16}>
          <Grid item xs={16} sm={3}>
            <Item
              sx={{
                paddingBottom: "10px",
              }}
              elevation={0}
            >
              <GetDogPhoto />
            </Item>
          </Grid>
          <Grid item xs={16} sm={3}>
            <Item
              sx={{
                padding: "0",
              }}
              elevation={0}
            >
              <IconNameBreed />
              <BoxNumber />
            </Item>
          </Grid>
          {/* <Grid item xs={16} sm={2}>
            <Item
              sx={{
                padding: "0",
              }}
              elevation={0}
            >
             
            </Item> */}
          {/* </Grid> */}
          <Grid item xs={16} sm={10}>
            <Item
              sx={{
                padding: "0",
                marginTop: "80px",
              }}
              elevation={0}
            >
              <LabelFeeding />
              <LabelWalk />
              <LabelPills />
              <LabelCleaning />
            </Item>
          </Grid>
          {/* <Grid item xs={16} sm={2}>
            <Item
              sx={{
                padding: "0",
                margin: "0",
              }}
              elevation={0}
            >
              <LabelWalk />
            </Item>
          </Grid>
          <Grid item xs={16} sm={2}>
            <Item
              sx={{
                padding: "0",
              }}
              elevation={0}
            >
              <LabelPills />
            </Item>
          </Grid>
          <Grid item xs={16} sm={2}>
            <Item
              sx={{
                padding: "0",
              }}
              elevation={0}
            >
              <LabelCleaning />
            </Item>
          </Grid> */}
        </Grid>
      </Box>
    </Container>
  );
};

export default SingleDogView;
