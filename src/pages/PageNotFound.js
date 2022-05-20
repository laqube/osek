import React from 'react';
// import {Container, Row, Col, Card} from 'react-bootstrap';
import {Container, Row, Col, Card} from 'react-bootstrap';
import {Button} from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles';
import {Link} from "react-router-dom";


const StyledButton = withStyles({
    root: {
        display: "left",
        alignItems: "center",
        justifyContent: "center",
        height: "44px",
        padding: "0 25px",
        boxSizing: "border-box",
        borderRadius: "5px",
        background: "#fff",
        color: "#29292a",
        transform: "none",
        boxShadow: "6px 6px 0 0 #c7d8ed",
        transition: "background .3s, border-color .3s, color .3s",
        "&:hover":{
            backgroundColor: "#fb4424"
        },
    },
    label: {
        textTransform: 'capitalize',
    },
})(Button);





const PageNotFound = () => {
    return (
        <Row fluid style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1473830394358-91588751b241?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170")',
            minHeight: '100%',
            height: '100vh',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }}>
            <Container className="my-auto">
                <Row className="justify-content-center">
                    <Col md="auto">
                        <Card className="text-center" border="light">
                            <Card.Header as="h5" >404</Card.Header>
                            <Card.Body className="justify-content-center">
                                <Card.Title>Oopsie...</Card.Title>
                                <Card.Text>
                                    Seems like you lost, there is no such a page :D
                                </Card.Text>
                                <Link to="/">
                                    <StyledButton> Go back</StyledButton>
                                </Link>
                            </Card.Body>
                        </Card>

                    </Col>
                </Row>
            </Container>
        </Row>
    );
};

export default PageNotFound;