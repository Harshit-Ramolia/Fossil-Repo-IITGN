import React from "react";
import { promises as fs } from "fs";
import path from "path";
import Section from "@/components/section";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import Link from "next/link";

export const getStaticPaths = async () => {
  const jsonDirectory = path.join(process.cwd(), "/public/data/manifest.json");
  const fileContents = await fs.readFile(jsonDirectory);
  const manifest = JSON.parse(fileContents);
  const paths = manifest.map((sec) => ({
    params: {
      section: sec["species"],
    },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const section = context.params.section;
  const jsonDirectoryS = path.join(process.cwd(), "/public/data/manifest.json");
  const fileContentsS = await fs.readFile(jsonDirectoryS);
  let name = "";
  const names = JSON.parse(fileContentsS);
  for (let i = 0; i < names.length; i++) {
    if (names[i]["species"] == section) {
      name = names[i]["name"];
    }
  }
  const jsonDirectory = path.join(
    process.cwd(),
    "/public/data/" + section + ".json"
  );
  const fileContents = await fs.readFile(jsonDirectory);
  const models = JSON.parse(fileContents);
  return {
    props: {
      models,
      specie: section,
      name,
    },
  };
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const required_attrs = ["Find", "Side", "SPECIES", "STATE OF INTEGRITY"];

const ModelCard = ({ model, specie }) => {
  // console.log(name)
  return (
    <Link href={`/viewer/${specie}/${model["filename"]}`}>
      <Card>
        <CardActionArea>
          <Grid container spacing={2}>
            <Grid item md={4} sm={6} xs={12} margin="auto">
              <CardMedia
                component="img"
                sx={{ width: "100%" }}
                image={`/${model["url"]}.png`}
                alt="green iguana"
              />
            </Grid>
            <Grid item md={8} sm={6} xs={12}>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  align="left"
                >
                  {model["name"]}
                </Typography>
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
              </CardContent>
            </Grid>
          </Grid>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default function Viewer({ models, specie, name }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Section title={name}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Models" />
            <Tab label="Info" />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          {models["models"].map((model, idx) => (
            <Box mt={3} key={idx}>
              <ModelCard model={model} specie={specie} />
            </Box>
          ))}
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Typography variant="body1" align="justify" mt={2}>
            {models["description"].split("\n").map((para, idx) => (
              <>
                {idx != 1 ? (
                  para
                ) : (
                  <Box component="span" sx={{ fontStyle: "italic" }}>
                    {para}
                  </Box>
                )}
              </>
            ))}
          </Typography>
        </TabPanel>
      </Section>
    </div>
  );
}
