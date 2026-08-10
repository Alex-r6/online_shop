import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

export const History_more_info = () => {
    const { id } = useParams()
    const history_list = useSelector(a => a.history)

    const history = history_list.find((elem) => elem.id === id)

    if (!history) {
        return <div>No history</div>;
      }
      
      const total_cost = history.product.reduce(
        (acc, elem) => acc + elem.quantity * elem.buyPrice,
        0
      );

      const total_quantity = history.product.reduce(
        (acc, elem) => acc + elem.quantity,
        0
      );

    return (
        <div>
            {history.product.map((elem) => (
                <div key={elem.id}>
                    <p>Name: {elem.name}</p>
                    <p>Price: {elem.buyPrice}</p>
                    <p>Quantity: {elem.quantity}</p>
                    <div className='history_line'></div>
                </div>
            ))}
            <p>Total price: {total_cost}</p>
            <p>Total quantity: {total_quantity}</p>
        </div>
    )
}
