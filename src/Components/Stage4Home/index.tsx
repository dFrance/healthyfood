import React, { useState, useEffect } from 'react';
import { Grid, Button, Typography, Box, CardMedia, Card, CardContent } from "@material-ui/core"
import { useStyles, Content } from './styles'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import './carousel_a.css'
import carousela from '../../Assets/images/blog_image_1.svg'
import carouselb from '../../Assets/images/bloco_image_2.svg'
import carouselc from '../../Assets/images/bloco_image_3.svg'
import carouseld from '../../Assets/images/bloco_image_4.svg'
import PersonIcon from '@material-ui/icons/Person';

export function StageFour() {
    const [suggestions, setSuggestions] = useState([{
        img: `${carousela}`,
        title: "Quick-start guide to nuts and seeds",
        authorImg: "Gabriel",
        authorName: "Kevin Ibrahim",
    },
    {
        img: `${carouselb}`,
        title: "Nutrition: Tips for Improving Your Health",
        authorImg: "",
        authorName: "Mike Jackson",
    },
    {
        img: `${carouselc}`,
        title: "The top 10 benefits of eating healthy",
        authorImg: "",
        authorName: "Bryon McGregor",
    },
    {
        img: `${carouseld}`,
        title: "What Makes a Healthy Diet?",
        authorImg: "",
        authorName: "Jashua",
    },
    ]);
    const classes = useStyles();

    let settings = {
        infinite: true,
        speed: 1000,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
        ],
    };
    return (
        <Content>
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant="h3">Read Our Blog</Typography>
                    <Typography variant="h5">
                        Far far away, behind the word mountains,  far from the countries <br />
                        Vokalia and Consonantia, there live the blind texts.
                    </Typography>
                </Grid>
                {suggestions.length === 0 ? (
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                ) : (
                    <Grid item xs={12}>
                    <Slider {...settings} className={classes.slider}>
                        {suggestions.map((suggestions) => (
                            <Card className={classes.card}>
                                <CardMedia>
                                    <img
                                        src={suggestions.img}
                                        height={250}
                                        width={350}
                                    />
                                </CardMedia>
                                <CardContent>
                                    <Box width={300} alignItems="center" className="card-body">
                                        <Typography variant="h4" align="justify" className="card-text text-sm-center text-muted">
                                            {suggestions.title}
                                        </Typography>
                                        <br />
                                        <Typography variant="h5" className={classes.author}><PersonIcon /> {suggestions.authorName}</Typography>
                                    </Box>
                                </CardContent>
                            </Card>
                        ))}
                    </Slider>
                    </Grid>
                )}
            </Grid>
        </Content>
    )
}