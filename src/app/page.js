import Image from "next/image";
import styles from "./page.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductPage from "./urunler/page";
import Container from 'react-bootstrap/Container';

export default function Home() {
  return (
    <Container>
    <ProductPage/>
    </Container>
  );
}
