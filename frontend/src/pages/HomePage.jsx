import Container from "../components/UI/Container/Container.jsx";
import ProductItem from "../components/Products/ProductItem.jsx";
import styled from "styled-components";

const productData = [
  {
    id: 1,
    name: "Eco-friendly Water Bottle",
    description:
      "A durable, eco-friendly water bottle designed for daily use. BPA-free and dishwasher safe.",
    image: "../../public/assets/Eco-friendly-Water-Bottle.jpg",
  },
  {
    id: 2,
    name: "Wireless Bluetooth Headphones",
    description:
      "Experience the freedom of wireless audio. Noise cancellation and long battery life.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Organic Cotton T-shirt",
    description:
      "Made from 100% organic cotton, this t-shirt combines comfort and sustainability.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Smart Fitness Tracker",
    description:
      "Track your activity levels, sleep patterns, and more with this sleek fitness tracker.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    name: "Scented Soy Candles",
    description:
      "Hand-poured scented candles made from natural soy wax. A variety of scents available.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    name: "Gourmet Coffee Beans",
    description:
      "Premium coffee beans sourced from the best growing regions around the world.",
    image: "https://via.placeholder.com/150",
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
    image: "https://via.placeholder.com/150",
  },
  {
    id: 9,
    name: "Bluetooth Speaker",
    description:
      "Portable Bluetooth speaker with excellent sound quality and long-lasting battery life.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 10,
    name: "Digital SLR Camera",
    description:
      "Capture stunning photos with this easy-to-use digital SLR camera.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 11,
    name: "Natural Skin Care Kit",
    description:
      "Pamper your skin with this kit containing natural and organic skincare products.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 12,
    name: "Leather Wallet",
    description:
      "Classic leather wallet with multiple compartments for cards and cash.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 13,
    name: "Yoga Mat",
    description:
      "High-quality, non-slip yoga mat perfect for all levels of yoga practitioners.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 14,
    name: "Electric Toothbrush",
    description:
      "Rechargeable electric toothbrush with multiple brushing modes for optimal oral health.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 15,
    name: "Herbal Tea Assortment",
    description:
      "A selection of soothing herbal teas, perfect for relaxing after a long day.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 16,
    name: "Gaming Mouse",
    description:
      "High-precision gaming mouse with customizable buttons for the competitive gamer.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 17,
    name: "4K HDR Television",
    description:
      "Experience movies and games in stunning 4K HDR quality with this high-definition television.",
    image: "https://via.placeholder.com/150",
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
    <Container>
      <h1>Welcome to Our Store!</h1>
      <ProductsGrid>
        {productData.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ProductsGrid>
    </Container>
  );
};

export default HomePage;
