import { SEARCH_PRODUCTS } from "../Constent";

export function searchProductsAction (searchProductsValue){
    return{
        type : SEARCH_PRODUCTS,
        payload : searchProductsValue
    }
}
