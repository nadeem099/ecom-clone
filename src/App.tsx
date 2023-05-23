import { createTheme, ThemeProvider } from "@mui/material";
import MasterLayout from "./layouts/MasterLayout";
import "./App.css";

const theme = createTheme({
  typography: {
    allVariants: {
      textTransform: "none",
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <MasterLayout />
      </ThemeProvider>
    </>
  );
}

export default App;
