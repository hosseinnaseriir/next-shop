import React, { useContext, useState, useEffect } from "react";
import { Container, Card, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import {
  shoppingCardActions,
  shoppingContext,
} from "../../../../contexts/shoppingContext";

function ProductCard({ product }) {
  const [count, setCount] = useState(product.amount || 1);

  const { shoppingCard, dispatch, shoppingCardDispatchMiddleware } =
    useContext(shoppingContext);

  const dispatchMidlleware = shoppingCardDispatchMiddleware(dispatch);

  const handleAddNewProduct = (product) => {
    dispatchMidlleware(product, { type: "ADD_PRODUCT" });
    if (shoppingCard.status === "success") {
      toast.success("added seccsessfully");
    } else if (shoppingCard.status === "reject") {
      toast.warn("not added this product in shopping card already exits");
    }
  };
  
  const handleDeleteProduct = (id) =>{
    dispatchMidlleware(id , {type:"DELETE_PRODUCT"})
  }

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
        {shoppingCard.products.find((item) => item.id === product.id) ? (
          <>
            <div className="d-flex">
              <Button
                onClick={() => setCount((prevState) => prevState - 1)}
                variant="primary"
                disabled={count <= 1}
              >
                -
              </Button>
              <input
                value={count}
                class="col"
                min={1}
                onChange={(e) => setCount(+e.target.value)}
                type="number"
              />
              <Button
                onClick={() => setCount((prevState) => prevState + 1)}
                variant="primary"
              >
                +
              </Button>
            </div>
            <button onClick={() => handleDeleteProduct( product.id)} className="w-100 btn btn-danger">Delete</button>
          </>
        ) : (
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
        )}
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
