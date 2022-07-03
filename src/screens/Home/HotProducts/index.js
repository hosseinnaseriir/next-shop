import axios from "axios";
import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "splide-nextjs/react-splide";
import "splide-nextjs/splide/dist/css/themes/splide-default.min.css";
import { Container, Card, Button } from "react-bootstrap";
function HotProduct({ homeData }) {
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
            <Card>
              <Card.Img
                style={{ height: "13rem" , objectFit:'cover' ,  }}
                variant="top"
                src={product.img}
              />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </SplideSlide>
        ))}
      </Splide>
    </Container>
  );
}

export default HotProduct;
