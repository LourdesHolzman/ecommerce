import React from 'react'
import { BsFillCartFill } from "react-icons/bs";
import './CartWidget.scss'

export const CartWidget = () => {
    return (
        <div>
            <BsFillCartFill className="cartWidget"/>
        </div>
    )
}
