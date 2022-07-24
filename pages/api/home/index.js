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
        count: 1,
        id: "wer34234",
        name: "product 1",
        img: "https://picsum.photos/200/300",
        price: 3000,
      },
      {
        count: 1,
        id: "234w55555er1",
        name: "product 2",
        img: "https://picsum.photos/200/300",
        price: 3000,
      },
      {
        count: 1,
        id: "ert435",
        name: "product 3",
        img: "https://picsum.photos/200/300",
        price: 3000,
      },
      {
        count: 1,
        id: "56756756rtyrt",
        name: "product 4",
        img: "https://picsum.photos/200/300",
        price: 3000,
      },
      {
        count: 1,
        id: "235423ertert",
        name: "product 5",
        img: "https://picsum.photos/200/300",
        price: 3000,
      },
      {
        count: 1,
        id: "dfg5d34534",
        name: "product 7",
        img: "https://picsum.photos/200/300",
        price: 3000,
      },
      {
        count: 1,
        id: "fghf345646",
        name: "product 1",
        img: "https://picsum.photos/200/300",
        price: 3000,
      },
    ],
  });
}
