import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardMedia, Container, Grid, IconButton, Paper, styled, Typography } from '@mui/material';
import { Box } from '@mui/system';

const StyledPaper = styled(Paper) ({
    minHeight: '391px',
    background: 'linear-gradient(270deg, #00E6E3 2.73%, #00FF68 100%)',
    paddingBottom: '20px'
});

// const StyledTypography = styled(Typography) ({
//     textAlign: 'right',
    
//     sx: {
//         textAlign: {
//             xs: 'center',
//             sm: 'right'
//         },
//         marginBottom: {
//             xs: '10px'
//         }
//     }
// });

const StyledTypography = styled(Typography)((props) => ({
    textAlign: 'right',

    [props.theme.breakpoints.down("sm")]: {
        textAlign: 'center',
    },
}));

function Product() {

    const [show, setShow] = useState(false)
    useEffect(() => setShow(true), [])

    return (
        <StyledPaper>
            <Container maxWidth='md' className='h-100'>
                <Grid container maxWidth='md' alignItems='center' className='h-100'>
                    <Grid item xs={12} sm={6}>
                        <CardMedia
                            component="img"
                            image="product.png"
                            sx={{ maxWidth: 'sm' }}
                            alt="América de Cali Product"
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
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