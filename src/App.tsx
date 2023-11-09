import "./App.scss";
import Box from "@mui/material/Box";

import { ThemeProvider } from "@mui/material";
import { theme } from "./theme/Theme";
import { Menu } from "./components/menu/Menu";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <Menu />
        <Box
          sx={{ bgcolor: "primary.dark", width: "95%", height: "100%" }}
        ></Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
