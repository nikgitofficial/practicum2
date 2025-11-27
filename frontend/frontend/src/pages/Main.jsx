import React from "react";
import { Link } from "react-router-dom";
import { Box, Stack, Typography, Card, CardActionArea } from "@mui/material";

const navItems = [
  { label: "Practicum 1", to: "/practicum1" },
  { label: "Practicum 2 — Basic Fetching API", to: "/practicum2" },
  { label: "Practicum 3 — Toggle Hide/Show", to: "/practicum3" },
  { label: "Practicum 4", to: "/practicum4" },
  { label: "Practicum 5 — Fetching + Filter", to: "/practicum5" },
  { label: "Practicum 6", to: "/practicum6" },
  { label: "Practicum 7 — 2028 Signature Pad", to: "/practicum7" },
  { label: "Practicum 8", to: "/practicum8" },
  { label: "Practicum 9", to: "/practicum9" },
];

const Main = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 3,
        background: "linear-gradient(135deg, #e3f2fd, #e8eaf6)",
      }}
    >
      <Box sx={{ width: "100%", maxWidth: 600 }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            textAlign: "center",
            mb: 4,
            letterSpacing: 1,
          }}
        >
          Main Page
        </Typography>

        <Stack spacing={2}>
          {navItems.map((item, i) => (
            <Card
              key={i}
              elevation={3}
              sx={{ borderRadius: 3, overflow: "hidden" }}
            >
              <CardActionArea
                component={Link}
                to={item.to}
                sx={{ p: 2 }}
              >
                <Typography
                  sx={{
                    fontSize: 20,
                    fontWeight: 500,
                  }}
                >
                  {item.label}
                </Typography>
              </CardActionArea>
            </Card>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default Main;