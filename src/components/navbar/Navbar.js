import React, { useContext, useEffect } from "react";
import "./Navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import Avatar from "../../imgs/avatar.jpg";
import { DarkModeContext } from "../../context/AppThemeContext";
function Navbar() {
  const { darkMode, dispatch } = useContext(DarkModeContext);
  // useEffect(() => {
  //   localStorage.setItem("theme", darkMode);
  //   console.log(darkMode);
  // }, [darkMode]);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="chercher" />
          <SearchIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon className="icon" />
            Francais
          </div>
          <div className="item">
            <DarkModeIcon
              className="icon"
              onClick={() => {
                dispatch({ type: "TOGGLE" });
                console.log(darkMode);
              }}
            />
          </div>

          <div className="item">
            <NotificationsNoneIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <FormatListBulletedIcon className="icon" />
          </div>
          <div className="item">
            <img src={Avatar} alt="" className="avatar" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
