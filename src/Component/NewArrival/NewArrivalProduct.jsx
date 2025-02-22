import React, { useState, useEffect , useContext } from "react";
import { CartcontextApi } from "../context/CartContext";


function NewArrivalProduct() {
    const [clothState, setClothState] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4; // Show 6 products per page
    const {addProduct} = useContext(CartcontextApi);

    const handleClick = (item) => {
        addProduct(item);
    }
    useEffect(() => {
        fetch("https://fakestoreapi.com/products?limit=0")
            .then(res => res.json())
            .then(data => setClothState(data))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    // Calculate pagination indexes
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = clothState.slice(startIndex, endIndex);

    return (
        <section className="new-arrivals">
            <div className="arrival-grid">
                {currentItems.map((product , index) => (
                    <div key={index} id={product.id} className="arrival-card">
                        <img src={product.image} alt={product.title} />
                        <h3 className="title-product">
                            {product.title.length > 10 ? product.title.slice(0, 10) + "..." : product.title}
                        </h3>
                        <p>${product.price}</p>
                        <button className="btn-shop-arrival"  onClick={()=>handleClick(product)}>Add to Cart</button>
                    </div>
                ))}
            </div>

            {/* Pagination Controls */}
            <div className="pagination">
                <button 
                    disabled={currentPage === 1} 
                    onClick={() => setCurrentPage(currentPage - 1)}
                >
                    Previous
                </button>

                <span> Page {currentPage} of {Math.ceil(clothState.length / itemsPerPage)} </span>

                <button 
                    disabled={endIndex >= clothState.length} 
                    onClick={() => setCurrentPage(currentPage + 1)}
                >
                    Next
                </button>
            </div>
        </section>
    );
}

export default NewArrivalProduct;