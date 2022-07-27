import React from "react";
import { Link } from "react-router-dom";

import "./AssetDashboard.css";

const AssetDashboard = (props) => {
  //loop through cryptos to get total value
  let cryptoValue = 0;
  const cryptoLoop = props.cryptoList.map((crypto) => {
    let value = crypto.amount * crypto.price;
    cryptoValue += value;
    return 0;
  });

  //loop through stocks to get total value
  let stockValue = 0;
  const stockLoop = props.stockList.map((stock) => {
    let value = stock.amount * stock.price;
    stockValue += value;
    return 0;
  });

  return (
    <div>
      <div className="container-1">
        <Link to="/cryptos">
          <div className="asset">
            <div>
              <h1>Crypto Assets</h1>
              <p>Number of Coins: {props.cryptoList.length}</p>
              <p>Total Crypto Value: ${cryptoValue.toFixed(2)}</p>
            </div>
          </div>
        </Link>

        <Link to="/stocks">
          <div className="asset">
            <div>
              <h1>Stock Assets</h1>
              <p>Number of Stocks: {props.stockList.length}</p>
              <p>Total Stock Value: ${stockValue.toFixed(2)}</p>
            </div>
          </div>
        </Link>
      </div>

      <div className="networth">
        <div>
          <h2>Net Worth: ${(cryptoValue + stockValue).toFixed(2)}</h2>
        </div>
      </div>
    </div>
  );
};

export default AssetDashboard;
