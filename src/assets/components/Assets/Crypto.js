import React from "react";
import { useState } from "react";
import Button from "../../../shared/components/FormElements/Button";
import Modal from "../../../shared/UIElements/Modal";

const Crypto = (props) => {
  const [showCryptoEdit, setShowCryptoEdit] = useState(false);

  const openCryptoEditHandler = () => setShowCryptoEdit(true);

  const closeCryptoEditHandler = () => setShowCryptoEdit(false);

  const value = props.crypto.amount * props.crypto.price;

  return (
    <React.Fragment>
      <Modal
        show={showCryptoEdit}
        onCancel={closeCryptoEditHandler}
        header={props.crypto.name}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={closeCryptoEditHandler}>CLOSE</Button>}
      ></Modal>

      <div>
        <h2>{props.crypto.name}</h2>
        <span>Symbol: {props.crypto.symbol}</span>
        <br />
        <span>Price Per Coin: {props.crypto.price}</span>
        <br />
        <span>Amount Owned: {props.crypto.amount}</span>
        <br />
        <span>Value: ${value.toFixed(2)}</span>
        <br />

        <Button onClick={openCryptoEditHandler}>EDIT</Button>
        <Button danger>DELETE</Button>
      </div>
    </React.Fragment>
  );
};

export default Crypto;
