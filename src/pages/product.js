import React from "react";
import {getById} from "../api/products";
import {addToCart} from "../Components/store/actions/actions";
import {connect} from "react-redux";
import "./product.css";

class Product extends React.Component{

    state={
        loading: true,
        quantity: 0,
        product: {}
    };

    componentDidMount(){
        const id = this.props.match.params.id;

        getById(parseInt(id))
            .then(product => {
                this.setState({
                    product,
                    loading: false
                });
            })
    }

    handleQuantity = (event) => {
        const value = event.target.value;

        if(value < 0)
            return ;

        this.setState({
            quantity: value
        })
    }

    addToCart = (product) => {
        this.props.addToCart(product, this.state.quantity);
    }

    render(){
        if(this.state.loading)
            return 'Loading ..';

        const product = this.state.product;
        const quantity = this.state.quantity;

        return (
            <div>
                <div className={'row'}>
                    <div className="col-6">
                        <img src={product.image} className="image" width={'100%'}/>
                    </div>
                    <div className="col-6">
                    <h1>{product.name}</h1>

                        <p className="price">Price: {product.price}$</p>

                        <p className="des">{product.description}</p>


                        <input type="number" value={quantity} onChange={this.handleQuantity} />
                        
                        <br /><br />

                        <p className="total">Total: {quantity * product.price}</p>

                        <button className="btn btn-primary" onClick={() => this.addToCart(product)}>
                            Add to Cart
                        </button>

                    </div>
                </div>
            </div>
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (productInfo, quantity) => dispatch(addToCart(productInfo, quantity)),
    };
}

export default connect(null, mapDispatchToProps)(Product);