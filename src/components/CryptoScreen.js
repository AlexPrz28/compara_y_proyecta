import "../styles/CryptoScreen.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Coin from "../helper/Coin";

function CryptoScreen() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=mxn&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text"> Buscador de criptos</h1>
        <form>
          <input
            type="text"
            placeholder="Buscar"
            className="coin-input"
            onChange={handleChange}
          />
        </form>
      </div>
      <div className="coin-subtitles">
        <p className="subtitle">Criptomoneda</p>
        <p className="subtitle">Abreviacion</p>
        <p className="subtitle">Valor actual</p>
        <p className="subtitle">Volumen</p>
        <p className="subtitle">Porcentaje</p>
        <p className="subtitle">Market cap</p>
      </div>
      {filteredCoins.map((coin) => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            marketcap={coin.market_cap}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            volume={coin.total_volume}
          ></Coin>
        );
      })}
    </div>
  );
}

export default CryptoScreen;
