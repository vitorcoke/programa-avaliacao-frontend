import { Company } from "./shared/components/Company";
import { LateralMenu } from "./shared/components/LateraMenu";
import AppThemeProvider from "./shared/context/ThemeContext";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes/Router";

export function App() {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <LateralMenu>
          <Router />
        </LateralMenu>
      </BrowserRouter>
    </AppThemeProvider>
  );
}
