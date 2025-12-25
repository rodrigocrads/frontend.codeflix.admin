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
} from "react-router-dom";
import { ListCategory } from "./features/category/ListCategory";
import { CreateCategory } from "./features/category/CreateCategory";
import { EditCategory } from "./features/category/EditCategory";

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
            <Routes>
              <Route path="/" element={<ListCategory />} />
              <Route path="/categories" element={<ListCategory />} />
              <Route path="/categories/create" element={<CreateCategory />} />
              <Route path="/categories/edit/:id" element={<EditCategory />} />
              <Route path="*" element={
                <Box sx={{ color: "#fff" }}>
                  <Typography variant="h1">404</Typography>
                  <Typography variant="h2">Page not found</Typography>
                </Box>
              } />
            </Routes>
          </Layout>
        </Box>
      </ThemeProvider>
    </Stack>
  );
}
