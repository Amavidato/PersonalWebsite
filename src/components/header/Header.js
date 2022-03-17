import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import styled from 'styled-components';
import theme from './../../styles/themes/theme';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedinIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
const pages = ['Home', 'About', 'Portfolio', 'Resume', 'Contact'];
const Socials = [
    {
        id: 'GitHub',
        label: 'Github',
        link: 'https://github.com/Amavidato',
        tooltip: 'Github account',
        icon: <GitHubIcon />
    },
    {
        id: 'Linkedin',
        label: 'Linkedin',
        link: 'https://github.com/Amavidato',
        tooltip: 'Github account',
        icon: <LinkedinIcon />
    },
    {
        id: 'Facebook',
        label: 'Facebook',
        link: 'https://github.com/Amavidato',
        tooltip: 'Facebook account',
        icon: <FacebookIcon />
    },
    {
        id: 'GitHub',
        label: 'Github',
        link: 'https://github.com/Amavidato',
        tooltip: 'Instagram account',
        icon: <InstagramIcon />
    }
];

const NavContainer = styled.div`
    background-color: inherit;
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
`;
const NavGroup = styled.div`
    background-color: inherit;
    margin-left: 5px;
    margin-right: 5px;
    display: flex;
    flex-direction: row;
`;

const List = styled.div`
    background-color: inherit;
    margin-left: 5px;
    margin-right: 5px;
    display: flex;
    flex-direction: row;
`;

const NavButtonDiv = styled.div`
    background-color: inherit;
    padding: 20px;
    :hover {
        text-decoration: underline ${theme.palette.secondary.main} 2.5px;
        text-underline-offset: 40%;
    }
`;

function NavButton(prop) {
    return <NavButtonDiv>{prop.children}</NavButtonDiv>;
}

function NavContent() {
    return (
        <NavContainer>
            <NavGroup>
                <Typography variant="h6" noWrap component="div" style={{ alignSelf: 'center' }}>
                    LOGO
                </Typography>
                <List>
                    {pages.map((elem, idx) => (
                        <NavButton key={idx}>{elem}</NavButton>
                    ))}
                </List>
            </NavGroup>
            <NavGroup>
                <List>
                    {Socials.map((elem) => (
                        <div key={elem.id} style={{ alignSelf: 'center' }}>
                            {elem.icon}
                        </div>
                    ))}
                </List>
            </NavGroup>
        </NavContainer>
    );
}

const ResponsiveAppBar = () => {
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <NavContent />
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default ResponsiveAppBar;
