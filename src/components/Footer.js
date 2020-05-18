import React from 'react';
import { makeStyles } from "@material-ui/styles";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import Facebook from "@material-ui/icons/Facebook";
import LinkedIn from "@material-ui/icons/LinkedIn";
import Instagram from "@material-ui/icons/Instagram";
import GitHub from "@material-ui/icons/GitHub";

const useStyles = makeStyles({
    root: {
        "& .MuiBottomNavigationAction-root": {
            minWidth: 0,
            maxWidth: "auto",
        },
    },
});


const Footer = () => {

    const classes = useStyles();

    return (
        <BottomNavigation width="auto" style={{ backgroundColor: 'transparent' }}>
            <BottomNavigationAction
                className={classes.root}
                style={{ padding: 0, color: "white" }}
                icon={<Facebook />}
                onClick={()=> window.open("https://www.facebook.com/nathan.sanford.58", "_blank")}
            />
            <BottomNavigationAction
                className={classes.root}
                style={{ padding: 0, color: "white" }}
                icon={<Instagram />}
                onClick={()=> window.open("https://www.instagram.com/natenotfake/", "_blank")}
            />
            <BottomNavigationAction
                className={classes.root}
                style={{ padding: 0, color: "white" }}
                icon={<LinkedIn />}
                onClick={()=> window.open("https://www.linkedin.com/in/nathan-sanford-02706057/", "_blank")}
            />
            <BottomNavigationAction
                className={classes.root}
                style={{ padding: 0, color: "white" }}
                icon={<GitHub />}
                onClick={()=> window.open("https://github.com/nwsanfor24", "_blank")}
            />
        </BottomNavigation>
    )
}

export default Footer
