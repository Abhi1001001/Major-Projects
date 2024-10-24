import { BESTSELLER_PRODUCTS } from "./constent";

export function bestsellerProducts(){
    console.log("action called");
    return{
        type:BESTSELLER_PRODUCTS
    }
}