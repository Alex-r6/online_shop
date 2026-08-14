import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { backToHistory } from '../../store/redux/backetReducer'
import { delHistory, delOneHistory } from '../../store/redux/historyReducer'

export const History = () => {
  const history_list = useSelector(a => a.history)
  const backet = useSelector(state => state.backet)

  const dispatch = useDispatch()
  useEffect(() => {
    localStorage.setItem('history', JSON.stringify(history_list))
  }, [history_list])


  const clear_history = () => {
    dispatch(delHistory())
  }

  const return_to_history = (elem) => {
    elem.product.forEach((item) => {
      dispatch(
        backToHistory({
          id: item.id,
          quantity: item.quantity,
        })
      );
    });
    dispatch(delOneHistory(elem.id))
  };

  const memoHistory = useMemo(() => {
    const history_start = [...history_list].reverse();

    console.log(history_start);
  
    return history_start.map((elem) => (
      <div key={elem.id}>
        <Link
          to={`/history/${elem.id}`}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <p>Date: {elem.date.slice(0, 10)}</p>
          <p>ID: {elem.id}</p>
          <p>Total price: {elem.globalPrice}</p>
        </Link>
  
        <button className='to_history_btn'  onClick={()=>return_to_history(elem)}>Back to basket</button>
        <div className='history_line'></div>
      </div>
    ));
  }, [history_list]);


  return (
    <div>
      {memoHistory}
      <button className='clear_all_btn' onClick={clear_history}>Clear all</button>
    </div>
  )
}


