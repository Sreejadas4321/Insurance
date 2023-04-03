import * as React from "react";
import { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreIcon from "@mui/icons-material/MoreVert";
import "../../App.css";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../../config";
import { signInWithPopup } from "firebase/auth";
import { getData } from "../Common/CommonFunc";
import { Alert, AlertTitle } from "@mui/material";
import Sellbtn from "../Sell/Sellbtn";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
const searchObj = {
  "^health|healthsinsurance$": "health",
  "^car|carsinsurance$": "car",
  "^life|lifesinsurance$": "life",
  "^home|homesinsurance$": "home",
  "^trvel|travelsinsurance$": "travel",
  "^family|family healthsinsurance$": "family health",
  "^invesment|invesmentsplans$": "invesment",
  "^retirement|retirementsnplans$": "retirement",
  "^guaranteed|guaranteed returnsplans$": "guaranteed return",
};

export default function PrimarySearchAppBar() {
  const [showChat, setShowChat] = useState(false);

  const toggleChat = () => {
    setShowChat(!showChat);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [chat, setChat] = useState("");

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const chatHandler = (e) => {
    let chatValue = e.target.value;
    setChat(chatValue);
  };

  const navigate = useNavigate();
  const chatClickHandler = async () => {
    if (chat) {
      for (const key in searchObj) {
        if (new RegExp(key, "i").test(chat)) {
          let data = await getData(searchObj[key]);

          navigate("/show", { state: data });
        }
      }
    }
  };
  const profileHandler = async () => {
    let data = await getData(user.email, true);
    console.log(user);
    navigate("/show", { state: data });
  };
  const searchHandler = async (e) => {
    let searchValue = e.target.value;
    if (searchValue) {
      for (const key in searchObj) {
        if (new RegExp(key, "i").test(searchValue)) {
          let data = await getData(searchObj[key]);

          navigate("/show", { state: data });
        }
      }
    }
  };
  const [user, setUser] = useState(null);
  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);
  const [value, setValue] = useState("");
  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
    });
  };
  const signoutHandler = () => {
    auth.signOut();
  };

  const sellHandler = () => {
    if (user) {
      navigate("/sell");
    } else {
      return (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          This is an error alert — <strong>check it out!</strong>
        </Alert>
      );
    }
  };

  const menuId = "primary-search-account-menu";

  const mobileMenuId = "primary-search-account-menu-mobile";
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {user ? (
        <>
          <MenuItem onClick={profileHandler}>Profile</MenuItem>
          <MenuItem onClick={signoutHandler}>Sign Out</MenuItem>
        </>
      ) : (
        <MenuItem onClick={handleClick}>Sign In</MenuItem>
      )}

      {!user ? (
       <Sellbtn

       dataHandler={sellHandler}
       btn={"Sell"}
       text={"Please Sign First"}
     />
      ) : (
        <MenuItem onClick={sellHandler}>Sell</MenuItem>
      )}
    </Menu>
  );
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {/* <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          
        </IconButton>
        {/* <p>Profile</p> */}

      {/* </MenuItem> */}
      {user ? (
        <>
          <MenuItem onClick={profileHandler}>Profile</MenuItem>
          <MenuItem onClick={signoutHandler}>Sign Out</MenuItem>
        </>
      ) : (
        <MenuItem onClick={handleClick}>Sign In</MenuItem>
      )}

      {/* <MenuItem onClick={sellHandler}>Sell</MenuItem>  */}

      <Sellbtn
        dataHandler={sellHandler}
        btn={"Sell"}
        text={"Please Login First"}
      />
    </Menu>
  );

  return (
    <>
      <Box sx={{ flexGrow: 1, width: "100%" }}>
        <AppBar position="static" sx={{backgroundColor:"#f8eaff", color:"black"}}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
              onClick={() => {
                navigate("/");
              }}
              style={{ cursor: "pointer" }}
            >
              BRAN
            </Typography>
            <Search onChange={searchHandler}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>

        {renderMobileMenu}

        {renderMenu}
      </Box>

      <button className="floating-button" onClick={toggleChat}>
        Chat
      </button>
      {showChat && (
        <div className="chat-container">
          <div className="input-div">
            <input
              type="text"
              placeholder="Type your message here"
              onChange={chatHandler}
            />
            <button onClick={chatClickHandler}>Send</button>
          </div>
        </div>
      )}
    </>
  );
}
