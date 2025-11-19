import React from "react";
import { Link } from "react-router-dom";
import { Box, Stack, Typography } from "@mui/material";

const Main = () => {
  return (
    <Box
      sx={{
        height: "30vh",               // full viewport height
        display: "flex",
        justifyContent: "center",       // horizontal center
        alignItems: "center",           // vertical center
        textAlign: "center",
      }}
    >
      <Stack spacing={2} alignItems="center">
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            fontSize: "48px",
            color: "black",
            fontFamily: "Arial, sans-serif",
            fontStyle: "normal",
          }}
        >
          Main Page
        </Typography>

        <Typography
          component={Link}
          to="/practicum1"
          sx={{
            fontSize: "24px",
            fontFamily: "Arial, sans-serif",
            color: "blue",
            textDecoration: "none",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          Practicum 1
        </Typography>
         <Typography
          component={Link}
          to="/practicum2"
          sx={{
            fontSize: "24px",
            fontFamily: "Arial, sans-serif",
            color: "blue",
            textDecoration: "none",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          Practicum 2 Basic Fetching data api
        </Typography>
        <Typography
          component={Link}
          to="/practicum3"
          sx={{
            fontSize: "24px",
            fontFamily: "Arial, sans-serif",
            color: "blue",
            textDecoration: "none",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          Practicum 3  toggle hide and show
        </Typography>
         <Typography
          component={Link}
          to="/practicum4"
          sx={{
            fontSize: "24px",
            fontFamily: "Arial, sans-serif",
            color: "blue",
            textDecoration: "none",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          Practicum 4
        </Typography>
         <Typography
          component={Link}
          to="/practicum5"
          sx={{
            fontSize: "24px",
            fontFamily: "Arial, sans-serif",
            color: "blue",
            textDecoration: "none",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          Practicum 5 DATA  fetching with filter or search
        </Typography>
        <Typography
          component={Link}
          to="/practicum6"
          sx={{
            fontSize: "24px",
            fontFamily: "Arial, sans-serif",
            color: "blue",
            textDecoration: "none",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          Practicum 6
        </Typography>
         <Typography
          component={Link}
          to="/practicum7"
          sx={{
            fontSize: "24px",
            fontFamily: "Arial, sans-serif",
            color: "blue",
            textDecoration: "none",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          Practicum 7
        </Typography>
      </Stack>
    </Box>
  );
};

export default Main;
