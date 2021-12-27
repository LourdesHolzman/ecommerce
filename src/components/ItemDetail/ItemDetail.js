import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { Itemcount } from '../Itemcount/Itemcount'


export const ItemDetail = ({id, name, img, desc, price, category, stock}) => {

    const {agregarAlCarrito, isInCart} = useContext(CartContext)
    

    const navigate = useNavigate()
    
    const [cantidad, setCantidad] = useState(0)
    
    const handleVolver = () => {
        navigate(-1)
    }

    const handleAgregar = () => {
        if (cantidad > 0) {
            agregarAlCarrito({
                id,
                name,
                price,
                img,
                cantidad
            })
        }   
    }

    return (
        <div>
            <h2>{name}</h2>
            <img src={img} alt={name} style={{width:'300px', height:'400px'}}/>
            <p>{desc}</p>
            <p>Precio: ${price}</p>

            {
                !isInCart(id)
                    ?   <Itemcount 
                            max={stock} 
                            cantidad={cantidad} 
                            setCantidad={setCantidad}
                            onAdd={handleAgregar}
                        />
                    :   <Link to="/cart" className="btn btn-success d-block">Finalizar compra</Link>
            }

            <button className="btn btn-secondary" onClick={handleVolver}>volver</button>
        </div>
    )
}