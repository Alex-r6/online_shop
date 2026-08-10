import React, { useEffect, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const History = () => {
  const history_list = useSelector(a => a.history)
  useEffect(() => {
    localStorage.setItem('history', JSON.stringify(history_list))
  }, [history_list])
  const memoHistory = useMemo(() => {
    const histrorty_start = [...history_list].reverse();
    return histrorty_start.map(elem => <Link key={elem.id} to={`/history/${elem.id}`}
     style={{ textDecoration: "none", color: "inherit" }}>
      <p>Date: {elem.date.slice(0, 10)}</p>
      <p>ID: {elem.id}</p>
      <p>Total price: {elem.globalPrice}</p>
      <div className='history_line'></div>
    </Link>)
  }, [history_list])


  return (
    <div>
      {memoHistory}
    </div>
  )
}


