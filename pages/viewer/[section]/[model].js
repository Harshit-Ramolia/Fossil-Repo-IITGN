import React from "react";
import { promises as fs } from "fs";
import path from "path";
import { Box, Button, Paper } from "@mui/material";
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
        model: "Ribs 10",
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
          model: model["name"],
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
  var modelIndex = 0;
  const n = models["models"].length;
  for (var i = 0; i < n; i++) {
    const obj = models["models"][i];
    if (obj["name"] == model_para) {
      console.log(i);
      return {
        props: {
          model: obj,
          specie: section,
          slides: [
            models["models"][(i - 1 + n) % n]["name"],
            models["models"][(i + 1) % n]["name"],
          ],
        },
      };
    }
  }
};

export default function ModelView({ model, specie, slides }) {
  console.log(slides)
  return (
    <Box>
      <Section
        title={
          <>
            <Link
              href={`/viewer/${specie}`}
              style={{ ":hover": { opacity: "0.8" } }}
            >
              {specie}
            </Link>{" "}
            {" > " + model["name"]}
          </>
        }
      >
        <Paper className="roundness">
          <model-viewer
            src={`/${model["url"]}`}
            poster="Not available"
            shadow-intensity="1"
            camera-controls
            touch-action="pan-y"
            alt="Not available"
            style={{ width: "100%", height: "500px" }}
          ></model-viewer>
        </Paper>
        <Box pt={2} display="flex">
          <Link href={`/viewer/${specie}/${slides[0]}`}>
            <Button
              variant="contained"
              sx={{ minWidth: "200px" }}
              className="roundness"
            >
              Prev
            </Button>
          </Link>
          <Box flexGrow={1} />
          <Link href={`/viewer/${specie}/${slides[0]}`}>
            <Button
              variant="contained"
              sx={{ minWidth: "200px" }}
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
