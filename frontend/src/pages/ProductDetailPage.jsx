import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useState, useEffect } from 'react';
import axios from 'axios';

const ProductDetailPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`/api/products/${id}`).then((res) => setProduct(res.data));
    }, [id]);

    if (!product) return <div>Loading...</div>;

    return (
        <>
            <Navbar />
            <div className="product-detail">
                <h1>{product.name}</h1>
                <img src={product.image} alt={product.name} />
                <p>{product.description}</p>
                <p>${product.price}</p>
                <button>Add to Cart</button>
            </div>
        </>
    );
};

export default ProductDetailPage;
