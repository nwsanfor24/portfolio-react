import React from 'react';
import {
    Typography,
    Avatar,
    Grid,
    Box
} from "@material-ui/core";
import Typed from "react-typed";
import avatar from "../images/unnamed.jpg";


const Header = () => {
    return (
        <Box>
            <Avatar src={avatar} alt="Profile"/>
            <Typography variant="h4">
                <Typed strings={["Nathan Sanford"]} typeSpeed={40} />
            </Typography>
        </Box>
    )
};

export default Header
