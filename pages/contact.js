import Section from "@/components/section";
import { Box, Typography } from "@mui/material";
import React from "react";

export default function Contact() {
  return (
    <Box>
      <Section title="Contact Details">
        <Typography mt={1} variant="body1" align="justify">
          To contribute artefacts or scans to the repository, or for any
          collaborations, please contact{" "}
          <Box component="span" sx={{ fontStyle: "italic" }}>
            <a href="mailto://sharada.c@iitgn.ac.in">sharada.c@iitgn.ac.in</a>.
          </Box>
        </Typography>
        <Typography mt={1} variant="body1" align="justify">
          Other links:
        </Typography>
        <Typography mt={1} variant="body1" align="justify">
          ASC Website:{" "}
          <Box component="span" sx={{ fontStyle: "italic" }}>
            <a href="https://asc.iitgn.ac.in/">https://asc.iitgn.ac.in/</a>
          </Box>
        </Typography>
        <Typography mt={1} variant="body1" align="justify">
          Prof. Sharada CV:{" "}
          <Box component="span" sx={{ fontStyle: "italic" }}>
            <a href="https://iitgn.ac.in/faculty/hss/fac-sharada">
              https://iitgn.ac.in/faculty/hss/fac-sharada
            </a>
          </Box>
        </Typography>
        <Typography mt={1} variant="body1" align="justify">
          Maker Bhavan Website:{" "}
          <Box component="span" sx={{ fontStyle: "italic" }}>
            <a href="https://makerbhavan.iitgn.ac.in/">
              https://makerbhavan.iitgn.ac.in/
            </a>
          </Box>
        </Typography>
      </Section>

      <Section title="Acknowledgement">
        <Typography mt={1} variant="body1" align="justify">
          This repository was made as an undergraduate project course by:
          Praveen Venkatesh, Muhammad Yusuf Hassan, and Harshit Ramolia under
          the supervision of Prof. Sharada CV. All scans were made at the Maker
          Bhavan facility at IIT Gandhinagar.
        </Typography>
      </Section>
    </Box>
  );
}
