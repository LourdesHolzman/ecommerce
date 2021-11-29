import React, {useContext} from 'react'
import { BsFillCartFill } from "react-icons/bs";
import { CartContext } from '../../context/CartContext'
import './CartWidget.scss'

export const CartWidget = () => {

    const {totalCantidad} = useContext(CartContext)


    return (
        <div>
            <BsFillCartFill className="cartWidget"/>
        </div>
    )
}
