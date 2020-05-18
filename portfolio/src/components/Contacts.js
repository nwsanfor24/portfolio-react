import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Typography, Button, Grid, Box } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import Navbar from "./Navbar";

const Contacts = () => {
    return (
        <Box component="div">
            <Grid container justify="center">
                <Box component="form">
                    <Typography variant="h5">
                        Hire or Contact Me...
                    </Typography>
                </Box>
            </Grid>
        </Box>
    );
};

export default Contacts
