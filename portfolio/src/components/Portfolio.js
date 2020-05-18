import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Box,
    Grid,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography
} from '@material-ui/core';
import Navbar from './Navbar';
import Particles from 'react-particles-js';
import project1 from '../images/Project1.png';
import project2 from '../images/Project2.png';
import project3 from '../images/Letty.png';
import project4 from '../images/bubble.jpg';
import { Computer } from '../images/computer-desk.jpg';

const useStyles = makeStyles({
    mainContainer: {
        backgroundImage: `url(${Computer})`,
        height: "100%"
    },
    cardContainer: {
        maxWidth: 345,
        margin: "3rem",
        margin: "5rem auto"
    },
    particlesCanva: {
        position: "absolute",
        background: "cover"
    }
});

const Portfolio = () => {

    const classes = useStyles();

    return (
        <Box component="div" className={classes.mainContainer}>
            <Navbar />
            <Particles
                canvasClassName={classes.particlesCanva}
                params={{
                    particles: {
                        number: {
                            value: 45,
                            density: {
                                enable: true,
                                value_area: 900
                            }
                        },
                        shape: {
                            type: "circle",
                            stroke: {
                                width: 1,
                                color: 'tomato'
                            }
                        },
                        size: {
                            value: 8,
                            random: true,
                            anim: {
                                enable: true,
                                speed: 10,
                                size_min: 0.1,
                                sync: true
                            }
                        },
                        opacity: {
                            value: 1,
                            random: true,
                            anim: {
                                enable: true,
                                speed: 1,
                                opacity_min: 0.1,
                                sync: true
                            }
                        }
                    }
                }}
            />
            <Grid container justify="center">
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Project 1"
                                height="140"
                                image={project1}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    SuperEats (Project 1)
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    An application to help you meal plan for any holiday. Click the "generate" button and see what combinations you get!
                                    "Lock" a meal or cocktail to cycle through the other until you find your perfect match.
                                    Save your combinations in local storage to return to the recipes at any time.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" onClick={()=> window.open("https://github.com/nwsanfor24/holiday-meal-planner", "_blank")}>
                                Source
                                </Button>
                            <Button size="small" color="primary" onClick={()=> window.open("https://nwsanfor24.github.io/holiday-meal-planner//", "_blank")}>
                                Live Demo
                                </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Project 2"
                                height="140"
                                image={project2}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Give Me A Break
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    In these trying and frustrating times, everyone needs a break now and then.
                                    Give Me a Break gives users a chance to take a break from work, school, TV, Netflix, Hulu, Amazon Prime, Disney+, and other trying aspects of virtual life.
                                    Give Me a Break injects peacefulness and mindfulness into the user’s life by providing a sample of art, meditation, and relaxing music/sound for the user to sample.
                                    Links are provided for immediate consumption, along with favoriting functionality to store your favorite content.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" onClick={()=> window.open("https://github.com/nwsanfor24/project-2", "_blank")}>
                                Source
                                </Button>
                            <Button size="small" color="primary" onClick={()=> window.open("https://nameless-earth-27554.herokuapp.com/", "_blank")}>
                                Live Demo
                                </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Project 3"
                                height="140"
                                image={project3}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Project 3
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Source
                                </Button>
                            <Button size="small" color="primary" onClick={()=> window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank")}>
                                Live Demo
                                </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Project 4"
                                height="140"
                                image={project4}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Project 4 - TBD
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                                </Button>
                            <Button size="small" color="primary">
                                Live Demo
                                </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Portfolio
