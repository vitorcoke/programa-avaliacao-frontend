import { Box, ThemeProvider } from "@mui/material";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import DarkMode from "../themes/Dark";
import LightMode from "../themes/Light";

type Props = {
  children: JSX.Element;
};

interface IThemeContext {
  ThemeName: "light" | "dark";
  toogleTheme: () => void;
}

const ThemeContext = createContext({} as IThemeContext);

export const useAppThemeContext = () => {
  return useContext(ThemeContext);
};

const AppThemeProvider: React.FC<Props> = ({ children }) => {
  const [ThemeName, setThemeName] = useState<"light" | "dark">("light");

  const toogleTheme = useCallback(() => {
    setThemeName((oldtheme) => (oldtheme === "light" ? "dark" : "light"));
  }, []);

  const theme = useMemo(() => {
    if (ThemeName === "light") return LightMode;
    return DarkMode;
  }, [ThemeName]);

  return (
    <ThemeContext.Provider value={{ toogleTheme, ThemeName }}>
      <ThemeProvider theme={theme}>
        <Box
          width="100vw"
          height="100vh"
          bgcolor={theme.palette.background.default}
        >
          {children}
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default AppThemeProvider;
