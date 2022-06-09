import React, { Component }  from 'react';
import '../styles/header.css';
import Logo from './Logo';
import NavigationHelper, { NavigationRoutes } from '../helpers/Navigator';
import LeftIcon from './icons/LeftIcon';
import { useLocation } from 'react-router-dom';

const Header = () => {
    const navigator: NavigationHelper = new NavigationHelper();
    const location = useLocation();

    function logout(): void {
        navigator.logout();
    }

    function backToDashboard(): void {
        navigator.dashboard();
    }

    return (
        <header>
            { 
                location.pathname !== NavigationRoutes.dashboard ? 
                    <button className="tertiary" onClick={backToDashboard}><LeftIcon></LeftIcon><span>Back to dashboard</span></button> 
                    : null
            }
            <Logo></Logo>
            <button className="secondary" onClick={logout}>Logout</button>
        </header>
    );
};

export default Header;