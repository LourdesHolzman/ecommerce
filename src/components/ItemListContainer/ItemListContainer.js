import React from 'react'
import { Container } from 'react-bootstrap'

export const ItemListContainer = ({greeting}) => {

    return (
        <Container className="text-muted my-5">
            <h3> {greeting} </h3>
        </Container>
    )
}
