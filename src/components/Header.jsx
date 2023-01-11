import React from 'react'
import { AppBar, Container, Hidden, Link, styled, Toolbar } from '@mui/material'
import Logo from './Logo';
import { Box } from '@mui/system';

const links = [
    { 
        name: 'INICIO',
        href: ''
    },
    { 
        name: 'BENEFICIOS',
        href: ''
    },
    { 
        name: 'Login',
        href: ''
    },
]

const StyledLink = styled(Link) ({
    marginRight: 20,
});

function Header() {

    return (
        <AppBar position='fixed' elevation={1} color='transparent'>
            <Container maxWidth='lg'>
                <Box my={2}>
                    <Toolbar disableGutters>
                        <Logo/>
                        <Hidden mdDown>
                            {
                                links.map((link) => (
                                    <StyledLink key={link.name} href={ link.href } 
                                        color='textPrimary' 
                                        variant='link' 
                                        underline='none'
                                    >
                                        { link.name }
                                    </StyledLink>
                                ))
                            }
                        </Hidden>
                    </Toolbar>
                </Box>
            </Container>
        </AppBar>
    )
}

export default Header