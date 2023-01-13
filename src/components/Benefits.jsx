import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const StyledTypography = styled(Typography) ({
    variant: 'span',
    fontWeight: 'bold',
    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    background: 'linear-gradient(270deg, #00E6E3 2.73%, #00FF68 100%)',
    padding: '10px',
    lineHeight: '42px',
    color: 'initial',
});

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 4
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

function Benefits() {
    return (
        <Container maxWidth='md'>
            <Grid container textAlign='center' my={5}>
                <Grid item xs={12}>
                    <Typography variant="p" component="p" fontSize={36}>
                        Entre los 
                        <StyledTypography variant="span" mx={1}>
                            beneficios
                        </StyledTypography> 
                        que
                    </Typography>

                    <Typography variant="p" component="p" fontSize={36}>
                        <b>Ofrecemos</b> se encuentran
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                    <Carousel 
                        responsive={responsive} 
                        infinite={true}
                        showDots={true}>
                        
                        <div>
                            <img src="assets/benefits/flexibilidadHoraria.svg" alt="Flexibilidad Horaria" />
                            Flexibilidad Horaria
                        </div>
                        <div>
                            <img src="assets/benefits/flexibilidadHoraria.svg" alt="Flexibilidad Horaria" />
                            Flexibilidad Horaria
                        </div>
                        <div>
                            <img src="assets/benefits/flexibilidadHoraria.svg" alt="Flexibilidad Horaria" />
                            Flexibilidad Horaria
                        </div>
                        <div>
                            <img src="assets/benefits/flexibilidadHoraria.svg" alt="Flexibilidad Horaria" />
                            Flexibilidad Horaria
                        </div>
                        <div>
                            <img src="assets/benefits/flexibilidadHoraria.svg" alt="Flexibilidad Horaria" />
                            Flexibilidad Horaria
                        </div>
                        <div>
                            <img src="assets/benefits/flexibilidadHoraria.svg" alt="Flexibilidad Horaria" />
                            Flexibilidad Horaria
                        </div>
                        
                    </Carousel>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Benefits;