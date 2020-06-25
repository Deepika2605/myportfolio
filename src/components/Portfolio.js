import React from 'react'
import Navbar from './Navbar'
import { Box } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardHeader, CardMedia, Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core"
import Avatar from '@material-ui/core/Avatar';
import cardData from './cardData'

const useStyles = makeStyles((theme) => ({

    skillCards: {
        maxWidth: 245,
    },
    media: {
        height: 0,
        paddingTop: '30%',
        paddingBottom: '70%' // 16:9
    },
    avatar: {
        backgroundColor: "#27496d",
    },
    heading: {
        color: "#142850",
        padding: "2rem 0",
        textTransform: "uppercase"
    },
    gridContainer: {
        paddingLeft: "30px",
        paddingRight: "5px"
    }
}));

const Portfolio = () => {
    const classes = useStyles();

    return (
        <Box component="div">
            <Navbar />
            <Typography className={classes.heading} variant="h4" align="center">
                Technical Skills
            </Typography>
            <Grid container spacing={4} className={classes.gridContainer}>
                {cardData.map((card) => (
                    <Grid item xs={6} sm={4} md={2}>
                        <Card className={classes.skillCards} >
                        <CardHeader
                            avatar={
                                <Avatar aria-label="recipe" className={classes.avatar}>{card.letter}</Avatar>
                            }
                            title={card.title}
                            subheader={"Experience: "+card.years}
                        />
                        <CardMedia
                            className={classes.media}
                            image={card.img}
                            title={card.title}
                        />
                        </Card>
                    </Grid>
                ))}
                </Grid>
        </Box>
    )
}

export default Portfolio
