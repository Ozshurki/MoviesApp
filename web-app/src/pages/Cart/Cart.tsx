import React from "react";
import Header from "../../components/header/Header"
import CardsContainer from "../Home/Cards Container/CardsContainer";
import "./Cart.css"


const Cart: React.FC = () => {

    return (
        <div className="cart-page">
            <div className="header-container">
                <Header/>
            </div>
        </div>
    )
}

export default Cart;