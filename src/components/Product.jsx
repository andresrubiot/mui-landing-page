import React from 'react'
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material';
import Typography from '@mui/material/Typography';

const StyledPaper = styled(Paper)((props) => ({
    background: 'transparent',
    marginTop: '-50px',
    minHeight: '391px',
    paddingBottom: '20px',
    position: 'relative',
}));

const StyledGradient = styled(Paper)((props) => ({
    background: 'linear-gradient(270deg, #00E6E3 2.73%, #00FF68 100%)',
    clipPath: 'polygon(0 4%, 100% 0, 100% 96%, 0 100%)',
    height: '100%',
    position: 'absolute',
    width: '100%',
    zindex: '2',

    [props.theme.breakpoints.only("sm")]: {
        height: '80%'
    },

    [props.theme.breakpoints.down("md")]: {
        clipPath: 'polygon(0 3%, 100% 0, 100% 97%, 0 100%)',
        // height: '80%'
    },

}));

const StyledTypography = styled(Typography)((props) => ({
    textAlign: 'right',

    [props.theme.breakpoints.down("sm")]: {
        textAlign: 'center',
    },
}));

function Product() {

    return (
        <StyledPaper>
            <StyledGradient className='overlay'></StyledGradient>
            <Container maxWidth='md'>
                <Grid container maxWidth='md' alignItems='center' zIndex={100} position='relative'>
                    <Grid item xs={12} sm={6} my='-20px'>
                        <CardMedia
                            component="img"
                            image="product.png"
                            alt="América de Cali Product"
                        />
                    </Grid>

                    <Grid item xs={12} sm={6} mt={2}>
                        <StyledTypography variant="h3" color="initial">
                            Trabajamos para    
                        </StyledTypography>

                        <StyledTypography variant="h3" color="initial">
                            <b>convertir ideas</b> en
                        </StyledTypography>

                        <StyledTypography variant="h3" color="initial">
                            <b>productos.</b>
                        </StyledTypography>
                    </Grid>
                </Grid>
                    
            </Container>
        </StyledPaper>
    )
}

export default Product