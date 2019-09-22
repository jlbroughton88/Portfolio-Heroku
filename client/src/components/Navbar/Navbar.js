import React, { Component } from 'react'
import styled from "styled-components"
import { Link } from "react-router-dom"
import Menu from 'react-burger-menu/lib/menus/slide'
import "./Navbar.css"

class Navbar extends Component {
    render() {
        return (
            <MotherDiv>
                <NameColumn>
                    <NameDiv>
                        <Link className="nameLink" to="/">JB</Link>
                    </NameDiv>
                </NameColumn>
                <NavigationColumn>
                    <Menu pageWrapId={"page-wrap"} className="hamburgerMenu" width={ 150 } right>
                        <a id="home" className="menu-item" href="/">Home</a>
                        <a id="work" className="menu-item" href="/">Work</a>
                        <a id="Contact" className="menu-item" href="/">Contact</a>
                    </Menu>
                    <LinksDiv className="linksMenu">
                        <Link className="navLink" to="/">Home</Link>
                        <Link className="navLink" to="/Work">Work</Link>
                        <Link className="navLink" to="/contact">Contact</Link>
                    </LinksDiv>
                </NavigationColumn>
            </MotherDiv>
        )
    }
}

export default Navbar;

const MotherDiv = styled.div`
    width: 100%;
    height: 7%;
    background-color: #879FFF;
    max-height: 50px;
    display: flex;
    flex-direction: row
    align-items: center;
    min-height: 43px;
    max-height: 43px;
    position: fixed;

`

const NameColumn = styled.div`
    height: 100%;
    width: 20%;
`

const NameDiv = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`

const NavigationColumn = styled.div`
    height: 100%;
    width: 75%;
    display: flex;
    justify-content: flex-end;
    align-content: center;

    @media(max-width:500px) {
        justify-content: center;
    }
`

const LinksDiv = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`