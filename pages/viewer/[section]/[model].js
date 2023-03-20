import React from "react";
import { promises as fs } from "fs";
import path from "path";
import { Box } from "@mui/material";
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
  return {
    props: {
      model: model,
      specie: section,
    },
  };
};

export default function ModelView({ model, specie }) {
  console.log(model);
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
        <model-viewer
          src={`/${model["url"]}`}
          poster="Not available"
          shadow-intensity="1"
          camera-controls
          touch-action="pan-y"
          alt="Not available"
          style={{ width: "100%", height: "500px" }}
        ></model-viewer>
      </Section>
    </Box>
  );
}
