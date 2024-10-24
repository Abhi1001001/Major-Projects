import { SET_BESTSELLER_PRODUCTS } from "./constent";

export const bestsellerData = (data = [], action)=>{
    
    switch (action.type){

        case SET_BESTSELLER_PRODUCTS:
            console.log("reducer called with set best seller key",action);    
        return [...action.data];

        default:
            return data; //// redux frist time call autometicly because no case match in reducer by default
    }

    
}