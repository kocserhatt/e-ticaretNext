import { notFound } from "next/navigation";
import { Button } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

export default async function ProductDetailsPage({params}) {
    const {id} = params;
    const request = await fetch(`https://dummyjson.com/product/${id}`);
    if(request.ok) {
    const response = await request.json();
    return (
        <>
        <Container style={{
            display: 'flex',
            gap: '1rem',
            alignItems: 'center',
            justifyContent: "center",
            paddingTop: '8rem',
        }}>
        <div>
        <Image src={response.images} alt="" width={300} height={300} />
        </div>
        <div>
            <p>{response.title}</p>
            <p>{response.description}</p>
            <p>{response.price}</p>
            <Button variant="primary">Sepete Ekle</Button>
            </div>
        </Container>
        </>
    );
} else {
    return notFound();
}
}