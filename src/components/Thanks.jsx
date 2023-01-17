import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import InstagramIcon from "./InstagramIcon";
import Button from '@mui/material/Button';
import { Box, styled } from '@mui/material';

const StyledButton = styled(Button)({
    background: 'linear-gradient(270deg, #00E6E3 2.73 %, #00FF68 100 %)',
    borderRadius: '30'
});

function Benefits() {
    return (
        <Container maxWidth='md'>
            <Grid container textAlign='center' my={5}>
                <Grid item xs={12}>
                    <Typography variant="h5" component="h5" fontSize={36}>
                        Gracias por <b className="txt-gradient">completar el ejercicio</b>
                    </Typography>

                    <Typography variant="p" component="p">
                        Te invitamos a ver más información
                    </Typography>

                </Grid>
            </Grid>

            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <Box mx={2}>
                    <InstagramIcon/>
                </Box>
                
                <a
                    href="https://wacoservices.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    underline='none'>
                    <Button className="btn-gradient">
                        Conocer más
                    </Button>
                </a>
            </Box>
        </Container>
    )
}

export default Benefits;