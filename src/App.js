import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  // return null; // 페이지에서 아무것도 보지 않는다는 것을 의미 !
  return (
    <Router>
      <Switch>
        <Route path="/movie">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

// router는 URL을 보고있는 component

//! 비트코인 사이트
// function App() {
//   const [loading, setLoading] = useState(true)
//   const [coins, setCoins] = useState([])
//   const [coinValue, setCoinValue] = useState(0)
//   const [money, setMoney] = useState(0)

//   useEffect(() => {
//     fetch("https://api.coinpaprika.com/v1/tickers")
//       .then((res) => res.json())
//       .then((json) => {
//         setCoins(json)
//         setLoading(false)
//       })
//   }, [])

//   const onChange = (e) => {
//     setMoney(e.target.value)
//   }

//   const coinChange = (e) => {
//     setCoinValue(e.target.value)
//   }

//   return (
//     <div>
//       <h1>💰BITCOIN💰 {loading ? "" : `Total : ${coins.length}`}</h1>

//       {loading ? <strong>Loading...</strong> :
//       <select onChange={coinChange}>
//         <option>----- 😈 Select Coin 😈 -----</option>
//         {coins.map((coin, index) => (
//           <option key={index} value={coin.quotes.USD.price}>
//             {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD
//           </option>
//         ))}
//       </select>
//       }
//       <hr />

//       <div>
//         <input type="number" placeholder="How much you have?" onChange={onChange}/>
//       </div>

//       <h1>
//         {(money !== 0 && coinValue !== 0) ? (money / coinValue) : null}
//       </h1>

//     </div>
//   )
// }
//export default App;
