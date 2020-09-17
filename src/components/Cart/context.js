import React, { useState, createContext } from 'react';

export const CartContext = createContext(null) 

export default function CartProvider({children}) {
    const [items, setItems] = useState([]);

    function addToCart(item) {
        setItems(prevState => [...prevState, item])
    }
    function removeToCart(product) {
        console.log(product)
        if(product.quantity===1){
            let remove = items.filter(item=> item.price!==product.price)
            setItems(remove)
        }
        else {
            return product.quantity--
        }
        
    }

    function itemsWithQuantities(items) {
        return items.reduce((acc, item) => {
            const found = acc.find(_item => _item.price === item.price) 
            if(found) {
                found.quantity++;
            }
            else {
                acc.push({
                    quantity: 1,
                    ...item
                })
            }
            return acc
        }, [])
    }

    return (
        <CartContext.Provider value={{items: itemsWithQuantities(items), addToCart, removeToCart}}>
            {children}
        </CartContext.Provider>
    )
}