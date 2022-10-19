import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

export default function Popup({
  name,
  setName,
  size,
  setSize,
  type,
  setType,
  typeList,
  open,
  handleClose,
  handleSubmit,
}) {
  const renderWarning = () => {
    if (typeList.includes(type)) {
      return;
    }
    return (
      <div id="messages" style={{ width: "100%", color: "red" }}>
        <p className="text-center">{"Please enter a valid room type."}</p>
      </div>
    );
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add a new chat room</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="type"
            label="Type (private/public)"
            value={type}
            onChange={(e) => setType(e.target.value)}
            type="text"
            fullWidth
            variant="standard"
            pattern="private/public"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Room Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="size"
            label="Room Size"
            value={size}
            onChange={(e) => setSize(e.target.value)}
            type="number"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
        {renderWarning()}
      </Dialog>
    </div>
  );
}
