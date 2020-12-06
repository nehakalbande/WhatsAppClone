import React from "react";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import { SearchOutlined } from "@material-ui/icons";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import "./sidebar.css";
import ne from "./ne.jpg";
import { Avatar, IconButton } from "@material-ui/core";
import SidebarChat from "./SidebarChat";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src={ne} />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input placeholder="Search or start new chat" type="text" />
        </div>
      </div>

      <div className="sidebar__chats">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
}

export default Sidebar;
