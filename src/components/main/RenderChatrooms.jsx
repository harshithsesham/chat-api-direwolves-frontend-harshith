import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Checkbox from "@mui/material/Checkbox";
import Avatar from "@mui/material/Avatar";
import publicRoom from "../../assets/images/public.png";
import privateRoom from "../../assets/images/private.png";

const RenderChatrooms = (props) => {
  const handleToggle = (value) => () => {
    const currentIndex = props.checked.indexOf(value);
    const newChecked = [...props.checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    props.setChecked(newChecked);
  };

  const renderRoom = (type) => {
    if (type === "private") {
      return privateRoom;
    } else {
      return publicRoom;
    }
  };

  return (
    <List dense sx={{ width: "100%" }}>
      {props.chatrooms.map((e) => {
        const labelId = `checkbox-list-secondary-label-${e[0]}`;
        return (
          <ListItem
            key={e[0]}
            secondaryAction={
              <Checkbox
                edge="end"
                onChange={handleToggle(e[0])}
                inputProps={{ "aria-labelledby": labelId }}
                disabled={props.disabled}
              />
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemAvatar>
                <Avatar src={renderRoom(e[1])} />
              </ListItemAvatar>
              <ListItemText id={labelId} primary={e[0]} />
              <ListItemText id={labelId} primary={`${e[2]}/${e[3]}`} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};

export default RenderChatrooms;
