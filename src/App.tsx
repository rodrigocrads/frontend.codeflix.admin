import { Box } from "@mui/system";
import "./App.css"
import Header from "./components/Header";
import Layout from "./components/Layout";
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({});

export const App = () => {
  return (
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={ theme }>
        <Box
          component="main"
          sx={{
            height: "100vh",
            backgroundColor: "white"
          }}
        >
          <Header />
          <Layout>
            <h1>Olá mundo</h1>
          </Layout>
        </Box>
      </ThemeProvider>
    </Stack>
  );
}
