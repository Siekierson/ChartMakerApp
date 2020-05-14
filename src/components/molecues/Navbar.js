import React from 'react';
import styled from 'styled-components';
import './Navbar.scss';
import {NavLink} from 'react-router-dom';
const Navigation=styled.nav`
margin:0;
padding:10px;
width:100vw;
background-color:#222;
text-align:center;
`
const Navbar=()=>(
                    <Navigation>
                        <ul>
                            <li>
                            <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                            <NavLink to="/covid">Covid</NavLink>
                            </li>
                        </ul>
                    </Navigation>
)
export default Navbar;