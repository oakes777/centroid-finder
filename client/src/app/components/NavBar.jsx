"use client";
import Link from "next/link";
import Image from 'next/image';
import { AppBar, Toolbar, Button, Box } from "@mui/material";

export default function NavBar() {
  return (
    <AppBar position="static">

      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "left", gap: 1 }}>
          <Image src="/logo.png" alt="Logo" width={75} height={50} />
        </Box>
        <Button color="inherit" component={Link} href="/videos">
          Video List
        </Button>
        <Button color="inherit" component={Link} href="/results">
          All Results
        </Button>
      </Toolbar>
    </AppBar>
  );
}
