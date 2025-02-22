import React, { useEffect, useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartcontextApi } from "./context/CartContext";

function Product() {
    let [product, setProduct] = useState([]);
    let [filter, setFilter] = useState("all");
    let [menuState, setMenuState] = useState(false);

    // Use Context API to manage cart state
    const { addProduct } = useContext(CartcontextApi);

    const handleChangeFilter = () => {
        setMenuState(!menuState);
    };

    const handleFilter = (e) => {
        setFilter(e.target.innerText.toLowerCase());
        if (menuState) {
            handleChangeFilter();
        }
    };

    // Add product to cart
    const handleProduct = (item) => {
        addProduct(item);
    };

    useEffect(() => {
        let url =
            filter === "all"
                ? `https://dummyjson.com/products?limit=0`
                : `https://dummyjson.com/products/category/${filter}/?limit=0`;

        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setProduct(data.products || data);
            });
    }, [filter]);

    return (
        <>
            <div className="product-nav-product">
                <a onClick={handleFilter}>Mens-shirts</a>
                <a onClick={handleFilter}>Womens-dresses</a>
                <a onClick={handleFilter}>Motorcycle</a>
                <div className="filter">
                    <button className="filter-btn" onClick={handleChangeFilter}>
                        Filter
                    </button>
                    <div className={menuState ? "filter-content active" : "filter-content"}>
                        <a
                            href="#"
                            onClick={() => {
                                setFilter("all");
                                if (menuState) handleChangeFilter();
                            }}
                        >
                            All
                        </a>
                        <a
                            href="#"
                            onClick={() => {
                                setFilter("beauty");
                                if (menuState) handleChangeFilter();
                            }}
                        >
                            Beauty
                        </a>
                        <a
                            href="#"
                            onClick={() => {
                                setFilter("groceries");
                                if (menuState) handleChangeFilter();
                            }}
                        >
                            Groceries
                        </a>
                    </div>
                </div>
            </div>

            <div className="color">
                {product.map((item) => (
                    <div key={item.id} id={item.id} className="title">
                        <div className="product-card">
                            <img src={item.thumbnail} alt={item.title} />
                            <h2>{item.title}</h2>
                            <hr />
                            <p className="price">${item.price}</p>
                            <div className="btn-flex">
                                <button className="add-to-cart" onClick={() => handleProduct(item)}>
                                    Add to Cart
                                </button>
                                <NavLink className="view-detail" to={`/cart/${item.id}`}>
                                    View detail
                                </NavLink>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Product;
