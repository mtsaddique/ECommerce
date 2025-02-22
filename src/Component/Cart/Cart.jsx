import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [id]);

    return (
        <div className="product-detail-container">
            {product ? (
                <>
                    <img src={product.thumbnail} alt={product.title} className="product-detail__image" />
                    <h1 className="product-detail__title">{product.title}</h1>
                    <p className="product-detail__description">{product.description}</p>
                    <p className="product-detail__price">Price: ${product.price}</p>
                    <p className="product-detail__category">Category: {product.category}</p>
                    <button className="product-detail__btn">Add to Cart</button>
                    <Link to="/" className="product-detail__back-link">Back to Products</Link>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default ProductDetail;
