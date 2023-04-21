import Image from "next/image";
import {
  Box,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Card from "@mui/material/Card";
import { promises as fs } from "fs";
import path from "path";
import Section from "@/components/section";
import Link from "next/link";

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
      { ...manifest[i], models: internal["models"].slice(0, 4) },
    ];
  }
  return { props: { sections: final } };
};

const Heading = () => {
  return (
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
            color="primary.main"
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
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

const ModelCard = ({ model, specie }) => {
  return (
    <Link href={`/viewer/${specie}/${model["filename"]}`}>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            sx={{ width: "100%" }}
            image={`/${model["url"]}.png`}
            alt={model["name"]}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              align="center"
            >
              {model["name"]}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

const ModelSections = ({ models }) => {
  return (
    <Section title={models["species"]} link={`/viewer/${models["species"]}`}>
      <Grid container spacing={2}>
        {models["models"].map((model, idx) => (
          <Grid item lg={3} md={6} xs={12} key={idx}>
            <ModelCard model={model} specie={models["species"]} />
          </Grid>
        ))}
      </Grid>
    </Section>
  );
};

export default function Home({ sections }) {
  return (
    <>
      <Heading />
      {sections.map((models, idx) => (
        <ModelSections key={idx} models={models} />
      ))}
    </>
  );
};
