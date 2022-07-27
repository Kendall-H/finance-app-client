import React from "react";

const Crypto = (props) => {
  const value = props.crypto.amount * props.crypto.price;
  return (
    <div>
      <h2>{props.crypto.name}</h2>
      <span>Symbol: {props.crypto.symbol}</span>
      <br />
      <span>Price Per Coin: {props.crypto.price}</span>
      <br />
      <span>Amount Owned: {props.crypto.amount}</span>
      <br />
      <span>Value: ${value.toFixed(2)}</span>
    </div>
  );
};

export default Crypto;
