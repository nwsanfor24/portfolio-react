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
import project1 from '../images/Project1.png';

const Portfolio = () => {
    return (
        <Box component="div">
            <Navbar />
            <Grid container justify="center" alignItems="center">
                <Grid item xs={12} sm={8} md={6}>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Project 1"
                                height="140"
                                image={project1}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Project 1
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                An application to help you meal plan for any holiday. Click the "generate" button and see what combinations you get! 
                                "Lock" a meal or cocktail to cycle through the other until you find your perfect match. 
                                Save your combinations in local storage to return to the recipes at any time.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                    Live Demo
                                </Button>
                            </CardActions>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Portfolio
