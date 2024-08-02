"use client";

import Link from 'next/link';
import {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function ProductPage() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
   useEffect(() => {
    async function getData() {
        const request = await fetch('https://dummyjson.com/product');
        const response = await request.json();
        const products = response.products
        setProducts(products);
        setIsLoading(false);
   }
   getData();
    }, [])

    return (
        <div>
            {isLoading ? <div>Yükleniyor...</div> : 
            <ul>
               <Row style={{gap:"10px"}}>
        {products.map((product, index) => (
            <Col key={index} >
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={product.images} />
                    <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text>
                            {product.price}
                        </Card.Text>
                        <Button variant="primary">
                            <Link style={{ color: "white" }} href={`/urunler/${product.id}`}>
                                detayı göster
                            </Link>
                        </Button>
                    </Card.Body>
                </Card>
            </Col>
        ))}
    </Row> </ul>
}
</div>
    );
    }