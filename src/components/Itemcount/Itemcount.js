import React, { useState } from 'react'
import {Button} from "react-bootstrap"


export const Itemcount = ({stock}) => {

    const [counter, setCounter] = useState(1);

    const sumar = () => {
        if(stock > counter) {
            setCounter(counter +1)
        } else (
            alert ("Sin stock")
        )
    }
    
    
    const restar = () => {
        if(counter > 1) {
            setCounter(counter -1);
        }
        
    }

    const respuesta = () => (
        alert("Agregaste ${counter} productos a tu carrito")
        )


    return (
        <>
            <h2>{counter}</h2>

            <div>
                <Button variant="primary" onClick={restar}> - </Button>
                <Button variant="primary" onClick={sumar}> + </Button>
            </div>

            

            <Button variant="primary" size="lg" onClick={respuesta} > Agregar al carrito </Button>
            
        </>
    )
}
