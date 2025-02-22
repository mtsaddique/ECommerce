import React, { useState , useMemo } from 'react';

export const CartcontextApi = React.createContext();

function CartContext({ children }) {
    const [cart, setCart] = useState([]);
    const[productQuantity , setProductQuantity]= useState(0)

    const addProduct = (product) => {
        setCart((prev)=>{
            const existItem = prev.find((x) => x.id === product.id);
            if(existItem){
                return prev.map((item) =>                   
                    item.id === product.id ? {...item , quantity: item.quantity +1} : item
                );
            }
            else{
                return [...prev, {...product, quantity: 1}];
            }
        })
        setProductQuantity(productQuantity => productQuantity+1)

    };
    const totalPayment = useMemo(() => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    }, [cart]);
    
    return (
        <CartcontextApi.Provider value={{ cart, addProduct , totalPayment , setCart , productQuantity,setProductQuantity}}>
            {children}
        </CartcontextApi.Provider>
    );
}
export default CartContext;
