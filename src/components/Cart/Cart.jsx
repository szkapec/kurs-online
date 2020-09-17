import React, {useContext, useState, useEffect} from 'react'
import { CartContext } from './context';
import styled from 'styled-components';
import {StyledButton} from '../../Styled/Button';
import {NavLink} from 'react-router-dom';


function formatPrice(price) {
    return `$${(price * 0.01).toFixed(2)}`
}
function totalPrice(items) {
    return items.reduce((acc, item) => acc + item.quantity * item.pric, 0.0)
}

function totalPriceNumber(price, quantity){
    return `${(price * 0.01).toFixed(2)*quantity*100}`
}

export default function Cart(props) {

const stripeToken = "pk_test_51HRFuZHt5cjb9PVzBZ6OQ7nUtwkYJ1sowlw7kcof8eKWPcKiWT7X1gt3ZjxtaOIyTaUEWXQVJBk7OAAYeMnuC8df00bUimrTLA";
 const [stripe, setStripe] = useState(null)
 const ctx = useContext(CartContext);


 useEffect(() => {
     if(window.Stripe) setStripe(window.Stripe(stripeToken))
 }, [stripeToken])


    function checkout() {
        const testing = ctx.items.map(item => item.price)
        console.log(testing.length)
        let tabs = [];

         for(let i=0; i<testing.length; i++){
             console.log(ctx.items[i].price)
             tabs.push(ctx.items[i].price)
         }
      
         if(testing.length==1) {
             stripe.redirectToCheckout({
         
                 lineItems: [
                     {price: tabs[0], quantity: ctx.items[0].quantity},
                 ],
                 mode: 'payment',
                 successUrl: 'http://localhost:3000/success',
                 cancelUrl: 'http://localhost:3000/canceled',
               })
         }
         else if(testing.length==2) {
             stripe.redirectToCheckout({
         
                 lineItems: [
                     {price: tabs[0], quantity: ctx.items[0].quantity},
                     {price: tabs[1], quantity: ctx.items[1].quantity},
                 ],
                 mode: 'payment',
                 successUrl: 'http://localhost:3000/success',
                 cancelUrl: 'http://localhost:3000/canceled',
               })
         }
         else if(testing.length==3){
             stripe.redirectToCheckout({
         
                 lineItems: [
                     {price: tabs[0], quantity: ctx.items[0].quantity},
                     {price: tabs[1], quantity: ctx.items[1].quantity},
                     {price: tabs[2], quantity: ctx.items[2].quantity},
                 ],
                 mode: 'payment',
                 successUrl: 'http://localhost:3000/success',
                 cancelUrl: 'http://localhost:3000/canceled',
               })
         }
 }

    return (
        <Container className="container">
            <div className="yourbasket">Twój koszyk</div>
            {
                ctx.items.length!==0?ctx.items.map(item => (
                    <div key={item.name} className="cart">
                        <div>Nazwa: {item.name}</div>
                        <div>Cena: {formatPrice(item.pric)}</div>
                        <div>Koszt całkowity: {formatPrice(totalPriceNumber(item.pric, item.quantity))}</div>
                        <div>Ilość: {item.quantity}</div>
                        <div><img src={`/images/${item.price}.jpg`} alt={item.name} width={100}/></div>
                        <div><NavLink to="cart"><StyledButton color={item.color} onClick={()=> ctx.removeToCart(item)}>Usuń z koszyka</StyledButton></NavLink></div>
                    </div>
                )):(
                    <div className="cart">
                        Twój koszyk jest pusty
                      
                        <div>Dodaj do koszyka przedmioty i kup je szybko i wygodnie.</div>
                    </div>
                )
            }
            {ctx.items.length!==0&&<div className="cart">Cena końcowa: {formatPrice(totalPrice(ctx.items))} 
            {console.log(JSON.parse(localStorage.getItem('items')))}
            <div><StyledButton onClick={checkout}>Kup teraz</StyledButton></div>
             </div>}
        </Container>
    )
}

const Container = styled.div`
    margin: 20px;
    .yourbasket {
        text-align: center;
        margin: 20px;
        font-weight: 700
    }
    
    .cart {
        margin-top: 40px;
        text-align: center;
        div {
            margin-top: 5px;
        }
    }

  
`

