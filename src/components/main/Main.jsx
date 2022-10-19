import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import RenderChatrooms from "./RenderChatrooms";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Popup from "./Popup";

const theme = createTheme({
  palette: {
    primary: {
      main: "#007cba",
    },
    secondary: {
      main: "#11cb5f",
    },
  },
});

const Main = () => {
  const [val, setValue] = useState("1");
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState(10);
  const [name, setName] = useState("");
  const [type, setType] = useState("private");
  const [checked, setChecked] = useState([]);
  const [unjoined, setUnjoined] = useState([
    ["Chat room 1", "public", 40, 100],
    ["Chat room 2", "public", 25, 50],
    ["Chat room 3", "private", 5, 10],
    ["Chat room 4", "private", 3, 10],
  ]);
  const [joined, setJoined] = useState([
    ["Chat room 5", "public", 100, 100],
    ["Chat room 6", "private", 4, 20],
  ]);
  const [invite, setInvite] = useState([["Chat room 3", "private", 5, 10]]);
  const [show, setShow] = useState("none");
  const typeList = ["private", "public"];

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleJoin = () => {
    let nameArr = [];
    let typeArr = [];
    let joinedCopy = [...joined];
    let unJoinedCopy = [...unjoined];
    unjoined.forEach((e) => {
      nameArr.push(e[0]);
      typeArr.push(e[1]);
    });
    for (const ele of checked) {
      const index = nameArr.indexOf(ele);
      if (typeArr[index] === "private") {
        setShow("inline");
        return false;
      }
      if (index !== -1) {
        joinedCopy.push(unJoinedCopy[index]);
        unJoinedCopy.splice(index, 1);
        nameArr.splice(index, 1);
        typeArr.splice(index, 1);
      }
    }
    setJoined(joinedCopy);
    setUnjoined(unJoinedCopy);
    setShow("none");
    setChecked([]);
  };

  const handleInvite = () => {
    let arr1 = [];
    let arr2 = [];
    let joinedCopy = [...joined];
    let inviteCopy = [...invite];
    let unJoinedCopy = [...unjoined];
    invite.forEach((e) => {
      arr1.push(e[0]);
    });
    unjoined.forEach((e) => {
      arr2.push(e[0]);
    });
    for (const ele of checked) {
      const index = arr1.indexOf(ele);
      const index2 = arr2.indexOf(ele);
      if (index !== -1) {
        joinedCopy.push(inviteCopy[index]);
        inviteCopy.splice(index, 1);
        arr1.splice(index, 1);
      }
      if (index2 !== -1) {
        unJoinedCopy.splice(index2, 1);
        arr2.splice(index, 1);
      }
    }
    setUnjoined(unJoinedCopy);
    setJoined(joinedCopy);
    setInvite(inviteCopy);
    setChecked([]);
  };

  const handleLeave = () => {
    let arr = [];
    let joinedCopy = [...joined];
    let unJoinedCopy = [...unjoined];
    joined.forEach((e) => {
      arr.push(e[0]);
    });
    for (const ele of checked) {
      const index = arr.indexOf(ele);
      if (index !== -1) {
        unJoinedCopy.push(joinedCopy[index]);
        arr.splice(index, 1);
        joinedCopy.splice(index, 1);
      }
    }
    setUnjoined(unJoinedCopy);
    setJoined(joinedCopy);
    setChecked([]);
  };

  const handleSubmit = () => {
    if (!typeList.includes(type) || name === "") {
      return false;
    }
    setJoined([...joined, [name, type, 1, size]]);
    setOpen(false);
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: "100vh" }}>
          <CssBaseline />
          <Grid
            item
            xs={12}
            sx={{
              zIndex: 1,
              backgroundImage: "url(./pic.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              id="header"
              style={{
                width: "100%",
                display: "inline-block",
              }}
            >
              <Link
                to="./login"
                style={{
                  float: "right",
                  margin: "2%",
                  align: "center",
                }}
              >
                <Button
                  type="button"
                  className="btn"
                  variant="contained"
                  startIcon={<AccountCircleIcon />}
                >
                  Login
                </Button>
              </Link>
            </div>

            <Card
              sx={{
                margin: "auto",
                marginTop: 25,
                maxWidth: 850,
                backgroundColor: "rgba(255,255,255,0.8)",
              }}
            >
              <CardContent>
                <div style={{ margin: "7%" }}>
                  <Box sx={{ width: "100%", typography: "body1" }}>
                    <TabContext value={val}>
                      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                        <TabList
                          onChange={handleChange}
                          aria-label="lab API tabs example"
                        >
                          <Tab label="All" value="1" />
                          <Tab label="Unjoined" value="2" />
                          <Tab label="Joined" value="3" />
                          <Tab label="Invite" value="4" />
                        </TabList>
                      </Box>
                      <TabPanel value="1">
                        <RenderChatrooms
                          chatrooms={unjoined.concat(joined)}
                          checked={checked}
                          setChecked={setChecked}
                          disabled={true}
                        />
                        <div style={{ display: "flex" }}>
                          <Button
                            variant="contained"
                            style={{ marginLeft: "auto" }}
                            onClick={() => setOpen(true)}
                          >
                            Create
                          </Button>
                          <Popup
                            name={name}
                            setName={setName}
                            size={size}
                            setSize={setSize}
                            type={type}
                            setType={setType}
                            open={open}
                            typeList={typeList}
                            handleClose={handleClose}
                            handleSubmit={handleSubmit}
                          />
                        </div>
                      </TabPanel>
                      <TabPanel value="2">
                        <RenderChatrooms
                          chatrooms={unjoined}
                          checked={checked}
                          setChecked={setChecked}
                          disabled={false}
                        />
                        <div style={{ display: "flex" }}>
                          <Button
                            variant="contained"
                            style={{ marginLeft: "auto" }}
                            onClick={handleJoin}
                          >
                            Join
                          </Button>
                        </div>
                        <div
                          id="messages"
                          style={{
                            width: "100%",
                            color: "red",
                            display: show,
                          }}
                        >
                          <p className="text-center">
                            {
                              "You cannot join a private room without invitation."
                            }
                          </p>
                        </div>
                      </TabPanel>
                      <TabPanel value="3">
                        <RenderChatrooms
                          chatrooms={joined}
                          checked={checked}
                          setChecked={setChecked}
                          disabled={false}
                        />
                        <div style={{ display: "flex" }}>
                          <Button
                            variant="contained"
                            style={{ marginLeft: "auto" }}
                            onClick={handleLeave}
                          >
                            Leave
                          </Button>
                        </div>
                      </TabPanel>
                      <TabPanel value="4">
                        <RenderChatrooms
                          chatrooms={invite}
                          checked={checked}
                          setChecked={setChecked}
                          disabled={false}
                        />
                        <div style={{ display: "flex" }}>
                          <Button
                            variant="contained"
                            style={{ marginLeft: "auto" }}
                            onClick={handleInvite}
                          >
                            Join
                          </Button>
                        </div>
                      </TabPanel>
                    </TabContext>
                  </Box>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
};

export default Main;
