import React from "react";
import { promises as fs } from "fs";
import path from "path";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import Section from "@/components/section";
import Link from "next/link";

export const getStaticPaths = async () => {
  const jsonDirectory = path.join(process.cwd(), "/public/data/manifest.json");
  const fileContents = await fs.readFile(jsonDirectory);
  const manifest = JSON.parse(fileContents);
  let paths = [
    {
      params: {
        section: "Rhesus Macaque",
        model: "10_ribs",
      },
    },
  ];
  for (let i = 0; i < manifest.length; i++) {
    const jsonDirectory = path.join(
      process.cwd(),
      "/public/data/" + manifest[i]["species"] + ".json"
    );
    const fileContents = await fs.readFile(jsonDirectory);
    const models = JSON.parse(fileContents);
    paths = [
      ...paths,
      ...models["models"].map((model) => ({
        params: {
          section: manifest[i]["species"],
          model: model["filename"],
        },
      })),
    ];
  }
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const section = context.params.section;
  const model_para = context.params.model;
  const jsonDirectory = path.join(
    process.cwd(),
    "/public/data/" + section + ".json"
  );
  const fileContents = await fs.readFile(jsonDirectory);
  const models = JSON.parse(fileContents);
  const model = models["models"].filter((obj) => obj["name"] == model_para)[0];
  const jsonDirectoryS = path.join(process.cwd(), "/public/data/manifest.json");
  const fileContentsS = await fs.readFile(jsonDirectoryS);
  let name = "";
  const names = JSON.parse(fileContentsS);
  for (let i = 0; i < names.length; i++) {
    if (names[i]["species"] == section) {
      name = names[i]["name"];
    }
  }

  var modelIndex = 0;
  const n = models["models"].length;
  for (var i = 0; i < n; i++) {
    const obj = models["models"][i];
    if (obj["filename"] == model_para) {
      return {
        props: {
          model: obj,
          specie: section,
          name: name,
          slides: [
            models["models"][(i - 1 + n) % n]["filename"],
            models["models"][(i + 1) % n]["filename"],
          ],
        },
      };
    }
  }
};

const required_attrs = [
  "Find",
  "Side",
  "SPECIES",
  "STATE OF INTEGRITY",
];

export default function ModelView({ model, specie, slides, name }) {
  return (
    <Box>
      <Section
        title={
          <>
            <Link
              href={`/viewer/${specie}`}
              style={{ ":hover": { opacity: "0.8" } }}
            >
              {name}
            </Link>{" "}
            {" > " + model["name"]}
          </>
        }
      >
        <Grid container spacing={2}>
          <Grid item md={3} xs={12}>
            <Paper className="roundenss">
              <Box p={1}>
              {Object.keys(model).map((attr) => {
                return (
                  <Box>
                    {required_attrs.includes(attr) ? (
                      <>
                        <Typography
                          display="inline"
                          fontWeight={800}
                          variant="body1"
                        >
                          {attr.toUpperCase()} :{" "}
                        </Typography>
                        <Typography display="inline" variant="body1">
                          {model[attr]}
                        </Typography>
                      </>
                    ) : (
                      <></>
                    )}
                  </Box>
                );
              })}
              </Box>
            </Paper>
          </Grid>
          <Grid item md={9} xs={12}>
            <Paper className="roundness">
              <model-viewer
                src={`/${model["url"]}.glb`}
                key={`/${model["url"]}.glb`}
                poster={`/${model["url"]}.png`}
                shadow-intensity="1"
                camera-controls
                touch-action="pan-y"
                alt="Not available"
                style={{ width: "100%", height: "500px" }}
              ></model-viewer>
            </Paper>
          </Grid>
        </Grid>
        <Box pt={2} display="flex">
          <Link href={`/viewer/${specie}/${slides[0]}`}>
            <Button
              variant="contained"
              sx={{ minWidth: "100px" }}
              className="roundness"
            >
              Prev
            </Button>
          </Link>
          <Box flexGrow={1} />
          <Link href={`/viewer/${specie}/${slides[1]}`}>
            <Button
              variant="contained"
              sx={{ width: "100px" }}
              className="roundness"
            >
              Next
            </Button>
          </Link>
        </Box>
      </Section>
    </Box>
  );
}
