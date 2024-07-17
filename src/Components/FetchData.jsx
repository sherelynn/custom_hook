import React from 'react'
import UseFetch from './UseFetch'
import './FetchData.css'

const FetchData = () => {
  const [data] = UseFetch('https://api.npoint.io/9045c260b1565daa9e15')
  console.log(data)

  return (
    <>
      <ul className="list_data_main">
        <h1 className="usefetch_heading">Use Fetch Custom Hook</h1>
        {data &&
          data.map((item) => (
            <>
              <li className="list_data">
                <h3 className="item_name">{item.name}</h3>
                <p>
                  <span>Benefits: </span> {item.benefits}
                </p>
                <p>
                  <span>Best time to eat: </span> {item.best_time_to_intake}
                </p>
                <p>
                  <span>Importance: </span>
                  {item.importance}
                </p>
              </li>
            </>
          ))}
      </ul>
    </>
  )
}

export default FetchData
