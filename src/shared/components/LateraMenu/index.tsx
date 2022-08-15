import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  useTheme,
} from "@mui/material";
import Icon from "@mui/material/Icon";
import { useCallback, useState } from "react";
import { useMatch, useNavigate, useResolvedPath } from "react-router-dom";
import { useAppThemeContext } from "../../context/ThemeContext";

type Props = {
  children: JSX.Element;
};

interface IlistItemLinkProps {
  to: string;
  icon: string;
  label: string;
}

const ListItemLink: React.FC<IlistItemLinkProps> = ({ to, icon, label }) => {
  const resolvePath = useResolvedPath(to);
  const match = useMatch({ path: resolvePath.pathname, end: true });

  const navigate = useNavigate();

  const handClick = () => {
    navigate(to);
  };

  return (
    <ListItemButton selected={!!match} sx={{ p: 2 }} onClick={handClick}>
      <ListItemIcon>
        <Icon>{icon}</Icon>
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  );
};

export const LateralMenu: React.FC<Props> = ({ children }) => {
  const theme = useTheme();
  const { ThemeName, toogleTheme } = useAppThemeContext();

  const [open, setOpen] = useState(false);

  const toogleDrawer = useCallback(() => {
    setOpen((old) => !old);
  }, []);

  return (
    <>
      <Box>
        <AppBar>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <IconButton color="inherit" onClick={toogleDrawer}>
              <Icon>menu</Icon>
            </IconButton>
            <IconButton color="inherit" onClick={toogleTheme}>
              <Icon>{ThemeName === "light" ? "light_mode" : "dark_mode"}</Icon>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer open={open} onClose={toogleDrawer}>
          <Box
            width={theme.spacing(30)}
            display="flex"
            flexDirection="column"
            height="100vh"
          >
            <Box>
              <img
                src="https://i.pinimg.com/736x/33/b8/69/33b869f90619e81763dbf1fccc896d8d--lion-logo-modern-logo.jpg"
                style={{ maxHeight: 54, width: "auto", marginRight: 20 }}
              />
            </Box>
            <Divider />
            <Box flex={1}>
              <List component="nav">
                <ListItemLink icon="apartment" label="Empresas" to="/" />
                <ListItemLink
                  icon="person_outline"
                  label="Responsavel"
                  to="/responsible"
                />
                <ListItemLink
                  icon="workspace_premium"
                  label="Certificados"
                  to="/certificate"
                />
                <ListItemLink
                  icon="public"
                  label="Redes Sociais"
                  to="social-networks"
                />
                <ListItemLink icon="groups" label="Reuniões" to="meeting" />
              </List>
            </Box>
          </Box>
        </Drawer>
      </Box>

      <Box padding={theme.spacing(5)}>{children}</Box>
    </>
  );
};
