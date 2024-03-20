import Container from "../components/UI/Container/Container.jsx";
import ProductItem from "../components/Products/ProductItem.jsx";
import styled from "styled-components";
import Navbar from "../components/Navbar/Navbar.jsx";

const productData = [
  {
    id: 1,
    name: "Eco-friendly Water Bottle",
    description:
      "A durable, eco-friendly water bottle designed for daily use. BPA-free and dishwasher safe.",
    image: "/assets/images/Eco-friendly-Water-Bottle.jpg",
  },
  {
    id: 2,
    name: "Wireless Bluetooth Headphones",
    description:
      "Experience the freedom of wireless audio. Noise cancellation and long battery life.",
    image: "/assets/images/Wireless-Bluetooth-Headphones.jpg",
  },
  {
    id: 3,
    name: "Organic Cotton T-shirt",
    description:
      "Made from 100% organic cotton, this t-shirt combines comfort and sustainability.",
    image: "/assets/images/Organic-Cotton-T-shirt.jpg",
  },
  {
    id: 4,
    name: "Smart Fitness Tracker",
    description:
      "Track your activity levels, sleep patterns, and more with this sleek fitness tracker.",
    image: "/assets/images/Smart-Fitness-Tracker.jpg",
  },
  {
    id: 5,
    name: "Scented Soy Candles",
    description:
      "Hand-poured scented candles made from natural soy wax. A variety of scents available.",
    image: "/assets/images/Scented-Soy-Candles.jpeg",
  },
  {
    id: 6,
    name: "Gourmet Coffee Beans",
    description:
      "Premium coffee beans sourced from the best growing regions around the world.",
    image: "/assets/images/Gourmet-Coffee-Beans.jpg",
  },
  {
    id: 7,
    name: "Ergonomic Office Chair",
    description:
      "Stay comfortable throughout your workday with this adjustable, ergonomic office chair.",
    image: "/assets/images/Ergonomic-Office-Chair.jpg",
  },
  {
    id: 8,
    name: "Stainless Steel Cookware Set",
    description:
      "High-quality stainless steel cookware set that includes everything you need to start cooking.",
    image: "/assets/images/Stainless-Steel-Cookware-Set.jpg",
  },
  {
    id: 9,
    name: "Bluetooth Speaker",
    description:
      "Portable Bluetooth speaker with excellent sound quality and long-lasting battery life.",
    image: "/assets/images/Bluetooth-Speaker.jpg",
  },
  {
    id: 10,
    name: "Digital SLR Camera",
    description:
      "Capture stunning photos with this easy-to-use digital SLR camera.",
    image: "/assets/images/Digital-SLR-Camera.jpg",
  },
  {
    id: 11,
    name: "Natural Skin Care Kit",
    description:
      "Pamper your skin with this kit containing natural and organic skincare products.",
    image: "/assets/images/Natural-Skin-Care Kit.jpg",
  },
  {
    id: 12,
    name: "Leather Wallet",
    description:
      "Classic leather wallet with multiple compartments for cards and cash.",
    image: "/assets/images/Leather-Wallet.jpg",
  },
  {
    id: 13,
    name: "Yoga Mat",
    description:
      "High-quality, non-slip yoga mat perfect for all levels of yoga practitioners.",
    image: "/assets/images/Yoga-Mat.jpg",
  },
  {
    id: 14,
    name: "Electric Toothbrush",
    description:
      "Rechargeable electric toothbrush with multiple brushing modes for optimal oral health.",
    image: "/assets/images/Electric-Toothbrush.jpg",
  },
  {
    id: 15,
    name: "Herbal Tea Assortment",
    description:
      "A selection of soothing herbal teas, perfect for relaxing after a long day.",
    image: "/assets/images/Herbal-Tea-Assortment.jpg",
  },
  {
    id: 16,
    name: "Gaming Mouse",
    description:
      "High-precision gaming mouse with customizable buttons for the competitive gamer.",
    image: "/assets/images/Gaming-Mouse.jpg",
  },
  {
    id: 17,
    name: "4K HDR Television",
    description:
      "Experience movies and games in stunning 4K HDR quality with this high-definition television.",
    image: "/assets/images/4K-HDR-Television.jpg",
  },
];

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
`;

const HomePage = () => {
  return (
    <Navbar />
    // <Container>
    //   <ProductsGrid>
    //     {productData.map((product) => (
    //       <ProductItem key={product.id} product={product} />
    //     ))}
    //   </ProductsGrid>
    // </Container>
  );
};

export default HomePage;
