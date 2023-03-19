import Head from "next/head";
import Image from "next/image";
import { Paper } from "@mui/material";
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
      {models.map((model) => (
        <ModelSections model={model} />
      ))}
      <model-viewer
        alt="Neil Armstrong's Spacesuit from the Smithsonian Digitization Programs Office and National Air and Space Museum"
        src="data/model/rhesus/models/_cranium.glb"
        // ar
        // environment-image="data/model/rhesus/models/_cranium.glb"
        // poster="shared-assets/models/NeilArmstrong.webp"
        shadow-intensity="1"
        camera-controls
        touch-action="pan-y"
        class="model"
      ></model-viewer>
    </>
  );
}
