import { SET_BESTSELLER_PRODUCTS } from "../Constent";

export const bestsellerData = (data = [], action)=>{

    switch (action.type){
        case SET_BESTSELLER_PRODUCTS:
            // console.log("reducer called", action.data);                    
        return action.data;

        default:
            return data; //// redux frist time call autometicly because no case match in reducer by default
    }

    
}