import React from "react";
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";
import Link from 'react-router-dom';

const Footer = () => {
    return (
        <Box>
            <Container>
                <Row>
                    <Column>
                        <Heading>Bіz týraly</Heading>
                        <FooterLink href="#">Maqsatymyz</FooterLink>
                        <FooterLink href="#">Uıym pálsapasy</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Qala fılıaldarymen baılanys</Heading>
                        <FooterLink href="#">Almaty</FooterLink>
                        <FooterLink href="#">Astana</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Ósek áleýmettіk jelіde</Heading>
                        <FooterLink href="#">
                            <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
                            </i>
                        </FooterLink>
                        <FooterLink to="/404">
                            <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
                            </i>
                        </FooterLink>
                    </Column>
                </Row>
            </Container>
        </Box>
    );
};
export default Footer;