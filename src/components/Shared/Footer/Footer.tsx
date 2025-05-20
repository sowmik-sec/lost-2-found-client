"use client";

import React from "react";
import {
  Box,
  Container,
  Grid,
  Link,
  Typography,
  IconButton,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{ bgcolor: "grey.900", color: "grey.100", py: 4, mt: 6 }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Lost & Found Actions */}
          <Grid size={{ xs: 12, sm: 4 }}>
            <Typography variant="h6" gutterBottom>
              Lost2Found
            </Typography>
            <Link
              href="/report"
              color="inherit"
              underline="hover"
              display="block"
            >
              Report Lost/Found Item
            </Link>
            <Link
              href="/claim"
              color="inherit"
              underline="hover"
              display="block"
            >
              Claim Item
            </Link>
          </Grid>

          {/* Contact Information */}
          <Grid size={{ xs: 12, sm: 4 }}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Box display="flex" alignItems="center" mb={1}>
              <EmailIcon fontSize="small" sx={{ mr: 1 }} />
              <Link
                href="mailto:contact@lost2found.com"
                color="inherit"
                underline="hover"
              >
                contact@lost2found.com
              </Link>
            </Box>
            <Box>
              <IconButton
                href="https://facebook.com"
                target="_blank"
                color="inherit"
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                href="https://twitter.com"
                target="_blank"
                color="inherit"
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                href="https://instagram.com"
                target="_blank"
                color="inherit"
              >
                <InstagramIcon />
              </IconButton>
            </Box>
          </Grid>

          {/* Legal Links */}
          <Grid size={{ xs: 12, sm: 4 }}>
            <Typography variant="h6" gutterBottom>
              Legal
            </Typography>
            <Link
              href="/terms"
              color="inherit"
              underline="hover"
              display="block"
            >
              Terms of Use
            </Link>
            <Link
              href="/privacy"
              color="inherit"
              underline="hover"
              display="block"
            >
              Privacy Policy
            </Link>
          </Grid>
        </Grid>

        {/* Footer Bottom */}
        <Box textAlign="center" mt={4}>
          <Typography variant="body2" color="grey.500">
            &copy; {new Date().getFullYear()} Lost2Found. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
