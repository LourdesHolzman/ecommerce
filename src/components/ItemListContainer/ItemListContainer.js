import React from 'react'
import { Container } from 'react-bootstrap'
import { Itemcount } from '../Itemcount/Itemcount'
import { ProductCart } from '../ProductCart/ProductCart'


export const ItemListContainer = ({greeting}) => {

    return (
        <>
        <Container className="text-muted my-5">
            <h3> {greeting} </h3>
        </Container>
        <ProductCart/>
        </>

    )
}
