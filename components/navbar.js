import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", font: "lato" }}>
      <Typography variant="h6" display="inline">
        ASC
      </Typography>
      <Image src="/logo.png" width={36} height={36} />
      <Typography variant="h6" display="inline">
        IITGN
      </Typography>
    </Box>
  );
};

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <ElevationScroll>
        <AppBar>
          <Toolbar>
            <Link href="/">
              <Logo />
            </Link>
            <Box sx={{ flexGrow: 1 }} />
            <Link href="/">
              <Button color="inherit">Home</Button>
            </Link>
            <Link href="/about">
              <Button color="inherit">About</Button>
            </Link>
            {/* <Link href="/contact">
              <Button color="inherit">Contact Us</Button>
            </Link> */}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </Box>
  );
}
