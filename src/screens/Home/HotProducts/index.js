import axios from "axios";
import React, { useEffect, useContext } from "react";
import { Splide, SplideSlide } from "splide-nextjs/react-splide";
import "splide-nextjs/splide/dist/css/themes/splide-default.min.css";
import { Container, Card, Button } from "react-bootstrap";
import ProductCard from './../../../components/common/Button/ProductCard/index';
import { shoppingContext } from "./../../../contexts/shoppingContext";

function HotProduct({ homeData }) {
  const { shoppingCard, dispatch, shoppingCardDispatchMiddleware } =
  useContext(shoppingContext);

  return (
    <Container>
      <h2 className="py-5 border-2 border-border-bottom">Hot products</h2>
      <Splide
        options={{
          perPage: 4,
          rewind: true,
          gap: "1rem",
          breakpoints: {
            1200: {
              perPage: 4,
            },
            992: {
              perPage: 3,
            },
            640: {
              perPage: 1,
            },
          },
        }}
        aria-label="My Favorite Images"
      >
        {homeData?.products?.map((product) => (
          <SplideSlide key={product.id}>
            <ProductCard product={product} />
          </SplideSlide>
        ))}
      </Splide>
    </Container>
  );
}

export default HotProduct;
