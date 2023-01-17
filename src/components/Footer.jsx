import React from "react";
import Box from '@mui/material/Box';
import Logo from './Logo';

function Footer() {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <Box>
                <Logo/>
            </Box>
        </Box>
    )
}

export default Footer;