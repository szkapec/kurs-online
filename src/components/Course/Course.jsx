import React, { Component } from 'react'
import Product from '../../Data/Products';

export default class Course extends Component {
    
    render() {
        console.log(this.props)
        console.log(Product)
        let product = Product.find(item => item.id == this.props.match.params.id)
        return (
            <div>
                <div>
                    <ul>
                        <li>{product.name}</li>
                        <li>{product.pric}</li>
                        <li>{product.id}</li>
                       
                    </ul>
                    <img src={`/images/${product.price}.jpg`} alt={product.name} width={250}/>

                </div>
            </div>
        )
    }
}
