import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import logo from '../logo.svg';
import { FaBeer } from 'react-icons/fa';
import { FaOpencart } from 'react-icons/fa';

import { ButtonContainer} from './Button';

export default class Navbar extends Component{
    render(){
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                <Link to="/" className="logo-icon">
                    <FaBeer />
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                            products
                        </Link>
                    </li>
                </ul>
                <Link to='/cart' className="ml-auto">
                    <ButtonContainer>
                        <span className="mr-2">
                            <FaBeer />
                        </span>
                        
                        my cart
                    </ButtonContainer>
                </Link>
            </NavWrapper>
            
        )
    }
}

const NavWrapper = styled.nav`
    background-color: var(--mainBlue);
    .nav-link{
        color:var(--mainWhite) !important;
        font-size:1.3rem;
        text-transform:capitalize !important;
    }
`;

