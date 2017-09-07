import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const Nav = styled.div`
    width: 95%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2.5%;
    background-color: rgba(2, 178, 208, 1);
    box-shadow: 0px 1px 6px black;
    color: white;
    a {
    text-decoration: none;
    margin: 0 5px;
    &:visited {
        color: white;
    }
    }
`;



class GlobalNav extends Component {
    render() {
        return (
            <Nav>
                <div><h2>Swamped!</h2></div>
                    <div><h2><Link to="/">Home</Link></h2></div>
                    <div><h2><Link to="/new">New Creature</Link></h2></div>
            </Nav>
        );
    }
}

export default GlobalNav;