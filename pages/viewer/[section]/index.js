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

const required_attrs = [
  "Find",
  "Side",
  "OBS SPECIES",
  "STATE OF INTEGRITY",
  "REMARKS",
];

const ModelCard = ({ model, key }) => {
  return (
    <a href="/" target="_blank">
      <Card>
        <CardActionArea>
          <Grid container spacing={2}>
            <Grid item md={4} sm={6} xs={12} margin="auto">
              <CardMedia
                component="img"
                sx={{ width: "100%" }}
                image="/data/model/rhesus/images/Cranial12.jpg"
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
    </a>
  );
};

export default function Viewer({ models, specie }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Section title={specie}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Models" />
            <Tab label="Info" />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          {models["models"].map((model, idx) => (
            <Box mt={3}>
              <ModelCard model={model} />
            </Box>
          ))}
        </TabPanel>
        <TabPanel value={value} index={1}>
          {models["description"].split("\n").map((para) => (
            <Typography variant="body1" align="justify" mt={2}>
              {para}
            </Typography>
          ))}
        </TabPanel>
      </Section>
    </div>
  );
}
