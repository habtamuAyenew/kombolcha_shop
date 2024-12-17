const ProductCard = ({ product }) => {
    if (!product) {
        return <div>No product data available</div>;
    }

    const { image, name, price } = product;

    return (
        <div style={{ border: "1px solid #ddd", padding: "10px", margin: "10px" }}>
            <img
                src={image || "https://via.placeholder.com/150"}
                alt={name || "Product"}
                style={{ width: "100px" }}
            />
            <h3>{name || "Unnamed Product"}</h3>
            <p>${price || "0.00"}</p>
            <button>Add to Cart</button>
        </div>
    );
};

export default ProductCard;
