import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource-variable/lora";
import "@fontsource/great-vibes";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initializeApp } from "firebase/app";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  BottomNavigation,
  BottomNavigationAction,
  createStyles,
  createTheme,
  Stack,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { firebaseConfig } from "./fb";
import About from "./pages/about";
import Donate from "./pages/donate";
import Church from "./pages/church";
import Gallery from "./pages/gallery";

const app = initializeApp(firebaseConfig);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/donate",
    element: <Donate />,
  },
  {
    path: "/church",
    element: <Church />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/contact",
    element: (
      <Stack>
        <Typography>About</Typography>
      </Stack>
    ),
  },
  {
    path: "/live",
    element: (
      <Stack>
        <Typography>About</Typography>
      </Stack>
    ),
  },
]);
const theme = createTheme({
  palette: {
    primary: {
      50: "#fdd99c",
      100: "#f8ca79",
      200: "#f1b959",
      300: "#e7a83b",
      400: "#de971b",
      500: "#c38720",
      600: "#a87722",
      700: "#8f6824",
      800: "#785924",
      900: "#624b22",
    },
  },
  typography: {
    h1: {
      fontFamily: "Great Vibes",
    },
    h2: {
      fontFamily: "Great Vibes",
    },
    h3: {
      fontFamily: "Great Vibes",
    },
    h4: {
      fontFamily: "Lora",
    },
    h5: {
      fontFamily: "Lora",
    },
    h6: {
      fontFamily: "Lora",
    },
    subtitle1: {
      fontFamily: "Lora",
    },
    subtitle2: {
      fontFamily: "Lora",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        sx: {
          borderRadius: 30,
        },
      },
    },
  },
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
