import Head from "next/head";
import Image from "next/image";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { useEffect } from "react";
import axios from "axios";
import { promises as fs } from "fs";
import path from "path";
import Section from "@/components/section";

export const getStaticProps = async () => {
  const jsonDirectory = path.join(process.cwd(), "/public/data/manifest.json");
  const fileContents = await fs.readFile(jsonDirectory);
  const manifest = JSON.parse(fileContents);
  let final = [];
  for (let i = 0; i < manifest.length; i++) {
    const jsonDirectory = path.join(
      process.cwd(),
      "/public/data/" + manifest[i]["species"] + ".json"
    );
    const fileContents = await fs.readFile(jsonDirectory);
    const internal = JSON.parse(fileContents);
    final = [
      ...final,
      { ...manifest[i], "3d": internal["models"].slice(0, 4) },
    ];
  }
  manifest.map(async (model) => {
    return model;
    // const jsonDirectory = path.join(
    //   process.cwd(),
    //   "/public/data/manifest.json"
    // );
    // const fileContents = await fs.readFile(jsonDirectory);
  });
  return { props: { models: final } };
};

const ModelSections = ({ model }) => {
  return <Section title={model["species"]} link="/demo"></Section>;
};

export default function Home({ models }) {
  console.log(models);
  return (
    <>
      <Box pt={10} pb={10}>
        <Grid container>
          <Grid item md={6} xs={12} margin="auto">
            <Typography
              variant="h2"
              fontFamily="Segoe UI"
              fontWeight={800}
              display="inline"
              opacity={0.8}
            >
              Digital Repository of
            </Typography>

            <Typography
              variant="h2"
              fontFamily="Segoe UI"
              fontWeight={800}
              display="inline"
              color="primary.dark"
            >
              {" "}
              Bones and Artifacts
            </Typography>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box>
              <Image
                src="/data/images/homepage.jpg"
                style={{ height: "100%", width: "100%" }}
                width={1000}
                height={1000}
                // layout="fill"
                // objectFit="cover"
                // layout="fill"
                // objectFit="contain"
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
      {models.map((model) => (
        <ModelSections model={model} />
      ))}
      <model-viewer
        alt="Neil Armstrong's Spacesuit from the Smithsonian Digitization Programs Office and National Air and Space Museum"
        src="data/model/rhesus/models/_cranium.glb"
        // environment-image="data/model/rhesus/models/_cranium.glb"
        poster="data/model/rhesus/images/Cranial.png"
        shadow-intensity="1"
        camera-controls
        touch-action="pan-y"
        class="model"
      ></model-viewer>
    </>
  );
}
