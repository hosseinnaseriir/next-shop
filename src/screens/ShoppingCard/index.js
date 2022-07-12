import React, { useContext } from "react";
import Head from "next/head";
import { shoppingContext } from "./../../contexts/shoppingContext";
import ProductCard from "../../components/common/Button/ProductCard";

function ShoppingCardScrren() {
  const { shoppingCard } = useContext(shoppingContext);

  return (
    <>
      <Head>
        <title>shopping index page</title>
      </Head>
      <div className="container">
        <h1>ShoppingCardScrren page1</h1>
        <div className="row">
          {shoppingCard.products.map((product) => {
            return (
              <div className="col-md-4 col-lg-3">
                <ProductCard product={product} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ShoppingCardScrren;
