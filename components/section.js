import { Box, Paper, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export default function Section({ children, title, link }) {
  return (
    <Box>
      <Paper
        sx={{
          backgroundColor: "primary.dark",
          p: 5,
          pt: 1,
          pb: 1,
          color: "primary.light",
        }}
        className="roundness"
        elevation={0}
      >
        <Box display="flex" alignItems="center">
          <Typography variant="h6" flexGrow={1}>
            {title}
          </Typography>
          {link != undefined ? (
            <Link href={link}>
              <Box
                sx={{
                  ":hover": { opacity: "0.8" },
                  display: "flex",
                  alignItems: "center",
                  // fontSize: '14px'
                }}
              >
                View More
                <KeyboardArrowRightIcon />
              </Box>
            </Link>
          ) : (
            ""
          )}
        </Box>
      </Paper>
      <Box
        sx={{
          p: 5,
          pt: 1,
          pb: 1,
        }}
        className="roundness"
      >
        {children}
      </Box>
    </Box>
  );
}
