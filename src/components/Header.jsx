import React, { useState } from 'react'
import { styled } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Hidden from '@mui/material/Hidden';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Logo from './Logo';

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

    const [open, setOpen] = useState(false);

    return (
        <AppBar position='fixed' elevation={1} color='transparent'>
            <Container maxWidth='lg'>
                <Box my={2}>
                    <Toolbar disableGutters>
                        <Logo/>
                        <Hidden mdDown>
                            {
                                links.map((link) => (
                                    <StyledLink /* TODO border gradient */
                                        key={link.name} 
                                        href={ link.href } 
                                        color='textPrimary' 
                                        variant='link' 
                                        underline='none'
                                    >
                                        { link.name }
                                    </StyledLink>
                                ))
                            }
                        </Hidden>

                        <Hidden smUp>
                            <IconButton onClick={() => setOpen(true)}>
                                <MenuIcon color="success"/> {/* TODO gradient */}
                            </IconButton>
                        </Hidden>
                    </Toolbar>
                </Box>
            </Container>

            <SwipeableDrawer 
                anchor='right' 
                open={ open } 
                onOpen={() => setOpen(true)}
                onClose={() => setOpen(false)}>
                
                <div className='d-flex m-10'>
                    <Logo/>
                    <IconButton onClick={() => setOpen(false)}>
                        <CloseRoundedIcon sx={{ fontSize: 40 }} color="success"/> {/* TODO gradient */}
                    </IconButton>
                </div>

                <Divider/>

                <List>
                    {
                        links.map((link) => (
                            <ListItem>
                                <StyledLink 
                                    key={link.name} 
                                    href={ link.href } 
                                    color='textPrimary' 
                                    variant='link' 
                                    underline='none'
                                >
                                    { link.name }
                                </StyledLink>
                            </ListItem>
                        ))
                    }
                </List>
            </SwipeableDrawer>

        </AppBar>
    )
}

export default Header