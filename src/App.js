import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState(0);
  const [result, setResult] = useState(0);
  const [coinSymbol, setCoinSymbol] = useState("");
  const [coinMoney, setCoinMoney] = useState(0);
  const onChangeInput = (event) => setMoney(event.target.value);
  const onChangeSelect = (event) => {
    const price = coins[event.target.selectedIndex - 1].quotes.USD.price;
    const symbol = coins[event.target.selectedIndex - 1].symbol;
    setCoinSymbol(symbol);
    setCoinMoney(parseInt(price));
  };
  useEffect(() => {
    setResult(Math.round((money / coinMoney) * 100) / 100);
  }, [money, coinMoney]);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <form>
          <input type="number" value={money} onChange={onChangeInput} />
          <hr />
          <select onChange={onChangeSelect}>
            <option>Select coin !</option>
            {coins.map((coin) => (
              <option key={coin.id}>
                {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
              </option>
            ))}
          </select>
        </form>
      )}
      <h2>
        You have {money} dollars & You can buy {result} {coinSymbol}
      </h2>
    </div>
  );
}

export default App;
