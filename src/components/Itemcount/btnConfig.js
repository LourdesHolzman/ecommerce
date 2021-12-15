export const btnConfig = (cantidad, max, handleSumar, handleRestar) => {
    return {
        restar: {
            className: `btn ${cantidad === 0 ? 'btn-outline-danger' : 'btn-outline-danger'}`,
            onClick: handleRestar,
            disabled: cantidad === 0
        },
        sumar: {
            className: `btn ${cantidad === max ? 'btn-danger' : 'btn-dark'}`,
            onClick: handleSumar,
            disabled: cantidad === max
        }
    }
}