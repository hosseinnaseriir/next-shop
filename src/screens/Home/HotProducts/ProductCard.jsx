import React, { useContext, useState } from "react";
import { Container, Card, Button } from "react-bootstrap";
import {
  shoppingCardActions,
  shoppingContext,
} from "../../../contexts/shoppingContext";

function ProductCard({ product }) {
  const [count, setCount] = useState(1);

  const { shoppingCard, dispatch } = useContext(shoppingContext);

  const handleAddNewProduct = (product) => {
    dispatch({
      type: shoppingCardActions.add,
      payload: product,
    });
  };

  return (
    <Card>
      <Card.Img
        style={{ height: "13rem", objectFit: "cover" }}
        variant="top"
        src={product.img}
      />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div className="row">
          <Button
            className="col-8"
            onClick={() => handleAddNewProduct({ ...product, count })}
            variant="primary"
          >
            Add to Card
          </Button>
          <input
            onChange={(e) => setCount(e.target.value)}
            className="col-4"
            type="number"
          />
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
