import React from "react";
import Button from "../../../shared/components/FormElements/Button";

const Stock = (props) => {
  const value = props.stock.price * props.stock.amount;
  return (
    <div>
      <h2>{props.stock.name}</h2>
      <span>Symbol: {props.stock.symbol}</span>
      <br />
      <span>Price Per Coin: {props.stock.price}</span>
      <br />
      <span>Amount Owned: {props.stock.amount}</span>
      <br />
      <span>Value: ${value.toFixed(2)}</span>
      <br />
      <Button to={`/stocks/${props.id}`}>EDIT</Button>
      <Button danger>DELETE</Button>
    </div>
  );
};

export default Stock;
