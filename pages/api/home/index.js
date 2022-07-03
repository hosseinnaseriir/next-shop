export default function home(req, res) {
  res.json({
    sliderItems: [
      {
        id: 0,
        name: "slider1",
        img: "https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI",
      },
      {
        id: 1,
        name: "slider2",
        img: "https://picsum.photos/200/300?grayscale",
      },
      {
        id: 1,
        name: "slider2",
        img: "https://picsum.photos/200/300?grayscalehttps://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
      },
    ],
    products: [
      {
        id: 0,
        name: "product 1",
        img: "https://picsum.photos/200/300",
        price: 3000,
      },
      {
        id: 1,
        name: "product 2",
        img: "https://picsum.photos/200/300",
        price: 3000,
      },
      {
        id: 2,
        name: "product 3",
        img: "https://picsum.photos/200/300",
        price: 3000,
      },
      {
        id: 3,
        name: "product 4",
        img: "https://picsum.photos/200/300",
        price: 3000,
      },
      {
        id: 5,
        name: "product 5",
        img: "https://picsum.photos/200/300",
        price: 3000,
      },
      {
        id: 6,
        name: "product 7",
        img: "https://picsum.photos/200/300",
        price: 3000,
      },
      {
        id: 0,
        name: "product 1",
        img: "https://picsum.photos/200/300",
        price: 3000,
      },
    ],
  });
}
