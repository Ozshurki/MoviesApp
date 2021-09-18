import React from 'react'
import Header from "../../components/header/Header";
import Main from "./Main/Main";
import "./Home.css"
import SideMenu from "../../components/Side Menu/SideMenu";

const Home: React.FC = () => {
    return (
        <div className='home'>
            <Header/>
            <SideMenu/>
            <Main/>
        </div>
    )
}

export default Home;