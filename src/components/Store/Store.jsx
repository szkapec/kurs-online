import React, {useContext} from 'react'
import products from '../../Data/Products';
import Cart from '../Cart/Index'
import {CartContext } from '../Cart/context';
import Course from '../Course/Course';
import styled from 'styled-components';
import {StyledButton} from '../../Styled/Button';

import {plusSquareO} from 'react-icons-kit/fa/plusSquareO';
import {ic_shopping_cart} from 'react-icons-kit/md/ic_shopping_cart';
import { withBaseIcon } from 'react-icons-kit';

let tabs = [];
export default function Store() {
    const cartCtx = useContext(CartContext)
    console.log(cartCtx)
 
    return (
        <Container>
            {
                
                products.map((product, id) => (<div key={product.name} className="course">
                    <div><img src={`/images/${product.price}.jpg`} alt={product.name} width={200}/></div>
                    <div>{product.name}</div>
                    <div>
                        <StyledButton color={product.color} onClick={()=> {
                            let {color, name, pric, price, quantity } = product
                            cartCtx.addToCart(product)
                           
                            let newItems = {color, name, pric, price, quantity}
                            let found = tabs.find(items => items.price === newItems.price)
                            if(found) {
                                let elTab = tabs.find(item => item.price === found.price)
                                elTab.quantity++;
                            }
                            else {
                                newItems.quantity = 1;
                                tabs.push(newItems)
                            }
                            
                            localStorage.setItem('items', JSON.stringify(tabs));

                            console.log(JSON.parse(localStorage.getItem('items')))
                        }}>
                            Dodaj do koszyka
                            <SiceIconCart icon={ic_shopping_cart}/> 
                        </StyledButton>
                     </div>
                </div>))}
                    
                    {/* <Course/> */}
                    {/* <Cart stripeToken="pk_test_51HRFuZHt5cjb9PVzBZ6OQ7nUtwkYJ1sowlw7kcof8eKWPcKiWT7X1gt3ZjxtaOIyTaUEWXQVJBk7OAAYeMnuC8df00bUimrTLA"/> */}
        </Container>
    )
}






const Container = styled.div`
    text-align: center;
    background-color: #ecf0f1;
    .course {
        padding: 20px;
        font-size: 20px;
        div {
            padding-top: 10px;
        }
    }
    img {
        border-radius: 20px;
    }
`

const SiceIconCart = withBaseIcon({ 
    size: 20,
    style: {
        color: '#fffff',
        marginLeft: '4px'
    }})