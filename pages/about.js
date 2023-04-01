import Section from "@/components/section";
import { Box, Typography } from "@mui/material";
import React from "react";

export default function About() {
  return (
    <Box>
      <Section title="What is this project?">
        <Typography mt={1} variant="body1" align="justify">
          This project developed at the Archaeological Sciences Center at IIT
          Gandhinagar is meant to be a large-scale digital access repository of
          artifacts and specimens obtained available at the institute. As of
          now, only bones have been updated on the website. These bones were
          procured through either skeletal remains, or by burying dead animals
          and allowing them to decompose into bones after which they are cleaned
          and stored.
        </Typography>
      </Section>
      <Section title="Why we do this?">
        <Typography mt={1} variant="body1" align="justify">
          Traditionally, fossils have been preserved and studied either using
          physical specimens or two-dimensional images and sketches. With the
          rise in technology and increased computing power, digital
          three-dimensional visualizations of fossils have become an
          increasingly viable and compelling prospect. There are several
          benefits to maintaining a digital repository of 3D-scanned fossils.
        </Typography>
        <Typography mt={1} variant="body1" align="justify">
          Firstly, it helps in maintaining archival copies of physical
          specimens, which are usually very fragile. These objects stand a
          chance to break under transport and even degrade under storage.
          Creating a detailed virtual copy of these fossils ensures their
          preservation in some form for an indefinitely long period of time.
        </Typography>
        <Typography mt={1} variant="body1" align="justify">
          Moreover, many species can be rare and limited to specific regions. A
          digital repository can help overcome this physical barrier by
          democratizing access to researchers, students, and hobbyists alike.
        </Typography>
        <Typography mt={1} variant="body1" align="justify">
          Such a repository can also prove to be a very useful tool for
          educational purposes. Traditional two-dimensional images and sketches
          are limited in their scope of visualizing information.
          Three-dimensional models can serve as an excellent supplement,
          allowing users to zoom in on the bones and study them from all angles
          by interacting with them from their computers.
        </Typography>
        <Typography mt={1} variant="body1" align="justify">
          We hope that easy access to fossils will encourage a newfound
          appreciation and deeper understanding of our planet’s rich history. It
          will facilitate scientific inquiry, inspire new research, and promote
          greater public engagement with the natural world.
        </Typography>
      </Section>
      {/* <Section title="Nilgai">
        <Typography mt={1} variant="body1" align="justify">
          Nilgai (Boselaphus tragocamelus), the largest Asian antelope, is
          indigenous to the Indian subcontinent and is ubiquitous across the
          northern region. The name "Nilgai" originates from the Hindustani
          language meaning "blue cow" as adult bulls have a blue-grey coat,
          while cows have an orange-brown coat. It belongs to the subfamily
          Bovinae and is held in sacred esteem by Hindus similar to cattle.
          Nilgai has a horse-like conformation with its long neck with a short
          upright mane, a bony narrow head, a barrel-like chest, and strong
          legs. Sexual dimorphism is prominent as only males possess horns,
          which are 15-24 cm long. Nilgai grows up to 1.5 meters tall and 300 kg
          in weight. This animal is abundant in India and is the only one of the
          four Indian antelopes that still is abundant.
        </Typography>
      </Section>
      <Section title="Rhesus Monkey">
        <Typography mt={1} variant="body1" align="justify">
          The Rhesus Monkey (Macaca mulatta), is an Old World monkey with a
          broad geographic range across South, Central, and Southeast Asia. It
          is a diurnal, arboreal, and terrestrial primate with a brown or
          greyish coat, measuring 47-53 cm in length and weighing between
          5.3-7.7 kg. There are between six and nine subspecies of the Rhesus
          Monkey, found in a variety of habitats, including grasslands, forests,
          and arid areas, and they can coexist with humans in some regions. The
          monkey is mainly herbivorous, with a diet that includes fruits, seeds,
          roots, and cereals, and they have also been known to eat insects and
          search for food in human garbage. Rhesus monkeys live in groups with
          several adults of both sexes and their young, with females tending to
          stay in their original troop and males leaving at maturity.
        </Typography>
      </Section>
      <Section title="Goat">
        <Typography mt={1} variant="body1" align="justify">
          The goat (Capra hircus) is a domesticated species of goat-antelope
          that is kept as livestock for meat, milk, fur, and skins. It belongs
          to the animal family Bovidae and is closely related to sheep.
          Domesticated goats are descended from the wild goat of Southwest Asia
          and Eastern Europe, and there are over 300 distinct breeds of goats.
          They are smaller and lighter than sheep, have backward-arching horns,
          and are covered in straight hair. Male goats, called bucks or billys,
          usually have a beard, while females are called does or nannys, and
          immature goats are called kids. Goats have been used for human
          consumption and milk production for thousands of years, and their milk
          is often used to make goat cheese. They are relatively low-maintenance
          animals, and one or two goats can provide sufficient milk for a family
          throughout the year. Goat meat is edible, and some breeds, such as the
          Angora and Cashmere, are raised for their wool.
        </Typography>
      </Section>
      <Section title="Dog">
        <Typography mt={1} variant="body1" align="justify">
          Dogs (Canis familiaris or Canis lupus familiaris) are domesticated
          mammals and are descendants of gray wolves. There are over 400
          distinct breeds of dogs that vary in shape, size, and color. The dog
          is related to foxes and jackals and is one of the two most ubiquitous
          domestic animals, along with cats. They were the first species to be
          domesticated by humans over 15,000 years ago. Due to their long
          association with humans, they have evolved to thrive on a starch-rich
          diet that other canids cannot. Dogs have been selectively bred for
          various behaviors, physical attributes, and sensory capabilities over
          the course of millennia. Dogs are popular pets and perform many roles
          for humans such as hunting, herding, protection, assistance to police
          and military, companionship, and therapy.
        </Typography>
      </Section> */}
    </Box>
  );
}
