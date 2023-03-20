import Section from "@/components/section";
import { Box, Typography } from "@mui/material";
import React from "react";

export default function About() {
  return (
    <Box>
      <Section title="What is this project?">
        <Typography variant="body1" align="justify">
          This project developed at the Archaeological Sciences Center at IIT
          Gandhinagar is meant to be a large scale digital access repository of
          artifacts and specimen obtained available at the institute. As of now,
          only bones have been updated on the website. These bones were procured
          through either skeletal remains, or by burying dead animals and
          allowing them to decompose to bones after which they are cleaned and
          stored.
        </Typography>
      </Section>
      <Section title=" Who is this for?">
        <Typography variant="body1" align="justify">
          We hope that this material will be useful for students and researchers
          around the globe. You can view a variety of objects at this website.{" "}
        </Typography>
      </Section>
    </Box>
  );
}
