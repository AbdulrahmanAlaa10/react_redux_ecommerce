import {createStore, compose } from "redux";
import cartReduer from "../store/redusers/index";

const initialState = {

    cart: [
        {
         product:    {
            "id": 2,
            "name": "Nike",
            "price": 360,
            "image": "/image/11.jpg",
            "description": "It is Black stars adidas from franca \n It is Black stars adidas from franca \n It is Black stars adidas from franca \n It is Black stars adidas from franca \n It is Black stars adidas from franca \n It is Black stars adidas from franca"
    
        },
         quantity: 0
        }
    ]
};




const store = createStore(cartReduer, initialState, compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
));

export default store;
