import { Box } from "@mui/system";
import "./App.css"
import Header from "./components/Header";
import Layout from "./components/Layout";
import Stack from '@mui/material/Stack';
import { ThemeProvider } from "@mui/material/styles";
import { appTheme } from "./config/theme";
import { Typography } from "@mui/material";

import {
  Routes,
  Route,
  Link,
} from "react-router-dom";

const Home = () => (
  <Box>
    <Typography>
      Home
    </Typography>
  </Box>
);

const About = () => (
  <Box>
    <Typography>
      About
    </Typography>
  </Box>
);

export const App = () => {
  return (
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={ appTheme }>
        <Box
          component="main"
          sx={{
            height: "100vh",
            backgroundColor: (theme) => theme.palette.grey[900],
          }}
        >
          <Header />
          <Layout>
            <h1>Welcome to react router!</h1>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route />
            </Routes>
          </Layout>
        </Box>
      </ThemeProvider>
    </Stack>
  );
}
