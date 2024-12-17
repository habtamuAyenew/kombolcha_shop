import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import { useState, useEffect } from 'react';
import axios from 'axios';

const ProductPage = () => {
    const [products, setProducts] = useState([]);
    const [filters, setFilters] = useState({});

    useEffect(() => {
        axios.get('/api/products', { params: filters }).then((res) => {
            setProducts(res.data);
        });
    }, [filters]);

    return (
        <>
            <Navbar />
            <div className="filters"> {/* Add filter components here */}</div>
            <div className="product-grid">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </>
    );
};

export default ProductPage;
