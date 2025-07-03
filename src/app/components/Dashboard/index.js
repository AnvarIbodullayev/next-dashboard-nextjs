"use client";
import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import menuList from "../menuList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faGear,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { usePathname, useRouter } from "next/navigation";
// imgase
import houtblok from "../../assets/houtblok.png";
import avatar from "../../assets/avatar.png";
import Image from "next/image";

import { Avatar, Badge, Button, Menu, MenuItem, Tooltip } from "@mui/material";
import Mybutton from "../Mybutton";

const drawerWidth = 240;
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    variants: [
      {
        props: ({ open }) => open,
        style: {
          transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
          marginLeft: 0,
        },
      },
    ],
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(["margin", "width"], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function Layout({ children }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="inherit"
        sx={{ boxShadow: 0, py: 1.5 }}
        open={open}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={[
                {
                  mr: 2,
                },
                open && { display: "none" },
              ]}
            >
              <MenuIcon />
            </IconButton>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column"
              }}
            >
              <Typography variant="h6" noWrap sx={{fontWeight: 600}}>
                Good Morning Anima
              </Typography>
              <Typography variant="caption">
                Hope you have a good day
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 3,
            }}
          >
            <IconButton
              size="small"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </IconButton>
            <IconButton
              size="small"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <FontAwesomeIcon icon={faBell} />
            </IconButton>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" sx={{ border: "none" }}>
                    <Image src={avatar} alt="avatar" width={40} height={40} />
                  </Avatar>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography sx={{ textAlign: "center" }}>
                      {setting}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            justifyContent: "space-between",
            alignItems: "center",
            px: 2,
            py: 4,
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <Box sx={{ width: "90%" }}>
          <DrawerHeader
            sx={{ p: 0, mb: 2, display: "flex", alignItems: "flex-start" }}
          >
            <Box
              sx={{
                color: theme.palette.primary.main,
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: 2,
                width: "100%",
              }}
            >
              <FontAwesomeIcon style={{ fontSize: "26px" }} icon={faGear} />
              <Typography
                variant="h6"
                sx={{ fontWeight: 600, fontSize: "1.1rem" }}
              >
                Teamify
              </Typography>
            </Box>

            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <List>
            {menuList.slice(0, 4).map((item, index) => {
              const activeUrl =
                item.path === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.path);

              return (
                <ListItem key={index} disablePadding>
                  <ListItemButton
                    disableRipple
                    onClick={() => router.push(item.path)}
                    sx={{
                      px: 0,
                      color: activeUrl ? theme.palette.primary.main : "",
                      "& svg": {
                        color: activeUrl ? theme.palette.primary.main : "",
                      },
                    }}
                  >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.title} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
          <Divider sx={{ width: "80%", margin: "0 auto" }} />
          <List>
            {menuList.slice(4).map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton
                  sx={{ px: 0 }}
                  disableRipple
                  onClick={() => router.push(item.path)}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
        {/* under drawer box */}
        <Box
          sx={{
            width: 180,
            height: 140,
            borderRadius: 2,
            bgcolor: "primary.light",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            p: 2,
          }}
        >
          <Box sx={{ position: "absolute", top: "-2.5rem" }}>
            <Image src={houtblok} width={110} height={110} alt="light image" />
          </Box>
          <Mybutton>Share Your Thoughts</Mybutton>
        </Box>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {children}
      </Main>
    </Box>
  );
}
