/*import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { pedirDatos } from '../helpers/pedirDatos'
import { Container } from 'react-bootstrap'
import { ItemList } from '../ItemList/ItemList'



    export const ItemListContainer = ({greeting}) => {
    
        const [loading, setLoading] = useState(false)
        const [productos, setProductos] = useState([])
    
        const { catId } = useParams()
    
        useEffect(() => {
            
            setLoading(true)
            pedirDatos()
                .then( (resp) => {
    
                    if (!catId) {
                        setProductos(resp)
                    } else {
                        setProductos( resp.filter( prod => prod.category === catId) )
                    }
                })
                .catch( (error) => {
                    console.log(error)
                })
                .finally(() => {
                    setLoading(false)
                })
    
        }, [catId])

    return (
        <>
        <Container className="text-muted my-5">
            <h3> {greeting} </h3>
        </Container>
        <ItemList items={productos}/>
        </>

    )
}*/

import React from 'react'
import { useParams } from 'react-router'
import { useCollection } from '../../hooks/useCollection'
import { ItemList } from '../ItemList/ItemList'
import { Loader } from '../Loader/Loader'


export const ItemListContainer = () => {

    const { catId } = useParams()
    const { loading, data } = useCollection('productos', catId)

    return (
        <>
            {
                loading 
                    ? <Loader /> 
                    : <ItemList items={data}/>
            }
        </>
    )
}
