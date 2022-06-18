import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Watchlist from "../Pages/Watchlist";
import Recommendation from "../Pages/Recommendation";
import { Navbar, Nav } from "react-bootstrap";

export default function NavigationBar(props) {
    return (
        <div>
            <div>
                <Navbar bg="light" >
                    <Navbar.Brand href="#">FILMER</Navbar.Brand>
                    <Nav>
                        <Nav.Link as={Link} to="/">
                            Watchlist
                        </Nav.Link>
                        <Nav.Link as={Link} to="/recommendations">
                            Recommendations
                        </Nav.Link>
                    </Nav>
                </Navbar>
                <Routes>
                    <Route exact path="/" component={Watchlist} />
                    <Route path="/recommendations" component={Recommendation} />
                </Routes>
            </div>
        </div>
    );
}