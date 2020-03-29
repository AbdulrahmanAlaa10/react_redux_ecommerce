import React from "react";
import CartItem from "../Components/CartItem";
import {connect} from "react-redux";
import {clearCart} from "../Components/store/actions/actions";
import "./Cart.css";


class Cart extends React.Component{

    payOrder = () => {
        this.props.clearCart();

    };
    render(){
        return (
            <div>
                <h1 className="cart">Cart</h1>

                <div className="row">
                    {this.props.cartItems.map((item, index) => 
                        <div className={'col-3'} key={item.product.id}>
                            <CartItem item={item} index={index} />
                        </div>
                    )}
                </div>

                <br />
        

                <button className="btn btn-outline-info btn-block" onClick={this.payOrder}>Pay</button>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        cartItems: state.cart,
        total: state.cart.reduce((total, item) => total + item.quantity * item.product.price, 0),
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        clearCart: () => dispatch(clearCart()),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);