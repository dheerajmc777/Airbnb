import React from "react";
import logo from "../../assets/logo/long-logo.png";
import "./style.css";
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import BasicMenu from "./ProfileMenu";
import  SimpleBottomNavigation from "./BottomNav";
import MobileSearchBar from "../MobileSearchBar/Index";

function Header() {
return(
    <div className="navbar">
        <img src={logo} alt="logo" className="navbar-logo" />
        <div className="search-bar">
            <div className="search-bar-text">Any where</div>
            <div className="search-bar-text">Any week</div>
            <div className="search-bar-text2">Add guest</div>
            <div className="search-Icon-div">
            <SearchIcon className="search-Icon"/>
            </div>
        </div>
        <div className="profile-container">
            <div className="airbnb-your-home">Airbnb your home</div>
            <div className="airbnb-your-home">
                <LanguageIcon sx={ {fontSize: "1.2rem"}} />
            </div>
            <div className="profile-div">
                <BasicMenu />
            </div>
        </div>
        <MobileSearchBar/>
        <SimpleBottomNavigation />
    </div>
)
}

export default Header;