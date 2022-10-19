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
import {Chat} from "@mui/icons-material";
import Grid from "@mui/material/Grid";
import {Divider, Fab, ListItemIcon, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { makeStyles } from '@mui/styles';
import ChatMsg from '@mui-treasury/components/chatMsg/ChatMsg';

import {
    Container,

    Dropdown,

    Header,
    Image, Menu,


    Segment,
} from 'semantic-ui-react'
import { Input } from 'semantic-ui-react'
import { Card } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'
import SendIcon from '@mui/icons-material/Send';
const Chatroom = (props) => {

    const useStyles = makeStyles({
        table: {
            minWidth: 650,
        },
        chatSection: {
            width: '100%',
            height: '80vh'
        },
        headBG: {
            backgroundColor: '#e0e0e0'
        },
        borderRight500: {
            borderRight: '1px solid #e0e0e0'
        },
        messageArea: {
            height: '70vh',
            overflowY: 'auto'
        }

    });

    const classes = useStyles();

    return (
        <div>

            <Grid container spacing={2} style={{padding: '20px'}}>
                <Grid item xs={5}>
                    <link rel="stylesheet" href="mainst.css"/>
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css"/>


                    <Menu fixed='top' inverted>

                        <Container>
                            <Menu.Item as='a' header>
                                <Image size='mini' src='https://brand.rice.edu/sites/g/files/bxs2591/files/2019-08/190308_Rice_Mechanical_Brand_Standards_Logos-1.png' style={{ marginRight: '1.5em' }} />
                                Rice Book
                            </Menu.Item>
                            <Menu.Item as='a'>Home</Menu.Item>
                            <Menu.Item as='a' >Profile</Menu.Item>
                            <Menu.Item as='a'  >Friends</Menu.Item>

                            <Menu.Menu position='right'>

                                <Menu.Item as='a' ><Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' avatar />
                                    <span>Username</span></Menu.Item>
                                <Menu.Item as='a' >Logout</Menu.Item>
                            </Menu.Menu>

                        </Container>
                    </Menu>
                </Grid>
                <Grid item xs={5} >
                    <Typography variant="h5" className="header-message">Chat</Typography>
                </Grid>
            </Grid>

            <Grid container component={Paper} className={classes.chatSection} spacing={2}>
                <Grid item xs={3} className={classes.borderRight500}>
                    <List>

                    </List>


                    <Grid item xs={12} style={{padding: '10px'}}>
                        <TextField id="outlined-basic-email" label="Search" variant="outlined" fullWidth />
                    </Grid>
                    <Divider />
                    <List>

                        <ListItem button key="RemySharp">
                            <ListItemIcon>
                                <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
                            </ListItemIcon>
                            <ListItemText primary="Remy Sharp">Remy Sharp</ListItemText>
                        </ListItem>
                        <ListItem button key="Alice">
                            <ListItemIcon>
                                <Avatar alt="Alice" src="https://material-ui.com/static/images/avatar/3.jpg" />
                            </ListItemIcon>
                            <ListItemText primary="Alice">Alice</ListItemText>
                        </ListItem>
                        <ListItem button key="CindyBaker">
                            <ListItemIcon>
                                <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/2.jpg" />
                            </ListItemIcon>
                            <ListItemText primary="Cindy Baker">Cindy Baker</ListItemText>
                        </ListItem>


                    </List>
                </Grid>
                <Grid item xs={9}>
                    <List className={classes.messageArea}>

                        <ListItem key="1">
                            <Grid container>
                                <Grid item xs={12}>
                                    <ChatMsg
                                        avatar={''}
                                        messages={[
                                            'Hi Jenny, How r u today?',
                                            'Did you train yesterday',
                                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida.',
                                        ]}
                                    />
                                </Grid>

                            </Grid>
                        </ListItem>
                        <ListItem key="2">
                            <Grid container>
                                <Grid item xs={12}>
                                    <ChatMsg
                                        avatar={''}
                                        messages={[
                                            'Hi Jenny, How r u today?',
                                            'Did you train yesterday',
                                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida.',
                                        ]}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                </Grid>
                            </Grid>
                        </ListItem>
                        <ListItem key="3">
                            <Grid container>
                                <Grid item xs={12}>
                                    <ChatMsg
                                        avatar={''}
                                        messages={[
                                            'Hi Jenny, How r u today?',
                                            'Did you train yesterday',
                                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida.',
                                        ]}
                                    />
                                </Grid>
                                <Grid item xs={12}>

                                </Grid>
                            </Grid>
                        </ListItem>
                    </List>
                    <Divider />
                    <Grid container style={{padding: '20px'}}>
                        <Grid item xs={11}>
                            <TextField id="outlined-basic-email" label="Type Something" fullWidth />
                        </Grid>
                        <Grid xs={1} align="right">
                            <Fab color="primary" aria-label="add"><SendIcon /></Fab>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );

};

export default Chatroom;
