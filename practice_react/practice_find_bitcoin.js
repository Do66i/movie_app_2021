import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true)
  const [coins, setCoins] = useState([])
  const [coinValue, setCoinValue] = useState(0)
  const [money, setMoney] = useState(0)

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((res) => res.json())
      .then((json) => {
        setCoins(json)
        setLoading(false)
      })
  }, [])

  const onChange = (e) => {
    setMoney(e.target.value)
  }

  const coinChange = (e) => {
    setCoinValue(e.target.value)
  }

  return (
    <div>
      <h1>Coin Changer {loading ? "" : `(${coins.length})`}</h1>

      {loading ? <strong>Loading...</strong> : 
      <select onChange={coinChange}>
        <option>----- Select Coin -----</option>
        {coins.map((coin, index) => (
          <option key={index} value={coin.quotes.USD.price}>
            {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD
          </option>
        ))}
      </select>
      }
      <hr />

      <div>
        <input type="number" placeholder="How much you have?" onChange={onChange}/>
      </div>

      <h1>
        {(money !== 0 && coinValue !== 0) ? (money / coinValue) : null}
      </h1>

    </div>
  )
}

export default App;

// import { useState, useEffect } from "react";

// function App() {
//   const [loading, setLoading] = useState(true);
//   const [coins, setCoins] = useState([]);

  
//   useEffect(() => {
//     fetch("https://api.coinpaprika.com/v1/tickers")
//     .then((response) => response.json())
//     .then((json) => {
//       setCoins(json) // json => 코인들, 배열에 담아줌
//       setLoading(false)
//     })
//   }, []) // 빈 배열이면 이 코드는 한 번만 작동한다 !
//   return (
//     <div>
//       <h1> 💰BITCOIN💰 {loading ? "" : `Total : ${coins.length}`}</h1>
//       {loading ? <strong>Loading...</strong> : 
//         <select>
//       {coins.map((coin) => <option>
//       {coin.name}({coin.symbol}): {coin.quotes.USD.price} USD</option>)}
//     </select>} {/* <strong> 요소는 콘텐츠 자체의 중요성을 강조할 때 사용 */}
//     {/* 여기서 coin은 coins array안에 있는 각각의 coin을 의미 */}
//     </div>
//   );
// }
// export default App;